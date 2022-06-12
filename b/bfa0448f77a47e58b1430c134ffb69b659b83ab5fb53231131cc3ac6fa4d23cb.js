/*
 *  /MathJax/config/TeX-AMS-MML_HTMLorMML.js
 *  
 *  Copyright (c) 2010-2017 The MathJax Consortium
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Config({delayJaxRegistration: true});

MathJax.Ajax.Preloading(
  "[MathJax]/jax/input/TeX/config.js",
  "[MathJax]/jax/input/MathML/config.js",
  "[MathJax]/jax/output/HTML-CSS/config.js",
  "[MathJax]/jax/output/NativeMML/config.js",
  "[MathJax]/jax/output/PreviewHTML/config.js",
  "[MathJax]/config/MMLorHTML.js",
  "[MathJax]/extensions/tex2jax.js",
  "[MathJax]/extensions/mml2jax.js",
  "[MathJax]/extensions/MathEvents.js",
  "[MathJax]/extensions/MathZoom.js",
  "[MathJax]/extensions/MathMenu.js",
  "[MathJax]/jax/element/mml/jax.js",
  "[MathJax]/extensions/toMathML.js",
  "[MathJax]/extensions/TeX/noErrors.js",
  "[MathJax]/extensions/TeX/noUndefined.js",
  "[MathJax]/jax/input/TeX/jax.js",
  "[MathJax]/extensions/TeX/AMSmath.js",
  "[MathJax]/extensions/TeX/AMSsymbols.js",
  "[MathJax]/jax/input/MathML/jax.js",
  "[MathJax]/jax/output/PreviewHTML/jax.js",
  "[MathJax]/extensions/fast-preview.js",
  "[MathJax]/extensions/AssistiveMML.js",
  "[MathJax]/extensions/a11y/accessibility-menu.js"
);

MathJax.InputJax.TeX=MathJax.InputJax({id:"TeX",version:"2.7.1",directory:MathJax.InputJax.directory+"/TeX",extensionDir:MathJax.InputJax.extensionDir+"/TeX",config:{TagSide:"right",TagIndent:"0.8em",MultLineWidth:"85%",equationNumbers:{autoNumber:"none",formatNumber:function(a){return a},formatTag:function(a){return"("+a+")"},formatID:function(){},formatURL:function(){},useLabelIds:true}},resetEquationNumbers:function(){}});MathJax.InputJax.TeX.Register("math/tex");MathJax.InputJax.TeX.loadComplete("config.js");
MathJax.InputJax.MathML=MathJax.InputJax({id:"MathML",version:"2.7.1",directory:MathJax.InputJax.directory+"/MathML",extensionDir:MathJax.InputJax.extensionDir+"/MathML",entityDir:MathJax.InputJax.directory+"/MathML/entities",config:{useMathMLspacing:false}});MathJax.InputJax.MathML.Register("math/mml");MathJax.InputJax.MathML.loadComplete("config.js");
MathJax.OutputJax["HTML-CSS"]=MathJax.OutputJax({id:"HTML-CSS",version:"2.7.1",directory:MathJax.OutputJax.directory+"/HTML-CSS",extensionDir:MathJax.OutputJax.extensionDir+"/HTML-CSS",autoloadDir:MathJax.OutputJax.directory+"/HTML-CSS/autoload",fontDir:MathJax.OutputJax.directory+"/HTML-CSS/fonts",webfontDir:MathJax.OutputJax.fontDir+"/HTML-CSS",config:{noReflows:true,matchFontHeight:true,scale:100,minScaleAdjust:50,availableFonts:["STIX","TeX"],preferredFont:"TeX",webFont:"TeX",imageFont:"TeX",undefinedFamily:"STIXGeneral,'Arial Unicode MS',serif",mtextFontInherit:false,EqnChunk:(MathJax.Hub.Browser.isMobile?10:50),EqnChunkFactor:1.5,EqnChunkDelay:100,linebreaks:{automatic:false,width:"container"},styles:{".MathJax_Display":{"text-align":"center",margin:"1em 0em"},".MathJax .merror":{"background-color":"#FFFF88",color:"#CC0000",border:"1px solid #CC0000",padding:"1px 3px","font-style":"normal","font-size":"90%"},".MathJax .MJX-monospace":{"font-family":"monospace"},".MathJax .MJX-sans-serif":{"font-family":"sans-serif"},"#MathJax_Tooltip":{"background-color":"InfoBackground",color:"InfoText",border:"1px solid black","box-shadow":"2px 2px 5px #AAAAAA","-webkit-box-shadow":"2px 2px 5px #AAAAAA","-moz-box-shadow":"2px 2px 5px #AAAAAA","-khtml-box-shadow":"2px 2px 5px #AAAAAA",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')",padding:"3px 4px","z-index":401}}}});if(MathJax.Hub.Browser.isMSIE&&document.documentMode>=9){delete MathJax.OutputJax["HTML-CSS"].config.styles["#MathJax_Tooltip"].filter}if(!MathJax.Hub.config.delayJaxRegistration){MathJax.OutputJax["HTML-CSS"].Register("jax/mml")}MathJax.Hub.Register.StartupHook("End Config",[function(){},MathJax.Hub,MathJax.OutputJax["HTML-CSS"]]);MathJax.OutputJax["HTML-CSS"].loadComplete("config.js");
MathJax.OutputJax.NativeMML=MathJax.OutputJax({id:"NativeMML",version:"2.7.1",directory:MathJax.OutputJax.directory+"/NativeMML",extensionDir:MathJax.OutputJax.extensionDir+"/NativeMML",config:{matchFontHeight:true,scale:100,minScaleAdjust:50,styles:{"div.MathJax_MathML":{"text-align":"center",margin:".75em 0px"}}}});if(!MathJax.Hub.config.delayJaxRegistration){MathJax.OutputJax.NativeMML.Register("jax/mml")}MathJax.OutputJax.NativeMML.loadComplete("config.js");
MathJax.OutputJax.PreviewHTML=MathJax.OutputJax({id:"PreviewHTML",version:"2.7.1",directory:MathJax.OutputJax.directory+"/PreviewHTML",extensionDir:MathJax.OutputJax.extensionDir+"/PreviewHTML",noFastPreview:true,config:{scale:100,minScaleAdjust:50,mtextFontInherit:false,linebreaks:{automatic:false,width:"container"}}});if(!MathJax.Hub.config.delayJaxRegistration){MathJax.OutputJax.PreviewHTML.Register("jax/mml")}MathJax.OutputJax.PreviewHTML.loadComplete("config.js");
(function(){})(MathJax.Hub,MathJax.Hub.Browser);MathJax.Ajax.loadComplete("[MathJax]/config/MMLorHTML.js");
MathJax.Extension.tex2jax={version:"2.7.1",config:{inlineMath:[["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]],balanceBraces:true,skipTags:["script","noscript","style","textarea","pre","code","annotation","annotation-xml"],ignoreClass:"tex2jax_ignore",processClass:"tex2jax_process",processEscapes:false,processEnvironments:true,processRefs:true,preview:"TeX"},ignoreTags:{br:(MathJax.Hub.Browser.isMSIE&&document.documentMode<9?"\n":" "),wbr:"","#comment":""},PreProcess:function(){},createPatterns:function(){},patternQuote:function(a){return a.replace(/([\^$(){}+*?\-|\[\]\:\\])/g,"\\$1")},endPattern:function(){},sortLength:function(){},scanElement:function(){},scanText:function(){},startMatch:function(){},endMatch:function(){},prevEndMatch:function(){},switchPattern:function(){},encloseMath:function(){},insertNode:function(){},createPreview:function(){},createMathTag:function(){},filterPreview:function(a){return a}};MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension.tex2jax]);MathJax.Ajax.loadComplete("[MathJax]/extensions/tex2jax.js");
MathJax.Extension.mml2jax={version:"2.7.1",config:{preview:"mathml"},MMLnamespace:"http://www.w3.org/1998/Math/MathML",PreProcess:function(){},PushMathElements:function(){},ProcessMathArray:function(){},ProcessMath:function(){},ProcessMathFlattened:function(){},NodeHTML:function(){},OuterHTML:function(){},quoteHTML:function(){},createPreview:function(){},filterPreview:function(a){return a},InitBrowser:function(){}};MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension.mml2jax],5);MathJax.Ajax.loadComplete("[MathJax]/extensions/mml2jax.js");
(function(){})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.Callback,MathJax.Localization,MathJax.OutputJax,MathJax.InputJax);
(function(){})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.OutputJax["HTML-CSS"],MathJax.OutputJax.NativeMML);
(function(){})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);
MathJax.ElementJax.mml=MathJax.ElementJax({mimeType:"jax/mml"},{id:"mml",version:"2.7.1",directory:MathJax.ElementJax.directory+"/mml",extensionDir:MathJax.ElementJax.extensionDir+"/mml",optableDir:MathJax.ElementJax.directory+"/mml/optable"});MathJax.ElementJax.mml.Augment({Init:function(){}},{INHERIT:"_inherit_",AUTO:"_auto_",SIZE:{INFINITY:"infinity",SMALL:"small",NORMAL:"normal",BIG:"big"},COLOR:{TRANSPARENT:"transparent"},VARIANT:{NORMAL:"normal",BOLD:"bold",ITALIC:"italic",BOLDITALIC:"bold-italic",DOUBLESTRUCK:"double-struck",FRAKTUR:"fraktur",BOLDFRAKTUR:"bold-fraktur",SCRIPT:"script",BOLDSCRIPT:"bold-script",SANSSERIF:"sans-serif",BOLDSANSSERIF:"bold-sans-serif",SANSSERIFITALIC:"sans-serif-italic",SANSSERIFBOLDITALIC:"sans-serif-bold-italic",MONOSPACE:"monospace",INITIAL:"inital",TAILED:"tailed",LOOPED:"looped",STRETCHED:"stretched",CALIGRAPHIC:"-tex-caligraphic",OLDSTYLE:"-tex-oldstyle"},FORM:{PREFIX:"prefix",INFIX:"infix",POSTFIX:"postfix"},LINEBREAK:{AUTO:"auto",NEWLINE:"newline",NOBREAK:"nobreak",GOODBREAK:"goodbreak",BADBREAK:"badbreak"},LINEBREAKSTYLE:{BEFORE:"before",AFTER:"after",DUPLICATE:"duplicate",INFIXLINBREAKSTYLE:"infixlinebreakstyle"},INDENTALIGN:{LEFT:"left",CENTER:"center",RIGHT:"right",AUTO:"auto",ID:"id",INDENTALIGN:"indentalign"},INDENTSHIFT:{INDENTSHIFT:"indentshift"},LINETHICKNESS:{THIN:"thin",MEDIUM:"medium",THICK:"thick"},NOTATION:{LONGDIV:"longdiv",ACTUARIAL:"actuarial",RADICAL:"radical",BOX:"box",ROUNDEDBOX:"roundedbox",CIRCLE:"circle",LEFT:"left",RIGHT:"right",TOP:"top",BOTTOM:"bottom",UPDIAGONALSTRIKE:"updiagonalstrike",DOWNDIAGONALSTRIKE:"downdiagonalstrike",UPDIAGONALARROW:"updiagonalarrow",VERTICALSTRIKE:"verticalstrike",HORIZONTALSTRIKE:"horizontalstrike",PHASORANGLE:"phasorangle",MADRUWB:"madruwb"},ALIGN:{TOP:"top",BOTTOM:"bottom",CENTER:"center",BASELINE:"baseline",AXIS:"axis",LEFT:"left",RIGHT:"right"},LINES:{NONE:"none",SOLID:"solid",DASHED:"dashed"},SIDE:{LEFT:"left",RIGHT:"right",LEFTOVERLAP:"leftoverlap",RIGHTOVERLAP:"rightoverlap"},WIDTH:{AUTO:"auto",FIT:"fit"},ACTIONTYPE:{TOGGLE:"toggle",STATUSLINE:"statusline",TOOLTIP:"tooltip",INPUT:"input"},LENGTH:{VERYVERYTHINMATHSPACE:"veryverythinmathspace",VERYTHINMATHSPACE:"verythinmathspace",THINMATHSPACE:"thinmathspace",MEDIUMMATHSPACE:"mediummathspace",THICKMATHSPACE:"thickmathspace",VERYTHICKMATHSPACE:"verythickmathspace",VERYVERYTHICKMATHSPACE:"veryverythickmathspace",NEGATIVEVERYVERYTHINMATHSPACE:"negativeveryverythinmathspace",NEGATIVEVERYTHINMATHSPACE:"negativeverythinmathspace",NEGATIVETHINMATHSPACE:"negativethinmathspace",NEGATIVEMEDIUMMATHSPACE:"negativemediummathspace",NEGATIVETHICKMATHSPACE:"negativethickmathspace",NEGATIVEVERYTHICKMATHSPACE:"negativeverythickmathspace",NEGATIVEVERYVERYTHICKMATHSPACE:"negativeveryverythickmathspace"},OVERFLOW:{LINBREAK:"linebreak",SCROLL:"scroll",ELIDE:"elide",TRUNCATE:"truncate",SCALE:"scale"},UNIT:{EM:"em",EX:"ex",PX:"px",IN:"in",CM:"cm",MM:"mm",PT:"pt",PC:"pc"},TEXCLASS:{ORD:0,OP:1,BIN:2,REL:3,OPEN:4,CLOSE:5,PUNCT:6,INNER:7,VCENTER:8,NONE:-1},TEXCLASSNAMES:["ORD","OP","BIN","REL","OPEN","CLOSE","PUNCT","INNER","VCENTER"],skipAttributes:{texClass:true,useHeight:true,texprimestyle:true},copyAttributes:{displaystyle:1,scriptlevel:1,open:1,close:1,form:1,actiontype:1,fontfamily:true,fontsize:true,fontweight:true,fontstyle:true,color:true,background:true,id:true,"class":1,href:true,style:true},copyAttributeNames:["displaystyle","scriptlevel","open","close","form","actiontype","fontfamily","fontsize","fontweight","fontstyle","color","background","id","class","href","style"],nocopyAttributes:{fontfamily:true,fontsize:true,fontweight:true,fontstyle:true,color:true,background:true,id:true,"class":true,href:true,style:true,xmlns:true},Error:function(){}});(function(){})(MathJax.ElementJax.mml);MathJax.ElementJax.mml.loadComplete("jax.js");
MathJax.Hub.Register.LoadHook("[MathJax]/jax/element/mml/jax.js",function(){});MathJax.Ajax.loadComplete("[MathJax]/extensions/toMathML.js");
(function(){})(MathJax.Hub,MathJax.HTML);MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noErrors.js");
MathJax.Extension["TeX/noUndefined"]={version:"2.7.1",config:MathJax.Hub.CombineConfig("TeX.noUndefined",{disabled:false,attributes:{mathcolor:"red"}})};MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){});MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noUndefined.js");
(function(){})(MathJax.InputJax.TeX,MathJax.Hub,MathJax.Ajax);
MathJax.Extension["TeX/AMSmath"]={version:"2.7.1",number:0,startNumber:0,IDs:{},eqIDs:{},labels:{},eqlabels:{},refs:[]};MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){});MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSmath.js");
MathJax.Extension["TeX/AMSsymbols"]={version:"2.7.1"};MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){});MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSsymbols.js");
(function(){})(MathJax.InputJax.MathML,MathJax.Hub.Browser);
(function(){})(MathJax.Ajax,MathJax.Hub,MathJax.HTML,MathJax.OutputJax.PreviewHTML);
(function(){})(MathJax.Hub,MathJax.HTML,MathJax.Hub.Browser);MathJax.Ajax.loadComplete("[MathJax]/extensions/fast-preview.js");
(function(){})(MathJax.Ajax,MathJax.Callback,MathJax.Hub,MathJax.HTML);MathJax.Callback.Queue(["Require",MathJax.Ajax,"[MathJax]/extensions/toMathML.js"],["loadComplete",MathJax.Ajax,"[MathJax]/extensions/AssistiveMML.js"],function(){});
!function(){}