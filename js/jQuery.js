smalltalk.addClass('JQuery', smalltalk.Object, ['jquery'], 'JQuery');
smalltalk.addMethod(
'_removeAttribute_',
smalltalk.method({
selector: 'removeAttribute:',
category: 'attributes',
fn: function (aString){
var self=this;
return self._call_withArgument_("removeAttribute",aString);
return self;},
source: unescape('removeAttribute%3A%20aString%0A%20%20%20%20%22Remove%20an%20attribute%20from%20each%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27removeAttribute%27%20withArgument%3A%20aString%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_attr_',
smalltalk.method({
selector: 'attr:',
category: 'attributes',
fn: function (aString){
var self=this;
return self._call_withArgument_("attr",aString);
return self;},
source: unescape('attr%3A%20aString%0A%20%20%20%20%22Get%20the%20value%20of%20an%20attribute%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27attr%27%20withArgument%3A%20aString%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_val',
smalltalk.method({
selector: 'val',
category: 'attributes',
fn: function (){
var self=this;
return self._call_("val");
return self;},
source: unescape('val%0A%20%20%20%20%22Get%20the%20current%20value%20of%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27val%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_val_',
smalltalk.method({
selector: 'val:',
category: 'attributes',
fn: function (aString){
var self=this;
self._call_withArgument_("val",aString);
return self;},
source: unescape('val%3A%20aString%0A%20%20%20%20self%20call%3A%20%27val%27%20withArgument%3A%20aString%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_cssAt_',
smalltalk.method({
selector: 'cssAt:',
category: 'css',
fn: function (aString){
var self=this;
return (function(){return self['@jquery'].css(aString)})();
return self;},
source: unescape('cssAt%3A%20aString%0A%20%20%20%20%5E%7B%27return%20self%5B%27%27@jquery%27%27%5D.css%28aString%29%27%7D%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_cssAt_put_',
smalltalk.method({
selector: 'cssAt:put:',
category: 'css',
fn: function (aString, anotherString){
var self=this;
(function(){self['@jquery'].css(aString, anotherString)})();
return self;},
source: unescape('cssAt%3A%20aString%20put%3A%20anotherString%0A%20%20%20%20%7B%27self%5B%27%27@jquery%27%27%5D.css%28aString%2C%20anotherString%29%27%7D%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_addClass_',
smalltalk.method({
selector: 'addClass:',
category: 'css',
fn: function (aString){
var self=this;
self._call_withArgument_("addClass",aString);
return self;},
source: unescape('addClass%3A%20aString%0A%20%20%20%20%22Adds%20the%20specified%20class%28es%29%20to%20each%20of%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20self%20call%3A%20%27addClass%27%20withArgument%3A%20aString%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_removeClass_',
smalltalk.method({
selector: 'removeClass:',
category: 'css',
fn: function (aString){
var self=this;
self._call_withArgument_("removeClass",aString);
return self;},
source: unescape('removeClass%3A%20aString%0A%20%20%20%20%22Remove%20a%20single%20class%2C%20multiple%20classes%2C%20or%20all%20classes%20from%20each%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20self%20call%3A%20%27removeClass%27%20withArgument%3A%20aString%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_toggleClass_',
smalltalk.method({
selector: 'toggleClass:',
category: 'css',
fn: function (aString){
var self=this;
self._call_withArgument_("toggleClass",aString);
return self;},
source: unescape('toggleClass%3A%20aString%0A%20%20%20%20%22Add%20or%20remove%20one%20or%20more%20classes%20from%20each%20element%20in%20the%20set%20of%20matched%20elements%2C%20depending%20on%20either%20the%20class%27s%20presence%20or%20the%20value%20of%20the%20switch%20argument.%22%0A%20%20%20%20self%20call%3A%20%27toggleClass%27%20withArgument%3A%20aString%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_height',
smalltalk.method({
selector: 'height',
category: 'css',
fn: function (){
var self=this;
return self._call_("height");
return self;},
source: unescape('height%20%0A%20%20%20%20%22Get%20the%20current%20computed%20height%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27height%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_height_',
smalltalk.method({
selector: 'height:',
category: 'css',
fn: function (anInteger){
var self=this;
self._call_withArgument_("height",anInteger);
return self;},
source: unescape('height%3A%20anInteger%0A%20%20%20%20self%20call%3A%20%27height%27%20withArgument%3A%20anInteger%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_width_',
smalltalk.method({
selector: 'width:',
category: 'css',
fn: function (anInteger){
var self=this;
self._call_withArgument_("width",anInteger);
return self;},
source: unescape('width%3A%20anInteger%0A%20%20%20%20self%20call%3A%20%27width%27%20withArgument%3A%20anInteger%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_width',
smalltalk.method({
selector: 'width',
category: 'css',
fn: function (){
var self=this;
return self._call_("width");
return self;},
source: unescape('width%0A%20%20%20%20%22Get%20the%20current%20computed%20width%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27width%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_innerHeight',
smalltalk.method({
selector: 'innerHeight',
category: 'css',
fn: function (){
var self=this;
return self._call_("innerHeight");
return self;},
source: unescape('innerHeight%0A%20%20%20%20%22Get%20the%20current%20computed%20height%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20including%20padding%20but%20not%20border.%22%0A%20%20%20%20%5Eself%20call%3A%20%27innerHeight%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_innerWidth',
smalltalk.method({
selector: 'innerWidth',
category: 'css',
fn: function (){
var self=this;
return self._call_("innerWidth");
return self;},
source: unescape('innerWidth%0A%20%20%20%20%22Get%20the%20current%20computed%20width%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20including%20padding%20but%20not%20border.%22%0A%20%20%20%20%5Eself%20call%3A%20%27innerWidth%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_outerHeight',
smalltalk.method({
selector: 'outerHeight',
category: 'css',
fn: function (){
var self=this;
return self._call_("outerHeight");
return self;},
source: unescape('outerHeight%0A%20%20%20%20%22Get%20the%20current%20computed%20height%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20including%20padding%2C%20border%2C%20and%20optionally%20margin.%22%0A%20%20%20%20%5Eself%20call%3A%20%27outerHeight%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_outerWidth',
smalltalk.method({
selector: 'outerWidth',
category: 'css',
fn: function (){
var self=this;
return self._call_("outerWidth");
return self;},
source: unescape('outerWidth%0A%20%20%20%20%22Get%20the%20current%20computed%20width%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20including%20padding%20and%20border.%22%0A%20%20%20%20%5Eself%20call%3A%20%27outerWidth%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_top',
smalltalk.method({
selector: 'top',
category: 'css',
fn: function (){
var self=this;
return self._call_("position")._basicAt_("top");
return self;},
source: unescape('top%0A%20%20%20%20%22Get%20the%20current%20y%20coordinate%20of%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20relative%20to%20the%20offset%20parent.%22%0A%20%20%20%20%5E%28self%20call%3A%20%27position%27%29%20basicAt%3A%20%27top%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_left',
smalltalk.method({
selector: 'left',
category: 'css',
fn: function (){
var self=this;
return self._call_("position")._basicAt_("left");
return self;},
source: unescape('left%0A%20%20%20%20%22Get%20the%20current%20x%20coordinate%20of%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20relative%20to%20the%20offset%20parent.%22%0A%20%20%20%20%5E%28self%20call%3A%20%27position%27%29%20basicAt%3A%20%27left%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_offsetLeft',
smalltalk.method({
selector: 'offsetLeft',
category: 'css',
fn: function (){
var self=this;
return self._call_("offset")._basicAt_("left");
return self;},
source: unescape('offsetLeft%0A%20%20%20%20%22Get%20the%20current%20coordinates%20of%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20relative%20to%20the%20document.%22%0A%20%20%20%20%5E%28self%20call%3A%20%27offset%27%29%20basicAt%3A%20%27left%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_offsetTop',
smalltalk.method({
selector: 'offsetTop',
category: 'css',
fn: function (){
var self=this;
return self._call_("offset")._basicAt_("top");
return self;},
source: unescape('offsetTop%0A%20%20%20%20%22Get%20the%20current%20coordinates%20of%20the%20first%20element%20in%20the%20set%20of%20matched%20elements%2C%20relative%20to%20the%20document.%22%0A%20%20%20%20%5E%28self%20call%3A%20%27offset%27%29%20basicAt%3A%20%27top%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_scrollLeft',
smalltalk.method({
selector: 'scrollLeft',
category: 'css',
fn: function (){
var self=this;
return self._call_("scrollLeft");
return self;},
source: unescape('scrollLeft%0A%20%20%20%20%22Get%20the%20current%20horizontal%20position%20of%20the%20scroll%20bar%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27scrollLeft%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_scrollTop',
smalltalk.method({
selector: 'scrollTop',
category: 'css',
fn: function (){
var self=this;
return self._call_("scrollTop");
return self;},
source: unescape('scrollTop%0A%20%20%20%20%22Get%20the%20current%20vertical%20position%20of%20the%20scroll%20bar%20for%20the%20first%20element%20in%20the%20set%20of%20matched%20elements.%22%0A%20%20%20%20%5Eself%20call%3A%20%27scrollTop%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_scrollLeft_',
smalltalk.method({
selector: 'scrollLeft:',
category: 'css',
fn: function (anInteger){
var self=this;
self._call_withArgument_("scrollLeft",anInteger);
return self;},
source: unescape('scrollLeft%3A%20anInteger%0A%20%20%20%20self%20call%3A%20%27scrollLeft%27%20withArgument%3A%20anInteger%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_scrollTop_',
smalltalk.method({
selector: 'scrollTop:',
category: 'css',
fn: function (anInteger){
var self=this;
self._call_withArgument_("scrollTop",anInteger);
return self;},
source: unescape('scrollTop%3A%20anInteger%0A%20%20%20%20self%20call%3A%20%27scrollTop%27%20withArgument%3A%20anInteger%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_focus',
smalltalk.method({
selector: 'focus',
category: 'events',
fn: function (){
var self=this;
self._call_("focus");
return self;},
source: unescape('focus%0A%20%20%20%20self%20call%3A%20%27focus%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_show',
smalltalk.method({
selector: 'show',
category: 'events',
fn: function (){
var self=this;
self._call_("show");
return self;},
source: unescape('show%0A%20%20%20%20self%20call%3A%20%27show%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_hide',
smalltalk.method({
selector: 'hide',
category: 'events',
fn: function (){
var self=this;
self._call_("hide");
return self;},
source: unescape('hide%0A%20%20%20%20self%20call%3A%20%27hide%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_remove',
smalltalk.method({
selector: 'remove',
category: 'events',
fn: function (){
var self=this;
self._call_("remove");
return self;},
source: unescape('remove%0A%20%20%20%20self%20call%3A%20%27remove%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_on_do_',
smalltalk.method({
selector: 'on:do:',
category: 'events',
fn: function (anEventString, aBlock){
var self=this;
(function(){self['@jquery'].bind(anEventString, aBlock)})();
return self;},
source: unescape('on%3A%20anEventString%20do%3A%20aBlock%0A%20%20%20%20%22Attach%20aBlock%20for%20anEventString%20on%20the%20element%22%0A%20%20%20%20%7B%27self%5B%27%27@jquery%27%27%5D.bind%28anEventString%2C%20aBlock%29%27%7D%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_removeEvents_',
smalltalk.method({
selector: 'removeEvents:',
category: 'events',
fn: function (aString){
var self=this;
self._call_withArgument_("unbind",aString);
return self;},
source: unescape('removeEvents%3A%20aString%0A%20%20%20%20%22Unbind%20all%20handlers%20attached%20to%20the%20event%20aString%22%0A%20%20%20%20self%20call%3A%20%27unbind%27%20withArgument%3A%20aString%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_append_',
smalltalk.method({
selector: 'append:',
category: 'DOM insertion',
fn: function (anObject){
var self=this;
anObject._appendToJQuery_(self);
return self;},
source: unescape('append%3A%20anObject%0A%20%20%20%20%22Append%20anObject%20at%20the%20end%20of%20the%20element.%22%0A%20%20%20%20anObject%20appendToJQuery%3A%20self%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_appendElement_',
smalltalk.method({
selector: 'appendElement:',
category: 'DOM insertion',
fn: function (anElement){
var self=this;
self._call_withArgument_("append",anElement);
return self;},
source: unescape('appendElement%3A%20anElement%0A%20%20%20%20%22Append%20anElement%20at%20the%20end%20of%20the%20element.%0A%20%20%20%20%20Dont%27t%20call%20this%20method%20directly%2C%20use%20%23append%3A%20instead%22%0A%20%20%20%20self%20call%3A%20%27append%27%20withArgument%3A%20anElement%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_appendToJQuery_',
smalltalk.method({
selector: 'appendToJQuery:',
category: 'DOM insertion',
fn: function (aJQuery){
var self=this;
aJQuery._appendElement_(self['@jquery']);
return self;},
source: unescape('appendToJQuery%3A%20aJQuery%0A%20%20%20%20aJQuery%20appendElement%3A%20jquery%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_contents_',
smalltalk.method({
selector: 'contents:',
category: 'DOM insertion',
fn: function (anObject){
var self=this;
self._empty();
self._append_(anObject);
return self;},
source: unescape('contents%3A%20anObject%0A%20%20%20%20self%20empty.%0A%20%20%20%20self%20append%3A%20anObject%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_empty',
smalltalk.method({
selector: 'empty',
category: 'DOM insertion',
fn: function (){
var self=this;
self._call_("empty");
return self;},
source: unescape('empty%0A%20%20%20%20self%20call%3A%20%27empty%27%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_initializeWithJQueryObject_',
smalltalk.method({
selector: 'initializeWithJQueryObject:',
category: 'initialization',
fn: function (anObject){
var self=this;
self['@jquery']=anObject;
return self;},
source: unescape('initializeWithJQueryObject%3A%20anObject%0A%20%20%20%20jquery%20%3A%3D%20anObject%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_call_',
smalltalk.method({
selector: 'call:',
category: 'private',
fn: function (aString){
var self=this;
return (function(){return self['@jquery'][aString]()})();
return self;},
source: unescape('call%3A%20aString%0A%20%20%20%20%5E%7B%27return%20self%5B%27%27@jquery%27%27%5D%5BaString%5D%28%29%27%7D%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_call_withArgument_',
smalltalk.method({
selector: 'call:withArgument:',
category: 'private',
fn: function (aString, anObject){
var self=this;
return (function(){return self['@jquery'][aString](anObject)})();
return self;},
source: unescape('call%3A%20aString%20withArgument%3A%20anObject%0A%20%20%20%20%5E%7B%27return%20self%5B%27%27@jquery%27%27%5D%5BaString%5D%28anObject%29%27%7D%0A')}),
smalltalk.JQuery);

smalltalk.addMethod(
'_hasClass_',
smalltalk.method({
selector: 'hasClass:',
category: 'testing',
fn: function (aString){
var self=this;
return self._call_withArgument_("hasClass",aString);
return self;},
source: unescape('hasClass%3A%20aString%0A%20%20%20%20%22Determine%20whether%20any%20of%20the%20matched%20elements%20are%20assigned%20the%20given%20class.%22%0A%20%20%20%20%5Eself%20call%3A%20%27hasClass%27%20withArgument%3A%20aString%0A')}),
smalltalk.JQuery);


smalltalk.addMethod(
'_fromString_',
smalltalk.method({
selector: 'fromString:',
category: 'instance creation',
fn: function (aString){
var self=this;
var newJQuery=nil;
(function(){newJQuery = jQuery(String(aString))})();
return self._from_(newJQuery);
return self;},
source: unescape('fromString%3A%20aString%0A%20%20%20%20%7C%20newJQuery%20%7C%0A%20%20%20%20%7B%27newJQuery%20%3D%20jQuery%28String%28aString%29%29%27%7D.%0A%20%20%20%20%5Eself%20from%3A%20newJQuery%0A')}),
smalltalk.JQuery.klass);

smalltalk.addMethod(
'_from_',
smalltalk.method({
selector: 'from:',
category: 'instance creation',
fn: function (anObject){
var self=this;
return (function($rec){$rec._initializeWithJQueryObject_(anObject);return $rec._yourself();})(self._new());
return self;},
source: unescape('from%3A%20anObject%0A%20%20%20%20%5Eself%20new%0A%09initializeWithJQueryObject%3A%20anObject%3B%0A%09yourself%0A')}),
smalltalk.JQuery.klass);



