import e,{useRef as r,useEffect as t}from"react";import n from"parlx.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var a=function(){return(a=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)};export default function(l){var o=l.settings,c=l.callbacks,i=l.parlxMove,s=l.className,p=void 0===s?"parallax":s,f=l.overlay,u=l.children,v=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(l,["settings","callbacks","parlxMove","className","overlay","children"]),y=r(null);return t((function(){var e=y.current;n.init({elements:e,settings:o,callbacks:c});return i&&e.addEventListener("parlxMove",(function(e){return i(e.detail.move)})),function(){return e.parlx.destroy()}}),[o,c,i]),e.createElement("div",a({},v,{ref:y,className:p}),f&&e.createElement("div",{className:"overlay"}),u)}
//# sourceMappingURL=react-parlx.esm.js.map
