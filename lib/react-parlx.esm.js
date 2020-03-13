import e,{useRef as r,useEffect as t}from"react";import a from"parlx.js";
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
***************************************************************************** */export default l=>{var{settings:n,callbacks:o,parlxMove:s,className:c="parallax",overlay:i,children:p}=l,m=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t}(l,["settings","callbacks","parlxMove","className","overlay","children"]);const v=r(null);return t(()=>{const e=v.current;a.init({elements:e,settings:n,callbacks:o});return s&&e.addEventListener("parlxMove",e=>s(e.detail.move)),()=>e.parlx.destroy()},[o,v,s,n]),e.createElement("div",Object.assign({},m,{ref:v,className:c}),i&&e.createElement("div",{className:"overlay"}),p)};
//# sourceMappingURL=react-parlx.esm.js.map
