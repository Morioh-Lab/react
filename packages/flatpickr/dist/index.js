(()=>{"use strict";var e={629:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(997),i=r(689),u=a(r(810));t.default=function(e){var t=["onChange","onOpen","onClose","onMonthChange","onYearChange","onReady","onValueUpdate","onDayCreate"],r=(0,i.useRef)(null),a=(0,i.useRef)(),l=(0,u.default)([{tag:"link",id:"flatpickr-css",rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.9/flatpickr.min.css"},{tag:"script",id:"flatpickr-js",src:"https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.9/flatpickr.min.js"}])[0];return(0,i.useEffect)((function(){var o;if(!l){var i=n(n({dateFormat:"U",altFormat:"Y-m-d G:i K",altInput:!0,enableTime:!0,minDate:new Date},e.config),{defaultDate:(null===(o=e.config)||void 0===o?void 0:o.defaultDate)||e.value||null});return t.forEach((function(t){e.hasOwnProperty(t)&&(i[t]=e[t])})),a.current=window.flatpickr(r.current,i),function(){a.current&&(a.current.destroy(),a.current=null)}}}),[l]),l?null:(0,o.jsx)("input",n({type:"text",ref:r},e),void 0)}},810:e=>{e.exports=require("@morioh/r-resource")},689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")}},t={},r=function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(629),n=exports;for(var a in r)n[a]=r[a];r.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();