!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(n){var i={};function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s="RXET")}({"7W2i":function(t,e,n){var i=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},Aqzh:function(t,e,n){t.exports=function(){"use strict";var l=function(t){return!!(i=t)&&"object"===typeof i&&(e=t,!("[object RegExp]"===(n=Object.prototype.toString.call(e))||"[object Date]"===n||e.$$typeof===r));var e,n,i},r="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function d(t,e){return!1!==e.clone&&e.isMergeableObject(t)?_((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function p(t,e,n){return t.concat(e).map(function(t){return d(t,n)})}function _(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||p,n.isMergeableObject=n.isMergeableObject||l;var i,r,a,o,s=Array.isArray(e),c=Array.isArray(t),u=s===c;return u?s?n.arrayMerge(t,e,n):(i=t,r=e,o={},(a=n).isMergeableObject(i)&&Object.keys(i).forEach(function(t){o[t]=d(i[t],a)}),Object.keys(r).forEach(function(t){a.isMergeableObject(r[t])&&i[t]?o[t]=_(i[t],r[t],a):o[t]=d(r[t],a)}),o):d(e,n)}return _.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,e){return _(t,e,n)},{})},_}()},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,r,a,o,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return i})},MuGO:function(t,e,n){"use strict";var a,i;function r(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a;if("boolean"===typeof a&&!e)return n;if(t.CSS&&"function"===typeof t.CSS.supports){var i=t.CSS.supports("--css-vars","yes"),r=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return n=!(!i&&!r)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;return n.remove(),r}(t),e||(a=n),n}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===i||e){var n=!1;try{t.document.addEventListener("test",null,{get passive(){n=!0}})}catch(t){}i=n}return!!i&&{passive:!0}}function s(e){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(function(t){return t in e}).pop()}function c(t,e,n){var i,r,a=e.x,o=e.y,s=a+n.left,c=o+n.top;return r="touchstart"===t.type?(i=t.changedTouches[0].pageX-s,t.changedTouches[0].pageY-c):(i=t.pageX-s,t.pageY-c),{x:i,y:r}}n.d(e,"d",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return c})},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},QnW2:function(t,e,n){"use strict";var i=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(i,"$1").toLowerCase()}},RXET:function(t,e,n){"use strict";n.r(e);var i=n("iri3"),r=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("header",{class:n.className},[i("div",{staticClass:"mdc-top-app-bar__row"},[i("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},[i("a",{staticClass:"material-icons mdc-top-app-bar__navigation-icon",attrs:{id:n.navId},on:{click:function(t){n.$emit(n.UI_TOP_APP_BAR.EVENT.NAV)}}},[n._t("nav-icon",[n._v("menu")])],2),n._v(" "),i("span",{staticClass:"mdc-top-app-bar__title"},[n._t("default",[n._v(n._s(n.title))])],2)]),n._v(" "),n.actionItems?i("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",attrs:{role:"toolbar"}},[n._t("toolbar",n._l(n.actionItems,function(t,e){return i("a",{key:e,class:[n.UI_TOP_APP_BAR.SLOT_CLASS.icon,n.UI_TOP_APP_BAR.SLOT_CLASS.item],attrs:{href:t.url,"aria-label":t.label,alt:t.label}},[n._v("\n          "+n._s(t.icon)+"\n        ")])}),{iconClass:n.UI_TOP_APP_BAR.SLOT_CLASS.icon,itemClass:n.UI_TOP_APP_BAR.SLOT_CLASS.item})],2):n._e()])])};r._withStripped=!0;var a=n("lwsE"),o=n.n(a),s=n("W8MJ"),c=n.n(s),u=n("a1gu"),l=n.n(u),d=n("Nsbk"),p=n.n(d),_=n("iWIM"),f=n.n(_),h=n("7W2i"),v=n.n(h),m=n("SBAC"),y=n("zsl9"),g={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed"},S={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},A={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},T=function(t){function n(t){var e;return o()(this,n),(e=l()(this,p()(n).call(this,Object.assign(n.defaultAdapter,t)))).navClickHandler_=function(){return e.adapter_.notifyNavigationIconClicked()},e.scrollHandler_=function(){},e}return v()(n,t),c()(n,null,[{key:"strings",get:function(){return A}},{key:"cssClasses",get:function(){return g}},{key:"numbers",get:function(){return S}},{key:"defaultAdapter",get:function(){return{hasClass:function(){},addClass:function(){},removeClass:function(){},setStyle:function(){},getTopAppBarHeight:function(){},registerNavigationIconInteractionHandler:function(){},deregisterNavigationIconInteractionHandler:function(){},notifyNavigationIconClicked:function(){},registerScrollHandler:function(){},deregisterScrollHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}}}]),c()(n,[{key:"init",value:function(){this.adapter_.registerNavigationIconInteractionHandler("click",this.navClickHandler_)}},{key:"destroy",value:function(){this.adapter_.deregisterNavigationIconInteractionHandler("click",this.navClickHandler_)}},{key:"initScrollHandler",value:function(){this.adapter_.registerScrollHandler(this.scrollHandler_)}},{key:"destroyScrollHandler",value:function(){this.adapter_.deregisterScrollHandler(this.scrollHandler_)}}]),n}(n("oLRI").a),E=function(t){function n(t){var e;return o()(this,n),(e=l()(this,p()(n).call(this,t))).wasScrolled_=!1,e.scrollHandler_=function(){return e.fixedScrollHandler_()},e}return v()(n,t),c()(n,[{key:"init",value:function(){f()(p()(n.prototype),"init",this).call(this),this.adapter_.registerScrollHandler(this.scrollHandler_)}},{key:"destroy",value:function(){f()(p()(n.prototype),"destroy",this).call(this),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}},{key:"fixedScrollHandler_",value:function(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(g.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(g.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)}}]),n}(T),b=function(t){function n(t){var e;return o()(this,n),(e=l()(this,p()(n).call(this,t))).isCollapsed=!1,e.scrollHandler_=function(){return e.shortAppBarScrollHandler_()},e}return v()(n,t),c()(n,[{key:"init",value:function(){f()(p()(n.prototype),"init",this).call(this);var t=this.adapter_.hasClass(g.SHORT_COLLAPSED_CLASS);this.adapter_.getTotalActionItems()>0&&this.adapter_.addClass(g.SHORT_HAS_ACTION_ITEM_CLASS),t||(this.adapter_.registerScrollHandler(this.scrollHandler_),this.shortAppBarScrollHandler_())}},{key:"destroy",value:function(){f()(p()(n.prototype),"destroy",this).call(this),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}},{key:"shortAppBarScrollHandler_",value:function(){this.adapter_.getViewportScrollY()<=0?this.isCollapsed&&(this.adapter_.removeClass(g.SHORT_COLLAPSED_CLASS),this.isCollapsed=!1):this.isCollapsed||(this.adapter_.addClass(g.SHORT_COLLAPSED_CLASS),this.isCollapsed=!0)}}]),n}(T),C=function(t){function n(t){var e;return o()(this,n),(e=l()(this,p()(n).call(this,t))).lastScrollPosition_=e.adapter_.getViewportScrollY(),e.topAppBarHeight_=e.adapter_.getTopAppBarHeight(),e.wasDocked_=!0,e.isDockedShowing_=!0,e.currentAppBarOffsetTop_=0,e.isCurrentlyBeingResized_=!1,e.resizeThrottleId_=0,e.resizeDebounceId_=0,e.scrollHandler_=function(){return e.topAppBarScrollHandler_()},e.resizeHandler_=function(){return e.topAppBarResizeHandler_()},e}return v()(n,t),c()(n,[{key:"init",value:function(){f()(p()(n.prototype),"init",this).call(this),this.adapter_.registerScrollHandler(this.scrollHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_)}},{key:"destroy",value:function(){f()(p()(n.prototype),"destroy",this).call(this),this.adapter_.deregisterScrollHandler(this.scrollHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_),this.adapter_.setStyle("top","")}},{key:"checkForUpdate_",value:function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,n=this.currentAppBarOffsetTop_>t,i=e&&n;if(i)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0;if(this.isDockedShowing_!==n)return this.isDockedShowing_=n,!0}return i}},{key:"moveTopAppBar_",value:function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-S.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}}},{key:"topAppBarScrollHandler_",value:function(){var t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())}},{key:"topAppBarResizeHandler_",value:function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(function(){t.resizeThrottleId_=0,t.throttledResizeHandler_()},S.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(function(){t.topAppBarScrollHandler_(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=0},S.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)}},{key:"throttledResizeHandler_",value:function(){var t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.topAppBarScrollHandler_()}}]),n}(T),O=function(t){function a(){var t,e;o()(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=l()(this,(t=p()(a)).call.apply(t,[this].concat(i)))).navIcon_,e.iconRipples_,e.scrollTarget_,e}return v()(a,t),c()(a,[{key:"initialize",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t){return y.a.attachTo(t)};this.navIcon_=this.root_.querySelector(A.NAVIGATION_ICON_SELECTOR);var t=[].slice.call(this.root_.querySelectorAll(A.ACTION_ITEM_SELECTOR));this.navIcon_&&t.push(this.navIcon_),this.iconRipples_=t.map(function(t){var e=n(t);return e.unbounded=!0,e})}},{key:"destroy",value:function(){this.iconRipples_.forEach(function(t){return t.destroy()}),f()(p()(a.prototype),"destroy",this).call(this)}},{key:"setScrollTarget",value:function(t){this.foundation_.destroyScrollHandler(),this.scrollTarget_=t,this.foundation_.initScrollHandler()}},{key:"getDefaultFoundation",value:function(){var n=this,t=Object.assign({hasClass:function(t){return n.root_.classList.contains(t)},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},setStyle:function(t,e){return n.root_.style.setProperty(t,e)},getTopAppBarHeight:function(){return n.root_.clientHeight},registerNavigationIconInteractionHandler:function(t,e){n.navIcon_&&n.navIcon_.addEventListener(t,e)},deregisterNavigationIconInteractionHandler:function(t,e){n.navIcon_&&n.navIcon_.removeEventListener(t,e)},notifyNavigationIconClicked:function(){n.emit(A.NAVIGATION_EVENT,{})},registerScrollHandler:function(t){return n.scrollTarget_.addEventListener("scroll",t)},deregisterScrollHandler:function(t){return n.scrollTarget_.removeEventListener("scroll",t)},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getViewportScrollY:function(){return n.scrollTarget_[n.scrollTarget_===window?"pageYOffset":"scrollTop"]},getTotalActionItems:function(){return n.root_.querySelectorAll(A.ACTION_ITEM_SELECTOR).length}});return this.scrollTarget_=window,this.root_.classList.contains(g.SHORT_CLASS)?new b(t):this.root_.classList.contains(g.FIXED_CLASS)?new E(t):new C(t)}}],[{key:"attachTo",value:function(t){return new a(t)}}]),a}(m.a),I={ADJUST:{DEFAULT:"mdc-top-app-bar--fixed-adjust",PROMINENT:"mdc-top-app-bar--prominent-fixed-adjust",DENSE:"mdc-top-app-bar--dense-fixed-adjust",DENSE_PROMINENT:"mdc-top-app-bar--dense-prominent-fixed-adjust",SHORT:"mdc-top-app-bar--short-fixed-adjust"},EVENT:{NAV:"nav"},SLOT_CLASS:{icon:"material-icons",item:"mdc-top-app-bar__action-item"}},H={name:"ui-top-app-bar",props:{contentSelector:{type:String,required:!0},navId:String,title:{type:String,default:""},actionItems:{type:Array,default:function(){return[]}},fixed:{type:Boolean,default:!1},prominent:{type:Boolean,default:!1},dense:{type:Boolean,default:!1},short:{type:Boolean,default:!1},alwaysClosed:{type:Boolean,default:!1}},data:function(){return{UI_TOP_APP_BAR:I,$topAppBar:null,contentElement:null}},computed:{className:function(){return{"mdc-top-app-bar":!0,"mdc-top-app-bar--fixed":this.fixed,"mdc-top-app-bar--prominent":this.prominent,"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--short":this.short,"mdc-top-app-bar--short-collapsed":this.alwaysClosed}}},watch:{fixed:function(){this.reset()},prominent:function(t){this.reset(),this.contentElement.classList.toggle(I.ADJUST.PROMINENT),this.updateDenseProminentFixedAdjust()},dense:function(t){this.reset(),this.contentElement.classList.toggle(I.ADJUST.DENSE),this.updateDenseProminentFixedAdjust()},short:function(t){this.reset(),this.contentElement.classList.toggle(I.ADJUST.SHORT)},alwaysClosed:function(){this.reset()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.$nextTick(function(){t.$topAppBar=new O(t.$el),t.createFixedAdjustElement()})},reset:function(){this.$topAppBar.destroy(),this.init()},createFixedAdjustElement:function(){this.contentSelector&&(this.contentElement=document.querySelector(this.contentSelector),this.$topAppBar.setScrollTarget(this.contentElement),this.contentElement.classList.contains(I.ADJUST.DEFAULT)||this.contentElement.classList.add(I.ADJUST.DEFAULT),this.short?this.contentElement.classList.add(I.ADJUST.SHORT):(this.prominent&&this.contentElement.classList.add(I.ADJUST.PROMINENT),this.dense&&this.contentElement.classList.add(I.ADJUST.DENSE),this.dense&&this.prominent&&this.contentElement.classList.add(I.ADJUST.DENSE_PROMINENT)))},updateDenseProminentFixedAdjust:function(){this.dense&&this.prominent?this.contentElement.classList.add(I.ADJUST.DENSE_PROMINENT):this.contentElement.classList.remove(I.ADJUST.DENSE_PROMINENT)}}},R=n("KHd+"),k=Object(R.a)(H,r,[],!1,null,null,null);k.options.__file="src/scripts/components/toolbar/top-app-bar.vue";var w=k.exports;e.default=Object(i.a)(w)},SBAC:function(t,e,n){"use strict";var i=n("lwsE"),o=n.n(i),r=n("W8MJ"),s=n.n(r),c=n("oLRI"),a=function(){function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;o()(this,a),this.root_=t;for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];this.initialize.apply(this,i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return s()(a,null,[{key:"attachTo",value:function(t){return new a(t,new c.a)}}]),s()(a,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(t,e){this.root_.addEventListener(t,e)}},{key:"unlisten",value:function(t,e){this.root_.removeEventListener(t,e)}},{key:"emit",value:function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"===typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(n)}}]),a}();e.a=a},SksO:function(n,t){function i(t,e){return n.exports=i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}n.exports=i},W8MJ:function(t,e){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},a1gu:function(t,e,n){var i=n("cDf5"),r=n("PJYZ");t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?r(t):e}},cDf5:function(e,t){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=i=function(t){return n(t)}:e.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(t)}e.exports=i},gVot:function(t,e,n){"use strict";var i=n("Aqzh"),o=n.n(i),s=n("QnW2"),a=function(t){var e=t.componentProps,n=t.propName,i=t.props,r=e[n].default,a=i[n];"object"!==Object(s.a)(r)?e[n].default=a:e[n].default=o()(r,a)},r=function(t){var e=t.componentMixins,n=t.propName,i=t.props;if(e.length)for(var r=e.length;r--;)if(void 0!==e[r].props[n]){a({componentProps:e[r].props,propName:n,props:i});break}};e.a=function(e,n){Object.keys(n).forEach(function(t){e.props?void 0===e.props[t]?r({componentMixins:e.mixins,propName:t,props:n}):a({componentProps:e.props,propName:t,props:n}):r({componentMixins:e.mixins,propName:t,props:n})})}},iWIM:function(i,t,e){e("Nsbk");var a=e("n3AX");function r(t,e,n){return"undefined"!==typeof Reflect&&Reflect.get?i.exports=r=Reflect.get:i.exports=r=function(t,e,n){var i=a(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}},r(t,e,n||t)}i.exports=r},iri3:function(t,e,n){"use strict";var i=n("kUbF"),r=n("gVot");e.a=function(n){var t={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(r.a)(n,e),t.component(n.name,n)}};return Object(i.a)(t),t}},kUbF:function(t,e,n){"use strict";(function(n){e.a=function(t){var e=null;"undefined"!==typeof window?e=window.Vue:"undefined"!==typeof n&&(e=n.Vue),e&&e.use(t)}}).call(this,n("yLpj"))},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},n3AX:function(t,e,n){var i=n("Nsbk");t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}},oLRI:function(t,e,n){"use strict";var i=n("lwsE"),r=n.n(i),a=n("W8MJ"),o=n.n(a),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r()(this,e),this.adapter_=t}return o()(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),o()(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();e.a=s},yLpj:function(Ji,Ki){var Li;Li=function(){return this}();try{Li=Li||Function("return this")()||eval("this")}catch(t){"object"===typeof window&&(Li=window)}Ji.exports=Li},zsl9:function(t,e,n){"use strict";var i=n("lwsE"),o=n.n(i),r=n("W8MJ"),s=n.n(r),a=n("a1gu"),c=n.n(a),u=n("Nsbk"),l=n.n(u),d=n("7W2i"),p=n.n(d),_=n("SBAC"),f=n("oLRI"),h={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},v={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},m={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300},y=n("MuGO"),g=["touchstart","pointerdown","mousedown","keydown"],S=["touchend","pointerup","mouseup"],A=[],T=function(t){function _(t){var e;return o()(this,_),(e=c()(this,l()(_).call(this,Object.assign(_.defaultAdapter,t)))).layoutFrame_=0,e.frame_={width:0,height:0},e.activationState_=e.defaultActivationState_(),e.initialSize_=0,e.maxRadius_=0,e.activateHandler_=function(t){return e.activate_(t)},e.deactivateHandler_=function(t){return e.deactivate_(t)},e.focusHandler_=function(){return e.handleFocus()},e.blurHandler_=function(){return e.handleBlur()},e.resizeHandler_=function(){return e.layout()},e.unboundedCoords_={left:0,top:0},e.fgScale_=0,e.activationTimer_=0,e.fgDeactivationRemovalTimer_=0,e.activationAnimationHasEnded_=!1,e.activationTimerCallback_=function(){e.activationAnimationHasEnded_=!0,e.runDeactivationUXLogicIfReady_()},e.previousActivationEvent_=null,e}return p()(_,t),s()(_,null,[{key:"cssClasses",get:function(){return h}},{key:"strings",get:function(){return v}},{key:"numbers",get:function(){return m}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),s()(_,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}},{key:"init",value:function(){var t=this,e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){var n=_.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(r),t.layoutInternal_())})}}},{key:"destroy",value:function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(_.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(_.cssClasses.FG_DEACTIVATION));var e=_.cssClasses,n=e.ROOT,i=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(n),t.adapter_.removeClass(i),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(t){var e=this;t&&(g.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):S.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var e=this;g.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),S.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var e=this,n=_.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})}},{key:"activate_",value:function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=null===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),t&&A.length>0&&A.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(t&&(A.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){A=[],n.wasElementMadeActive||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}}},{key:"checkElementMadeActive_",value:function(t){return!t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.activate_(t)}},{key:"animateActivation_",value:function(){var t=this,e=_.strings,n=e.VAR_FG_TRANSLATE_START,i=e.VAR_FG_TRANSLATE_END,r=_.cssClasses,a=r.FG_DEACTIVATION,o=r.FG_ACTIVATION,s=_.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",u="";if(!this.adapter_.isUnbounded()){var l=this.getFgTranslationCoordinates_(),d=l.startPoint,p=l.endPoint;c="".concat(d.x,"px, ").concat(d.y,"px"),u="".concat(p.x,"px, ").concat(p.y,"px")}this.adapter_.updateCssVariable(n,c),this.adapter_.updateCssVariable(i,u),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(o),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},s)}},{key:"getFgTranslationCoordinates_",value:function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?Object(y.c)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var t=this,e=_.cssClasses.FG_DEACTIVATION,n=this.activationState_,i=n.hasDeactivationUXRun,r=n.isActivated;(i||!r)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(e)},m.FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var t=_.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=null},_.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(t){var e=this,n=this.activationState_;if(n.isActivated){var i=Object.assign({},n);if(n.isProgrammatic){requestAnimationFrame(function(){return e.animateDeactivation_(null,i)}),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(t,i),e.resetActivationState_()})}}},{key:"deactivate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.deactivate_(t)}},{key:"animateDeactivation_",value:function(t,e){var n=e.wasActivatedByPointer,i=e.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?e:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+_.numbers.PADDING,this.initialSize_=e*_.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var t=_.strings,e=t.VAR_FG_SIZE,n=t.VAR_LEFT,i=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(e,"".concat(this.initialSize_,"px")),this.adapter_.updateCssVariable(r,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,"".concat(this.unboundedCoords_.left,"px")),this.adapter_.updateCssVariable(i,"".concat(this.unboundedCoords_.top,"px")))}},{key:"setUnbounded",value:function(t){var e=_.cssClasses.UNBOUNDED;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}},{key:"handleFocus",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(_.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(_.cssClasses.BG_FOCUSED)})}}]),_}(f.a);n.d(e,"a",function(){return E}),n.d(e,"b",function(){return T});var E=function(t){function a(){var t,e;o()(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=c()(this,(t=l()(a)).call.apply(t,[this].concat(i)))).disabled=!1,e.unbounded_,e}return p()(a,t),s()(a,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new T(a.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()}}],[{key:"attachTo",value:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isUnbounded,n=void 0===e?void 0:e,i=new a(t);return void 0!==n&&(i.unbounded=n),i}},{key:"createAdapter",value:function(n){var t=y.b(HTMLElement.prototype);return{browserSupportsCssVars:function(){return y.d(window)},isUnbounded:function(){return n.unbounded},isSurfaceActive:function(){return n.root_[t](":active")},isSurfaceDisabled:function(){return n.disabled},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},containsEventTarget:function(t){return n.root_.contains(t)},registerInteractionHandler:function(t,e){return n.root_.addEventListener(t,e,y.a())},deregisterInteractionHandler:function(t,e){return n.root_.removeEventListener(t,e,y.a())},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,y.a())},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,y.a())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},updateCssVariable:function(t,e){return n.root_.style.setProperty(t,e)},computeBoundingRect:function(){return n.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),a}(_.a)}})});