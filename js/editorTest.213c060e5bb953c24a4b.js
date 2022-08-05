!function(){"use strict";function n(n){const e=new Map;if(!e.has(n)){const t=document.getElementById(n);if(!t)return null;e.set(n,t)}return e.get(n)}class e extends HTMLElement{#n=null;constructor(){super(),this.#n=this.attachShadow({mode:"closed"}),this.#n.appendChild(n("e-editor-template").content.cloneNode(!0))}}n("e-editor-template")||(document.body.innerHTML+='<template id="e-editor-template">\n  <style>\n    * {\n      margin: 0;\n      padding: 0;\n    }\n\n    .e-editor-box {\n      width: 400px;\n      height: 300px;\n      padding: 8px;\n      border: 1px solid red;\n    }\n  </style>\n  <div contenteditable="true" class="e-editor-box">\n    Editor\n  </div>\n</template>\n'),customElements.define("e-editor",e);class t extends HTMLElement{#n=null;#e=null;#t=null;constructor(){super(),this.#n=this.attachShadow({mode:"closed"}),this.#n.appendChild(document.getElementById("page-header").content.cloneNode(!0)),this.#e=this.#n.querySelector("#manuscript-logo-img"),this.#t=this.#n.querySelector("#manuscript-logo-text")}connectedCallback(){this.#e.addEventListener("click",this.#o),this.#t.addEventListener("click",this.#o)}#o(){const n=window.location.href;console.log(n),/manuscript/.test(n)?window.location.assign("/manuscript"):window.location.assign("/")}}document.getElementById("page-header")||(document.body.innerHTML+='<template id="page-header">\n  <style>\n    .page-header-box {\n      --logoSize: 36px;\n\n      position: sticky;\n      width: 100vw;\n      height: 48px;\n      top: 0;\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n      padding: 0 8px;\n      font-size: 12px;\n      box-sizing: border-box;\n      z-index: 9999;\n      background-color: #32343d;\n      box-sizing: border-box;\n      box-shadow: 0px 5px 10px #afafaf;\n      color: #ffffff;\n    }\n\n    .manuscript-logo-box {\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n    }\n\n    .manuscript-logo-img {\n      width: var(--logoSize);\n      transform: rotateY(180deg);\n      border: 1px solid #343434;\n      border-radius: 50%;\n      cursor: pointer;\n      background-color: #fff;\n    }\n\n    .manuscript-logo-text {\n      text-decoration: underline;\n      font-weight: bolder;\n      transition: all .3s ease-in-out;\n      cursor: pointer;\n      margin-left: 8px;\n    }\n\n    .manuscript-logo-text:hover {\n      color: rgb(3, 145, 98);\n    }\n\n    .page-title-box {\n      margin-left: 16px;\n      font-size: 16px;\n      font-weight: bolder;\n    }\n  </style>\n  <div class="page-header-box">\n    <div class="manuscript-logo-box">\n      <img\n        id="manuscript-logo-img"\n        class="manuscript-logo-img"\n        src="/assets/images/writing.a59d3288.png"\n        alt="tigercheng manuscript logo"\n      />\n      <div\n        id="manuscript-logo-text"\n        class="manuscript-logo-text"\n      >ALLX Manuscript (Loom)</div>\n    </div>\n    <div class="page-title-box">\n      <slot></slot>\n    </div>\n  </div>\n</template>'),customElements.define("page-header",t)}();