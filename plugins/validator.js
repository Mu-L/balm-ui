!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI_validator=t():e.BalmUI_validator=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="rp5t")}({kUbF:function(e,t,n){"use strict";(function(e){t.a=function(t){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof e&&(n=e.Vue),n&&n.use(t)}}).call(this,n("yLpj"))},rp5t:function(e,t,n){"use strict";n.r(t);var r=n("kUbF"),o=/(?:^\[object\s(.*?)\]$)/,i=function(e){return Object.prototype.toString.call(e).replace(o,"$1").toLowerCase()},a={required:{validate:function(e){return e&&e.length>0},message:"%s is required"}},s={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},a,t),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r={isValid:!0,valid:[],invalid:[],messages:[],message:"",errorMsg:{}},o=this.$options.validations||{},a=Object.keys(o);t.length&&(a=a.filter(function(e){return t.includes(e)}));for(var s=0,u=a.length;s<u;s++){for(var l=a[s],c=o[l],f=c.label||"",d=c.validator.split(",").map(function(e){return e.trim()}),p=!0,v=0,g=d.length;v<g;v++){var b=d[v],m=c[b],y=m||n[b];if(y&&"function"===i(y.validate)){var h=e[l],j=[h,e];if(!y.validate.apply(this,j)){p=!1;var w="";switch(i(y.message)){case"string":w=y.message.replace("%s",f);break;case"function":w=y.message.apply(this,j);break;default:console.warn("'[".concat(l,".message]' must be a string or function."))}w&&r.messages.push(w);break}}else console.warn("The field [".concat(l,"] is missing a validation rule: '").concat(b,"'."))}p?r.valid.push(l):r.invalid.push(l)}return r.messages.length&&(r.isValid=!1,r.message=r.messages[0],r.invalid.forEach(function(e,t){r.errorMsg[e]=r.messages[t]})),r.valid.forEach(function(e){r.errorMsg[e]=""}),r};e.prototype.$validate=r}};Object(r.a)(s);t.default=s},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}})});