!function(){if(!(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))){var o=document.currentScript.getAttribute("src"),n=o.substr(0,o.lastIndexOf("/")+1),e=n.substr(0,n.lastIndexOf("/",n.lastIndexOf("/")-1)+1),d=!1;window.evidon_dg||(window.evidon_dg={},window.evidon_dg._dg={}),window.evidon_dg.env="prod",window.evidon_dg.envStr="prod"==window.evidon_dg.env?"":window.evidon_dg.env,window.evidon_dg.loggingEnabled="dev"==window.evidon_dg.envStr,window.evidon_dg.srcRoot=n,window.evidon_dg.domainRoot=e,window.evidon_dg.collector="https://dgcollector.evidon"+window.evidon_dg.envStr+".com/api/v2/csp",window.evidon_dg.vendorHostApi="https://dgvendorhostapi.evidon"+window.evidon_dg.envStr+".com/api/",window.evidon_dg.cspLoadedById=null,window.evidon_dg.getConfigValue=c,window.evidon_dg.getConsentTypeName=function(){},window.evidon_dg.getUcpNoticeId=p,window.evidon_dg.logToConsoleF=function(o,n,e,d){if(window.evidon_dg.loggingEnabled||d){var i=o?window.evidon_dg.productNames[o]:"DG",t="Evidon: "+i+": ";e?console.error(t+n):console.log(t+n)}},window.evidon_dg.logToConsoleO=function(o,n,e,d,i){if(window.evidon_dg.loggingEnabled||i){var t=o?window.evidon_dg.productNames[o]:"DG",s="Evidon: "+t+": ";d?console.error(s+n,e):console.log(s+n,e)}},window.evidon_dg.loadCsp=function(o,n,e,d){if(null==window.evidon_dg.cspLoadedById){if(window.evidon_dg.cspLoadedById=o,window.evidon_dg.collectViolations=d,window.addEventListener("securitypolicyviolation",_),e&&(!window.evidon_dg.sitePolicy||!window.evidon_dg.sitePolicy.essential&&!window.evidon_dg.sitePolicy.whitelist||0==window.evidon_dg.sitePolicy.essential.length&&0==window.evidon_dg.sitePolicy.whitelist.length))return void window.evidon_dg.logToConsoleF(null,window.evidon_dg.productNames[window.evidon_dg.cspLoadedById]+": Attempted To Load CSP With Empty Policy.  Faulting To CSP Disabled.",!0,!0);var i=window.evidon_dg.evidonCriticalDomains.concat(window.evidon_dg.sitePolicy.essential).concat(n),t="";window.evidon_dg.sitePolicy.options&&(window.evidon_dg.sitePolicy.options.allowBlob&&(t+=" blob:"),window.evidon_dg.sitePolicy.options.allowFilesystem&&(t+=" filesystem:"),window.evidon_dg.sitePolicy.options.allowMediastream&&(t+=" mediastream:"));var s=document.querySelector('meta[name="evidon-consentcontrol"]');s||((s=document.createElement("meta")).setAttribute("http-equiv","Content-Security-Policy"),s.setAttribute("name","evidon-"+window.evidon_dg.productNames[window.evidon_dg.cspLoadedById])),s.setAttribute("content","default-src 'self' 'unsafe-inline' 'unsafe-eval'"+t+" data: "+i.join(" ")+";");var w=document.getElementsByTagName("head")[0];w.insertAdjacentElement("afterbegin",s)}},window.evidon_dg.loadedProducts=[],window.evidon_dg.collectViolations=!1,window.evidon_dg.pageLoadId="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(o){var n=16*Math.random()|0,e="x"==o?n:3&n|8;return e.toString(16)}),window.evidon_dg.countryJsLoaded=!1,window.evidon_dg.evidonCriticalDomains=["*.betrad.com","*.evidon.com","*.evidon"+window.evidon_dg.envStr+".com"],window.evidon_dg.productIds={TagControlV2:16,ConsentControl:17,Observe:18,GranularConsentControl:19},window.evidon_dg.productNames={16:"TagControlV2",17:"ConsentControl",18:"Observe",19:"GranularConsentControl"};var i=window.evidon_dg.companyId=document.currentScript.getAttribute("companyId");if(i||(i=window.evidon_dg.companyId=document.currentScript.getAttribute("id")),i){var t,s=null,w=[],r={Country:e+"geo/country.js",ConsentControl:n+"cc.js",GranularConsentControl:n+"gcc.js",Observe:n+"observe.js",TagControlV2:n+"tcv2.js"},l=n+i,a={Company:l+"/companyConfig.json",Site:l+"/"+s+"/siteConfig.json",Policy:l+"/"+s+"/sitePolicy.json",ConsentGeo:l+"/"+s+"/siteConsentGeo.json"};window.evidon_dg.companyConfig||(window.evidon_dg.companyConfig=v(a.Company,!0)),(t=c("siteMap"))&&function(o){var n=window.location.host,e=window.location.pathname;return function o(n,e,d){"/"==d&&(d="");var i,t=e+d;if(n[t]){var w=n[t];return i=w,s=window.evidon_dg.siteId=i,a.Site=l+"/"+s+"/siteConfig.json",a.Policy=l+"/"+s+"/sitePolicy.json",a.ConsentGeo=l+"/"+s+"/siteConsentGeo.json",!0}return!!d&&(d.startsWith("/")&&(d=d.substr(1)),pathArray=d.split("/"),pathArray.pop(),d="/"+(d=pathArray.join("/")),o(n,e,d))}(o,n,e)}(t)&&(window.evidon_dg.siteConfig=v(a.Site,!0)),function(){window.evidon_dg.siteConfig&&(window.evidon_dg.sitePolicy=window.evidon_dg.getConfigValue("policy"));window.evidon_dg.sitePolicy||(window.evidon_dg.sitePolicy=v(a.Policy,!0))}(),window.evidon_dg.loggingEnabled||(window.evidon_dg.loggingEnabled=c("loggingEnabled")||!1),window.evidon_dg.logToConsoleF(null,"Script Environment: "+window.evidon_dg.env.toUpperCase()),window.evidon_dg.logToConsoleO(null,"CompanyId: "+i+" / Company Config: ",window.evidon_dg.companyConfig),s&&window.evidon_dg.logToConsoleO(null,"SiteId: "+s+" / Site Config: ",window.evidon_dg.siteConfig),window.evidon_dg.companyConfig?(s&&!window.evidon_dg.siteConfig&&window.evidon_dg.logToConsoleF(null,"Site Matched ("+s+"), But Site Configuration Can Not Be Loaded.",!0,!0),function(){var o=c("productIds");o.includes(window.evidon_dg.productIds.ConsentControl)&&(g(),window.evidon_dg.siteConsentGeo=v(a.ConsentGeo,!0),window.evidon_dg.siteConsentGeo?window.evidon_dg.logToConsoleO(null,"Loaded siteConsentGeo.json (sync): ",window.evidon_dg.siteConsentGeo):window.evidon_dg.logToConsoleF(null,"Unable To Load siteConsentGeo.json"),window.evidon_dg.logToConsoleF(null,"Loading ConsentControl [pid: 16] (sync)"),v(r.ConsentControl),window.evidon_dg.loadedProducts.push("Consent Control"));o.includes(window.evidon_dg.productIds.GranularConsentControl)&&(g(),window.evidon_dg.logToConsoleF(null,"Loading GranularConsentControl [pid: 19] (sync)"),v(r.GranularConsentControl),window.evidon_dg.loadedProducts.push("Granular Consent Control"));o.includes(window.evidon_dg.productIds.TagControlV2)&&(window.evidon_dg.logToConsoleF(null,"Loading TagControlV2 [pid: 16] (sync)"),v(r.TagControlV2),window.evidon_dg.loadedProducts.push("Tag Control v2"));o.includes(window.evidon_dg.productIds.Observe)&&(window.evidon_dg.logToConsoleF(null,"Loading Observe [pid: 18] (async)"),function(o,n,e){e||(e=!1);var d,t=document.createElement("script"),s=document.getElementsByTagName("script")[0]||document.getElementsByTagName("head")[0];function r(){t.onload=t.onreadystatechange=null,n()}if(u(o))n&&n();else{t.async=!0,t.src=o,t.charset="utf-8",n&&(t.onreadystatechange=function(){d||"loaded"!=this.readyState&&"complete"!=this.readyState||(d=!0,r())},t.onload=r);try{t.setAttribute("companyId",i),s.parentElement.insertBefore(t,s),w.push(o)}catch(o){window.evidon_dg.logToConsoleF(null,"Error Loading Script (Async): "+o,!0)}}}(r.Observe,function(){}),window.evidon_dg.loadedProducts.push("Observe"));window.evidon_dg.logToConsoleF(null,"Product Script Loading Complete: "+window.evidon_dg.loadedProducts.join(", "),!1,!0)}()):window.evidon_dg.logToConsoleF(null,"Company Configuration Can Not Be Loaded (CompanyId: "+i+"). Exiting Process",!0,!0)}else window.evidon_dg.logToConsoleF(null,"Unable To Determine CompanyId. Exiting Process.",!0,!0)}function g(){window.evidon_dg.countryJsLoaded||(window.evidon||(window.evidon={}),v(r.Country),window.evidon_dg.countryJsLoaded=!0,window.evidon_dg.logToConsoleO(null,"Loaded country.js (sync): ",window.evidon.location))}function c(o){var n;return window.evidon_dg.siteConfig&&window.evidon_dg.siteConfig.hasOwnProperty(o)?(n=window.evidon_dg.siteConfig[o]).constructor==Object&&(n.configType="site"):window.evidon_dg.companyConfig&&window.evidon_dg.companyConfig.hasOwnProperty(o)?(n=window.evidon_dg.companyConfig[o]).constructor==Object&&(n.configType="company"):n=null,n}function v(o,n){if(!u(o)){var e=document.getElementsByTagName("script")[0]||document.getElementsByTagName("head")[0],d=o+"?c="+window.evidon_dg.companyId;window.evidon_dg.siteId?d+="&s="+window.evidon_dg.siteId:d+="&org="+window.location.origin;var i=new XMLHttpRequest;if(i.open("GET",d,!1),i.send(""),404!=i.status){var t=i.responseText;if(n)return JSON.parse(t);var s=document.createElement("script");s.type="text/javascript",s.text=t,s.setAttribute("companyId",window.evidon_dg.companyId),e.parentElement.insertBefore(s,e),w.push(o)}return null}}function(){}