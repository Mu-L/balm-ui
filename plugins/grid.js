!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI_grid=t():e.BalmUI_grid=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="wQZb")}({kUbF:function(e,t,n){"use strict";(function(e){t.a=function(t){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof e&&(n=e.Vue),n&&n.use(t)}}).call(this,n("yLpj"))},wQZb:function(e,t,n){"use strict";n.r(t);var o=n("kUbF"),r=["margin","gutter","column-width"],u=["desktop","tablet","phone"],i={install:function(e){e.prototype.$setGrid=function(e,t,n){r.includes(e)?u.includes(t)?document.documentElement.style.setProperty("--mdc-layout-grid-".concat(e,"-").concat(t),n):console.warn("Please set a screen size: "+JSON.stringify(u)):console.warn("Please set a grid property: "+JSON.stringify(r))}}};Object(o.a)(i),t.default=i},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}e.exports=n}})});