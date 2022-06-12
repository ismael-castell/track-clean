(function(){if(!window.BX){window.BX={}}else if(window.BX.PullClient){return}else if(!window.BX.RestClient){return}var e=window.BX;var t=window.protobuf;var n=19;var o=60;var s=30*60;var i=24*60*60;var r=6e4;var c=10;var a="bx-pull-session";var l=20;var u={WebSocket:"webSocket",LongPolling:"longPolling"};var h={Online:"online",Offline:"offline",Connecting:"connect"};var f={Unknown:0,Client:1,Backend:2};var d={Server:"server",Client:"client",Online:"online",Status:"status",Revision:"revision"};var p={NORMAL_CLOSURE:1e3,SERVER_DIE:1001,CONFIG_REPLACED:3e3,CHANNEL_EXPIRED:3001,SERVER_RESTARTED:3002,CONFIG_EXPIRED:3003,MANUAL:3004};var g={CHANNEL_EXPIRE:"CHANNEL_EXPIRE",CONFIG_EXPIRE:"CONFIG_EXPIRE",SERVER_RESTART:"SERVER_RESTART"};var m={Shared:"shared",Personal:"personal"};var y=t.roots["push-server"]["Response"];var b=t.roots["push-server"]["ResponseBatch"];var v=t.roots["push-server"]["Request"];var k=t.roots["push-server"]["RequestBatch"];var S=t.roots["push-server"]["IncomingMessagesRequest"];var C=t.roots["push-server"]["IncomingMessage"];var E=t.roots["push-server"]["Receiver"];var I=function(){};I.prototype.subscribe=function(){};I.prototype.attachCommandHandler=function(){};I.prototype.emit=function(){};I.prototype.init=function(){};I.prototype.start=function(){};I.prototype.getRestClientOptions=function(){};I.prototype.setLastMessageId=function(e){this.session.mid=e};I.prototype.setPublicIds=function(e){return this.channelManager.setPublicIds(e)};I.prototype.sendMessage=function(){};I.prototype.sendMessageBatch=function(){};I.prototype.encodeMessageBatch=function(){};I.prototype.createMessageReceivers=function(){};I.prototype.restart=function(){};I.prototype.loadConfig=function(){};I.prototype.isConfigActual=function(){};I.prototype.startCheckConfig=function(){};I.prototype.stopCheckConfig=function(){};I.prototype.checkConfig=function(){};I.prototype.setConfig=function(e){for(var t in e){if(e.hasOwnProperty(t)&&this.config.hasOwnProperty(t)){this.config[t]=e[t]}}if(e.publicChannels){this.setPublicIds(x.objectValues(e.publicChannels))}if(this.storage){try{this.storage.set("bx-pull-config",e)}catch(e){if(localStorage&&localStorage.removeItem){localStorage.removeItem("history")}console.error(x.getDateForLog()+" Pull: Could not cache config in local storage. Error: ",e)}}};I.prototype.isWebSocketSupported=function(){};I.prototype.isWebSocketAllowed=function(){};I.prototype.isWebSocketEnabled=function(){if(!this.isWebSocketSupported()){return false}return this.config&&this.config.server&&this.config.server.websocket_enabled===true};I.prototype.isPublishingSupported=function(){};I.prototype.isPublishingEnabled=function(){};I.prototype.isProtobufSupported=function(){};I.prototype.isSharedMode=function(){};I.prototype.disconnect=function(){};I.prototype.stop=function(e,t){this.disconnect(e,t);this.stopCheckConfig()};I.prototype.reconnect=function(){};I.prototype.restoreWebSocketConnection=function(){};I.prototype.scheduleReconnect=function(e){if(!this.enabled)return false;if(!e){if(this.connectionAttempt>3&&this.connectionType===u.WebSocket&&!this.sharedConfig.isLongPollingBlocked()){this.sharedConfig.setWebSocketBlocked(true);this.connectionType=u.LongPolling;this.connectionAttempt=1;e=1}else{e=this.getConnectionAttemptDelay(this.connectionAttempt)}}if(this.reconnectTimeout){clearTimeout(this.reconnectTimeout)}this.logToConsole("Pull: scheduling reconnection in "+e+" seconds; attempt # "+this.connectionAttempt);this.reconnectTimeout=setTimeout(this.connect.bind(this),e*1e3)};I.prototype.scheduleRestoreWebSocketConnection=function(){};I.prototype.connect=function(){};I.prototype.parseResponse=function(){};I.prototype.extractMessages=function(){};I.prototype.extractProtobufMessages=function(){};I.prototype.extractPlainTextMessages=function(){};I.prototype.decodeId=function(){};I.prototype.encodeId=function(){};I.prototype.broadcastMessages=function(){};I.prototype.logToConsole=function(){};I.prototype.logMessage=function(){};I.prototype.onLongPollingOpen=function(){};I.prototype.onWebSocketBlockChanged=function(){};I.prototype.onWebSocketOpen=function(){this.unloading=false;this.starting=false;this.connectionAttempt=0;this.isManualDisconnect=false;this.sendPullStatus(h.Online);this.sharedConfig.setWebSocketBlocked(false);this.sharedConfig.setLongPollingBlocked(true);if(this.connectionType==u.LongPolling){this.connectionType=u.WebSocket;this._connectors.longPolling.disconnect()}if(this.offlineTimeout){clearTimeout(this.offlineTimeout);this.offlineTimeout=null}if(this.restoreWebSocketTimeout){clearTimeout(this.restoreWebSocketTimeout);this.restoreWebSocketTimeout=null}this.logToConsole("Pull: Websocket connection with push-server opened")};I.prototype.onWebSocketDisconnect=function(e){if(this.connectionType===u.WebSocket){if(e.code!=p.CONFIG_EXPIRED&&e.code!=p.CHANNEL_EXPIRED&&e.code!=p.CONFIG_REPLACED){this.sendPullStatus(h.Offline)}else{this.offlineTimeout=setTimeout(function(){this.sendPullStatus(h.Offline)}.bind(this),5e3)}}if(!e){e={}}this.logToConsole("Pull: Websocket connection with push-server closed. Code: "+e.code+", reason: "+e.reason);if(!this.isManualDisconnect){this.scheduleReconnect()}this.sharedConfig.setLongPollingBlocked(true);this.isManualDisconnect=false};I.prototype.onWebSocketError=function(e){this.starting=false;if(this.connectionType===u.WebSocket){this.sendPullStatus(h.Offline)}console.error(x.getDateForLog()+": Pull: WebSocket connection error",e);this.scheduleReconnect()};I.prototype.onLongPollingDisconnect=function(){};I.prototype.onLongPollingError=function(){};I.prototype.isConnected=function(){return this.connector?this.connector.connected:false};I.prototype.onBeforeUnload=function(){this.unloading=true;var e=x.clone(this.session);e.ttl=(new Date).getTime()+l*1e3;if(this.storage){try{this.storage.set(a,JSON.stringify(e),l)}catch(e){console.error(x.getDateForLog()+" Pull: Could not save session info in local storage. Error: ",e)}}this.scheduleReconnect(15)};I.prototype.onOffline=function(){this.disconnect("1000","offline")};I.prototype.onOnline=function(){this.connect()};I.prototype.handleInternalPullEvent=function(){};I.prototype.checkRevision=function(){};I.prototype.showNotification=function(){};I.prototype.getRevision=function(){return this.config&&this.config.api?this.config.api.revision_web:null};I.prototype.getServerVersion=function(){return this.config&&this.config.server?this.config.server.version:0};I.prototype.getServerMode=function(){};I.prototype.getConfig=function(){return this.config};I.prototype.getDebugInfo=function(){};I.prototype.enableLogging=function(){};I.prototype.capturePullEvent=function(){};I.prototype.getConnectionPath=function(){};I.prototype.getPublicationPath=function(){};I.prototype.getConnectionAttemptDelay=function(){};I.prototype.sendPullStatus=function(){};I.prototype.extendWatch=function(){};I.prototype.updateWatch=function(){};I.prototype.clearWatch=function(e){delete this.watchTagsQueue[e]};I.prototype.setPrivateVar=function(){};I.prototype.returnPrivateVar=function(){};I.prototype.expireConfig=function(){};I.prototype.updateChannelID=function(){};I.prototype.tryConnect=function(){};I.prototype.tryConnectDelay=function(){};I.prototype.tryConnectSet=function(){};I.prototype.updateState=function(){};I.prototype.setUpdateStateStepCount=function(){};I.prototype.supportWebSocket=function(){return this.isWebSocketSupported()};I.prototype.isWebSoketConnected=function(){};I.prototype.getPullServerStatus=function(){return this.isConnected()};I.prototype.closeConfirm=function(){if(this.notificationPopup){this.notificationPopup.destroy()}};var P=function(e){e=e||{};this.storage=e.storage||new O;this.ttl=24*60*60;this.lsKeys={websocketBlocked:"bx-pull-websocket-blocked",longPollingBlocked:"bx-pull-longpolling-blocked",loggingEnabled:"bx-pull-logging-enabled"};this.callbacks={onWebSocketBlockChanged:x.isFunction(e.onWebSocketBlockChanged)?e.onWebSocketBlockChanged:function(){}};if(this.storage){window.addEventListener("storage",this.onLocalStorageSet.bind(this))}};P.prototype.onLocalStorageSet=function(){};P.prototype.isWebSocketBlocked=function(){if(!this.storage){return false}return this.storage.get(this.lsKeys.websocketBlocked,0)>x.getTimestamp()};P.prototype.setWebSocketBlocked=function(e){if(!this.storage){return false}try{this.storage.set(this.lsKeys.websocketBlocked,e?x.getTimestamp()+this.ttl:0)}catch(e){console.error(x.getDateForLog()+" Pull: Could not save WS_blocked flag in local storage. Error: ",e)}};P.prototype.isLongPollingBlocked=function(){};P.prototype.setLongPollingBlocked=function(e){if(!this.storage){return false}try{this.storage.set(this.lsKeys.longPollingBlocked,e?x.getTimestamp()+this.ttl:0)}catch(e){console.error(x.getDateForLog()+" Pull: Could not save LP_blocked flag in local storage. Error: ",e)}};P.prototype.isLoggingEnabled=function(){if(!this.storage){return false}return this.storage.get(this.lsKeys.loggingEnabled,0)>x.getTimestamp()};P.prototype.setLoggingEnabled=function(e){if(!this.storage){return false}try{this.storage.set(this.lsKeys.loggingEnabled,e?x.getTimestamp()+this.ttl:0)}catch(e){console.error("LocalStorage error: ",e);return false}};var w=function(){};var T=function(){};var _=function(){};w(_,T);_.prototype.connect=function(){};_.prototype.disconnect=function(){};_.prototype.createSocket=function(){};_.prototype.send=function(){};_.prototype.onSocketOpen=function(){this.connected=true};_.prototype.onSocketClose=function(){};_.prototype.onSocketError=function(e){this.callbacks.onError(e)};_.prototype.onSocketMessage=function(e){this.callbacks.onMessage(e.data)};_.prototype.destroy=function(){};var R=function(){};w(R,T);R.prototype.createXhr=function(){};R.prototype.connect=function(){this.active=true;this.performRequest()};R.prototype.disconnect=function(){};R.prototype.performRequest=function(){};R.prototype.onRequestTimeout=function(){};R.prototype.onXhrReadyStateChange=function(){};R.prototype.send=function(){};R.prototype.onResponse=function(){};var L=function(){};L.prototype.getPublicIds=function(){};L.prototype.setPublicIds=function(){};var O=function(){};O.prototype.set=function(){};O.prototype.get=function(){};O.prototype.remove=function(){};O.prototype.getKey=function(){};O.prototype.compareKey=function(){};var x={browser:{IsChrome:function(){return navigator.userAgent.toLowerCase().indexOf("chrome")!=-1},IsFirefox:function(){},IsIe:function(){}},getTimestamp:function(){return(new Date).getTime()},errorsToString:function(){},isString:function(e){return e===""?true:e?typeof e=="string"||e instanceof String:false},isArray:function(e){return e&&Object.prototype.toString.call(e)=="[object Array]"},isFunction:function(e){return e===null?false:typeof e=="function"||e instanceof Function},isDomNode:function(e){return e&&typeof e=="object"&&"nodeType"in e},isDate:function(e){return e&&Object.prototype.toString.call(e)=="[object Date]"},isPlainObject:function(e){if(!e||typeof e!=="object"||e.nodeType){return false}var t=Object.prototype.hasOwnProperty;try{if(e.constructor&&!t.call(e,"constructor")&&!t.call(e.constructor.prototype,"isPrototypeOf")){return false}}catch(e){return false}var n;for(n in e){}return typeof n==="undefined"||t.call(e,n)},isNotEmptyString:function(){},buildQueryString:function(){},objectValues:function(){},clone:function(){},getDateForLog:function(){},lpad:function(){}