var requirejs,require,define;(function(global){var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.2.0",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!!(typeof window!=="undefined"&&typeof navigator!=="undefined"&&window.document),isWebWorker=!isBrowser&&typeof importScripts!=="undefined",readyRegExp=isBrowser&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera!=="undefined"&&opera.toString()==="[object Opera]",contexts={},cfg={},globalDefQueue=[],useInteractive=false;function(){}function isFunction(it){return ostring.call(it)==="[object Function]"}function isArray(it){return ostring.call(it)==="[object Array]"}function each(ary,func){if(ary){var i;for(i=0;i<ary.length;i+=1){if(ary[i]&&func(ary[i],i,ary)){break}}}}function eachReverse(ary,func){if(ary){var i;for(i=ary.length-1;i>-1;i-=1){if(ary[i]&&func(ary[i],i,ary)){break}}}}function hasProp(obj,prop){return hasOwn.call(obj,prop)}function getOwn(obj,prop){return hasProp(obj,prop)&&obj[prop]}function eachProp(obj,func){var prop;for(prop in obj){if(hasProp(obj,prop)){if(func(obj[prop],prop)){break}}}}function mixin(target,source,force,deepStringMixin){if(source){eachProp(source,function(value,prop){if(force||!hasProp(target,prop)){if(deepStringMixin&&typeof value==="object"&&value&&!isArray(value)&&!isFunction(value)&&!(value instanceof RegExp)){if(!target[prop]){target[prop]={}}mixin(target[prop],value,force,deepStringMixin)}else{target[prop]=value}}})}return target}function bind(obj,fn){return function(){return fn.apply(obj,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(err){throw err}function getGlobal(value){if(!value){return value}var g=global;each(value.split("."),function(part){g=g[part]});return g}function makeError(id,msg,err,requireModules){var e=new Error(msg+"\nhttp://requirejs.org/docs/errors.html#"+id);e.requireType=id;e.requireModules=requireModules;if(err){e.originalError=err}return e}if(typeof define!=="undefined"){return}if(typeof requirejs!=="undefined"){if(isFunction(requirejs)){return}cfg=requirejs;requirejs=undefined}if(typeof require!=="undefined"&&!isFunction(require)){cfg=require;require=undefined}function newContext(contextName){var inCheckLoaded,Module,context,handlers,checkLoadedTimeoutId,config={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},registry={},enabledRegistry={},undefEvents={},defQueue=[],defined={},urlFetched={},bundlesMap={},requireCounter=1,unnormalizedCounter=1;function(){}function normalize(name,baseName,applyMap){var pkgMain,mapValue,nameParts,i,j,nameSegment,lastIndex,foundMap,foundI,foundStarMap,starI,normalizedBaseParts,baseParts=baseName&&baseName.split("/"),map=config.map,starMap=map&&map["*"];if(name){name=name.split("/");lastIndex=name.length-1;if(config.nodeIdCompat&&jsSuffixRegExp.test(name[lastIndex])){name[lastIndex]=name[lastIndex].replace(jsSuffixRegExp,"")}if(name[0].charAt(0)==="."&&baseParts){normalizedBaseParts=baseParts.slice(0,baseParts.length-1);name=normalizedBaseParts.concat(name)}trimDots(name);name=name.join("/")}if(applyMap&&map&&(baseParts||starMap)){nameParts=name.split("/");outerLoop:for(i=nameParts.length;i>0;i-=1){nameSegment=nameParts.slice(0,i).join("/");if(baseParts){for(j=baseParts.length;j>0;j-=1){mapValue=getOwn(map,baseParts.slice(0,j).join("/"));if(mapValue){mapValue=getOwn(mapValue,nameSegment);if(mapValue){foundMap=mapValue;foundI=i;break outerLoop}}}}if(!foundStarMap&&starMap&&getOwn(starMap,nameSegment)){foundStarMap=getOwn(starMap,nameSegment);starI=i}}if(!foundMap&&foundStarMap){foundMap=foundStarMap;foundI=starI}if(foundMap){nameParts.splice(0,foundI,foundMap);name=nameParts.join("/")}}pkgMain=getOwn(config.pkgs,name);return pkgMain?pkgMain:name}function removeScript(name){if(isBrowser){each(scripts(),function(scriptNode){if(scriptNode.getAttribute("data-requiremodule")===name&&scriptNode.getAttribute("data-requirecontext")===context.contextName){scriptNode.parentNode.removeChild(scriptNode);return true}})}}function hasPathFallback(id){var pathConfig=getOwn(config.paths,id);if(pathConfig&&isArray(pathConfig)&&pathConfig.length>1){pathConfig.shift();context.require.undef(id);context.makeRequire(null,{skipMap:true})([id]);return true}}function splitPrefix(name){var prefix,index=name?name.indexOf("!"):-1;if(index>-1){prefix=name.substring(0,index);name=name.substring(index+1,name.length)}return[prefix,name]}function makeModuleMap(name,parentModuleMap,isNormalized,applyMap){var url,pluginModule,suffix,nameParts,prefix=null,parentName=parentModuleMap?parentModuleMap.name:null,originalName=name,isDefine=true,normalizedName="";if(!name){isDefine=false;name="_@r"+(requireCounter+=1)}nameParts=splitPrefix(name);prefix=nameParts[0];name=nameParts[1];if(prefix){prefix=normalize(prefix,parentName,applyMap);pluginModule=getOwn(defined,prefix)}if(name){if(prefix){if(pluginModule&&pluginModule.normalize){normalizedName=pluginModule.normalize(name,function(name){return normalize(name,parentName,applyMap)})}else{normalizedName=name.indexOf("!")===-1?normalize(name,parentName,applyMap):name}}else{normalizedName=normalize(name,parentName,applyMap);nameParts=splitPrefix(normalizedName);prefix=nameParts[0];normalizedName=nameParts[1];isNormalized=true;url=context.nameToUrl(normalizedName)}}suffix=prefix&&!pluginModule&&!isNormalized?"_unnormalized"+(unnormalizedCounter+=1):"";return{prefix:prefix,name:normalizedName,parentMap:parentModuleMap,unnormalized:!!suffix,url:url,originalName:originalName,isDefine:isDefine,id:(prefix?prefix+"!"+normalizedName:normalizedName)+suffix}}function getModule(depMap){var id=depMap.id,mod=getOwn(registry,id);if(!mod){mod=registry[id]=new context.Module(depMap)}return mod}function on(depMap,name,fn){var id=depMap.id,mod=getOwn(registry,id);if(hasProp(defined,id)&&(!mod||mod.defineEmitComplete)){if(name==="defined"){fn(defined[id])}}else{mod=getModule(depMap);if(mod.error&&name==="error"){fn(mod.error)}else{mod.on(name,fn)}}}function onError(err,errback){var ids=err.requireModules,notified=false;if(errback){errback(err)}else{each(ids,function(id){var mod=getOwn(registry,id);if(mod){mod.error=err;if(mod.events.error){notified=true;mod.emit("error",err)}}});if(!notified){req.onError(err)}}}function(){}handlers={require:function(mod){if(mod.require){return mod.require}else{return mod.require=context.makeRequire(mod.map)}},exports:function(mod){mod.usingExports=true;if(mod.map.isDefine){if(mod.exports){return defined[mod.map.id]=mod.exports}else{return mod.exports=defined[mod.map.id]={}}}},module:function(mod){if(mod.module){return mod.module}else{return mod.module={id:mod.map.id,uri:mod.map.url,config:function(){return getOwn(config.config,mod.map.id)||{}},exports:mod.exports||(mod.exports={})}}}};function cleanRegistry(id){delete registry[id];delete enabledRegistry[id]}function breakCycle(mod,traced,processed){var id=mod.map.id;if(mod.error){mod.emit("error",mod.error)}else{traced[id]=true;each(mod.depMaps,function(depMap,i){var depId=depMap.id,dep=getOwn(registry,depId);if(dep&&!mod.depMatched[i]&&!processed[depId]){if(getOwn(traced,depId)){mod.defineDep(i,defined[depId]);mod.check()}else{breakCycle(dep,traced,processed)}}});processed[id]=true}}function checkLoaded(){var err,usingPathFallback,waitInterval=config.waitSeconds*1e3,expired=waitInterval&&context.startTime+waitInterval<(new Date).getTime(),noLoads=[],reqCalls=[],stillLoading=false,needCycleCheck=true;if(inCheckLoaded){return}inCheckLoaded=true;eachProp(enabledRegistry,function(mod){var map=mod.map,modId=map.id;if(!mod.enabled){return}if(!map.isDefine){reqCalls.push(mod)}if(!mod.error){if(!mod.inited&&expired){if(hasPathFallback(modId)){usingPathFallback=true;stillLoading=true}else{noLoads.push(modId);removeScript(modId)}}else if(!mod.inited&&mod.fetched&&map.isDefine){stillLoading=true;if(!map.prefix){return needCycleCheck=false}}}});if(expired&&noLoads.length){err=makeError("timeout","Load timeout for modules: "+noLoads,null,noLoads);err.contextName=context.contextName;return onError(err)}if(needCycleCheck){each(reqCalls,function(mod){breakCycle(mod,{},{})})}if((!expired||usingPathFallback)&&stillLoading){if((isBrowser||isWebWorker)&&!checkLoadedTimeoutId){checkLoadedTimeoutId=setTimeout(function(){checkLoadedTimeoutId=0;checkLoaded()},50)}}inCheckLoaded=false}Module=function(map){this.events=getOwn(undefEvents,map.id)||{};this.map=map;this.shim=getOwn(config.shim,map.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Module.prototype={init:function(depMaps,factory,errback,options){options=options||{};if(this.inited){return}this.factory=factory;if(errback){this.on("error",errback)}else if(this.events.error){errback=bind(this,function(err){this.emit("error",err)})}this.depMaps=depMaps&&depMaps.slice(0);this.errback=errback;this.inited=true;this.ignore=options.ignore;if(options.enabled||this.enabled){this.enable()}else{this.check()}},defineDep:function(i,depExports){if(!this.depMatched[i]){this.depMatched[i]=true;this.depCount-=1;this.depExports[i]=depExports}},fetch:function(){if(this.fetched){return}this.fetched=true;context.startTime=(new Date).getTime();var map=this.map;if(this.shim){context.makeRequire(this.map,{enableBuildCallback:true})(this.shim.deps||[],bind(this,function(){return map.prefix?this.callPlugin():this.load()}))}else{return map.prefix?this.callPlugin():this.load()}},load:function(){var url=this.map.url;if(!urlFetched[url]){urlFetched[url]=true;context.load(this.map.id,url)}},check:function(){},callPlugin:function(){},enable:function(){},on:function(name,cb){var cbs=this.events[name];if(!cbs){cbs=this.events[name]=[]}cbs.push(cb)},emit:function(name,evt){each(this.events[name],function(cb){cb(evt)});if(name==="error"){delete this.events[name]}}};function callGetModule(args){if(!hasProp(defined,args[0])){getModule(makeModuleMap(args[0],null,true)).init(args[1],args[2])}}function removeListener(node,func,name,ieName){if(node.detachEvent&&!isOpera){if(ieName){node.detachEvent(ieName,func)}}else{node.removeEventListener(name,func,false)}}function getScriptData(evt){var node=evt.currentTarget||evt.srcElement;removeListener(node,context.onScriptLoad,"load","onreadystatechange");removeListener(node,context.onScriptError,"error");return{node:node,id:node&&node.getAttribute("data-requiremodule")}}function(){}context={config:config,contextName:contextName,registry:registry,defined:defined,urlFetched:urlFetched,defQueue:defQueue,defQueueMap:{},Module:Module,makeModuleMap:makeModuleMap,nextTick:req.nextTick,onError:onError,configure:function(){},makeShimExports:function(value){function fn(){var ret;if(value.init){ret=value.init.apply(global,arguments)}return ret||value.exports&&getGlobal(value.exports)}return fn},makeRequire:function(){},enable:function(depMap){var mod=getOwn(registry,depMap.id);if(mod){getModule(depMap).enable()}},completeLoad:function(){},nameToUrl:function(){},load:function(id,url){req.load(context,id,url)},execCb:function(name,callback,args,exports){return callback.apply(exports,args)},onScriptLoad:function(evt){if(evt.type==="load"||readyRegExp.test((evt.currentTarget||evt.srcElement).readyState)){interactiveScript=null;var data=getScriptData(evt);context.completeLoad(data.id)}},onScriptError:function(){}};context.require=context.makeRequire();return context}req=requirejs=function(deps,callback,errback,optional){var context,config,contextName=defContextName;if(!isArray(deps)&&typeof deps!=="string"){config=deps;if(isArray(callback)){deps=callback;callback=errback;errback=optional}else{deps=[]}}if(config&&config.context){contextName=config.context}context=getOwn(contexts,contextName);if(!context){context=contexts[contextName]=req.s.newContext(contextName)}if(config){context.configure(config)}return context.require(deps,callback,errback)};req.config=function(config){return req(config)};req.nextTick=typeof setTimeout!=="undefined"?function(fn){setTimeout(fn,4)}:function(fn){fn()};if(!require){require=req}req.version=version;req.jsExtRegExp=/^\/|:|\?|\.js$/;req.isBrowser=isBrowser;s=req.s={contexts:contexts,newContext:newContext};req({});each(["toUrl","undef","defined","specified"],function(prop){req[prop]=function(){var ctx=contexts[defContextName];return ctx.require[prop].apply(ctx,arguments)}});if(isBrowser){head=s.head=document.getElementsByTagName("head")[0];baseElement=document.getElementsByTagName("base")[0];if(baseElement){head=s.head=baseElement.parentNode}}req.onError=defaultOnError;req.createNode=function(config,moduleName,url){var node=config.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");node.type=config.scriptType||"text/javascript";node.charset="utf-8";node.async=true;return node};req.load=function(){};function getInteractiveScript(){if(interactiveScript&&interactiveScript.readyState==="interactive"){return interactiveScript}eachReverse(scripts(),function(script){if(script.readyState==="interactive"){return interactiveScript=script}});return interactiveScript}if(isBrowser&&!cfg.skipDataMain){eachReverse(scripts(),function(){})}define=function(){}