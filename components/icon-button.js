!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(n){var i={};function a(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}return a.m=n,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s="wyq8")}({"7W2i":function(t,e,n){var i=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},Aqzh:function(t,e,n){t.exports=function(){"use strict";var l=function(t){return!!(i=t)&&"object"===typeof i&&(e=t,!("[object RegExp]"===(n=Object.prototype.toString.call(e))||"[object Date]"===n||e.$$typeof===a));var e,n,i},a="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function d(t,e){return!1!==e.clone&&e.isMergeableObject(t)?_((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function f(t,e,n){return t.concat(e).map(function(t){return d(t,n)})}function _(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||f,n.isMergeableObject=n.isMergeableObject||l;var i,a,o,r,s=Array.isArray(e),u=Array.isArray(t),c=s===u;return c?s?n.arrayMerge(t,e,n):(i=t,a=e,r={},(o=n).isMergeableObject(i)&&Object.keys(i).forEach(function(t){r[t]=d(i[t],o)}),Object.keys(a).forEach(function(t){o.isMergeableObject(a[t])&&i[t]?r[t]=_(i[t],a[t],o):r[t]=d(a[t],o)}),r):d(e,n)}return _.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,e){return _(t,e,n)},{})},_}()},J25l:function(t,e,n){"use strict";var i={ACTION:"mdc-card__actions",BUTTON:"mdc-card__action-buttons",ICON:"mdc-card__action-icons"};e.a={data:function(){return{actionButton:!1,actionIcon:!1}},computed:{actionClassName:function(){return{"mdc-card__action":this.actionButton||this.actionIcon,"mdc-card__action--button":this.actionButton,"mdc-card__action--icon":this.actionIcon}}},created:function(){var t=this;this.$parent.$nextTick(function(){t.actionButton=t.$parent.$el.classList.contains(i.BUTTON)||t.$parent.$el.classList.contains(i.ACTION),t.actionIcon=t.$parent.$el.classList.contains(i.ICON)})}}},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,a,o,r,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):a&&(u=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},MuGO:function(t,e,n){"use strict";var o,i;function a(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=o;if("boolean"===typeof o&&!e)return n;if(t.CSS&&"function"===typeof t.CSS.supports){var i=t.CSS.supports("--css-vars","yes"),a=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return n=!(!i&&!a)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),a=null!==i&&"solid"===i.borderTopStyle;return n.remove(),a}(t),e||(o=n),n}}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===i||e){var n=!1;try{t.document.addEventListener("test",null,{get passive(){n=!0}})}catch(t){}i=n}return!!i&&{passive:!0}}function s(e){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(function(t){return t in e}).pop()}function u(t,e,n){var i,a,o=e.x,r=e.y,s=o+n.left,u=r+n.top;return a="touchstart"===t.type?(i=t.changedTouches[0].pageX-s,t.changedTouches[0].pageY-u):(i=t.pageX-s,t.pageY-u),{x:i,y:a}}n.d(e,"d",function(){return a}),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return u})},NRS1:function(t,e,n){"use strict";e.a={props:{url:String}}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},PSzo:function(t,e,n){"use strict";var i=n("kUbF"),o=n("gVot"),r=function(i,a){Object.keys(a).forEach(function(t){if(void 0!==i[t]){var e=i[t],n=a[t];Object(o.a)(e,n)}})};e.a=function(a){var t={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in r(a,e),a){var i=a[n];t.component(i.name,i)}}};return Object(i.a)(t),t}},QnW2:function(t,e,n){"use strict";var i=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(i,"$1").toLowerCase()}},SBAC:function(t,e,n){"use strict";var i=n("lwsE"),r=n.n(i),a=n("W8MJ"),s=n.n(a),u=n("oLRI"),o=function(){function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;r()(this,o),this.root_=t;for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];this.initialize.apply(this,i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return s()(o,null,[{key:"attachTo",value:function(t){return new o(t,new u.a)}}]),s()(o,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(t,e){this.root_.addEventListener(t,e)}},{key:"unlisten",value:function(t,e){this.root_.removeEventListener(t,e)}},{key:"emit",value:function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"===typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(n)}}]),o}();e.a=o},SksO:function(n,t){function i(t,e){return n.exports=i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}n.exports=i},W8MJ:function(t,e){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},a1gu:function(t,e,n){var i=n("cDf5"),a=n("PJYZ");t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?a(t):e}},cDf5:function(e,t){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=i=function(t){return n(t)}:e.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(t)}e.exports=i},gVot:function(t,e,n){"use strict";var i=n("Aqzh"),r=n.n(i),s=n("QnW2"),o=function(t){var e=t.componentProps,n=t.propName,i=t.props,a=e[n].default,o=i[n];"object"!==Object(s.a)(a)?e[n].default=o:e[n].default=r()(a,o)},a=function(t){var e=t.componentMixins,n=t.propName,i=t.props;if(e.length)for(var a=e.length;a--;)if(void 0!==e[a].props[n]){o({componentProps:e[a].props,propName:n,props:i});break}};e.a=function(e,n){Object.keys(n).forEach(function(t){e.props?void 0===e.props[t]?a({componentMixins:e.mixins,propName:t,props:n}):o({componentProps:e.props,propName:t,props:n}):a({componentMixins:e.mixins,propName:t,props:n})})}},iWIM:function(i,t,e){e("Nsbk");var o=e("n3AX");function a(t,e,n){return"undefined"!==typeof Reflect&&Reflect.get?i.exports=a=Reflect.get:i.exports=a=function(t,e,n){var i=o(t,e);if(i){var a=Object.getOwnPropertyDescriptor(i,e);return a.get?a.get.call(n):a.value}},a(t,e,n||t)}i.exports=a},kUbF:function(t,e,n){"use strict";(function(n){e.a=function(t){var e=null;"undefined"!==typeof window?e=window.Vue:"undefined"!==typeof n&&(e=n.Vue),e&&e.use(t)}}).call(this,n("yLpj"))},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},n3AX:function(t,e,n){var i=n("Nsbk");t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}},oLRI:function(t,e,n){"use strict";var i=n("lwsE"),a=n.n(i),o=n("W8MJ"),r=n.n(o),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a()(this,e),this.adapter_=t}return r()(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),r()(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();e.a=s},wyq8:function(t,e,n){"use strict";n.r(e);var i=n("PSzo"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:[t.className,t.actionClassName],attrs:{type:"button"}},[t.isToggleButton?[n("i",{class:["material-icons",t.UI_ICONBUTTON.SLOT_CLASS.off]},[t._v(t._s(t.toggle.off))]),t._v(" "),n("i",{class:["material-icons",t.UI_ICONBUTTON.SLOT_CLASS.on]},[t._v(t._s(t.toggle.on))])]:[t._t("default",[t._v("\n      "+t._s(t.icon)+"\n    ")],{onClass:t.UI_ICONBUTTON.SLOT_CLASS.on,offClass:t.UI_ICONBUTTON.SLOT_CLASS.off})]],2)};a._withStripped=!0;var o=n("lwsE"),r=n.n(o),s=n("a1gu"),u=n.n(s),c=n("Nsbk"),l=n.n(c),d=n("iWIM"),f=n.n(d),_=n("W8MJ"),p=n.n(_),v=n("7W2i"),h=n.n(v),m=n("SBAC"),y=n("oLRI"),g={ROOT:"mdc-icon-button",ICON_BUTTON_ON:"mdc-icon-button--on"},b={ARIA_PRESSED:"aria-pressed",ARIA_LABEL:"aria-label",CHANGE_EVENT:"MDCIconButtonToggle:change"},A=function(t){function n(t){var e;return r()(this,n),(e=u()(this,l()(n).call(this,Object.assign(n.defaultAdapter,t)))).disabled_=!1,e}return h()(n,t),p()(n,null,[{key:"cssClasses",get:function(){return g}},{key:"strings",get:function(){return b}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){},setAttr:function(){},notifyChange:function(){}}}}]),p()(n,[{key:"init",value:function(){this.adapter_.setAttr(b.ARIA_PRESSED,"".concat(this.isOn()))}},{key:"handleClick",value:function(){this.toggle(),this.adapter_.notifyChange({isOn:this.isOn()})}},{key:"isOn",value:function(){return this.adapter_.hasClass(g.ICON_BUTTON_ON)}},{key:"toggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.isOn();t?this.adapter_.addClass(g.ICON_BUTTON_ON):this.adapter_.removeClass(g.ICON_BUTTON_ON),this.adapter_.setAttr(b.ARIA_PRESSED,"".concat(t))}}]),n}(y.a),C=n("zsl9"),S=function(t){function o(){var t,e;r()(this,o);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=u()(this,(t=l()(o)).call.apply(t,[this].concat(i)))).ripple_=e.initRipple_(),e.handleClick_,e}return h()(o,t),p()(o,null,[{key:"attachTo",value:function(t){return new o(t)}}]),p()(o,[{key:"initRipple_",value:function(){var t=new C.a(this.root_);return t.unbounded=!0,t}},{key:"destroy",value:function(){this.root_.removeEventListener("click",this.handleClick_),this.ripple_.destroy(),f()(l()(o.prototype),"destroy",this).call(this)}},{key:"getDefaultFoundation",value:function(){var n=this;return new A({addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},hasClass:function(t){return n.root_.classList.contains(t)},setAttr:function(t,e){return n.root_.setAttribute(t,e)},notifyChange:function(t){return n.emit(A.strings.CHANGE_EVENT,t)}})}},{key:"initialSyncWithDOM",value:function(){this.handleClick_=this.foundation_.handleClick.bind(this.foundation_),this.root_.addEventListener("click",this.handleClick_)}},{key:"ripple",get:function(){return this.ripple_}},{key:"on",get:function(){return this.foundation_.isOn()},set:function(t){this.foundation_.toggle(t)}}]),o}(m.a),T=n("J25l"),O={EVENT:{CHANGE:"change"},SLOT_CLASS:{off:"mdc-icon-button__icon",on:"mdc-icon-button__icon mdc-icon-button__icon--on"}},E={mixins:[T.a],model:{prop:"model",event:O.EVENT.CHANGE},props:{model:{type:Boolean,default:!1},icon:String,toggle:{type:Object,default:function(){return{}}}},data:function(){return{$iconButton:null}},computed:{isToggleButton:function(){return this.toggle.on&&this.toggle.off},className:function(){return{"mdc-icon-button":!0,"material-icons":!this.isToggleButton&&this.icon}}},watch:{model:function(t){this.$iconButton.on=t}},mounted:function(){var n=this;this.$iconButton=new S(this.$el),this.isToggleButton&&(this.$iconButton.listen("MDCIconButtonToggle:".concat(O.EVENT.CHANGE),function(t){var e=t.detail;n.$emit(O.EVENT.CHANGE,e.isOn)}),this.$iconButton.on=this.model)}},I={name:"ui-icon-button",mixins:[E],data:function(){return{UI_ICONBUTTON:O}}},k=n("KHd+"),N=Object(k.a)(I,a,[],!1,null,null,null);N.options.__file="src/scripts/components/button/icon-button.vue";var w=N.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{class:[t.className,t.actionClassName],attrs:{href:t.url}},[t.isToggleButton?[n("i",{class:["material-icons",t.UI_ICONBUTTON.SLOT_CLASS.off]},[t._v(t._s(t.toggle.on))]),t._v(" "),n("i",{class:["material-icons",t.UI_ICONBUTTON.SLOT_CLASS.on]},[t._v(t._s(t.toggle.off))])]:[t._t("default",[t._v("\n      "+t._s(t.icon)+"\n    ")],{onClass:t.UI_ICONBUTTON.SLOT_CLASS.on,offClass:t.UI_ICONBUTTON.SLOT_CLASS.off})]],2)};R._withStripped=!0;var D={name:"ui-icon-link",mixins:[E,n("NRS1").a],data:function(){return{UI_ICONBUTTON:O}}},L=Object(k.a)(D,R,[],!1,null,null,null);L.options.__file="src/scripts/components/button/icon-link.vue";var U=L.exports;e.default=Object(i.a)({UiIconButton:w,UiIconLink:U})},yLpj:function(Ch,Dh){var Eh;Eh=function(){return this}();try{Eh=Eh||Function("return this")()||eval("this")}catch(t){"object"===typeof window&&(Eh=window)}Ch.exports=Eh},zsl9:function(t,e,n){"use strict";var i=n("lwsE"),r=n.n(i),a=n("W8MJ"),s=n.n(a),o=n("a1gu"),u=n.n(o),c=n("Nsbk"),l=n.n(c),d=n("7W2i"),f=n.n(d),_=n("SBAC"),p=n("oLRI"),v={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},h={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},m={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300},y=n("MuGO"),g=["touchstart","pointerdown","mousedown","keydown"],b=["touchend","pointerup","mouseup"],A=[],C=function(t){function _(t){var e;return r()(this,_),(e=u()(this,l()(_).call(this,Object.assign(_.defaultAdapter,t)))).layoutFrame_=0,e.frame_={width:0,height:0},e.activationState_=e.defaultActivationState_(),e.initialSize_=0,e.maxRadius_=0,e.activateHandler_=function(t){return e.activate_(t)},e.deactivateHandler_=function(t){return e.deactivate_(t)},e.focusHandler_=function(){return e.handleFocus()},e.blurHandler_=function(){return e.handleBlur()},e.resizeHandler_=function(){return e.layout()},e.unboundedCoords_={left:0,top:0},e.fgScale_=0,e.activationTimer_=0,e.fgDeactivationRemovalTimer_=0,e.activationAnimationHasEnded_=!1,e.activationTimerCallback_=function(){e.activationAnimationHasEnded_=!0,e.runDeactivationUXLogicIfReady_()},e.previousActivationEvent_=null,e}return f()(_,t),s()(_,null,[{key:"cssClasses",get:function(){return v}},{key:"strings",get:function(){return h}},{key:"numbers",get:function(){return m}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),s()(_,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}},{key:"init",value:function(){var t=this,e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){var n=_.cssClasses,i=n.ROOT,a=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(a),t.layoutInternal_())})}}},{key:"destroy",value:function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(_.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(_.cssClasses.FG_DEACTIVATION));var e=_.cssClasses,n=e.ROOT,i=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(n),t.adapter_.removeClass(i),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(t){var e=this;t&&(g.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):b.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var e=this;g.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),b.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var e=this,n=_.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})}},{key:"activate_",value:function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=null===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),t&&A.length>0&&A.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(t&&(A.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){A=[],n.wasElementMadeActive||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}}},{key:"checkElementMadeActive_",value:function(t){return!t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.activate_(t)}},{key:"animateActivation_",value:function(){var t=this,e=_.strings,n=e.VAR_FG_TRANSLATE_START,i=e.VAR_FG_TRANSLATE_END,a=_.cssClasses,o=a.FG_DEACTIVATION,r=a.FG_ACTIVATION,s=_.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var u="",c="";if(!this.adapter_.isUnbounded()){var l=this.getFgTranslationCoordinates_(),d=l.startPoint,f=l.endPoint;u="".concat(d.x,"px, ").concat(d.y,"px"),c="".concat(f.x,"px, ").concat(f.y,"px")}this.adapter_.updateCssVariable(n,u),this.adapter_.updateCssVariable(i,c),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(r),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},s)}},{key:"getFgTranslationCoordinates_",value:function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?Object(y.c)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var t=this,e=_.cssClasses.FG_DEACTIVATION,n=this.activationState_,i=n.hasDeactivationUXRun,a=n.isActivated;(i||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(e)},m.FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var t=_.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=null},_.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(t){var e=this,n=this.activationState_;if(n.isActivated){var i=Object.assign({},n);if(n.isProgrammatic){requestAnimationFrame(function(){return e.animateDeactivation_(null,i)}),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(t,i),e.resetActivationState_()})}}},{key:"deactivate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.deactivate_(t)}},{key:"animateDeactivation_",value:function(t,e){var n=e.wasActivatedByPointer,i=e.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?e:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+_.numbers.PADDING,this.initialSize_=e*_.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var t=_.strings,e=t.VAR_FG_SIZE,n=t.VAR_LEFT,i=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(e,"".concat(this.initialSize_,"px")),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,"".concat(this.unboundedCoords_.left,"px")),this.adapter_.updateCssVariable(i,"".concat(this.unboundedCoords_.top,"px")))}},{key:"setUnbounded",value:function(t){var e=_.cssClasses.UNBOUNDED;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}},{key:"handleFocus",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(_.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(_.cssClasses.BG_FOCUSED)})}}]),_}(p.a);n.d(e,"a",function(){return S}),n.d(e,"b",function(){return C});var S=function(t){function o(){var t,e;r()(this,o);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=u()(this,(t=l()(o)).call.apply(t,[this].concat(i)))).disabled=!1,e.unbounded_,e}return f()(o,t),s()(o,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new C(o.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()}}],[{key:"attachTo",value:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isUnbounded,n=void 0===e?void 0:e,i=new o(t);return void 0!==n&&(i.unbounded=n),i}},{key:"createAdapter",value:function(n){var t=y.b(HTMLElement.prototype);return{browserSupportsCssVars:function(){return y.d(window)},isUnbounded:function(){return n.unbounded},isSurfaceActive:function(){return n.root_[t](":active")},isSurfaceDisabled:function(){return n.disabled},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},containsEventTarget:function(t){return n.root_.contains(t)},registerInteractionHandler:function(t,e){return n.root_.addEventListener(t,e,y.a())},deregisterInteractionHandler:function(t,e){return n.root_.removeEventListener(t,e,y.a())},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,y.a())},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,y.a())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},updateCssVariable:function(t,e){return n.root_.style.setProperty(t,e)},computeBoundingRect:function(){return n.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),o}(_.a)}})});