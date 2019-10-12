import e,{useRef as r,useEffect as t}from"react";import a from"prop-types";import l from"parlx.js";
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
***************************************************************************** */function o(a){var{settings:o,callbacks:s,parlxMove:n,className:c,overlay:p,children:i}=a,m=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t}(a,["settings","callbacks","parlxMove","className","overlay","children"]);const b=r(null);return t(()=>{const e=b.current;l.init({elements:e,settings:o,callbacks:s});return n&&e.addEventListener("parlxMove",e=>n(e.detail.move)),()=>e.parlx.destroy()},[s,b,n,o]),e.createElement("div",Object.assign({},m,{ref:b,className:c}),p&&e.createElement("div",{className:"overlay"}),i)}o.propTypes={settings:a.object,callbacks:a.object,parlxMove:a.func,className:a.string,overlay:a.bool,children:a.node,props:a.object},o.defaultProps={className:"parallax"};export default o;
//# sourceMappingURL=react-parlx.js.map
