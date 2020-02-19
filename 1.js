(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,t,n){"use strict";n.r(t),n.d(t,"run",(function(){return h}));var r=n(2),o=n(3);const i=r.b.new(),u=i.width(),c=i.height(),f=document.getElementById("game-of-life-canvas");f.height=11*c+1,f.width=11*u+1;const s=f.getContext("2d"),l=()=>{i.tick(),a(),y(),requestAnimationFrame(l)},a=()=>{s.beginPath(),s.strokeStyle="#EEEEEE";for(let e=0;e<=u;e++)s.moveTo(11*e+1,0),s.lineTo(11*e+1,11*c+1);for(let e=0;e<=c;e++)s.moveTo(0,11*e+1),s.lineTo(11*u+1,11*e+1);s.stroke()},p=(e,t)=>e*u+t,y=()=>{const e=i.cells(),t=new Uint8Array(o.c.buffer,e,u*c);s.beginPath();for(let e=0;e<c;e++)for(let n=0;n<u;n++){const o=p(e,n);s.fillStyle=t[o]===r.a.Dead?"#FFFFFF":"#7bc96f",s.fillRect(11*n+1,11*e+1,10,10)}s.stroke()},h=l},function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return a}));var r=n(3);let o=new("undefined"==typeof TextDecoder?n(4).TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();let i=null;function u(e,t){return o.decode((null!==i&&i.buffer===r.c.buffer||(i=new Uint8Array(r.c.buffer)),i).subarray(e,e+t))}let c=null;function f(){return null!==c&&c.buffer===r.c.buffer||(c=new Int32Array(r.c.buffer)),c}const s=Object.freeze({Dead:0,Alive:1});class l{static __wrap(e){const t=Object.create(l.prototype);return t.ptr=e,t}free(){const e=this.ptr;this.ptr=0,r.a(e)}tick(){r.h(this.ptr)}width(){return r.i(this.ptr)>>>0}height(){return r.e(this.ptr)>>>0}cells(){return r.d(this.ptr)}static new(){var e=r.f();return l.__wrap(e)}render(){try{r.g(8,this.ptr);var e=f()[2],t=f()[3];return u(e,t)}finally{r.b(e,t)}}}const a=function(e,t){throw new Error(u(e,t))}},function(e,t,n){"use strict";var r=n.w[e.i];e.exports=r;n(2);r.j()},function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}})),f=r[n];n<i;f=r[++n])g(f)||!w(f)?u+=" "+f:u+=" "+c(f);return u},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,u={};function c(e,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=f),l(r,e,r.depth)}function f(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function s(e,t){return e}function l(e,n,r){if(e.customInspect&&n&&T(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=l(e,o,r)),o}var i=function(e,t){if(m(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(d(t))return e.stylize(""+t,"number");if(h(t))return e.stylize(""+t,"boolean");if(g(t))return e.stylize("null","null")}(e,n);if(i)return i;var u=Object.keys(n),c=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),j(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return a(n);if(0===u.length){if(T(n)){var f=n.name?": "+n.name:"";return e.stylize("[Function"+f+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return e.stylize(Date.prototype.toString.call(n),"date");if(j(n))return a(n)}var s,w="",E=!1,x=["{","}"];(y(n)&&(E=!0,x=["[","]"]),T(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),O(n)&&(w=" "+Date.prototype.toUTCString.call(n)),j(n)&&(w=" "+a(n)),0!==u.length||E&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),s=E?function(e,t,n,r,o){for(var i=[],u=0,c=t.length;u<c;++u)D(t,String(u))?i.push(p(e,t,n,r,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))})),i}(e,n,r,c,u):u.map((function(t){return p(e,n,r,c,t,E)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(s,w,x)):x[0]+w+x[1]}function a(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,i){var u,c,f;if((f=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=f.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):f.set&&(c=e.stylize("[Setter]","special")),D(r,o)||(u="["+o+"]"),c||(e.seen.indexOf(f.value)<0?(c=g(n)?l(e,f.value,null):l(e,f.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),m(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function y(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function g(e){return null===e}function d(e){return"number"==typeof e}function b(e){return"string"==typeof e}function m(e){return void 0===e}function v(e){return w(e)&&"[object RegExp]"===E(e)}function w(e){return"object"==typeof e&&null!==e}function O(e){return w(e)&&"[object Date]"===E(e)}function j(e){return w(e)&&("[object Error]"===E(e)||e instanceof Error)}function T(e){return"function"==typeof e}function E(e){return Object.prototype.toString.call(e)}function x(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(m(i)&&(i=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!u[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;u[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else u[n]=function(){};return u[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=h,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=d,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=m,t.isRegExp=v,t.isObject=w,t.isDate=O,t.isError=j,t.isFunction=T,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(6);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function z(){var e=new Date,t=[x(e.getHours()),x(e.getMinutes()),x(e.getSeconds())].join(":");return[e.getDate(),S[e.getMonth()],t].join(" ")}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",z(),t.format.apply(t,arguments))},t.inherits=n(7),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var P="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function k(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(P&&e[P]){var t;if("function"!=typeof(t=e[P]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,P,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,o)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),P&&Object.defineProperty(t,P,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=P,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};t.apply(this,n).then((function(t){e.nextTick(u,null,t)}),(function(t){e.nextTick(k,t,u)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n(5))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var f,s=[],l=!1,a=-1;function p(){l&&f&&(l=!1,f.length?s=f.concat(s):a=-1,s.length&&y())}function y(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(f=s,s=[];++a<t;)f&&f[a].run();a=-1,t=s.length}f=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||c(y)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}]]);