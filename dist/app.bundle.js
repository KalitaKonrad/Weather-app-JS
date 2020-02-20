!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){t.exports=n(5)},function(t,e){function n(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function u(t){n(c,o,i,u,a,"next",t)}function a(t){n(c,o,i,u,a,"throw",t)}u(void 0)}))}}},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var a,s=[],f=!1,p=-1;function l(){f&&a&&(f=!1,a.length?s=a.concat(s):p=-1,s.length&&h())}function h(){if(!f){var t=u(l);f=!0;for(var e=s.length;e;){for(a=s,s=[];++p<e;)a&&a[p].run();p=-1,e=s.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new d(t,e)),1!==s.length||f||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),c=n.n(i),u=(n(6),n(7),"3df9465bacaddb460ad6f26f2a256db2"),a="pl",s="hPa",f="%",p="km/h",l="°C",h={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},d={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},y=document.querySelector("#search"),v={cityName:document.querySelector(".js--city-name"),weatherDesc:document.querySelector(".js--weather-desc"),temp:document.querySelector(".js--current-temp"),tempMin:document.querySelector(".js--temp-min"),tempMax:document.querySelector(".js--temp-max"),pressure:document.querySelector(".js--pressure"),humidity:document.querySelector(".js--humidity"),wind:document.querySelector(".js--wind"),icon:document.querySelector(".js--icon"),dateAndTime:document.querySelector(".date-box")},m=function(t){console.error(t)},g=function(){var t=c()(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=new FormData(e.target),r=n.get("city"),t.next=5,w(r);case 5:return t.next=7,k(r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=c()(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5/weather?units=metric","&q=").concat(e,"&APPID=").concat(u));case 3:return n=t.sent,t.next=6,n.json();case 6:200!==(r=t.sent).cod?m():(a=r.sys.country.toLowerCase(),x(r)),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),x=function(t){v.cityName.innerHTML=t.name,v.weatherDesc.innerHTML=t.weather[0].description,v.temp.innerHTML=Math.round(t.main.temp)+" ".concat(l),v.tempMin.innerHTML=Math.round(t.main.temp_min)+" ".concat(l),v.tempMax.innerHTML=Math.round(t.main.temp_max)+" ".concat(l),v.pressure.innerHTML=t.main.pressure+" ".concat(s),v.humidity.innerHTML=Math.round(t.main.humidity)+" ".concat(f),v.wind.innerHTML=t.wind.speed+" ".concat(p),v.icon.src=b(t.weather[0].icon)},b=function(t){return"".concat("http://openweathermap.org/img/wn/").concat(t,"@2x.png")},k=function(){var t=c()(o.a.mark((function t(e){var n,r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat("https://api.openweathermap.org/data/2.5/forecast?units=metric","&q=").concat(e,",").concat(a,"&APPID=").concat(u),t.next=4,fetch(n);case 4:return r=t.sent,t.next=7,r.json();case 7:200!=(i=t.sent).cod?m():j(i),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),j=function(t,e){var n=document.querySelector(".next-days"),r=t.list,o=Math.floor(r.length/5)-1;n.innerHTML="";for(var i=new Date,c=0;c<5;c++)i.setDate(i.getDate()+1),n.innerHTML+=T(r[(c+1)*o],h[i.getDay()],i.getDay()+1,d[i.getMonth()])},T=function(t,e,n,r){return'\n      <div class="sample-day">\n        <div class="dow-and-weather-pic">\n          <div class="hl-text">'.concat(e,"</div>\n          <div>").concat(n," ").concat(r,'</div>\n          <img src="').concat(b(t.weather[0].icon),'" width="96px" height="96px"">\n          </div>\n          <div class="min-max-temp">\n            <p class="temp">temp. min ').concat(Math.round(t.main.temp_min)+" ".concat(l),'</p>\n            <p class="temp">temp. max ').concat(Math.round(t.main.temp_max)+" ".concat(l),"</p>\n          </div>\n        </div>\n      </div>\n  ")},_=function(){setInterval((function(){var t=new Date,e=t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear(),n=t.getHours()<10?"0"+t.getHours():t.getHours();n+=":",n+=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();var r=h[t.getDay()]+", "+e+"<br>"+n;v.dateAndTime.innerHTML=r}),1e3)};y.addEventListener("submit",g),_()},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),c=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=w(c,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var f=a(t,e,n);if("normal"===f.type){if(r=n.done?"completed":"suspendedYield",f.arg===s)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(r="completed",n.method="throw",n.arg=f.arg)}}}(t,n,c),i}function a(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function p(){}function l(){}var h={};h[o]=function(){return this};var d=Object.getPrototypeOf,y=d&&d(d(j([])));y&&y!==e&&n.call(y,o)&&(h=y);var v=l.prototype=f.prototype=Object.create(h);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t){var e;this._invoke=function(r,o){function i(){return new Promise((function(e,i){!function e(r,o,i,c){var u=a(t[r],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):Promise.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}(r,o,e,i)}))}return e=e?e.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=a(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=v.constructor=l,l.constructor=p,l[c]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},m(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o){var i=new g(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},m(v),v[c]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),a=n.call(i,"finallyLoc");if(u&&a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){},function(t,e,n){(function(e,n){
/*!
 *
 * Copyright 2009-2017 Kris Kowal under the terms of the MIT
 * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
!function(e){"use strict";"function"==typeof bootstrap?bootstrap("promise",e):t.exports=e()}((function(){"use strict";var t=!1;try{throw new Error}catch(e){t=!!e.stack}var r,o=j(),i=function(){},c=function(){var t={task:void 0,next:null},r=t,o=!1,i=void 0,u=!1,a=[];function s(){for(var e,n;t.next;)e=(t=t.next).task,t.task=void 0,(n=t.domain)&&(t.domain=void 0,n.enter()),f(e,n);for(;a.length;)f(e=a.pop());o=!1}function f(t,e){try{t()}catch(t){if(u)throw e&&e.exit(),setTimeout(s,0),e&&e.enter(),t;setTimeout((function(){throw t}),0)}e&&e.exit()}if(c=function(t){r=r.next={task:t,domain:u&&e.domain,next:null},o||(o=!0,i())},"object"==typeof e&&"[object process]"===e.toString()&&e.nextTick)u=!0,i=function(){e.nextTick(s)};else if("function"==typeof n)i="undefined"!=typeof window?n.bind(window,s):function(){n(s)};else if("undefined"!=typeof MessageChannel){var p=new MessageChannel;p.port1.onmessage=function(){i=l,p.port1.onmessage=s,s()};var l=function(){p.port2.postMessage(0)};i=function(){setTimeout(s,0),l()}}else i=function(){setTimeout(s,0)};return c.runAfter=function(t){a.push(t),o||(o=!0,i())},c}(),u=Function.call;function a(t){return function(){return u.apply(t,arguments)}}var s,f=a(Array.prototype.slice),p=a(Array.prototype.reduce||function(t,e){var n=0,r=this.length;if(1===arguments.length)for(;;){if(n in this){e=this[n++];break}if(++n>=r)throw new TypeError}for(;n<r;n++)n in this&&(e=t(e,this[n],n));return e}),l=a(Array.prototype.indexOf||function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return e;return-1}),h=a(Array.prototype.map||function(t,e){var n=this,r=[];return p(n,(function(o,i,c){r.push(t.call(e,i,c,n))}),void 0),r}),d=Object.create||function(t){function e(){}return e.prototype=t,new e},y=Object.defineProperty||function(t,e,n){return t[e]=n.value,t},v=a(Object.prototype.hasOwnProperty),m=Object.keys||function(t){var e=[];for(var n in t)v(t,n)&&e.push(n);return e},g=a(Object.prototype.toString);function w(t){return"[object StopIteration]"===g(t)||t instanceof s}s="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t};function x(e,n){if(t&&n.stack&&"object"==typeof e&&null!==e&&e.stack){for(var r=[],o=n;o;o=o.source)o.stack&&(!e.__minimumStackCounter__||e.__minimumStackCounter__>o.stackCounter)&&(y(e,"__minimumStackCounter__",{value:o.stackCounter,configurable:!0}),r.unshift(o.stack));r.unshift(e.stack);var i=function(t){for(var e=t.split("\n"),n=[],r=0;r<e.length;++r){var o=e[r];!k(o)&&(-1===(i=o).indexOf("(module.js:")&&-1===i.indexOf("(node.js:"))&&o&&n.push(o)}var i;return n.join("\n")}(r.join("\nFrom previous event:\n"));y(e,"stack",{value:i,configurable:!0})}}function b(t){var e=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(e)return[e[1],Number(e[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(n)return[n[1],Number(n[2])];var r=/.*@(.+):(\d+)$/.exec(t);return r?[r[1],Number(r[2])]:void 0}function k(t){var e=b(t);if(!e)return!1;var n=e[0],i=e[1];return n===r&&i>=o&&i<=W}function j(){if(t)try{throw new Error}catch(t){var e=t.stack.split("\n"),n=b(e[0].indexOf("@")>0?e[1]:e[2]);if(!n)return;return r=n[0],n[1]}}function T(t){return t instanceof M?t:R(t)?function(t){var e=E();return T.nextTick((function(){try{t.then(e.resolve,e.reject,e.notify)}catch(t){e.reject(t)}})),e.promise}(t):U(t)}T.resolve=T,T.nextTick=c,T.longStackSupport=!1;var _=1;function E(){var e,n=[],r=[],o=d(E.prototype),i=d(M.prototype);if(i.promiseDispatch=function(t,o,i){var c=f(arguments);n?(n.push(c),"when"===o&&i[1]&&r.push(i[1])):T.nextTick((function(){e.promiseDispatch.apply(e,c)}))},i.valueOf=function(){if(n)return i;var t=P(e);return I(t)&&(e=t),t},i.inspect=function(){return e?e.inspect():{state:"pending"}},T.longStackSupport&&t)try{throw new Error}catch(t){i.stack=t.stack.substring(t.stack.indexOf("\n")+1),i.stackCounter=_++}function c(o){e=o,T.longStackSupport&&t&&(i.source=o),p(n,(function(t,e){T.nextTick((function(){o.promiseDispatch.apply(o,e)}))}),void 0),n=void 0,r=void 0}return o.promise=i,o.resolve=function(t){e||c(T(t))},o.fulfill=function(t){e||c(U(t))},o.reject=function(t){e||c(Q(t))},o.notify=function(t){e||p(r,(function(e,n){T.nextTick((function(){n(t)}))}),void 0)},o}function L(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var e=E();try{t(e.resolve,e.reject,e.notify)}catch(t){e.reject(t)}return e.promise}function S(t){return L((function(e,n){for(var r=0,o=t.length;r<o;r++)T(t[r]).then(e,n)}))}function M(t,e,n){void 0===e&&(e=function(t){return Q(new Error("Promise does not support operation: "+t))}),void 0===n&&(n=function(){return{state:"unknown"}});var r=d(M.prototype);if(r.promiseDispatch=function(n,o,i){var c;try{c=t[o]?t[o].apply(r,i):e.call(r,o,i)}catch(t){c=Q(t)}n&&n(c)},r.inspect=n,n){var o=n();"rejected"===o.state&&(r.exception=o.reason),r.valueOf=function(){var t=n();return"pending"===t.state||"rejected"===t.state?r:t.value}}return r}function O(t,e,n,r){return T(t).then(e,n,r)}function P(t){if(I(t)){var e=t.inspect();if("fulfilled"===e.state)return e.value}return t}function I(t){return t instanceof M}function R(t){return(e=t)===Object(e)&&"function"==typeof t.then;var e}"object"==typeof e&&e&&e.env&&e.env.Q_DEBUG&&(T.longStackSupport=!0),T.defer=E,E.prototype.makeNodeResolver=function(){var t=this;return function(e,n){e?t.reject(e):arguments.length>2?t.resolve(f(arguments,1)):t.resolve(n)}},T.Promise=L,T.promise=L,L.race=S,L.all=J,L.reject=Q,L.resolve=T,T.passByCopy=function(t){return t},M.prototype.passByCopy=function(){return this},T.join=function(t,e){return T(t).join(e)},M.prototype.join=function(t){return T([this,t]).spread((function(t,e){if(t===e)return t;throw new Error("Q can't join: not the same: "+t+" "+e)}))},T.race=S,M.prototype.race=function(){return this.then(T.race)},T.makePromise=M,M.prototype.toString=function(){return"[object Promise]"},M.prototype.then=function(t,e,n){var r=this,o=E(),i=!1;return T.nextTick((function(){r.promiseDispatch((function(e){i||(i=!0,o.resolve(function(e){try{return"function"==typeof t?t(e):e}catch(t){return Q(t)}}(e)))}),"when",[function(t){i||(i=!0,o.resolve(function(t){if("function"==typeof e){x(t,r);try{return e(t)}catch(t){return Q(t)}}return Q(t)}(t)))}])})),r.promiseDispatch(void 0,"when",[void 0,function(t){var e,r=!1;try{e=function(t){return"function"==typeof n?n(t):t}(t)}catch(t){if(r=!0,!T.onerror)throw t;T.onerror(t)}r||o.notify(e)}]),o.promise},T.tap=function(t,e){return T(t).tap(e)},M.prototype.tap=function(t){return t=T(t),this.then((function(e){return t.fcall(e).thenResolve(e)}))},T.when=O,M.prototype.thenResolve=function(t){return this.then((function(){return t}))},T.thenResolve=function(t,e){return T(t).thenResolve(e)},M.prototype.thenReject=function(t){return this.then((function(){throw t}))},T.thenReject=function(t,e){return T(t).thenReject(e)},T.nearer=P,T.isPromise=I,T.isPromiseAlike=R,T.isPending=function(t){return I(t)&&"pending"===t.inspect().state},M.prototype.isPending=function(){return"pending"===this.inspect().state},T.isFulfilled=function(t){return!I(t)||"fulfilled"===t.inspect().state},M.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},T.isRejected=function(t){return I(t)&&"rejected"===t.inspect().state},M.prototype.isRejected=function(){return"rejected"===this.inspect().state};var D,N,A,F=[],C=[],H=[],q=!0;function G(){F.length=0,C.length=0,q||(q=!0)}function Q(t){var n=M({when:function(n){return n&&function(t){if(q){var n=l(C,t);-1!==n&&("object"==typeof e&&"function"==typeof e.emit&&T.nextTick.runAfter((function(){var r=l(H,t);-1!==r&&(e.emit("rejectionHandled",F[n],t),H.splice(r,1))})),C.splice(n,1),F.splice(n,1))}}(this),n?n(t):this}},(function(){return this}),(function(){return{state:"rejected",reason:t}}));return function(t,n){q&&("object"==typeof e&&"function"==typeof e.emit&&T.nextTick.runAfter((function(){-1!==l(C,t)&&(e.emit("unhandledRejection",n,t),H.push(t))})),C.push(t),n&&void 0!==n.stack?F.push(n.stack):F.push("(no stack) "+n))}(n,t),n}function U(t){return M({when:function(){return t},get:function(e){return t[e]},set:function(e,n){t[e]=n},delete:function(e){delete t[e]},post:function(e,n){return null==e?t.apply(void 0,n):t[e].apply(t,n)},apply:function(e,n){return t.apply(e,n)},keys:function(){return m(t)}},void 0,(function(){return{state:"fulfilled",value:t}}))}function $(t,e,n){return T(t).spread(e,n)}function B(t,e,n){return T(t).dispatch(e,n)}function J(t){return O(t,(function(t){var e=0,n=E();return p(t,(function(r,o,i){var c;I(o)&&"fulfilled"===(c=o.inspect()).state?t[i]=c.value:(++e,O(o,(function(r){t[i]=r,0==--e&&n.resolve(t)}),n.reject,(function(t){n.notify({index:i,value:t})})))}),void 0),0===e&&n.resolve(t),n.promise}))}function Y(t){if(0===t.length)return T.resolve();var e=T.defer(),n=0;return p(t,(function(r,o,i){var c=t[i];n++,O(c,(function(t){e.resolve(t)}),(function(t){if(0===--n){var r=t||new Error(""+t);r.message="Q can't get fulfillment value from any promise, all promises were rejected. Last error message: "+r.message,e.reject(r)}}),(function(t){e.notify({index:i,value:t})}))}),void 0),e.promise}function V(t){return O(t,(function(t){return t=h(t,T),O(J(h(t,(function(t){return O(t,i,i)}))),(function(){return t}))}))}T.resetUnhandledRejections=G,T.getUnhandledReasons=function(){return F.slice()},T.stopUnhandledRejectionTracking=function(){G(),q=!1},G(),T.reject=Q,T.fulfill=U,T.master=function(t){return M({isDef:function(){}},(function(e,n){return B(t,e,n)}),(function(){return T(t).inspect()}))},T.spread=$,M.prototype.spread=function(t,e){return this.all().then((function(e){return t.apply(void 0,e)}),e)},T.async=function(t){return function(){function e(t,e){var i;if("undefined"==typeof StopIteration){try{i=n[t](e)}catch(t){return Q(t)}return i.done?T(i.value):O(i.value,r,o)}try{i=n[t](e)}catch(t){return w(t)?T(t.value):Q(t)}return O(i,r,o)}var n=t.apply(this,arguments),r=e.bind(e,"next"),o=e.bind(e,"throw");return r()}},T.spawn=function(t){T.done(T.async(t)())},T.return=function(t){throw new s(t)},T.promised=function(t){return function(){return $([this,J(arguments)],(function(e,n){return t.apply(e,n)}))}},T.dispatch=B,M.prototype.dispatch=function(t,e){var n=this,r=E();return T.nextTick((function(){n.promiseDispatch(r.resolve,t,e)})),r.promise},T.get=function(t,e){return T(t).dispatch("get",[e])},M.prototype.get=function(t){return this.dispatch("get",[t])},T.set=function(t,e,n){return T(t).dispatch("set",[e,n])},M.prototype.set=function(t,e){return this.dispatch("set",[t,e])},T.del=T.delete=function(t,e){return T(t).dispatch("delete",[e])},M.prototype.del=M.prototype.delete=function(t){return this.dispatch("delete",[t])},T.mapply=T.post=function(t,e,n){return T(t).dispatch("post",[e,n])},M.prototype.mapply=M.prototype.post=function(t,e){return this.dispatch("post",[t,e])},T.send=T.mcall=T.invoke=function(t,e){return T(t).dispatch("post",[e,f(arguments,2)])},M.prototype.send=M.prototype.mcall=M.prototype.invoke=function(t){return this.dispatch("post",[t,f(arguments,1)])},T.fapply=function(t,e){return T(t).dispatch("apply",[void 0,e])},M.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},T.try=T.fcall=function(t){return T(t).dispatch("apply",[void 0,f(arguments,1)])},M.prototype.fcall=function(){return this.dispatch("apply",[void 0,f(arguments)])},T.fbind=function(t){var e=T(t),n=f(arguments,1);return function(){return e.dispatch("apply",[this,n.concat(f(arguments))])}},M.prototype.fbind=function(){var t=this,e=f(arguments);return function(){return t.dispatch("apply",[this,e.concat(f(arguments))])}},T.keys=function(t){return T(t).dispatch("keys",[])},M.prototype.keys=function(){return this.dispatch("keys",[])},T.all=J,M.prototype.all=function(){return J(this)},T.any=Y,M.prototype.any=function(){return Y(this)},T.allResolved=(D=V,N="allResolved",A="allSettled",function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(N+" is deprecated, use "+A+" instead.",new Error("").stack),D.apply(D,arguments)}),M.prototype.allResolved=function(){return V(this)},T.allSettled=function(t){return T(t).allSettled()},M.prototype.allSettled=function(){return this.then((function(t){return J(h(t,(function(t){function e(){return t.inspect()}return(t=T(t)).then(e,e)})))}))},T.fail=T.catch=function(t,e){return T(t).then(void 0,e)},M.prototype.fail=M.prototype.catch=function(t){return this.then(void 0,t)},T.progress=function(t,e){return T(t).then(void 0,void 0,e)},M.prototype.progress=function(t){return this.then(void 0,void 0,t)},T.fin=T.finally=function(t,e){return T(t).finally(e)},M.prototype.fin=M.prototype.finally=function(t){if(!t||"function"!=typeof t.apply)throw new Error("Q can't apply finally callback");return t=T(t),this.then((function(e){return t.fcall().then((function(){return e}))}),(function(e){return t.fcall().then((function(){throw e}))}))},T.done=function(t,e,n,r){return T(t).done(e,n,r)},M.prototype.done=function(t,n,r){var o=function(t){T.nextTick((function(){if(x(t,i),!T.onerror)throw t;T.onerror(t)}))},i=t||n||r?this.then(t,n,r):this;"object"==typeof e&&e&&e.domain&&(o=e.domain.bind(o)),i.then(void 0,o)},T.timeout=function(t,e,n){return T(t).timeout(e,n)},M.prototype.timeout=function(t,e){var n=E(),r=setTimeout((function(){e&&"string"!=typeof e||((e=new Error(e||"Timed out after "+t+" ms")).code="ETIMEDOUT"),n.reject(e)}),t);return this.then((function(t){clearTimeout(r),n.resolve(t)}),(function(t){clearTimeout(r),n.reject(t)}),n.notify),n.promise},T.delay=function(t,e){return void 0===e&&(e=t,t=void 0),T(t).delay(e)},M.prototype.delay=function(t){return this.then((function(e){var n=E();return setTimeout((function(){n.resolve(e)}),t),n.promise}))},T.nfapply=function(t,e){return T(t).nfapply(e)},M.prototype.nfapply=function(t){var e=E(),n=f(t);return n.push(e.makeNodeResolver()),this.fapply(n).fail(e.reject),e.promise},T.nfcall=function(t){var e=f(arguments,1);return T(t).nfapply(e)},M.prototype.nfcall=function(){var t=f(arguments),e=E();return t.push(e.makeNodeResolver()),this.fapply(t).fail(e.reject),e.promise},T.nfbind=T.denodeify=function(t){if(void 0===t)throw new Error("Q can't wrap an undefined function");var e=f(arguments,1);return function(){var n=e.concat(f(arguments)),r=E();return n.push(r.makeNodeResolver()),T(t).fapply(n).fail(r.reject),r.promise}},M.prototype.nfbind=M.prototype.denodeify=function(){var t=f(arguments);return t.unshift(this),T.denodeify.apply(void 0,t)},T.nbind=function(t,e){var n=f(arguments,2);return function(){var r=n.concat(f(arguments)),o=E();function i(){return t.apply(e,arguments)}return r.push(o.makeNodeResolver()),T(i).fapply(r).fail(o.reject),o.promise}},M.prototype.nbind=function(){var t=f(arguments,0);return t.unshift(this),T.nbind.apply(void 0,t)},T.nmapply=T.npost=function(t,e,n){return T(t).npost(e,n)},M.prototype.nmapply=M.prototype.npost=function(t,e){var n=f(e||[]),r=E();return n.push(r.makeNodeResolver()),this.dispatch("post",[t,n]).fail(r.reject),r.promise},T.nsend=T.nmcall=T.ninvoke=function(t,e){var n=f(arguments,2),r=E();return n.push(r.makeNodeResolver()),T(t).dispatch("post",[e,n]).fail(r.reject),r.promise},M.prototype.nsend=M.prototype.nmcall=M.prototype.ninvoke=function(t){var e=f(arguments,1),n=E();return e.push(n.makeNodeResolver()),this.dispatch("post",[t,e]).fail(n.reject),n.promise},T.nodeify=function(t,e){return T(t).nodeify(e)},M.prototype.nodeify=function(t){if(!t)return this;this.then((function(e){T.nextTick((function(){t(null,e)}))}),(function(e){T.nextTick((function(){t(e)}))}))},T.noConflict=function(){throw new Error("Q.noConflict only works when Q is used as a global")};var W=j();return T}))}).call(this,n(2),n(8).setImmediate)},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(9),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(3))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,o,i,c,u,a=1,s={},f=!1,p=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t);l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick((function(){d(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){d(t.data)},r=function(t){i.port2.postMessage(t)}):p&&"onreadystatechange"in p.createElement("script")?(o=p.documentElement,r=function(t){var e=p.createElement("script");e.onreadystatechange=function(){d(t),e.onreadystatechange=null,o.removeChild(e),e=null},o.appendChild(e)}):r=function(t){setTimeout(d,0,t)}:(c="setImmediate$"+Math.random()+"$",u=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(c)&&d(+e.data.slice(c.length))},t.addEventListener?t.addEventListener("message",u,!1):t.attachEvent("onmessage",u),r=function(e){t.postMessage(c+e,"*")}),l.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return s[a]=o,r(a),a++},l.clearImmediate=h}function h(t){delete s[t]}function d(t){if(f)setTimeout(d,0,t);else{var e=s[t];if(e){f=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{h(t),f=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(3),n(2))}]);