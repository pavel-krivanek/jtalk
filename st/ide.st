Widget subclass: #TabManager
	instanceVariableNames: 'selectedTab tabs opened'
	category: 'IDE'!

TabManager class instanceVariableNames: 'current'!

!TabManager class methodsFor: 'instance creation'!

current
    ^current ifNil: [current := super new]
!

new
    self shouldNotImplement
! !

!TabManager methodsFor: 'initialization'!

initialize
    super initialize.
    opened := true.
    'body' asJQuery 
	append: self;
	append: [:html | html div id: 'jtalk'];
	addClass: 'jtalkBody'.
    self 
	addTab: Transcript current;
	addTab: Workspace new.
    self selectTab: self tabs last.
    self 
	onResize: [self updateBodyMargin; updatePosition];
	onWindowResize: [self updatePosition]
! !

!TabManager methodsFor: 'accessing'!

tabs
    ^tabs ifNil: [tabs := Array new]
! !

!TabManager methodsFor: 'adding/Removing'!

addTab: aWidget
    self tabs add: aWidget.
    '#jtalk' asJQuery append: aWidget.
    aWidget root asJQuery hide
!

removeTab: aWidget
    self tabs remove: aWidget.
    self update
! !

!TabManager methodsFor: 'actions'!

updateBodyMargin
    self setBodyMargin: '#jtalk' asJQuery height + 27
!

updatePosition
    {'jQuery(''#jtalk'').css(''top'', '''''').css(''bottom'', ''27px'');'}
!

removeBodyMargin
    self setBodyMargin: 0
!

setBodyMargin: anInteger
    '.jtalkBody' asJQuery cssAt: 'margin-bottom' put: anInteger asString, 'px'
!

onResize: aBlock
    {'jQuery(''#jtalk'').resizable({
	handles: ''n'', 
	resize: aBlock,
	minHeight: 230
});'}
!

onWindowResize: aBlock
    {'jQuery(window).resize(aBlock)'}
!

open
    opened ifFalse: [
	self root asJQuery show.
	'body' asJQuery addClass: 'jtalkBody'.
	'#jtalk' asJQuery show.
	self updateBodyMargin.
	selectedTab root asJQuery show.
	opened := true]
!

close
    opened ifTrue: [
	self root asJQuery hide.
	'#jtalk' asJQuery hide.
	self removeBodyMargin.
	'body' asJQuery removeClass: 'jtalkBody'.
	opened := false]
!

newBrowserTab
    Browser open
!

selectTab: aWidget
    self open.
    selectedTab := aWidget.
    self tabs do: [:each |
	each root asJQuery hide].
    aWidget root asJQuery show.
    self update
!

closeTab: aWidget
    self removeTab: aWidget.
    self selectTab: self tabs last.
    aWidget root asJQuery remove.
    self update
! !

!TabManager methodsFor: 'rendering'!

renderOn: html
    html ul
	id: 'jtalkTabs';
	with: [
	    html li 
		class: 'closeAll';
		with: 'x';
		onClick: [self close].
	    self tabs do: [:each |
		self renderTabFor: each on: html].
	    html li
		class: 'newtab';
		with: ' + ';
		onClick: [self newBrowserTab]]
!

renderTabFor: aWidget on: html
    | li |
    li := html li.
    selectedTab = aWidget ifTrue: [
	li class: 'selected'].
    li with: [
	html span
	    with: aWidget label;
	    onClick: [self selectTab: aWidget].
	aWidget canBeClosed ifTrue: [
	    html span 
		class: 'close';
		with: 'x';
		onClick: [self closeTab: aWidget]]]
! !


Widget subclass: #TabWidget
	instanceVariableNames: ''
	category: 'IDE'!

!TabWidget class methodsFor: 'instance creation'!

open
    ^self new open
! !

!TabWidget methodsFor: 'accessing'!

label
    self subclassResponsibility
! !

!TabWidget methodsFor: 'actions'!

open
    TabManager current
	addTab: self;
	selectTab: self
! !

!TabWidget methodsFor: 'testing'!

canBeClosed
    ^false
! !

!TabWidget methodsFor: 'rendering'!

renderOn: html
    html root
	class: 'jtalkTool';
	with: [
	    html div
		class: 'jt_box';
		with: [self renderBoxOn: html].
	    html div
		class: 'jt_buttons';
		with: [self renderButtonsOn: html]]
!

renderBoxOn: html
!

renderButtonsOn: html
! !



TabWidget subclass: #Workspace
	instanceVariableNames: 'textarea'
	category: 'IDE'!

!Workspace methodsFor: 'accessing'!

label
    ^'[Workspace]'
!

selection
    ^{'return document.selection'}
!

selectionStart
    ^{'return jQuery(''.jt_workspace'')[0].selectionStart'}
!

selectionEnd
    ^{'return jQuery(''.jt_workspace'')[0].selectionEnd'}
!

selectionStart: anInteger
    {'jQuery(''.jt_workspace'')[0].selectionStart = anInteger'}
!

selectionEnd: anInteger
    {'jQuery(''.jt_workspace'')[0].selectionEnd = anInteger'}
!

currentLine
    | lines startLine endLine|
    lines := textarea asJQuery val tokenize: String cr.
    startLine := endLine := 0.
    lines do: [:each |
	endLine := startLine + each size.
	startLine := endLine + 1.
	endLine >= self selectionStart ifTrue: [
	    self selectionEnd: endLine.
	    ^each]]
! !

!Workspace methodsFor: 'actions'!

handleKeyDown: anEvent
    ^{'if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 68) { //ctrl+p
			self._printIt();
			return false;
		}
		if(anEvent.keyCode === 80) { //ctrl+d
			self._doIt();
			return false;
		}
	}'}
!

clearWorkspace
    textarea asJQuery val: ''
!

doIt
    self printIt
!

printIt
    | selection |
    textarea asJQuery focus.
    self selectionStart = self selectionEnd
	ifTrue: [selection := self currentLine]
	ifFalse: [
	    selection := textarea asJQuery val copyFrom: self selectionStart + 1 to: self selectionEnd + 1].
    self print: (self eval: selection) printString
!

print: aString
    | start |
    start := self selectionEnd.
    textarea asJQuery val: (
	(textarea asJQuery val copyFrom: 1 to: start),
	' ', aString, ' ',
	(textarea asJQuery val copyFrom: start + 1 to: textarea asJQuery val size)).
    self selectionStart: start.
    self selectionEnd: start + aString size + 2
!

eval: aString
    | compiler node |
    compiler := Compiler new.
    node := compiler parseExpression: aString.
    node isParseFailure ifTrue: [
	^self alert: node reason, ', position: ', node position].
    ^compiler loadExpression: aString
! !

!Workspace methodsFor: 'rendering'!

renderBoxOn: html
    textarea := html textarea.
    textarea asJQuery call: 'tabby'.
    textarea onKeyDown: [:e | self handleKeyDown: e].
    textarea 
	class: 'jt_workspace';
	at: 'spellcheck' put: 'false'
!

renderButtonsOn: html
    html button
	with: 'DoIt';
	title: 'ctrl+d';
	onClick: [self doIt].
    html button
	with: 'PrintIt';
	title: 'ctrl+p';
	onClick: [self printIt].
    html button
	with: 'Clear workspace';
	onClick: [self clearWorkspace]
! !



TabWidget subclass: #Transcript
	instanceVariableNames: 'textarea'
	category: 'IDE'!

Transcript class instanceVariableNames: 'current'!

!Transcript class methodsFor: 'instance creation'!

open
    self current open
!

new
    self shouldNotImplement
!

current
    ^current ifNil: [current := super new]
! !

!Transcript class methodsFor: 'printing'!

show: anObject
    self current show: anObject
!

cr
    self current show: String cr
!

clear
    self current clear
! !


!Transcript methodsFor: 'accessing'!

label
    ^'[Transcript]'
! !

!Transcript methodsFor: 'actions'!

show: anObject
    textarea asJQuery val: textarea asJQuery val, anObject asString.

!

cr
    textarea asJQuery val: textarea asJQuery val, String cr.
!

clear
    textarea asJQuery val: ''
! !

!Transcript methodsFor: 'rendering'!

renderBoxOn: html
    textarea := html textarea.
    textarea asJQuery call: 'tabby'.
    textarea 
	class: 'jt_transcript';
	at: 'spellcheck' put: 'false'
!

renderButtonsOn: html
    html button
	with: 'Clear transcript';
	onClick: [self clear]
! !

TabWidget subclass: #Browser
	instanceVariableNames: 'selectedCategory selectedClass selectedProtocol selectedMethod categoriesList classesList protocolsList methodsList sourceTextarea tabsList selectedTab saveButton classButtons methodButtons unsavedChanges'
	category: 'IDE'!

!Browser class methodsFor: 'convenience'!

openOn: aClass
    self new
	open;
	selectCategory: aClass category;
	selectClass: aClass
!

open
    self new open
! !

!Browser methodsFor: 'initialization'!

initialize
    super initialize.
    selectedTab := #instance.
    unsavedChanges := false
! !

!Browser methodsFor: 'accessing'!

label
    ^selectedClass 
	ifNil: ['Browser (nil)']
	ifNotNil: [selectedClass name]
!

categories
    | categories |
    categories := Array new.
    Smalltalk current classes do: [:each |
	(categories includes: each category) ifFalse: [
	    categories add: each category]].
    ^categories sort
!

classes
    ^(Smalltalk current classes 
	select: [:each | each category = selectedCategory])
	sort: [:a :b | a name > b name]
!

protocols
    | klass protocols |
    protocols := Array new.
    selectedClass ifNotNil: [
	selectedTab = #comment ifTrue: [^#()].
	klass := selectedTab = #instance
	    ifTrue: [selectedClass]
	    ifFalse: [selectedClass class].
	klass methodDictionary isEmpty ifTrue: [
	    protocols add: 'not yet classified'].
	klass methodDictionary do: [:each |
	    (protocols includes: each category) ifFalse: [
		protocols add: each category]]].
    ^protocols sort
!

methods
    | klass |
    selectedTab = #comment ifTrue: [^#()].
    selectedClass ifNotNil: [
	klass := selectedTab = #instance
	    ifTrue: [selectedClass]
	    ifFalse: [selectedClass class]].
    ^(selectedProtocol 
	ifNil: [
	    klass 
		ifNil: [#()] 
		ifNotNil: [klass methodDictionary values]]
	ifNotNil: [
	    klass methodDictionary values select: [:each |
		each category = selectedProtocol]]) sort: [:a :b | a selector > b selector]
!

source
    selectedTab = #comment ifFalse: [
	^(selectedProtocol notNil or: [selectedMethod notNil])
	    ifFalse: [self declarationSource]
	    ifTrue: [self methodSource]].
    ^selectedClass
	ifNil: ['']
	ifNotNil: [self classCommentSource]
!

methodSource
    ^selectedMethod
	ifNil: [self dummyMethodSource]
	ifNotNil: [selectedMethod source]
!

dummyMethodSource
    ^'messageSelectorAndArgumentNames
	"comment stating purpose of message"

	| temporary variable names |
	statements'
!

declarationSource
    ^selectedTab = #instance
	ifTrue: [self classDeclarationSource]
	ifFalse: [self metaclassDeclarationSource]
!

classDeclarationSource
    | stream |
    stream := '' writeStream.
    selectedClass ifNotNil: [
	stream 
	    nextPutAll: selectedClass superclass asString;
	    nextPutAll: ' subclass: #';
	    nextPutAll: selectedClass name;
	    nextPutAll: String cr, String tab;
	    nextPutAll: 'instanceVariableNames: '''.
	selectedClass instanceVariableNames 
	    do: [:each | stream nextPutAll: each] 
	    separatedBy: [stream nextPutAll: ' '].
	stream
	    nextPutAll: '''', String cr, String tab;
	    nextPutAll: 'category: ''';
	    nextPutAll: selectedClass category;
	    nextPutAll: ''''].
    ^stream contents
!

metaclassDeclarationSource
    | stream |
    stream := '' writeStream.
    selectedClass ifNotNil: [
	stream 
	    nextPutAll: selectedClass asString;
	    nextPutAll: ' class ';
	    nextPutAll: 'instanceVariableNames: '''.
	selectedClass class instanceVariableNames
	    do: [:each | stream nextPutAll: each]
	    separatedBy: [stream nextPutAll: ' '].
	stream nextPutAll: ''''].
    ^stream contents
!

classCommentSource
    ^selectedClass comment
! !

!Browser methodsFor: 'actions'!

enableSaveButton
    saveButton removeAt: 'disabled'.
    unsavedChanges := true
!

disableSaveButton
    saveButton ifNotNil: [
	saveButton at: 'disabled' put: true].
    unsavedChanges := false
!

hideClassButtons
    classButtons asJQuery hide
!

showClassButtons
    classButtons asJQuery show
!

hideMethodButtons
    methodButtons asJQuery hide
!

showMethodButtons
    methodButtons asJQuery show
!

compile
    self disableSaveButton.
    selectedTab = #comment ifTrue: [
	selectedClass ifNotNil: [
	    self compileClassComment]].
    (selectedProtocol notNil or: [selectedMethod notNil])
	ifFalse: [self compileDefinition]
	ifTrue: [self compileMethodDefinition]
!

compileClassComment
    selectedClass comment: sourceTextarea asJQuery val
!

compileMethodDefinition
    selectedTab = #instance
	ifTrue: [self compileMethodDefinitionFor: selectedClass]
	ifFalse: [self compileMethodDefinitionFor: selectedClass class]
!

compileMethodDefinitionFor: aClass
    | compiler method source node |
    source := sourceTextarea asJQuery val.
    compiler := Compiler new.
    node := compiler parse: source.
    node isParseFailure ifTrue: [
	^self alert: 'PARSE ERROR: ', node reason, ', position: ', node position asString].
    compiler currentClass: selectedClass.
    method := compiler eval: (compiler compileNode: node).
    method category: selectedProtocol.
    aClass addCompiledMethod: method.
    self updateMethodsList.
    self selectMethod: method
!

compileDefinition
    | newClass |
    newClass := Compiler new loadExpression: sourceTextarea asJQuery val.
    self 
	updateCategoriesList;
	updateClassesList
!

cancelChanges
    ^unsavedChanges 
	ifTrue: [self confirm: 'Cancel changes?']
	ifFalse: [true]
!

removeClass
    (self confirm: 'Do you really want to remove ', selectedClass name, '?')
	ifTrue: [
	    Smalltalk current basicDelete: selectedClass name.
	    self selectClass: nil]
!

removeMethod
    self cancelChanges ifTrue: [
	(self confirm: 'Do you really want to remove #', selectedMethod selector, '?')
	    ifTrue: [
		selectedClass removeCompiledMethod: selectedMethod.
		self selectMethod: nil]]
!

setMethodProtocol: aString
    self cancelChanges ifTrue: [
	selectedMethod category: aString.
	selectedProtocol := aString.
	selectedMethod := selectedMethod.
	self 
	    updateProtocolsList;
	    updateMethodsList;
	    updateSourceAndButtons]
!

addNewProtocol
    | newProtocol |
    newProtocol := self prompt: 'New method protocol'.
    newProtocol notEmpty ifTrue: [
	self setMethodProtocol: newProtocol]
!

selectCategory: aCategory
    self cancelChanges ifTrue: [
	selectedCategory := aCategory.
	selectedClass := selectedProtocol := selectedMethod :=  nil.
	self 
	    updateCategoriesList;
	    updateClassesList;
	    updateProtocolsList;
	    updateMethodsList;
	    updateSourceAndButtons]
!

selectClass: aClass
    self cancelChanges ifTrue: [
	selectedClass := aClass.
	selectedProtocol := selectedMethod := nil.
	self 
	    updateClassesList;
	    updateProtocolsList;
	    updateMethodsList;
	    updateSourceAndButtons]
!

selectProtocol: aString
    self cancelChanges ifTrue: [
	selectedProtocol := aString.
	selectedMethod := nil.
	self 
	    updateProtocolsList;
	    updateMethodsList;
	    updateSourceAndButtons]
!

selectMethod: aMethod
    self cancelChanges ifTrue: [
	selectedMethod := aMethod.
	self 
	    updateProtocolsList;
	    updateMethodsList;
	    updateSourceAndButtons]
!

selectTab: aString
    self cancelChanges ifTrue: [
	selectedTab := aString.
	self selectProtocol: nil.
	self updateTabsList]
! !


!Browser methodsFor: 'rendering'!

renderBoxOn: html
    self 
	renderTopPanelOn: html;
	renderTabsOn: html;
	renderBottomPanelOn: html
!

renderTopPanelOn: html
    html div 
	class: 'top'; 
	with: [
	    categoriesList := html ul class: 'jt_column categories'.
	    classesList := html ul class: 'jt_column classes'.
	    protocolsList := html ul class: 'jt_column protocols'.
	    methodsList := html ul class: 'jt_column methods'.
	    self
		updateCategoriesList;
		updateClassesList;
		updateProtocolsList;
		updateMethodsList.
	    html div class: 'jt_clear']
!

renderTabsOn: html
    tabsList := html ul class: 'jt_tabs'.
    self updateTabsList.
!

renderBottomPanelOn: html
    html div
	class: 'jt_sourceCode';
	with: [
	    sourceTextarea := html textarea 
		onKeyPress: [self enableSaveButton];
		class: 'source';
		at: 'spellcheck' put: 'false'.
	    sourceTextarea asJQuery call: 'tabby']
!

renderButtonsOn: html
    saveButton := html button.
    saveButton 
	with: 'Save';
	onClick: [self compile].
    methodButtons := html span.
    classButtons := html span.
    self updateSourceAndButtons
! !

!Browser methodsFor: 'updating'!

updateCategoriesList
    categoriesList contents: [:html |
	self categories do: [:each || li |
	    li := html li.
	    selectedCategory = each ifTrue: [
		li class: 'selected'].
	    li
		with: each;
		onClick: [self selectCategory: each]]]
!

updateClassesList
    TabManager current update.
    classesList contents: [:html |
	self classes do: [:each || li |
	    li := html li.
	    selectedClass = each ifTrue: [
		li class: 'selected'].
	    li
		with: each name;
		onClick: [self selectClass: each]]]
!

updateProtocolsList
    protocolsList contents: [:html |
	self protocols do: [:each || li |
	    li := html li.
	    selectedProtocol = each ifTrue: [
		li class: 'selected'].
	    li 
		with: each;
		onClick: [self selectProtocol: each]]]
!

updateMethodsList
    methodsList contents: [:html |
	self methods do: [:each || li |
	    li := html li.
	    selectedMethod = each ifTrue: [
		li class: 'selected'].
	    li
		with: each selector;
		onClick: [self selectMethod: each]]]
!

updateTabsList
    tabsList contents: [:html || li |
	li := html li.
	selectedTab = #instance ifTrue: [li class: 'selected'].
	li
	    with: 'Instance';
	    onClick: [self selectTab: #instance].
	li := html li.
	selectedTab = #class ifTrue: [li class: 'selected'].
	li
	    with: 'Class';
	    onClick: [self selectTab: #class].
	li := html li.
	selectedTab = #comment ifTrue: [li class: 'selected'].
	li
	    with: 'Comment';
	    onClick: [self selectTab: #comment]]
!

updateSourceAndButtons
    self disableSaveButton.
    classButtons contents: [:html |
	html button
	    with: 'Remove class';
	    onClick: [self removeClass]].
    methodButtons contents: [:html |
	html button
	    with: 'Remove method';
	    onClick: [self removeMethod].
	html select with: [
	    html option
		with: 'Method protocol';
		at: 'disabled' put: 'disabled'.
	    html option
		class: 'important';
		with: 'New...';
		onClick: [self addNewProtocol].
	    self protocols do: [:each |
		html option
		    with: each;
		    onClick: [self setMethodProtocol: each]]]].
    selectedMethod 
	ifNil: [
	    self hideMethodButtons.
	    selectedClass 
		ifNil: [self hideClassButtons]
	    ifNotNil: [self showClassButtons]]
	ifNotNil: [
	    self hideClassButtons.
	    self showMethodButtons].
    sourceTextarea asJQuery val: self source
! !

!Browser methodsFor: 'testing'!

canBeClosed
    ^true
! !
		





	
