!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["BalmUI_linear-progress"]=t():e["BalmUI_linear-progress"]=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="psz7")}({PE4B:function(e,t,r){"use strict";var n=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function s(e,t,r){return e.concat(t).map(function(e){return i(e,r)})}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function u(e,t,r){var n={};return r.isMergeableObject(e)&&a(e).forEach(function(t){n[t]=i(e[t],r)}),a(t).forEach(function(o){r.isMergeableObject(t[o])&&e[o]?n[o]=function(e,t){if(!t.customMerge)return c;var r=t.customMerge(e);return"function"===typeof r?r:c}(o,r)(e[o],t[o],r):n[o]=i(t[o],r)}),n}function c(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||s,r.isMergeableObject=r.isMergeableObject||n;var o=Array.isArray(t);return o===Array.isArray(e)?o?r.arrayMerge(e,t,r):u(e,t,r):i(t,r)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,r){return c(e,r,t)},{})};var f=c;e.exports=f},kUbF:function(e,t,r){"use strict";(function(e){t.a=function(t){var r=null;"undefined"!==typeof window?r=window.Vue:"undefined"!==typeof e&&(r=e.Vue),r&&r.use(t)}}).call(this,r("yLpj"))},psz7:function(e,t,r){"use strict";r.r(t);var n=r("kUbF"),o=r("PE4B"),i=r.n(o),s=/(?:^\[object\s(.*?)\]$)/,a=function(e){return Object.prototype.toString.call(e).replace(s,"$1").toLowerCase()},u=function(e){var t=e.componentProps,r=e.propName,n=e.props,o=t[r].default,s=n[r];"object"!==a(o)?t[r].default=s:t[r].default=i()(o,s)},c=function(e){var t=e.componentMixins,r=e.propName,n=e.props;if(t.length)for(var o=t.length;o--;)if(void 0!==t[o].props[r]){u({componentProps:t[o].props,propName:r,props:n});break}},f=function(e,t){Object.keys(t).forEach(function(r){e.props?void 0===e.props[r]?c({componentMixins:e.mixins,propName:r,props:t}):u({componentProps:e.props,propName:r,props:t}):c({componentMixins:e.mixins,propName:r,props:t})})},l=function(e){var t={install:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(e,r),t.component(e.name,e)}};return Object(n.a)(t),t},p=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.className,attrs:{role:"progressbar"}},[t("div",{staticClass:"mdc-linear-progress__buffering-dots"}),this._v(" "),t("div",{staticClass:"mdc-linear-progress__buffer"}),this._v(" "),this._m(0),this._v(" "),this._m(1)])};p._withStripped=!0;var d=r("zOht"),y=function(){function e(e){void 0===e&&(e={}),this.adapter_=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),_=function(){function e(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];this.root_=e,this.initialize.apply(this,d.__spread(r)),this.foundation_=void 0===t?this.getDefaultFoundation():t,this.foundation_.init(),this.initialSyncWithDOM()}return e.attachTo=function(t){return new e(t,new y({}))},e.prototype.initialize=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},e.prototype.initialSyncWithDOM=function(){},e.prototype.destroy=function(){this.foundation_.destroy()},e.prototype.listen=function(e,t,r){this.root_.addEventListener(e,t,r)},e.prototype.unlisten=function(e,t,r){this.root_.removeEventListener(e,t,r)},e.prototype.emit=function(e,t,r){var n;void 0===r&&(r=!1),"function"===typeof CustomEvent?n=new CustomEvent(e,{bubbles:r,detail:t}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,r,!1,t),this.root_.dispatchEvent(n)},e}(),h={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function b(e){return Boolean(e.document)&&"function"===typeof e.document.createElement}var m={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},v={BUFFER_SELECTOR:".mdc-linear-progress__buffer",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},g=function(e){function t(r){return e.call(this,d.__assign({},t.defaultAdapter,r))||this}return d.__extends(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return m},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return v},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},getBuffer:function(){return null},getPrimaryBar:function(){return null},hasClass:function(){return!1},removeClass:function(){},setStyle:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.isDeterminate_=!this.adapter_.hasClass(m.INDETERMINATE_CLASS),this.isReversed_=this.adapter_.hasClass(m.REVERSED_CLASS),this.progress_=0},t.prototype.setDeterminate=function(e){this.isDeterminate_=e,this.isDeterminate_?(this.adapter_.removeClass(m.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),this.progress_)):(this.adapter_.addClass(m.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),1),this.setScale_(this.adapter_.getBuffer(),1))},t.prototype.setProgress=function(e){this.progress_=e,this.isDeterminate_&&this.setScale_(this.adapter_.getPrimaryBar(),e)},t.prototype.setBuffer=function(e){this.isDeterminate_&&this.setScale_(this.adapter_.getBuffer(),e)},t.prototype.setReverse=function(e){this.isReversed_=e,this.isReversed_?this.adapter_.addClass(m.REVERSED_CLASS):this.adapter_.removeClass(m.REVERSED_CLASS)},t.prototype.open=function(){this.adapter_.removeClass(m.CLOSED_CLASS)},t.prototype.close=function(){this.adapter_.addClass(m.CLOSED_CLASS)},t.prototype.setScale_=function(e,t){if(e){var r="scaleX("+t+")";this.adapter_.setStyle(e,function(e,t){if(b(e)&&t in h){var r=e.document.createElement("div"),n=h[t],o=n.standard,i=n.prefixed;return o in r.style?o:i}return t}(window,"transform"),r)}},t}(y),S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d.__extends(t,e),t.attachTo=function(e){return new t(e)},Object.defineProperty(t.prototype,"determinate",{set:function(e){this.foundation_.setDeterminate(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"progress",{set:function(e){this.foundation_.setProgress(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"buffer",{set:function(e){this.foundation_.setBuffer(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"reverse",{set:function(e){this.foundation_.setReverse(e)},enumerable:!0,configurable:!0}),t.prototype.open=function(){this.foundation_.open()},t.prototype.close=function(){this.foundation_.close()},t.prototype.getDefaultFoundation=function(){var e=this;return new g({addClass:function(t){return e.root_.classList.add(t)},getBuffer:function(){return e.root_.querySelector(g.strings.BUFFER_SELECTOR)},getPrimaryBar:function(){return e.root_.querySelector(g.strings.PRIMARY_BAR_SELECTOR)},hasClass:function(t){return e.root_.classList.contains(t)},removeClass:function(t){return e.root_.classList.remove(t)},setStyle:function(e,t,r){return e.style.setProperty(t,r)}})},t}(_),w={MIN:0,MAX:1};var O=function(e,t,r,n,o,i,s,a){var u,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(e,t){return u.call(t),f(e,t)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}({name:"ui-linear-progress",props:{progress:{type:[Number,String],default:0},buffer:{type:[Number,String],default:0},indeterminate:{type:Boolean,default:!1},reversed:{type:Boolean,default:!1},closed:{type:Boolean,default:!1}},data:function(){return{$linearProgress:null}},computed:{className:function(){return{"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":this.indeterminate,"mdc-linear-progress--reversed":this.reversed,"mdc-linear-progress--closed":this.closed}}},watch:{progress:function(e){this.setProgress(e)},buffer:function(e){this.setBuffer(e)}},mounted:function(){this.$linearProgress=new S(this.$el),this.setProgress(this.progress),this.$el.dataset.buffer&&this.setBuffer(this.buffer)},methods:{setProgress:function(e){this.$linearProgress&&e>=w.MIN&&e<=w.MAX?this.$linearProgress.progress=+e:console.warn("Progress value should be between [0, 1]")},setBuffer:function(e){this.$linearProgress&&e>=w.MIN&&e<=w.MAX?this.$linearProgress.buffer=+e:console.warn("Buffer value should be between [0, 1]")}}},p,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mdc-linear-progress__bar mdc-linear-progress__primary-bar"},[t("span",{staticClass:"mdc-linear-progress__bar-inner"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mdc-linear-progress__bar mdc-linear-progress__secondary-bar"},[t("span",{staticClass:"mdc-linear-progress__bar-inner"})])}],!1,null,null,null);O.options.__file="src/scripts/components/progress/linear-progress.vue";var E=O.exports;t.default=l(E)},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}e.exports=r},zOht:function(e,t,r){(function(r){var n,o,i,s,a,u,c,f,l,p,d,y,_,h,b,m,v,g,S,w,O;!function(E){var j="object"===typeof r?r:"object"===typeof self?self:"object"===typeof this?this:{};function P(e,t){return e!==j&&("function"===typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(r,n){return e[r]=t?t(r,n):n}}void 0===(n=function(e){!function(e){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};o=function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)},i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},a=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},u=function(e,t){return function(r,n){t(r,n,e)}},c=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function s(e){try{u(n.next(e))}catch(t){i(t)}}function a(e){try{u(n.throw(e))}catch(t){i(t)}}function u(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(s,a)}u((n=n.apply(e,t||[])).next())})},l=function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},p=function(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])},d=function(e){var t="function"===typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}},y=function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},_=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e},h=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)n[o]=i[s];return n},b=function(e){return this instanceof b?(this.v=e,this):new b(e)},m=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){o[e]&&(n[e]=function(t){return new Promise(function(r,n){i.push([e,t,r,n])>1||a(e,t)})})}function a(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(u,c):f(i[0][2],r)}catch(n){f(i[0][3],n)}var r}function u(e){a("next",e)}function c(e){a("throw",e)}function f(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}},v=function(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}},g=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=d(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,o){t=e[r](t),function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)}(n,o,t.done,t.value)})}}},S=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},w=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},O=function(e){return e&&e.__esModule?e:{default:e}},e("__extends",o),e("__assign",i),e("__rest",s),e("__decorate",a),e("__param",u),e("__metadata",c),e("__awaiter",f),e("__generator",l),e("__exportStar",p),e("__values",d),e("__read",y),e("__spread",_),e("__spreadArrays",h),e("__await",b),e("__asyncGenerator",m),e("__asyncDelegator",v),e("__asyncValues",g),e("__makeTemplateObject",S),e("__importStar",w),e("__importDefault",O)}(P(j,P(e)))}.apply(t,[t]))||(e.exports=n)}()}).call(this,r("yLpj"))}})});