!function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.BalmUI=n():t.BalmUI=n()}(window,function(){return function(e){var o={};function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)i.d(e,o,function(t){return n[t]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s="XOpt")}({XOpt:function(t,n,e){"use strict";e.r(n);var o=e("kUbF");e("yN2V");!function(t,n,e){e=e||window;var o=!1;e.addEventListener(t,function(){o||(o=!0,requestAnimationFrame(function(){e.dispatchEvent(new CustomEvent(n)),o=!1}))})}("resize","balmResize");var i=function(){},r={onChange:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;new Function("value","this.".concat(t," = value;")).call(this,n),e()},onOpen:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;new Function("this.".concat(t," = true;")).call(this),n()},onClose:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;new Function("this.".concat(t," = false;")).call(this),n()},onShow:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;new Function("this.".concat(t," = true;")).call(this),n()},onHide:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;new Function("this.".concat(t," = false;")).call(this),n()}},u={install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"balmUI";n?Object.defineProperty(t.prototype,"$".concat(n),{get:function(){var n=this,e={};return Object.keys(r).forEach(function(t){e[t]=r[t].bind(n)}),e}}):console.error("[BalmUI] The namespace of the event plugin is required.")}};Object(o.a)(u);n.default=u},kUbF:function(t,n,e){"use strict";(function(e){n.a=function(t){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof e&&(n=e.Vue),n&&n.use(t)}}).call(this,e("yLpj"))},yLpj:function(ta,ua){var va;va=function(){return this}();try{va=va||Function("return this")()||eval("this")}catch(t){"object"===typeof window&&(va=window)}ta.exports=va},yN2V:function(t,n){!function(){if("function"===typeof window.CustomEvent)return;function t(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),e}t.prototype=window.Event.prototype,window.CustomEvent=t}()}})});