import e,{useRef as r,useEffect as t}from"react";import a from"prop-types";import n from"parlx.js";
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
***************************************************************************** */var o=function(){return(o=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)};function l(a){var l=a.settings,c=a.callbacks,s=a.parlxMove,p=a.className,i=a.overlay,f=a.children,u=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]])}return t}(a,["settings","callbacks","parlxMove","className","overlay","children"]),v=r(null);return t((function(){var e=v.current;n.init({elements:e,settings:l,callbacks:c});return s&&e.addEventListener("parlxMove",(function(e){return s(e.detail.move)})),function(){return e.parlx.destroy()}}),[c,v,s,l]),e.createElement("div",o({},u,{ref:v,className:p}),i&&e.createElement("div",{className:"overlay"}),f)}l.propTypes={settings:a.object,callbacks:a.object,parlxMove:a.func,className:a.string,overlay:a.bool,children:a.node,props:a.object},l.defaultProps={className:"parallax"};export default l;
//# sourceMappingURL=react-parlx.js.map
