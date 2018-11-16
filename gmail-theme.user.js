// ==UserScript==
// @name Gmail 2018 Minimal UI
// @description Change Gmail 2018 new look to minimal view - Google Suite editon
// @description created by David Koltai
// @include https://mail.google.com/mail*
// @version 0.2
// ==/UserScript==

(function() {
'use strict';
function addGlobalStyle(css) {
var head, style;
head = document.getElementsByTagName('head')[0];
if (!head) { return; }
style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = css;
head.appendChild(style);
}
//change back fontface if you want
//addGlobalStyle('* { font-family: sans-serif !important; font-size: 10pt !important; }');
//remove icons from left sidebar
addGlobalStyle(".qj { display:none!important; }");
addGlobalStyle(".bhZ .qj { display:flex!important; }");
//hide left sidebar hovers
addGlobalStyle(".TO.NQ, .n6 .ah9:hover, .n6 .ah9.aiu:hover, .n6 .ah9:focus, .CL.NQ, .CL:hover, .CL:focus { background-color: transparent!important; }");
addGlobalStyle(".TK .TO:active, .n6 .ah9.aiu:active, .CL:active, .TO.nZ, .TO.ol { background-color: transparent!important; }");
addGlobalStyle(".wT>.n3 .byl:first-child .aim:first-child .nZ { background-color: transparent!important; }");
//Gmail logo and hamburger menu
addGlobalStyle(".gb_bc { transform: translateX(-50px); }");
addGlobalStyle(".gb_ic { z-index: 20 !important; background-color: #fff !important; }");
//change compose button
addGlobalStyle(".z0>.L3 { background-color: #D44937 !important; box-shadow: inherit !important; height: 40px !important; color: #fff !important; padding: 0 30px !important; }");
//change compose button part II. - uppercase option
//addGlobalStyle(".z0>.L3 { font-size:0.7rem !important; text-transform:uppercase !important; letter-spacing:1px !important;}");
//change compose button content to "+"
addGlobalStyle(".z0>.L3::before { display:none!important; }");
addGlobalStyle(".bhZ .z0>.L3::before { display:block!important; background-image: none!important; content: '+'!important; position: absolute!important; left: 13px!important; bottom: 5px; height: initial!important; min-width:initial!important; font-size: 22px;}");
addGlobalStyle(".z0 {padding: 0 0 0 20px !important; }");
//minimalize to circle the compose button
addGlobalStyle(".bhZ:not(.bym) .z0>.L3 {font-size: 0!important; width: 40px!important; min-width: 40px!important; padding: 0px!important; }");
//hide google suite logo right top
addGlobalStyle(".gb_Ra { border: 0 !important; width:48px !important; }");
addGlobalStyle(".gb_Sa { display: none !important; }");
//reduce tabulators data
addGlobalStyle(".aPb .J-KU-KO.aE2 .aKx, .aE2 .aKx {top: 11px !important;}");
addGlobalStyle(".aKs {display: none !important;}");
//change selected tabulator marker line
addGlobalStyle(".J-KU-KO.aAy:before { border-top-left-radius: 0!important; border-top-right-radius: 0!important; top: 0; bottom:initial!important; margin: 0!important;");
//header bar
addGlobalStyle(".G-atb {height: 68px!important;}");
//search mail field
addGlobalStyle(".gb_1e {-webkit-border-radius: 35px!important; border-radius: 35px!important;}");
addGlobalStyle(".gb_1e.gb_if {border-radius: 4px!important;}");
//selected email focus colors
addGlobalStyle(".x7 { background: #eef0f3!important; }");
addGlobalStyle(".zA>.PE.PF::before { background: transparent!important; }");
//selected email hover shadow
addGlobalStyle(".zA:hover { webkit-box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 20px 0 rgba(60,64,67,.1), 0 1px 20px 1px rgba(60,64,67,.1) !important; box-shadow: inset 1px 0 0 #dadce0, inset 0px 0 0 #dadce0, 0 1px 20px 0 rgba(60,64,67,.1), 0 1px 20px 1px rgba(60,64,67,.1)!important; }");
})();
