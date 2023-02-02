(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(81),o=n.n(a),r=n(645),c=n.n(r),i=n(667),d=n.n(i),s=new URL(n(390),n.b),l=c()(o()),u=d()(s);l.push([e.id,"\nhtml { \n    background: url("+u+") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n  .homePage{\n    font-weight: bold;\n    color: rgb(12, 12, 12);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n  }\n  .contactPage {\n    font-weight: bold;\n    color: rgb(5, 59, 17);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .menuPage {\n    font-weight: bold;\n    color: rgb(2, 27, 40);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .menuPage.notSelected {\n    display: none;\n  }\n  .contactPage.notSelected {\n    display: none;\n  }\n  .homePage.notSelected {\n    display: none;\n  }\n  #navBar{\n    \n    display: flex;\n    justify-content: space-evenly;\n  }\n  #navBar>*{\n    flex-grow: 1;\n  }",""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},c=[],i=0;i<e.length;i++){var d=e[i],s=a.base?d[0]+a.base:d[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,a);a.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=n(r[c]);t[i].references--}for(var d=a(e,o),s=0;s<r.length;s++){var l=n(r[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},390:(e,t,n)=>{e.exports=n.p+"images/coffeeBackground.png"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),r=n(569),c=n.n(r),i=n(565),d=n.n(i),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(28),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.getElementById("main"),g=document.createElement("div");g.classList.add("homePage"),g.setAttribute("id","homePage"),h.appendChild(g);const v=document.getElementById("main"),b=document.createElement("div");b.classList.add("contactPage","notSelected"),b.setAttribute("id","contactPage"),v.appendChild(b);const y=document.getElementById("main"),w=document.createElement("div");w.classList.add("menuPage","notSelected"),w.setAttribute("id","menuPage"),y.appendChild(w);const E=document.getElementById("homePage"),x=document.getElementById("menuPage"),C=document.getElementById("contactPage"),S=()=>{E.classList.remove("notSelected"),x.classList.add("notSelected"),C.classList.add("notSelected")},P=()=>{x.classList.remove("notSelected"),C.classList.add("notSelected"),E.classList.add("notSelected")},T=()=>{C.classList.remove("notSelected"),x.classList.add("notSelected"),E.classList.add("notSelected")},L=document.getElementById("navBar");(()=>{const e=document.createElement("button");e.classList.add("homeTab"),e.textContent="Home",L.appendChild(e),e.addEventListener("click",S)})(),(()=>{const e=document.createElement("button");e.classList.add("ContactTab"),e.textContent="Contact",L.appendChild(e),e.addEventListener("click",T)})(),(()=>{const e=document.createElement("button");e.classList.add("menuTab"),e.textContent="Menu",L.appendChild(e),e.addEventListener("click",P)})(),(()=>{const e=document.createElement("h1"),t=document.createTextNode("Here are all our Coffee options");w.appendChild(e),e.append(t)})(),(()=>{const e=document.createElement("p"),t=document.createTextNode("All the items with their pricec will go here");w.appendChild(e),e.append(t)})(),(()=>{const e=document.createElement("h1"),t=document.createTextNode("Contact Page");b.appendChild(e),e.append(t)})(),(()=>{const e=document.createElement("p"),t=document.createTextNode("Contact us my Phone, Email or on out social media to find out where we are going to be");b.appendChild(e),e.append(t)})(),(()=>{const e=document.createElement("p"),t=document.createTextNode("Follow us on blah blah blah and make sure to like us on blah blah blah");b.appendChild(e),e.append(t)})(),(()=>{const e=document.createElement("h1"),t=document.createTextNode("Have some Coffee at Cafe de Olla");g.appendChild(e),e.append(t)})(),(()=>{const e=document.createElement("p"),t=document.createTextNode("Here at Cafe de Olla we make coffee with love and care. Our coffee doesnt need any creamer or sugar because it is perfectly blended with cinnimon and brown sugar. ");g.appendChild(e),e.append(t)})(),(()=>{const e=document.createElement("p"),t=document.createTextNode("Please catch us when we are in Pacoima or in Santa Clarita");g.appendChild(e),e.append(t)})(),function(){const e=document.getElementById("weatherDiv"),t=document.createElement("a");var n,a,o,r,c;t.classList.add("weatherwidget-io"),t.href="https://forecast7.com/en/34d26n118d43/91331/?unit=us",t.setAttribute("data-label_1","Pacoima"),t.setAttribute("data-label_2","California"),t.setAttribute("data-theme","original"),a="script",o="weatherwidget-io-js",c=(n=document).getElementsByTagName(a)[0],n.getElementById(o)||((r=n.createElement(a)).id=o,r.src="https://weatherwidget.io/js/widget.min.js",c.parentNode.insertBefore(r,c)),e.append(t)}()})()})();