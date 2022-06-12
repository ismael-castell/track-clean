!function(){}(this,function(ut){"use strict";try{(function(){function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(ut),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function(){}function(){}function c(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function(){}var i,o,s,a="FirebaseError",u=(i=Error,n(o=f,s=i),o.prototype=null===s?Object.create(s):(l.prototype=s.prototype,new l),f);function l(){this.constructor=o}function(){}var v=(g.prototype.create=function(){},g);function g(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var b=/\{\$([^}]+)}/g,y=(w.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},w.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},w.prototype.setServiceProps=function(e){return this.serviceProps=e,this},w);function(){}function m(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function(){}function(){}function(){}function(){}function(){}function _(e){this._index=e}function P(e,t){this._cursor=e,this._request=t}function D(e){this._store=e}function(){}function(){}function O(e){this._db=e}function(){}function(){}S(_,"_index",["name","keyPath","multiEntry","unique"]),I(_,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),C(_,"_index",IDBIndex,["openCursor","openKeyCursor"]),S(P,"_cursor",["direction","key","primaryKey","value"]),I(P,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(){}),D.prototype.createIndex=function(){return new _(this._store.createIndex.apply(this._store,arguments))},D.prototype.index=function(){return new _(this._store.index.apply(this._store,arguments))},S(D,"_store",["name","keyPath","indexNames","autoIncrement"]),I(D,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),C(D,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),T(D,"_store",IDBObjectStore,["deleteIndex"]),j.prototype.objectStore=function(){},S(j,"_tx",["objectStoreNames","mode"]),T(j,"_tx",IDBTransaction,["abort"]),M.prototype.createObjectStore=function(){return new D(this._db.createObjectStore.apply(this._db,arguments))},S(M,"_db",["name","version","objectStoreNames"]),T(M,"_db",IDBDatabase,["deleteObjectStore","close"]),O.prototype.transaction=function(){return new j(this._db.transaction.apply(this._db,arguments))},S(O,"_db",["name","version","objectStoreNames"]),T(O,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(){}),[_,D].forEach(function(){});var x="0.4.19",N=1e4,A="w:"+x,q="FIS_v2",R="https://firebaseinstallations.googleapis.com/v1",B=36e5,L=((L={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',L["not-registered"]="Firebase Installation is not registered.",L["installation-not-found"]="Firebase Installation not found.",L["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',L["app-offline"]="Could not process request. Application offline.",L["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",L),V=new v("installations","Installations",L);function(){}function U(e){e=e.projectId;return R+"/projects/"+e+"/installations"}function(){}function(){}function(){}function(){}function(){}function J(t){return new Promise(function(e){setTimeout(e,t)})}var Y=/^[cdef][\w-]{21}$/,Z="";function(){}function(){}var ee=new Map;function(){}function(){}var re=null;function(){}function(){}var se,ae="firebase-installations-database",ue=1,ce="firebase-installations-store",le=null;function fe(){return le=le||E(ae,ue,function(e){0===e.oldVersion&&e.createObjectStore(ce)})}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function Ce(e){return V.create("missing-app-config-values",{valueName:e})}(se=t.default).INTERNAL.registerComponent(new y("installations",function(){},"PUBLIC")),se.registerVersion("@firebase/installations",x);var _e,L=((L={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',L["only-available-in-window"]="This method is available in a Window context.",L["only-available-in-sw"]="This method is available in a service worker context.",L["permission-default"]="The notification permission was not granted and dismissed instead.",L["permission-blocked"]="The notification permission was not granted and blocked instead.",L["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",L["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",L["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",L["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",L["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",L["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",L["token-update-no-token"]="FCM returned no token when updating the user to push.",L["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",L["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",L["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",L["invalid-vapid-key"]="The public VAPID key must be a string.",L["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",L),Pe=new v("messaging","Messaging",L),De="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",je="https://fcmregistrations.googleapis.com/v1",Me="FCM_MSG",Oe="google.c.a.c_id";function(){}(L=_e=_e||{}).PUSH_RECEIVED="push-received",L.NOTIFICATION_CLICKED="notification-clicked";var Ke="fcm_token_details_db",xe=5,Ne="fcm_token_object_Store";function(){}var qe="firebase-messaging-database",Re=1,Be="firebase-messaging-store",Le=null;function(){}function(){}function(){}function We(e){return e.appConfig.appId}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}var tt=(Object.defineProperty(nt.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),nt.prototype.setBackgroundMessageHandler=function(){},nt.prototype.onBackgroundMessage=function(){},nt.prototype.getToken=function(){},nt.prototype.deleteToken=function(){},nt.prototype.requestPermission=function(){throw Pe.create("only-available-in-window")},nt.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw Pe.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw Pe.create("invalid-vapid-key");this.vapidKey=e},nt.prototype.useServiceWorker=function(){throw Pe.create("only-available-in-window")},nt.prototype.onMessage=function(){throw Pe.create("only-available-in-window")},nt.prototype.onTokenRefresh=function(){throw Pe.create("only-available-in-window")},nt.prototype.onPush=function(a){return d(this,void 0,void 0,function(){var i,o,s;return h(this,function(e){switch(e.label){case 0:return(s=function(){}(a))?[4,rt()]:(console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return(i=e.sent(),i.some(function(){}))?[2,function(){}(i,s)]:(o=!1,s.notification?[4,function(){}(((r=p({},(t=s).notification)).data=((n={})[Me]=t,n),r))]:[3,3]);case 2:e.sent(),o=!0,e.label=3;case 3:return!0===o&&!1===this.isOnBackgroundMessageUsed?[2]:(this.bgMessageHandler&&(s=Qe(s),"function"==typeof this.bgMessageHandler?this.bgMessageHandler(s):this.bgMessageHandler.next(s)),[4,et(1e3)]);case 4:return e.sent(),[2]}var t,n,r})})},nt.prototype.onSubChange=function(){},nt.prototype.onNotificationClick=function(){},nt);function(){}function rt(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}var it=(Object.defineProperty(ot.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),ot.prototype.messageEventListener=function(){},ot.prototype.getVapidKey=function(){return this.vapidKey},ot.prototype.getSwReg=function(){return this.swRegistration},ot.prototype.getToken=function(){},ot.prototype.updateVapidKey=function(){},ot.prototype.updateSwReg=function(){},ot.prototype.registerDefaultSw=function(){},ot.prototype.deleteToken=function(){},ot.prototype.requestPermission=function(){},ot.prototype.usePublicVapidKey=function(){},ot.prototype.useServiceWorker=function(){},ot.prototype.onMessage=function(){},ot.prototype.setBackgroundMessageHandler=function(){throw Pe.create("only-available-in-sw")},ot.prototype.onBackgroundMessage=function(){},ot.prototype.onTokenRefresh=function(){return function(){}},ot.prototype.logEvent=function(){},ot);function(){}function st(e){return Pe.create("missing-app-config-values",{valueName:e})}L={isSupported:at};function(){}t.default.INTERNAL.registerComponent(new y("messaging",function(){}