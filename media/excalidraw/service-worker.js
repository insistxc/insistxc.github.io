!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r(r.s=0)}([function(e,t){importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),self.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{'revision':'8f8e6f21269e2eab852439f459e2a684','url':'./index.html'},{'revision':null,'url':'./static/css/main.696f6483.chunk.css'},{'revision':null,'url':'./static/js/0.82220050.chunk.js'},{'revision':null,'url':'./static/js/1.feee6c5b.chunk.js'},{'revision':null,'url':'./static/js/41.9e6322da.chunk.js'},{'revision':null,'url':'./static/js/42.76bf3987.chunk.js'},{'revision':null,'url':'./static/js/43.33e4fe2e.chunk.js'},{'revision':null,'url':'./static/js/44.b3c8f79f.chunk.js'},{'revision':null,'url':'./static/js/45.51d0fa98.chunk.js'},{'revision':null,'url':'./static/js/46.2245318f.chunk.js'},{'revision':null,'url':'./static/js/47.2adedbbd.chunk.js'},{'revision':null,'url':'./static/js/48.22e92734.chunk.js'},{'revision':null,'url':'./static/js/49.f92e5d1e.chunk.js'},{'revision':null,'url':'./static/js/50.da72c2dc.chunk.js'},{'revision':null,'url':'./static/js/51.714194fc.chunk.js'},{'revision':null,'url':'./static/js/52.6970cbb0.chunk.js'},{'revision':null,'url':'./static/js/53.45e6556e.chunk.js'},{'revision':null,'url':'./static/js/bug-issue-template.f305361f.chunk.js'},{'revision':null,'url':'./static/js/firebase.deb34ac4.chunk.js'},{'revision':null,'url':'./static/js/i18n-ar-SA-json.e9a3ea98.chunk.js'},{'revision':null,'url':'./static/js/i18n-bg-BG-json.f050ee1a.chunk.js'},{'revision':null,'url':'./static/js/i18n-ca-ES-json.289496c4.chunk.js'},{'revision':null,'url':'./static/js/i18n-de-DE-json.07c95c58.chunk.js'},{'revision':null,'url':'./static/js/i18n-el-GR-json.9d8b7e9e.chunk.js'},{'revision':null,'url':'./static/js/i18n-es-ES-json.6ce1e828.chunk.js'},{'revision':null,'url':'./static/js/i18n-fa-IR-json.a82cec33.chunk.js'},{'revision':null,'url':'./static/js/i18n-fi-FI-json.73e4069f.chunk.js'},{'revision':null,'url':'./static/js/i18n-fr-FR-json.a3c74cc0.chunk.js'},{'revision':null,'url':'./static/js/i18n-he-IL-json.173006fd.chunk.js'},{'revision':null,'url':'./static/js/i18n-hi-IN-json.6e5c74ce.chunk.js'},{'revision':null,'url':'./static/js/i18n-hu-HU-json.2a9baee8.chunk.js'},{'revision':null,'url':'./static/js/i18n-id-ID-json.7be130a5.chunk.js'},{'revision':null,'url':'./static/js/i18n-it-IT-json.d9933e58.chunk.js'},{'revision':null,'url':'./static/js/i18n-ja-JP-json.7c71196c.chunk.js'},{'revision':null,'url':'./static/js/i18n-ko-KR-json.3ffe65e3.chunk.js'},{'revision':null,'url':'./static/js/i18n-my-MM-json.7556bd1f.chunk.js'},{'revision':null,'url':'./static/js/i18n-nb-NO-json.5ce60925.chunk.js'},{'revision':null,'url':'./static/js/i18n-nl-NL-json.188fc761.chunk.js'},{'revision':null,'url':'./static/js/i18n-nn-NO-json.2fa2c425.chunk.js'},{'revision':null,'url':'./static/js/i18n-pa-IN-json.f216d46b.chunk.js'},{'revision':null,'url':'./static/js/i18n-pl-PL-json.ccfab8cd.chunk.js'},{'revision':null,'url':'./static/js/i18n-pt-BR-json.15b81b6a.chunk.js'},{'revision':null,'url':'./static/js/i18n-pt-PT-json.7c2cdaa2.chunk.js'},{'revision':null,'url':'./static/js/i18n-ro-RO-json.683e889d.chunk.js'},{'revision':null,'url':'./static/js/i18n-ru-RU-json.16f710d2.chunk.js'},{'revision':null,'url':'./static/js/i18n-sk-SK-json.ba72ebad.chunk.js'},{'revision':null,'url':'./static/js/i18n-sv-SE-json.6efa34e7.chunk.js'},{'revision':null,'url':'./static/js/i18n-tr-TR-json.c0aabc09.chunk.js'},{'revision':null,'url':'./static/js/i18n-uk-UA-json.3bd2a5c4.chunk.js'},{'revision':null,'url':'./static/js/i18n-zh-CN-json.4b43fdbf.chunk.js'},{'revision':null,'url':'./static/js/i18n-zh-TW-json.8775e6b0.chunk.js'},{'revision':null,'url':'./static/js/image.e98792cc.chunk.js'},{'revision':null,'url':'./static/js/main.ab1da52f.chunk.js'},{'revision':null,'url':'./static/js/pwacompat.0df54f8e.chunk.js'},{'revision':null,'url':'./static/js/runtime-main.d700bcc2.js'},{'revision':null,'url':'./static/js/socketIoClient.54a122c4.chunk.js'}]),workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("./index.html"),{blacklist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}),workbox.routing.registerRoute(new RegExp("/(fonts.css|.+.(ttf|woff2|otf))"),new workbox.strategies.StaleWhileRevalidate({cacheName:"fonts",plugins:[new workbox.expiration.Plugin({maxEntries:10})]}))}]);
//# sourceMappingURL=service-worker.js.map