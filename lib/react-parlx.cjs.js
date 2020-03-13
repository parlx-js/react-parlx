"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react"),r=e(t),a=e(require("parlx.js"));module.exports=e=>{var{settings:l,callbacks:n,parlxMove:s,className:c="parallax",overlay:o,children:i}=e,u=
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
***************************************************************************** */
function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]])}return r}(e,["settings","callbacks","parlxMove","className","overlay","children"]);const p=t.useRef(null);return t.useEffect(()=>{const e=p.current;a.init({elements:e,settings:l,callbacks:n});return s&&e.addEventListener("parlxMove",e=>s(e.detail.move)),()=>e.parlx.destroy()},[n,p,s,l]),r.createElement("div",Object.assign({},u,{ref:p,className:c}),o&&r.createElement("div",{className:"overlay"}),i)};
//# sourceMappingURL=react-parlx.cjs.js.map
