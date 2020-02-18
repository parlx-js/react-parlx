"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("react"),t=e(r),a=e(require("prop-types")),l=e(require("parlx.js"));function s(e){var{settings:a,callbacks:s,parlxMove:n,className:o,overlay:c,children:i}=e,p=
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
function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t}(e,["settings","callbacks","parlxMove","className","overlay","children"]);const u=r.useRef(null);return r.useEffect(()=>{const e=u.current;l.init({elements:e,settings:a,callbacks:s});return n&&e.addEventListener("parlxMove",e=>n(e.detail.move)),()=>e.parlx.destroy()},[s,u,n,a]),t.createElement("div",Object.assign({},p,{ref:u,className:o}),c&&t.createElement("div",{className:"overlay"}),i)}s.propTypes={settings:a.object,callbacks:a.object,parlxMove:a.func,className:a.string,overlay:a.bool,children:a.node,props:a.object},s.defaultProps={className:"parallax"},module.exports=s;
//# sourceMappingURL=react-parlx.cjs.js.map
