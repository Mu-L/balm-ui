!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI_anchor=t():e.BalmUI_anchor=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="aP0J")}({aP0J:function(e,t,n){"use strict";n.r(t);var o=function(e,t){"undefined"!==typeof window&&window.Vue&&window.Vue.directive(e,t)},r=document.documentElement||document.body,c={CLASSNAME:{OUTER:"v-anchor--html",INNER:"v-anchor"},body:r,offset:0,isMounted:!1},i=function(e){var t=document.querySelector(e);t?c.body.scrollTop=t.offsetTop-c.offset:console.warn("Invalid anchor: ".concat(e))},f=function(e,t,n){var o=n.value,r=n.arg,f=n.modifiers;switch(r){case"href":t.dataset.href=o,t["".concat(e,"EventListener")]("click",function(){i(o)});break;case"id":t.setAttribute("id",o)}f.html&&t.classList[e](c.CLASSNAME.OUTER)},u=function(e){var t=document.querySelectorAll(".".concat(c.CLASSNAME.OUTER," .").concat(c.CLASSNAME.INNER));t.length&&t.forEach(function(t){t["".concat(e,"EventListener")]("click",function(){i(t.dataset.href)})})},a={name:"anchor",bind:function(e,t){f("add",e,t)},inserted:function(e,t){!function(e,t){var n=t.value,o=t.rawName,r=t.modifiers;o!==c.CLASSNAME.INNER&&o!=="".concat(c.CLASSNAME.INNER,".offset")||(c.body=e,r.offset&&(c.offset=n))}(e,t),t.modifiers.html&&u("add")},unbind:function(e,t){e===c.body&&(c.body=r),f("remove",e,t),t.modifiers.html&&u("remove")}};o(a.name,a);t.default=a}})});