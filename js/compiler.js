smalltalk.addClass('Node', smalltalk.Object, ['nodes'], 'Compiler');
smalltalk.addMethod(
'_nodes',
smalltalk.method({
selector: 'nodes',
category: 'accessing',
fn: function (){
var self=this;
return self['@nodes']._ifNil_((function(){return self['@nodes']=smalltalk.Array._new();}));
return self;},
source: unescape('nodes%0A%09%5Enodes%20ifNil%3A%20%5Bnodes%20%3A%3D%20Array%20new%5D%0A')}),
smalltalk.Node);

smalltalk.addMethod(
'_nodes_',
smalltalk.method({
selector: 'nodes:',
category: 'building',
fn: function (aCollection){
var self=this;
self['@nodes']=aCollection;
return self;},
source: unescape('nodes%3A%20aCollection%0A%09nodes%20%3A%3D%20aCollection%0A')}),
smalltalk.Node);

smalltalk.addMethod(
'_addNode_',
smalltalk.method({
selector: 'addNode:',
category: 'accessing',
fn: function (aNode){
var self=this;
self._nodes()._add_(aNode);
return self;},
source: unescape('addNode%3A%20aNode%0A%09self%20nodes%20add%3A%20aNode%0A')}),
smalltalk.Node);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitNode%3A%20self%0A')}),
smalltalk.Node);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source'], 'Compiler');
smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
source: unescape('selector%0A%09%5Eselector%0A')}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;},
source: unescape('selector%3A%20aString%0A%09selector%20%3A%3D%20aString%0A')}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_arguments',
smalltalk.method({
selector: 'arguments',
category: 'accessing',
fn: function (){
var self=this;
return self['@arguments']._ifNil_((function(){return [];}));
return self;},
source: unescape('arguments%0A%09%5Earguments%20ifNil%3A%20%5B%23%28%29%5D%0A')}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_arguments_',
smalltalk.method({
selector: 'arguments:',
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@arguments']=aCollection;
return self;},
source: unescape('arguments%3A%20aCollection%0A%09arguments%20%3A%3D%20aCollection%0A')}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
category: 'accessing',
fn: function (){
var self=this;
return self['@source'];
return self;},
source: unescape('source%0A%09%5Esource%0A')}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_source_',
smalltalk.method({
selector: 'source:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;},
source: unescape('source%3A%20aString%0A%09source%20%3A%3D%20aString%0A')}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitMethodNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitMethodNode%3A%20self%0A')}),
smalltalk.MethodNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver'], 'Compiler');
smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
category: 'accessing',
fn: function (){
var self=this;
return self['@selector'];
return self;},
source: unescape('selector%0A%09%5Eselector%0A')}),
smalltalk.SendNode);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;},
source: unescape('selector%3A%20aString%0A%09selector%20%3A%3D%20aString%0A')}),
smalltalk.SendNode);

smalltalk.addMethod(
'_arguments',
smalltalk.method({
selector: 'arguments',
category: 'accessing',
fn: function (){
var self=this;
return self['@arguments']._ifNil_((function(){return self['@arguments']=[];}));
return self;},
source: unescape('arguments%0A%09%5Earguments%20ifNil%3A%20%5Barguments%20%3A%3D%20%23%28%29%5D%0A')}),
smalltalk.SendNode);

smalltalk.addMethod(
'_arguments_',
smalltalk.method({
selector: 'arguments:',
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@arguments']=aCollection;
return self;},
source: unescape('arguments%3A%20aCollection%0A%09arguments%20%3A%3D%20aCollection%0A')}),
smalltalk.SendNode);

smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
source: unescape('receiver%0A%09%5Ereceiver%0A')}),
smalltalk.SendNode);

smalltalk.addMethod(
'_receiver_',
smalltalk.method({
selector: 'receiver:',
category: 'accessing',
fn: function (aNode){
var self=this;
self['@receiver']=aNode;
return self;},
source: unescape('receiver%3A%20aNode%0A%09receiver%20%3A%3D%20aNode%0A')}),
smalltalk.SendNode);

smalltalk.addMethod(
'_valueForReceiver_',
smalltalk.method({
selector: 'valueForReceiver:',
category: 'accessing',
fn: function (anObject){
var self=this;
return (function($rec){$rec._receiver_(self._receiver()._ifNil_ifNotNil_((function(){return anObject;}),(function(){return self._receiver()._valueForReceiver_(anObject);})));$rec._selector_(self._selector());$rec._arguments_(self._arguments());return $rec._yourself();})(smalltalk.SendNode._new());
return self;},
source: unescape('valueForReceiver%3A%20anObject%0A%09%5ESendNode%20new%0A%09%20%20%20%20receiver%3A%20%28self%20receiver%20%0A%09%09ifNil%3A%20%5BanObject%5D%0A%09%09ifNotNil%3A%20%5Bself%20receiver%20valueForReceiver%3A%20anObject%5D%29%3B%0A%09%20%20%20%20selector%3A%20self%20selector%3B%0A%09%20%20%20%20arguments%3A%20self%20arguments%3B%0A%09%20%20%20%20yourself%0A')}),
smalltalk.SendNode);

smalltalk.addMethod(
'_cascadeNodeWithMessages_',
smalltalk.method({
selector: 'cascadeNodeWithMessages:',
category: 'accessing',
fn: function (aCollection){
var self=this;
var first=nil;
first=(function($rec){$rec._selector_(self._selector());$rec._arguments_(self._arguments());return $rec._yourself();})(smalltalk.SendNode._new());
return (function($rec){$rec._receiver_(self._receiver());$rec._nodes_(smalltalk.Array._with_(first).__comma(aCollection));return $rec._yourself();})(smalltalk.CascadeNode._new());
return self;},
source: unescape('cascadeNodeWithMessages%3A%20aCollection%0A%09%7C%20first%20%7C%0A%09first%20%3A%3D%20SendNode%20new%0A%09%20%20%20%20selector%3A%20self%20selector%3B%0A%09%20%20%20%20arguments%3A%20self%20arguments%3B%0A%09%20%20%20%20yourself.%0A%09%5ECascadeNode%20new%0A%09%20%20%20%20receiver%3A%20self%20receiver%3B%0A%09%20%20%20%20nodes%3A%20%28Array%20with%3A%20first%29%2C%20aCollection%3B%0A%09%20%20%20%20yourself%0A')}),
smalltalk.SendNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitSendNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitSendNode%3A%20self%0A')}),
smalltalk.SendNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler');
smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
category: 'accessing',
fn: function (){
var self=this;
return self['@receiver'];
return self;},
source: unescape('receiver%0A%09%5Ereceiver%0A')}),
smalltalk.CascadeNode);

smalltalk.addMethod(
'_receiver_',
smalltalk.method({
selector: 'receiver:',
category: 'accessing',
fn: function (aNode){
var self=this;
self['@receiver']=aNode;
return self;},
source: unescape('receiver%3A%20aNode%0A%09receiver%20%3A%3D%20aNode%0A')}),
smalltalk.CascadeNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitCascadeNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitCascadeNode%3A%20self%0A')}),
smalltalk.CascadeNode);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler');
smalltalk.addMethod(
'_left',
smalltalk.method({
selector: 'left',
category: 'accessing',
fn: function (){
var self=this;
return self['@left'];
return self;},
source: unescape('left%0A%09%5Eleft%0A')}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_left_',
smalltalk.method({
selector: 'left:',
category: 'accessing',
fn: function (aNode){
var self=this;
self['@left']=aNode;
return self;},
source: unescape('left%3A%20aNode%0A%09left%20%3A%3D%20aNode%0A')}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_right',
smalltalk.method({
selector: 'right',
category: 'accessing',
fn: function (){
var self=this;
return self['@right'];
return self;},
source: unescape('right%0A%09%5Eright%0A')}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_right_',
smalltalk.method({
selector: 'right:',
category: 'accessing',
fn: function (aNode){
var self=this;
self['@right']=aNode;
return self;},
source: unescape('right%3A%20aNode%0A%09right%20%3A%3D%20aNode%0A')}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitAssignmentNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitAssignmentNode%3A%20self%0A')}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters'], 'Compiler');
smalltalk.addMethod(
'_parameters',
smalltalk.method({
selector: 'parameters',
category: 'accessing',
fn: function (){
var self=this;
return self['@parameters']._ifNil_((function(){return self['@parameters']=smalltalk.Array._new();}));
return self;},
source: unescape('parameters%0A%09%5Eparameters%20ifNil%3A%20%5Bparameters%20%3A%3D%20Array%20new%5D%0A')}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_parameters_',
smalltalk.method({
selector: 'parameters:',
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@parameters']=aCollection;
return self;},
source: unescape('parameters%3A%20aCollection%0A%09parameters%20%3A%3D%20aCollection%0A')}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitBlockNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitBlockNode%3A%20self%0A')}),
smalltalk.BlockNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps'], 'Compiler');
smalltalk.addMethod(
'_temps',
smalltalk.method({
selector: 'temps',
category: 'accessing',
fn: function (){
var self=this;
return self['@temps']._ifNil_((function(){return [];}));
return self;},
source: unescape('temps%0A%09%5Etemps%20ifNil%3A%20%5B%23%28%29%5D%0A')}),
smalltalk.SequenceNode);

smalltalk.addMethod(
'_temps_',
smalltalk.method({
selector: 'temps:',
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@temps']=aCollection;
return self;},
source: unescape('temps%3A%20aCollection%0A%09temps%20%3A%3D%20aCollection%0A')}),
smalltalk.SequenceNode);

smalltalk.addMethod(
'_asBlockSequenceNode',
smalltalk.method({
selector: 'asBlockSequenceNode',
category: 'testing',
fn: function (){
var self=this;
return (function($rec){$rec._nodes_(self._nodes());$rec._temps_(self._temps());return $rec._yourself();})(smalltalk.BlockSequenceNode._new());
return self;},
source: unescape('asBlockSequenceNode%0A%09%5EBlockSequenceNode%20new%0A%09%20%20%20%20nodes%3A%20self%20nodes%3B%0A%09%20%20%20%20temps%3A%20self%20temps%3B%0A%09%20%20%20%20yourself%0A')}),
smalltalk.SequenceNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitSequenceNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitSequenceNode%3A%20self%0A')}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitBlockSequenceNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitBlockSequenceNode%3A%20self%0A')}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitReturnNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitReturnNode%3A%20self%0A')}),
smalltalk.ReturnNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler');
smalltalk.addMethod(
'_value',
smalltalk.method({
selector: 'value',
category: 'accessing',
fn: function (){
var self=this;
return self['@value'];
return self;},
source: unescape('value%0A%09%5Evalue%0A')}),
smalltalk.ValueNode);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
category: 'accessing',
fn: function (anObject){
var self=this;
self['@value']=anObject;
return self;},
source: unescape('value%3A%20anObject%0A%09value%20%3A%3D%20anObject%0A')}),
smalltalk.ValueNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitValueNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitValueNode%3A%20self%0A')}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, [], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitVariableNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitVariableNode%3A%20self%0A')}),
smalltalk.VariableNode);



smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitClassReferenceNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitClassReferenceNode%3A%20self%0A')}),
smalltalk.ClassReferenceNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler');
smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
category: 'accessing',
fn: function (){
var self=this;
return self['@source']._ifNil_((function(){return "";}));
return self;},
source: unescape('source%0A%09%5Esource%20ifNil%3A%20%5B%27%27%5D%0A')}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
'_source_',
smalltalk.method({
selector: 'source:',
category: 'accessing',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;},
source: unescape('source%3A%20aString%0A%09source%20%3A%3D%20aString%0A')}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
category: 'visiting',
fn: function (aVisitor){
var self=this;
aVisitor._visitJSStatementNode_(self);
return self;},
source: unescape('accept%3A%20aVisitor%0A%09aVisitor%20visitJSStatementNode%3A%20self%0A')}),
smalltalk.JSStatementNode);



smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
'_visit_',
smalltalk.method({
selector: 'visit:',
category: 'visiting',
fn: function (aNode){
var self=this;
aNode._accept_(self);
return self;},
source: unescape('visit%3A%20aNode%0A%09aNode%20accept%3A%20self%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitNode_',
smalltalk.method({
selector: 'visitNode:',
category: 'visiting',
fn: function (aNode){
var self=this;

return self;},
source: unescape('visitNode%3A%20aNode%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitMethodNode_',
smalltalk.method({
selector: 'visitMethodNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self._visitNode_(aNode);
return self;},
source: unescape('visitMethodNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitSequenceNode_',
smalltalk.method({
selector: 'visitSequenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self._visitNode_(aNode);
return self;},
source: unescape('visitSequenceNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitBlockSequenceNode_',
smalltalk.method({
selector: 'visitBlockSequenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self._visitSequenceNode_(aNode);
return self;},
source: unescape('visitBlockSequenceNode%3A%20aNode%0A%09self%20visitSequenceNode%3A%20aNode%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitBlockNode_',
smalltalk.method({
selector: 'visitBlockNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self._visitNode_(aNode);
return self;},
source: unescape('visitBlockNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitReturnNode_',
smalltalk.method({
selector: 'visitReturnNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self._visitNode_(aNode);
return self;},
source: unescape('visitReturnNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitSendNode_',
smalltalk.method({
selector: 'visitSendNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self._visitNode_(aNode);
return self;},
source: unescape('visitSendNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitCascadeNode_',
smalltalk.method({
selector: 'visitCascadeNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self._visitNode_(aNode);
return self;},
source: unescape('visitCascadeNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitValueNode_',
smalltalk.method({
selector: 'visitValueNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self._visitNode_(aNode);
return self;},
source: unescape('visitValueNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitVariableNode_',
smalltalk.method({
selector: 'visitVariableNode:',
category: 'visiting',
fn: function (aNode){
var self=this;

return self;},
source: unescape('visitVariableNode%3A%20aNode%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitAssignmentNode_',
smalltalk.method({
selector: 'visitAssignmentNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self._visitNode_(aNode);
return self;},
source: unescape('visitAssignmentNode%3A%20aNode%0A%09self%20visitNode%3A%20aNode%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitClassReferenceNode_',
smalltalk.method({
selector: 'visitClassReferenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
(function($rec){$rec._nextPutAll_("smalltalk.");return $rec._nextPutAll_(aNode._value());})(self);
return self;},
source: unescape('visitClassReferenceNode%3A%20aNode%0A%09self%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aNode%20value%0A')}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitJSStatementNode_',
smalltalk.method({
selector: 'visitJSStatementNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
(function($rec){$rec._nextPutAll_(unescape("function%28%29%7B"));$rec._nextPutAll_(aNode._source());return $rec._nextPutAll_(unescape("%7D%29%28%29"));})(self);
return self;},
source: unescape('visitJSStatementNode%3A%20aNode%0A%09self%20%0A%09%20%20%20%20nextPutAll%3A%20%27function%28%29%7B%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aNode%20source%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%7D%29%28%29%27%0A')}),
smalltalk.NodeVisitor);



smalltalk.addClass('Compiler', smalltalk.NodeVisitor, ['stream', 'nestedBlocks', 'earlyReturn', 'currentClass', 'currentSelector'], 'Compiler');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
category: 'initialization',
fn: function (){
var self=this;
self.klass.superclass.fn.prototype['_initialize'].apply(self, []);
self['@stream']=""._writeStream();
return self;},
source: unescape('initialize%0A%09super%20initialize.%0A%09stream%20%3A%3D%20%27%27%20writeStream%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_parser',
smalltalk.method({
selector: 'parser',
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.SmalltalkParser._new();
return self;},
source: unescape('parser%0A%09%5ESmalltalkParser%20new%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_currentClass',
smalltalk.method({
selector: 'currentClass',
category: 'accessing',
fn: function (){
var self=this;
return self['@currentClass'];
return self;},
source: unescape('currentClass%0A%09%5EcurrentClass%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_currentClass_',
smalltalk.method({
selector: 'currentClass:',
category: 'accessing',
fn: function (aClass){
var self=this;
self['@currentClass']=aClass;
return self;},
source: unescape('currentClass%3A%20aClass%0A%09currentClass%20%3A%3D%20aClass%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_loadExpression_',
smalltalk.method({
selector: 'loadExpression:',
category: 'compiling',
fn: function (aString){
var self=this;
smalltalk.DoIt._addCompiledMethod_(self._eval_(self._compileExpression_(aString)));
return smalltalk.DoIt._new()._doIt();
return self;},
source: unescape('loadExpression%3A%20aString%0A%09DoIt%20addCompiledMethod%3A%20%28self%20eval%3A%20%28self%20compileExpression%3A%20aString%29%29.%0A%09%5EDoIt%20new%20doIt%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_load_forClass_',
smalltalk.method({
selector: 'load:forClass:',
category: 'compiling',
fn: function (aString, aClass){
var self=this;
return self._eval_(self._compile_forClass_(aString,aClass));
return self;},
source: unescape('load%3A%20aString%20forClass%3A%20aClass%0A%09%5Eself%20eval%3A%20%28self%20compile%3A%20aString%20forClass%3A%20aClass%29%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compile_forClass_',
smalltalk.method({
selector: 'compile:forClass:',
category: 'compiling',
fn: function (aString, aClass){
var self=this;
self._currentClass_(aClass);
return self._compile_(aString);
return self;},
source: unescape('compile%3A%20aString%20forClass%3A%20aClass%0A%09self%20currentClass%3A%20aClass.%0A%09%5Eself%20compile%3A%20aString%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compileExpression_',
smalltalk.method({
selector: 'compileExpression:',
category: 'compiling',
fn: function (aString){
var self=this;
self._currentClass_(smalltalk.DoIt);
return self._compileNode_(self._parseExpression_(aString));
return self;},
source: unescape('compileExpression%3A%20aString%0A%09self%20currentClass%3A%20DoIt.%0A%09%5Eself%20compileNode%3A%20%28self%20parseExpression%3A%20aString%29%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_eval_',
smalltalk.method({
selector: 'eval:',
category: 'compiling',
fn: function (aString){
var self=this;
return (function(){return eval(aString);})();
return self;},
source: unescape('eval%3A%20aString%0A%09%5E%7B%27return%20eval%28aString%29%3B%27%7D%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compile_',
smalltalk.method({
selector: 'compile:',
category: 'compiling',
fn: function (aString){
var self=this;
return self._compileNode_(self._parse_(aString));
return self;},
source: unescape('compile%3A%20aString%0A%09%5Eself%20compileNode%3A%20%28self%20parse%3A%20aString%29%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compileNode_',
smalltalk.method({
selector: 'compileNode:',
category: 'compiling',
fn: function (aNode){
var self=this;
self['@stream']=""._writeStream();
self._visit_(aNode);
return self['@stream']._contents();
return self;},
source: unescape('compileNode%3A%20aNode%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09self%20visit%3A%20aNode.%0A%09%5Estream%20contents%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visit_',
smalltalk.method({
selector: 'visit:',
category: 'visiting',
fn: function (aNode){
var self=this;
aNode._accept_(self);
return self;},
source: unescape('visit%3A%20aNode%0A%09aNode%20accept%3A%20self%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitMethodNode_',
smalltalk.method({
selector: 'visitMethodNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
var str=nil;
var currentSelector=nil;
self['@currentSelector']=aNode._selector()._asSelector();
self['@nestedBlocks']=(0);
self['@earlyReturn']=false;
(function($rec){$rec._nextPutAll_(unescape("smalltalk.method%28%7B").__comma(smalltalk.String._cr()));$rec._nextPutAll_(unescape("selector%3A%20%22").__comma(aNode._selector()).__comma(unescape("%22%2C")).__comma(smalltalk.String._cr()));$rec._nextPutAll_(unescape("source%3A%20unescape%28%22").__comma(aNode._source()._escaped()).__comma(unescape("%22%29%2C")).__comma(smalltalk.String._cr()));return $rec._nextPutAll_(unescape("fn%3A%20function%28"));})(self['@stream']);
aNode._arguments()._do_separatedBy_((function(each){return self['@stream']._nextPutAll_(each);}),(function(){return self['@stream']._nextPutAll_(unescape("%2C%20"));}));
(function($rec){$rec._nextPutAll_(unescape("%29%7B").__comma(smalltalk.String._cr()));return $rec._nextPutAll_(unescape("var%20self%3Dthis%3B").__comma(smalltalk.String._cr()));})(self['@stream']);
str=self['@stream'];
self['@stream']=""._writeStream();
aNode._nodes()._do_((function(each){return self._visit_(each);}));
self['@earlyReturn']._ifTrue_((function(){return str._nextPutAll_(unescape("try%7B"));}));
str._nextPutAll_(self['@stream']._contents());
self['@stream']=str;
(function($rec){$rec._nextPutAll_(smalltalk.String._cr());return $rec._nextPutAll_(unescape("return%20self%3B"));})(self['@stream']);
self['@earlyReturn']._ifTrue_((function(){return self['@stream']._nextPutAll_(smalltalk.String._cr().__comma(unescape("%7D%20catch%28e%29%20%7Bif%28e.name%20%3D%3D%3D%20%27stReturn%27%20%26%26%20e.selector%20%3D%3D%3D%20")).__comma(self['@currentSelector']._printString()).__comma(unescape("%29%7Breturn%20e.fn%28%29%7D%20throw%28e%29%7D")));}));
(function($rec){$rec._nextPutAll_(unescape("%7D").__comma(smalltalk.String._cr()));return $rec._nextPutAll_(unescape("%7D%29"));})(self['@stream']);
return self;},
source: unescape('visitMethodNode%3A%20aNode%0A%09%7C%20str%20currentSelector%20%7C%0A%09currentSelector%20%3A%3D%20aNode%20selector%20asSelector.%0A%09nestedBlocks%20%3A%3D%200.%0A%09earlyReturn%20%3A%3D%20false.%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.method%28%7B%27%2C%20String%20cr%3B%0A%09%20%20%20%20nextPutAll%3A%20%27selector%3A%20%22%27%2C%20aNode%20selector%2C%20%27%22%2C%27%2C%20String%20cr%3B%0A%09%20%20%20%20nextPutAll%3A%20%27source%3A%20unescape%28%22%27%2C%20aNode%20source%20escaped%2C%20%27%22%29%2C%27%2C%20String%20cr%3B%0A%09%20%20%20%20nextPutAll%3A%20%27fn%3A%20function%28%27.%0A%09aNode%20arguments%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20stream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20%27%29%7B%27%2C%20String%20cr%3B%0A%09%20%20%20%20nextPutAll%3A%20%27var%20self%3Dthis%3B%27%2C%20String%20cr.%0A%09str%20%3A%3D%20stream.%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each%5D.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20str%20nextPutAll%3A%20%27try%7B%27%5D.%0A%09str%20nextPutAll%3A%20stream%20contents.%0A%09stream%20%3A%3D%20str.%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20String%20cr%3B%20%0A%09%20%20%20%20nextPutAll%3A%20%27return%20self%3B%27.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20stream%20nextPutAll%3A%20String%20cr%2C%20%27%7D%20catch%28e%29%20%7Bif%28e.name%20%3D%3D%3D%20%27%27stReturn%27%27%20%26%26%20e.selector%20%3D%3D%3D%20%27%2C%20currentSelector%20printString%2C%20%27%29%7Breturn%20e.fn%28%29%7D%20throw%28e%29%7D%27%5D.%0A%09stream%20%0A%09%20%20%20%20nextPutAll%3A%20%27%7D%27%2C%20String%20cr%3B%0A%09%20%20%20%20nextPutAll%3A%20%27%7D%29%27%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitBlockNode_',
smalltalk.method({
selector: 'visitBlockNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self['@stream']._nextPutAll_(unescape("%28function%28"));
aNode._parameters()._do_separatedBy_((function(each){return self['@stream']._nextPutAll_(each);}),(function(){return self['@stream']._nextPutAll_(unescape("%2C%20"));}));
self['@stream']._nextPutAll_(unescape("%29%7B"));
aNode._nodes()._do_((function(each){return self._visit_(each);}));
self['@stream']._nextPutAll_(unescape("%7D%29"));
return self;},
source: unescape('visitBlockNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%27%28function%28%27.%0A%09aNode%20parameters%20%0A%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%0A%09%09stream%20nextPutAll%3A%20each%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%20%27%5D.%0A%09stream%20nextPutAll%3A%20%27%29%7B%27.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D.%0A%09stream%20nextPutAll%3A%20%27%7D%29%27%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitSequenceNode_',
smalltalk.method({
selector: 'visitSequenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
aNode._temps()._do_((function(each){self['@stream']._nextPutAll_("var ".__comma(each).__comma(unescape("%3Dnil%3B")));return self['@stream']._nextPutAll_(smalltalk.String._cr());}));
aNode._nodes()._do_separatedBy_((function(each){self._visit_(each);return self['@stream']._nextPutAll_(unescape("%3B"));}),(function(){return self['@stream']._nextPutAll_(smalltalk.String._cr());}));
return self;},
source: unescape('visitSequenceNode%3A%20aNode%0A%09aNode%20temps%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27var%20%27%2C%20each%2C%20%27%3Dnil%3B%27.%0A%09%20%20%20%20stream%20nextPutAll%3A%20String%20cr%5D.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each.%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D%0A%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20String%20cr%5D%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitBlockSequenceNode_',
smalltalk.method({
selector: 'visitBlockSequenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
var index=nil;
self['@nestedBlocks']=self['@nestedBlocks'].__plus((1));
aNode._nodes()._isEmpty()._ifTrue_ifFalse_((function(){return self['@stream']._nextPutAll_(unescape("return%20nil%3B"));}),(function(){aNode._temps()._do_((function(each){self['@stream']._nextPutAll_("var ".__comma(each).__comma(unescape("%3Dnil%3B")));return self['@stream']._nextPutAll_(smalltalk.String._cr());}));index=(0);return aNode._nodes()._do_((function(each){index=index.__plus((1));index.__eq(aNode._nodes()._size())._ifTrue_((function(){return self['@stream']._nextPutAll_("return ");}));self._visit_(each);return self['@stream']._nextPutAll_(unescape("%3B"));}));}));
self['@nestedBlocks']=self['@nestedBlocks'].__minus((1));
return self;},
source: unescape('visitBlockSequenceNode%3A%20aNode%0A%09%7C%20index%20%7C%0A%09nestedBlocks%20%3A%3D%20nestedBlocks%20+%201.%0A%09aNode%20nodes%20isEmpty%0A%09%20%20%20%20ifTrue%3A%20%5B%0A%09%09stream%20nextPutAll%3A%20%27return%20nil%3B%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09aNode%20temps%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%20%20%20%20stream%20nextPutAll%3A%20%27var%20%27%2C%20each%2C%20%27%3Dnil%3B%27.%0A%09%09%20%20%20%20stream%20nextPutAll%3A%20String%20cr%5D.%0A%09%09index%20%3A%3D%200.%0A%09%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%09%20%20%20%20index%20%3D%20aNode%20nodes%20size%20ifTrue%3A%20%5B%0A%09%09%09stream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09%09%20%20%20%20self%20visit%3A%20each.%0A%09%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D%5D.%0A%09nestedBlocks%20%3A%3D%20nestedBlocks%20-%201%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitReturnNode_',
smalltalk.method({
selector: 'visitReturnNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self['@nestedBlocks'].__gt((0))._ifTrue_((function(){return self['@earlyReturn']=true;}));
self['@earlyReturn']._ifTrue_ifFalse_((function(){return (function($rec){$rec._nextPutAll_(unescape("%28function%28%29%7Bthrow%28"));$rec._nextPutAll_(unescape("%7Bname%3A%20%27stReturn%27%2C%20selector%3A%20"));$rec._nextPutAll_(self['@currentSelector']._printString());return $rec._nextPutAll_(unescape("%2C%20fn%3A%20function%28%29%7Breturn%20"));})(self['@stream']);}),(function(){return self['@stream']._nextPutAll_("return ");}));
aNode._nodes()._do_((function(each){return self._visit_(each);}));
self['@earlyReturn']._ifTrue_((function(){return self['@stream']._nextPutAll_(unescape("%7D%7D%29%7D%29%28%29"));}));
return self;},
source: unescape('visitReturnNode%3A%20aNode%0A%09nestedBlocks%20%3E%200%20ifTrue%3A%20%5B%0A%09%20%20%20%20earlyReturn%20%3A%3D%20true%5D.%0A%09earlyReturn%0A%09%20%20%20%20ifTrue%3A%20%5B%0A%09%09stream%0A%09%09%20%20%20%20nextPutAll%3A%20%27%28function%28%29%7Bthrow%28%27%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%7Bname%3A%20%27%27stReturn%27%27%2C%20selector%3A%20%27%3B%0A%09%09%20%20%20%20nextPutAll%3A%20currentSelector%20printString%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%2C%20fn%3A%20function%28%29%7Breturn%20%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5Bstream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20self%20visit%3A%20each%5D.%0A%09earlyReturn%20ifTrue%3A%20%5B%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%7D%7D%29%7D%29%28%29%27%5D%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitSendNode_',
smalltalk.method({
selector: 'visitSendNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
var str=nil;
str=self['@stream'];
self['@stream']=""._writeStream();
self._visit_(aNode._receiver());
self['@stream']._contents().__eq("super")._ifTrue_ifFalse_((function(){self['@stream']=str;(function($rec){$rec._nextPutAll_(unescape("self.klass.superclass.fn.prototype%5B%27"));$rec._nextPutAll_(aNode._selector()._asSelector());return $rec._nextPutAll_(unescape("%27%5D.apply%28self%2C%20%5B"));})(self['@stream']);aNode._arguments()._do_separatedBy_((function(each){return self._visit_(each);}),(function(){return self['@stream']._nextPutAll_(unescape("%2C"));}));return self['@stream']._nextPutAll_(unescape("%5D%29"));}),(function(){str._nextPutAll_(self['@stream']._contents());self['@stream']=str;self['@stream']._nextPutAll_(".".__comma(aNode._selector()._asSelector()).__comma(unescape("%28")));aNode._arguments()._do_separatedBy_((function(each){return self._visit_(each);}),(function(){return self['@stream']._nextPutAll_(unescape("%2C"));}));return self['@stream']._nextPutAll_(unescape("%29"));}));
return self;},
source: unescape('visitSendNode%3A%20aNode%0A%09%7C%20str%20%7C%0A%09str%20%3A%3D%20stream.%0A%09stream%20%3A%3D%20%27%27%20writeStream.%0A%09self%20visit%3A%20aNode%20receiver.%0A%09stream%20contents%20%3D%20%27super%27%20%0A%09%20%20%20%20ifTrue%3A%20%5B%0A%09%09stream%20%3A%3D%20str.%0A%09%09stream%20%0A%09%09%20%20%20%20nextPutAll%3A%20%27self.klass.superclass.fn.prototype%5B%27%27%27%3B%0A%09%09%20%20%20%20nextPutAll%3A%20aNode%20selector%20asSelector%3B%0A%09%09%20%20%20%20nextPutAll%3A%20%27%27%27%5D.apply%28self%2C%20%5B%27.%0A%09%09aNode%20arguments%20%0A%09%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D%0A%09%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09%09stream%20nextPutAll%3A%20%27%5D%29%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5B%0A%09%09str%20nextPutAll%3A%20stream%20contents.%0A%09%09stream%20%3A%3D%20str.%0A%09%09stream%20nextPutAll%3A%20%27.%27%2C%20aNode%20selector%20asSelector%2C%20%27%28%27.%0A%09%09aNode%20arguments%20%0A%09%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20self%20visit%3A%20each%5D%0A%09%09%20%20%20%20separatedBy%3A%20%5Bstream%20nextPutAll%3A%20%27%2C%27%5D.%0A%09%09stream%20nextPutAll%3A%20%27%29%27%5D%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitCascadeNode_',
smalltalk.method({
selector: 'visitCascadeNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
var index=nil;
index=(0);
self['@stream']._nextPutAll_(unescape("%28function%28%24rec%29%7B"));
aNode._nodes()._do_((function(each){index=index.__plus((1));index.__eq(aNode._nodes()._size())._ifTrue_((function(){return self['@stream']._nextPutAll_("return ");}));each._receiver_(smalltalk.VariableNode._new()._value_("$rec"));self._visit_(each);return self['@stream']._nextPutAll_(unescape("%3B"));}));
self['@stream']._nextPutAll_(unescape("%7D%29%28"));
self._visit_(aNode._receiver());
self['@stream']._nextPutAll_(unescape("%29"));
return self;},
source: unescape('visitCascadeNode%3A%20aNode%0A%09%7C%20index%20%7C%0A%09index%20%3A%3D%200.%0A%09stream%20nextPutAll%3A%20%27%28function%28%24rec%29%7B%27.%0A%09aNode%20nodes%20do%3A%20%5B%3Aeach%20%7C%0A%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0A%09%20%20%20%20index%20%3D%20aNode%20nodes%20size%20ifTrue%3A%20%5B%0A%09%09stream%20nextPutAll%3A%20%27return%20%27%5D.%0A%09%20%20%20%20each%20receiver%3A%20%28VariableNode%20new%20value%3A%20%27%24rec%27%29.%0A%09%20%20%20%20self%20visit%3A%20each.%0A%09%20%20%20%20stream%20nextPutAll%3A%20%27%3B%27%5D.%0A%09stream%20nextPutAll%3A%20%27%7D%29%28%27.%0A%09self%20visit%3A%20aNode%20receiver.%0A%09stream%20nextPutAll%3A%20%27%29%27%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitValueNode_',
smalltalk.method({
selector: 'visitValueNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self['@stream']._nextPutAll_(aNode._value()._asJavascript());
return self;},
source: unescape('visitValueNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20aNode%20value%20asJavascript%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitAssignmentNode_',
smalltalk.method({
selector: 'visitAssignmentNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self._visit_(aNode._left());
self['@stream']._nextPutAll_(unescape("%3D"));
self._visit_(aNode._right());
return self;},
source: unescape('visitAssignmentNode%3A%20aNode%0A%09self%20visit%3A%20aNode%20left.%0A%09stream%20nextPutAll%3A%20%27%3D%27.%0A%09self%20visit%3A%20aNode%20right%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitClassReferenceNode_',
smalltalk.method({
selector: 'visitClassReferenceNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
(function($rec){$rec._nextPutAll_("smalltalk.");return $rec._nextPutAll_(aNode._value());})(self['@stream']);
return self;},
source: unescape('visitClassReferenceNode%3A%20aNode%0A%09stream%0A%09%20%20%20%20nextPutAll%3A%20%27smalltalk.%27%3B%0A%09%20%20%20%20nextPutAll%3A%20aNode%20value%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitVariableNode_',
smalltalk.method({
selector: 'visitVariableNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self._currentClass()._instVarNames()._includes_(aNode._value())._ifTrue_ifFalse_((function(){return self['@stream']._nextPutAll_(unescape("self%5B%27@").__comma(aNode._value()).__comma(unescape("%27%5D")));}),(function(){return self['@stream']._nextPutAll_(aNode._value());}));
return self;},
source: unescape('visitVariableNode%3A%20aNode%0A%09%28self%20currentClass%20instVarNames%20includes%3A%20aNode%20value%29%20%0A%09%20%20%20%20ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27self%5B%27%27@%27%2C%20aNode%20value%2C%20%27%27%27%5D%27%5D%0A%09%20%20%20%20ifFalse%3A%20%5Bstream%20nextPutAll%3A%20aNode%20value%5D%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitJSStatementNode_',
smalltalk.method({
selector: 'visitJSStatementNode:',
category: 'visiting',
fn: function (aNode){
var self=this;
self['@stream']._nextPutAll_(unescape("%28function%28%29%7B"));
self['@stream']._nextPutAll_(aNode._source()._value()._replace_with_(unescape("%27%27"),unescape("%27")));
self['@stream']._nextPutAll_(unescape("%7D%29%28%29"));
return self;},
source: unescape('visitJSStatementNode%3A%20aNode%0A%09stream%20nextPutAll%3A%20%27%28function%28%29%7B%27.%0A%09stream%20nextPutAll%3A%20%28aNode%20source%20value%20replace%3A%20%27%27%27%27%27%27%20with%3A%20%27%27%27%27%29.%0A%09stream%20nextPutAll%3A%20%27%7D%29%28%29%27%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
category: 'compiling',
fn: function (aString){
var self=this;
return self._parser()._parse_(aString._readStream());
return self;},
source: unescape('parse%3A%20aString%0A%20%20%20%20%5Eself%20parser%20parse%3A%20aString%20readStream%0A')}),
smalltalk.Compiler);

smalltalk.addMethod(
'_parseExpression_',
smalltalk.method({
selector: 'parseExpression:',
category: 'compiling',
fn: function (aString){
var self=this;
return self._parse_(unescape("doIt%20%5E%5B").__comma(aString).__comma(unescape("%5D%20value")));
return self;},
source: unescape('parseExpression%3A%20aString%0A%20%20%20%20%5Eself%20parse%3A%20%27doIt%20%5E%5B%27%2C%20aString%2C%20%27%5D%20value%27%0A')}),
smalltalk.Compiler);



smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
'_doIt',
smalltalk.method({
selector: 'doIt',
category: '',
fn: function (){
var self=this;
return (function(){return smalltalk.Object._subclass_instanceVariableNames_category_("DoIt","","Compiler");})._value();
return self;},
source: unescape('doIt%20%5E%5BObject%20subclass%3A%20%23DoIt%0A%09instanceVariableNames%3A%20%27%27%0A%09category%3A%20%27Compiler%27%5D%20value')}),
smalltalk.DoIt);




