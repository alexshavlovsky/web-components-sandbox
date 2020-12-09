class t extends HTMLElement{static get version(){return"1.6.1"}}customElements.define("vaadin-lumo-styles",t);let e,o=null,n=window.HTMLImports&&window.HTMLImports.whenReady||null;function r(t){requestAnimationFrame((function(){n?n(t):(o||(o=new Promise((t=>{e=t})),"complete"===document.readyState?e():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))),o.then((function(){t&&t()})))}))}const i="__shadyCSSCachedStyle";let s=null,a=null;class l{constructor(){this.customStyles=[],this.enqueued=!1,r((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&a&&(this.enqueued=!0,r(a))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[i])return t[i];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const o=t[e];if(o[i])continue;const n=this.getStyleForCustomStyle(o);if(n){const t=n.__appliedElement||n;s&&s(t),o[i]=t}}return t}}function c(t,e){for(let o in e)null===o?t.style.removeProperty(o):t.style.setProperty(o,e[o])}l.prototype.addCustomStyle=l.prototype.addCustomStyle,l.prototype.getStyleForCustomStyle=l.prototype.getStyleForCustomStyle,l.prototype.processStyles=l.prototype.processStyles,Object.defineProperties(l.prototype,{transformCallback:{get:()=>s,set(t){s=t}},validateCallback:{get:()=>a,set(t){let e=!1;a||(e=!0),a=t,e&&this.enqueueDocumentValidation()}}});const d=!(window.ShadyDOM&&window.ShadyDOM.inUse);let u,h;function p(t){u=(!t||!t.shimcssproperties)&&(d||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(h=window.ShadyCSS.cssBuild);const m=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?u=window.ShadyCSS.nativeCss:window.ShadyCSS?(p(window.ShadyCSS),window.ShadyCSS=void 0):p(window.WebComponents&&window.WebComponents.flags);const f=u,_=new l;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,o){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,o){},styleSubtree(t,e){_.processStyles(),c(t,e)},styleElement(t){_.processStyles()},styleDocument(t){_.processStyles(),c(document.body,t)},getComputedStyleValue:(t,e)=>function(t,e){const o=window.getComputedStyle(t).getPropertyValue(e);return o?o.trim():""}(t,e),flushCustomStyles(){},nativeCss:f,nativeShadow:d,cssBuild:h,disableRuntime:m}),window.ShadyCSS.CustomStyleInterface=_,window.JSCompiler_renameProperty=function(t,e){return t};let y,b,g=/(url\()([^)]*)(\))/g,v=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function w(t,e){if(t&&v.test(t))return t;if("//"===t)return t;if(void 0===y){y=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",y="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),y)try{return new URL(t,e).href}catch(e){return t}return b||(b=document.implementation.createHTMLDocument("temp"),b.base=b.createElement("base"),b.head.appendChild(b.base),b.anchor=b.createElement("a"),b.body.appendChild(b.anchor)),b.base.href=e,b.anchor.href=t,b.anchor.href||t}function P(t,e){return t.replace(g,(function(t,o,n,r){return o+"'"+w(n.replace(/["']/g,""),e)+"'"+r}))}function x(t){return t.substring(0,t.lastIndexOf("/")+1)}const C=!window.ShadyDOM||!window.ShadyDOM.inUse,S=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),C&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let E=window.Polymer&&window.Polymer.rootPath||x(document.baseURI||window.location.href),k=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,T=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,A=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,O=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,N=window.Polymer&&window.Polymer.legacyOptimizations||!1,z=window.Polymer&&window.Polymer.legacyWarnings||!1,L=window.Polymer&&window.Polymer.syncInitialRender||!1,I=window.Polymer&&window.Polymer.legacyUndefined||!1,M=window.Polymer&&window.Polymer.orderedComputed||!1,F=window.Polymer&&window.Polymer.removeNestedTemplates||!1,R=window.Polymer&&window.Polymer.fastDomIf||!1,D=(window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1),H={},B={};function j(t,e){H[t]=B[t.toLowerCase()]=e}function V(t){return H[t]||B[t.toLowerCase()]}class q extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let o=V(t);return o&&e?o.querySelector(e):o}return null}attributeChangedCallback(t,e,o,n){e!==o&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=w(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=x(e)}return this.__assetpath}register(t){if(t=t||this.id){if(A&&void 0!==V(t))throw j(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,j(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}q.prototype.modules=H,customElements.define("dom-module",q);function Y(t){return q.import(t)}function $(t){const e=P((t.body?t.body:t).textContent,t.baseURI),o=document.createElement("style");return o.textContent=e,o}function U(t){const e=t.trim().split(/\s+/),o=[];for(let t=0;t<e.length;t++)o.push(...J(e[t]));return o}function J(t){const e=Y(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...X(e));const o=e.querySelector("template");o&&t.push(...W(o,e.assetpath)),e._styles=t}return e._styles}function W(t,e){if(!t._styles){const o=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let r=n[t],i=r.getAttribute("include");i&&o.push(...U(i).filter((function(t,e,o){return o.indexOf(t)===e}))),e&&(r.textContent=P(r.textContent,e)),o.push(r)}t._styles=o}return t._styles}function X(t){const e=[],o=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<o.length;t++){let n=o[t];if(n.import){const t=n.import,o=n.hasAttribute("shady-unscoped");if(o&&!t._unscopedStyle){const e=$(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=$(t));e.push(o?t._unscopedStyle:t._style)}}return e}function G(t){let e=Y(t);if(e&&void 0===e._cssText){let t=function(t){let e="",o=X(t);for(let t=0;t<o.length;t++)e+=o[t].textContent;return e}(e),o=e.querySelector("template");o&&(t+=function(t,e){let o="";const n=W(t,e);for(let t=0;t<n.length;t++){let e=n[t];e.parentNode&&e.parentNode.removeChild(e),o+=e.textContent}return o}(o,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}const Z=window.ShadyCSS.CustomStyleInterface;class K extends HTMLElement{constructor(){super(),this._style=null,Z.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=function(t){let e=t.trim().split(/\s+/),o="";for(let t=0;t<e.length;t++)o+=G(e[t]);return o}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",K);const Q=document.createElement("template");Q.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Q.content);const tt=document.createElement("template");tt.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(tt.content);class et{constructor(t){this.value=t.toString()}toString(){return this.value}}function ot(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof et)return function(t){if(t instanceof et)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const nt=function(t,...e){const o=document.createElement("template");return o.innerHTML=e.reduce(((e,o,n)=>e+ot(o)+t[n+1]),t[0]),o},rt=nt`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius-s);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="label"]:not([empty]) {
        margin: 0.1875em 0.375em 0.1875em 0.875em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(rt.content);let it=0;const st=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let o=it++;return function(n){let r=n.__mixinSet;if(r&&r[o])return n;let i=e,s=i.get(n);if(!s){s=t(n),i.set(n,s);let e=Object.create(s.__mixinSet||r||null);e[o]=!0,s.__mixinSet=e}return s}},at=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;function lt(t){return t.indexOf(".")>=0}function ct(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function dt(t,e){return 0===e.indexOf(t+".")}function ut(t,e,o){return e+o.slice(t.length)}function ht(t){if(Array.isArray(t)){let e=[];for(let o=0;o<t.length;o++){let n=t[o].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function pt(t){return Array.isArray(t)?ht(t).split("."):t.toString().split(".")}function mt(t,e,o){let n=t,r=pt(e);for(let t=0;t<r.length;t++){if(!n)return;n=n[r[t]]}return o&&(o.path=r.join(".")),n}function ft(t,e,o){let n=t,r=pt(e),i=r[r.length-1];if(r.length>1){for(let t=0;t<r.length-1;t++){if(n=n[r[t]],!n)return}n[i]=o}else n[e]=o;return r.join(".")}const _t={},yt=/-[a-z]/g,bt=/([A-Z])/g;function gt(t){return _t[t]||(_t[t]=t.indexOf("-")<0?t:t.replace(yt,(t=>t[1].toUpperCase())))}function vt(t){return _t[t]||(_t[t]=t.replace(bt,"-$1").toLowerCase())}let wt=0,Pt=0,xt=[],Ct=0,St=!1,Et=document.createTextNode("");new window.MutationObserver((function(){St=!1;const t=xt.length;for(let e=0;e<t;e++){let t=xt[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}xt.splice(0,t),Pt+=t})).observe(Et,{characterData:!0});const kt={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},Tt={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},At={run:t=>(St||(St=!0,Et.textContent=Ct++),xt.push(t),wt++),cancel(t){const e=t-Pt;if(e>=0){if(!xt[e])throw new Error("invalid async handle: "+t);xt[e]=null}}},Ot=At,Nt=st((t=>class extends t{static createProperties(t){const e=this.prototype;for(let o in t)o in e||e._createPropertyAccessor(o)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,o){let n=this.__data[t],r=this._shouldPropertyChange(t,e,n);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=n),this.__data[t]=e,this.__dataPending[t]=e),r}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Ot.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(t,e,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,o)),this.__dataCounter--}_shouldPropertiesChange(t,e,o){return Boolean(e)}_propertiesChanged(t,e,o){}_shouldPropertyChange(t,e,o){return o!==e&&(o==o||e==e)}attributeChangedCallback(t,e,o,n){e!==o&&this._attributeToProperty(t,o),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,o,n)}_attributeToProperty(t,e,o){if(!this.__serializing){const n=this.__dataAttributes,r=n&&n[t]||t;this[r]=this._deserializeValue(e,o||this.constructor.typeForProperty(r))}}_propertyToAttribute(t,e,o){this.__serializing=!0,o=arguments.length<3?this[t]:o,this._valueToNodeAttribute(this,o,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,o){const n=this._serializeValue(e);"class"!==o&&"name"!==o&&"slot"!==o||(t=at(t)),void 0===n?t.removeAttribute(o):t.setAttribute(o,n)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})),zt={};let Lt=HTMLElement.prototype;for(;Lt;){let t=Object.getOwnPropertyNames(Lt);for(let e=0;e<t.length;e++)zt[t[e]]=!0;Lt=Object.getPrototypeOf(Lt)}const It=st((t=>{const e=Nt(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(gt(t[e]))}static attributeNameForProperty(t){return vt(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const o=this;o.hasAttribute(t)||this._valueToNodeAttribute(o,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let o;switch(e){case Object:try{o=JSON.parse(t)}catch(e){o=t}break;case Array:try{o=JSON.parse(t)}catch(e){o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:o=isNaN(t)?String(t):Number(t),o=new Date(o);break;default:o=super._deserializeValue(t,e)}return o}_definePropertyAccessor(t,e){!function(t,e){if(!zt[e]){let o=t[e];void 0!==o&&(t.__data?t._setPendingProperty(e,o):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=o))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})),Mt={"dom-if":!0,"dom-repeat":!0};let Ft=!1,Rt=!1;function Dt(t){(function(){if(!Ft){Ft=!0;const t=document.createElement("textarea");t.placeholder="a",Rt=t.placeholder===t.textContent}return Rt})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}function Ht(t){let e=t.getAttribute("is");if(e&&Mt[e]){let o=t;for(o.removeAttribute("is"),t=o.ownerDocument.createElement(e),o.parentNode.replaceChild(t,o),t.appendChild(o);o.attributes.length;)t.setAttribute(o.attributes[0].name,o.attributes[0].value),o.removeAttribute(o.attributes[0].name)}return t}function Bt(t,e){let o=e.parentInfo&&Bt(t,e.parentInfo);if(!o)return t;for(let t=o.firstChild,n=0;t;t=t.nextSibling)if(e.parentIndex===n++)return t}function jt(t,e,o,n){n.id&&(e[n.id]=o)}function Vt(t,e,o){if(o.events&&o.events.length)for(let n,r=0,i=o.events;r<i.length&&(n=i[r]);r++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function qt(t,e,o,n){o.templateInfo&&(e._templateInfo=o.templateInfo,e._parentTemplateInfo=n)}const Yt=st((t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let o=t._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=Boolean(e),o.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,o,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,o){return this._parseTemplateNode(t.content,e,o)}static _parseTemplateNode(t,e,o){let n=!1,r=t;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(r,e,o)||n,Dt(r),r.firstChild&&this._parseTemplateChildNodes(r,e,o),r.hasAttributes&&r.hasAttributes()&&(n=this._parseTemplateNodeAttributes(r,e,o)||n),n||o.noted}static _parseTemplateChildNodes(t,e,o){if("script"!==t.localName&&"style"!==t.localName)for(let n,r=t.firstChild,i=0;r;r=n){if("template"==r.localName&&(r=Ht(r)),n=r.nextSibling,r.nodeType===Node.TEXT_NODE){let o=n;for(;o&&o.nodeType===Node.TEXT_NODE;)r.textContent+=o.textContent,n=o.nextSibling,t.removeChild(o),o=n;if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}let s={parentIndex:i,parentInfo:o};this._parseTemplateNode(r,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,o){let n=t,r=this._parseTemplate(n,e);return(r.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),o.templateInfo=r,!0}static _parseTemplateNodeAttributes(t,e,o){let n=!1,r=Array.from(t.attributes);for(let i,s=r.length-1;i=r[s];s--)n=this._parseTemplateNodeAttribute(t,e,o,i.name,i.value)||n;return n}static _parseTemplateNodeAttribute(t,e,o,n,r){return"on-"===n.slice(0,3)?(t.removeAttribute(n),o.events=o.events||[],o.events.push({name:n.slice(3),value:r}),!0):"id"===n&&(o.id=r,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let o=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,n=e.content||t.content,r=document.importNode(n,!0);r.__noInsertionPoint=!e.hasInsertionPoint;let i=r.nodeList=new Array(o.length);r.$={};for(let t,n=0,s=o.length;n<s&&(t=o[n]);n++){let o=i[n]=Bt(r,t);jt(0,r.$,o,t),qt(0,o,t,e),Vt(this,o,t)}return r=r,r}_addMethodEventListenerToNode(t,e,o,n){let r=function(t,e,o){return t=t._methodHost||t,function(e){t[o]?t[o](e,e.detail):console.warn("listener method `"+o+"` not defined")}}(n=n||t,0,o);return this._addEventListenerToNode(t,e,r),r}_addEventListenerToNode(t,e,o){t.addEventListener(e,o)}_removeEventListenerFromNode(t,e,o){t.removeEventListener(e,o)}}));let $t=0;const Ut=[],Jt={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Wt=/[A-Z]/;function Xt(t,e,o){let n=t[e];if(n){if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),o))for(let t in n){let e=n[t],o=n[t]=Array(e.length);for(let t=0;t<e.length;t++)o[t]=e[t]}}else n=t[e]={};return n}function Gt(t,e,o,n,r,i){if(e){let s=!1;const a=$t++;for(let l in o){let c=e[r?ct(l):l];if(c)for(let e,d=0,u=c.length;d<u&&(e=c[d]);d++)e.info&&e.info.lastRun===a||r&&!Kt(l,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,l,o,n,e.info,r,i),s=!0)}return s}return!1}function Zt(t,e,o,n,r,i,s,a){let l=!1,c=e[s?ct(n):n];if(c)for(let e,d=0,u=c.length;d<u&&(e=c[d]);d++)e.info&&e.info.lastRun===o||s&&!Kt(n,e.trigger)||(e.info&&(e.info.lastRun=o),e.fn(t,n,r,i,e.info,s,a),l=!0);return l}function Kt(t,e){if(e){let o=e.name;return o==t||!(!e.structured||!function(t,e){return 0===t.indexOf(e+".")}(o,t))||!(!e.wildcard||!dt(o,t))}return!0}function Qt(t,e,o,n,r){let i="string"==typeof r.method?t[r.method]:r.method,s=r.property;i?i.call(t,t.__data[s],n[s]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function te(t,e,o){let n=ct(e);if(n!==e){return ee(t,vt(n)+"-changed",o[e],e),!0}return!1}function ee(t,e,o,n){let r={value:o,queueProperty:!0};n&&(r.path=n),at(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function oe(t,e,o,n,r,i){let s=(i?ct(e):e)!=e?e:null,a=s?mt(t,s):t.__data[e];s&&void 0===a&&(a=o[e]),ee(t,r.eventName,a,s)}function ne(t,e,o,n,r){let i=t.__data[e];k&&(i=k(i,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,i)}function re(t,e,o,n){let r=t[Jt.COMPUTE];if(r)if(M){$t++;const i=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const o=t[Jt.COMPUTE];let n,{counts:r,ready:i,total:s}=function(t){const e=t.__computeInfo,o={},n=t[Jt.COMPUTE],r=[];let i=0;for(let t in e){const n=e[t];i+=o[t]=n.args.filter((t=>!t.literal)).length+(n.dynamicFn?1:0)}for(let t in n)e[t]||r.push(t);return{counts:o,ready:r,total:i}}(t);for(;n=i.shift();){e.set(n,e.size);const t=o[n];t&&t.forEach((t=>{const e=t.info.methodInfo;--s,0==--r[e]&&i.push(e)}))}if(0!==s){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),s=[];for(let t in e)se(t,r,s,i,n);let a;for(;a=s.shift();)ae(t,"",e,o,a)&&se(a.methodInfo,r,s,i,n);Object.assign(o,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let i=e;for(;Gt(t,r,i,o,n);)Object.assign(o,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}const ie=(t,e,o)=>{let n=0,r=e.length-1,i=-1;for(;n<=r;){const s=n+r>>1,a=o.get(e[s].methodInfo)-o.get(t.methodInfo);if(a<0)n=s+1;else{if(!(a>0)){i=s;break}r=s-1}}i<0&&(i=r+1),e.splice(i,0,t)},se=(t,e,o,n,r)=>{const i=e[r?ct(t):t];if(i)for(let e=0;e<i.length;e++){const s=i[e];s.info.lastRun===$t||r&&!Kt(t,s.trigger)||(s.info.lastRun=$t,ie(s.info,o,n))}};function ae(t,e,o,n,r){let i=me(t,e,o,n,r);if(i===Ut)return!1;let s=r.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,i,!0):(t[s]=i,!1)}function le(t,e,o,n,r,i,s){o.bindings=o.bindings||[];let a={kind:n,target:r,parts:i,literal:s,isCompound:1!==i.length};if(o.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||vt(r)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let o=0;o<a.parts.length;o++){let n=a.parts[o];n.compoundIndex=o,ce(t,e,a,n,l)}}function ce(t,e,o,n,r){if(!n.literal)if("attribute"===o.kind&&"-"===o.target[0])console.warn("Cannot set attribute "+o.target+' because "-" is not a valid attribute starting character');else{let i=n.dependencies,s={index:r,binding:o,part:n,evaluator:t};for(let o=0;o<i.length;o++){let n=i[o];"string"==typeof n&&(n=ge(n),n.wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:de,info:s,trigger:n})}}}function de(t,e,o,n,r,i,s){let a=s[r.index],l=r.binding,c=r.part;if(i&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let n=o[e];e=ut(c.source,l.target,e),a._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(a)}else{let s=r.evaluator._evaluateBinding(t,c,e,o,n,i);s!==Ut&&function(t,e,o,n,r){r=function(t,e,o,n){if(o.isCompound){let r=t.__dataCompoundStorage[o.target];r[n.compoundIndex]=e,e=r.join("")}"attribute"!==o.kind&&("textContent"!==o.target&&("value"!==o.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,r,o,n),k&&(r=k(r,o.target,o.kind,e));if("attribute"==o.kind)t._valueToNodeAttribute(e,r,o.target);else{let n=o.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?e[Jt.READ_ONLY]&&e[Jt.READ_ONLY][n]||e._setPendingProperty(n,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,r)}}(t,a,l,c,s)}}function ue(t,e){if(e.isCompound){let o=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,r=new Array(n.length);for(let t=0;t<n.length;t++)r[t]=n[t].literal;let i=e.target;o[i]=r,e.literal&&"property"==e.kind&&("className"===i&&(t=at(t)),t[i]=e.literal)}}function he(t,e,o){if(o.listenerEvent){let n=o.parts[0];t.addEventListener(o.listenerEvent,(function(t){!function(t,e,o,n,r){let i,s=t.detail,a=s&&s.path;a?(n=ut(o,n,a),i=s&&s.value):i=t.currentTarget[o],i=r?!i:i,e[Jt.READ_ONLY]&&e[Jt.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,i,!0,Boolean(a))||s&&s.queueProperty||e._invalidateProperties()}(t,e,o.target,n.source,n.negate)}))}}function pe(t,e,o,n,r,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:i};for(let r,i=0;i<e.args.length&&(r=e.args[i]);i++)r.literal||t._addPropertyEffect(r.rootProperty,o,{fn:n,info:s,trigger:r});return i&&t._addPropertyEffect(e.methodName,o,{fn:n,info:s}),s}function me(t,e,o,n,r){let i=t._methodHost||t,s=i[r.methodName];if(s){let n=t._marshalArgs(r.args,e,o);return n===Ut?Ut:s.apply(i,n)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const fe=[],_e=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function ye(t){let e="";for(let o=0;o<t.length;o++){e+=t[o].literal||""}return e}function be(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:fe};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let o=ge(t);return o.literal||(e.static=!1),o}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function ge(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),o={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':o.value=e.slice(1,-1),o.literal=!0;break;case"#":o.value=Number(e),o.literal=!0}return o.literal||(o.rootProperty=ct(e),o.structured=lt(e),o.structured&&(o.wildcard=".*"==e.slice(-2),o.wildcard&&(o.name=e.slice(0,-2)))),o}function ve(t,e,o){let n=mt(t,o);return void 0===n&&(n=e[o]),n}function we(t,e,o,n){const r={indexSplices:n};I&&!t._overrideLegacyUndefined&&(e.splices=r),t.notifyPath(o+".splices",r),t.notifyPath(o+".length",e.length),I&&!t._overrideLegacyUndefined&&(r.indexSplices=[])}function Pe(t,e,o,n,r,i){we(t,e,o,[{index:n,addedCount:r,removed:i,object:e,type:"splice"}])}const xe=st((t=>{const e=Yt(It(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Jt}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Ce.length){let t=Ce[Ce.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Jt.READ_ONLY];for(let o in t)e&&e[o]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=t[o])}_addPropertyEffect(t,e,o){this._createPropertyAccessor(t,e==Jt.READ_ONLY);let n=Xt(this,e,!0)[t];n||(n=this[e][t]=[]),n.push(o)}_removePropertyEffect(t,e,o){let n=Xt(this,e,!0)[t],r=n.indexOf(o);r>=0&&n.splice(r,1)}_hasPropertyEffect(t,e){let o=this[e];return Boolean(o&&o[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Jt.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Jt.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Jt.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Jt.COMPUTE)}_setPendingPropertyOrPath(t,e,o,n){if(n||ct(Array.isArray(t)?t[0]:t)!==t){if(!n){let o=mt(this,t);if(!(t=ft(this,t,e))||!super._shouldPropertyChange(t,e,o))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,o))return function(t,e,o){let n=t.__dataLinkedPaths;if(n){let r;for(let i in n){let s=n[i];dt(i,e)?(r=ut(i,s,e),t._setPendingPropertyOrPath(r,o,!0,!0)):dt(s,e)&&(r=ut(s,i,e),t._setPendingPropertyOrPath(r,o,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,o);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,o){o===t[e]&&"object"!=typeof o||("className"===e&&(t=at(t)),t[e]=o)}_setPendingProperty(t,e,o){let n=this.__dataHasPaths&&lt(t),r=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,r[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),n?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(n||this[Jt.NOTIFY]&&this[Jt.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=o),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let o=t[e];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let o in t)!e&&this[Jt.READ_ONLY]&&this[Jt.READ_ONLY][o]||this._setPendingPropertyOrPath(o,t[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,o){let n,r=this.__dataHasPaths;this.__dataHasPaths=!1,re(this,e,o,r),n=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,o,r),this._flushClients(),Gt(this,this[Jt.REFLECT],e,o,r),Gt(this,this[Jt.OBSERVE],e,o,r),n&&function(t,e,o,n,r){let i,s,a=t[Jt.NOTIFY],l=$t++;for(let s in e)e[s]&&(a&&Zt(t,a,l,s,o,n,r)||r&&te(t,s,o))&&(i=!0);i&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,n,e,o,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,o){this[Jt.PROPAGATE]&&Gt(this,this[Jt.PROPAGATE],t,e,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,o)}_runEffectsForTemplate(t,e,o,n){const r=(e,n)=>{Gt(this,t.propertyEffects,e,o,n,t.nodeList);for(let r=t.firstChild;r;r=r.nextSibling)this._runEffectsForTemplate(r,e,o,n)};t.runEffects?t.runEffects(r,e,n):r(e,n)}linkPaths(t,e){t=ht(t),e=ht(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=ht(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let o={path:""};we(this,mt(this,t,o),o.path,e)}get(t,e){return mt(e||this,t)}set(t,e,o){o?ft(o,t,e):this[Jt.READ_ONLY]&&this[Jt.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let o={path:""},n=mt(this,t,o),r=n.length,i=n.push(...e);return e.length&&Pe(this,n,o.path,r,e.length,[]),i}pop(t){let e={path:""},o=mt(this,t,e),n=Boolean(o.length),r=o.pop();return n&&Pe(this,o,e.path,o.length,0,[r]),r}splice(t,e,o,...n){let r,i={path:""},s=mt(this,t,i);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),r=2===arguments.length?s.splice(e):s.splice(e,o,...n),(n.length||r.length)&&Pe(this,s,i.path,e,n.length,r),r}shift(t){let e={path:""},o=mt(this,t,e),n=Boolean(o.length),r=o.shift();return n&&Pe(this,o,e.path,0,0,[r]),r}unshift(t,...e){let o={path:""},n=mt(this,t,o),r=n.unshift(...e);return e.length&&Pe(this,n,o.path,0,e.length,[]),r}notifyPath(t,e){let o;if(1==arguments.length){let n={path:""};e=mt(this,t,n),o=n.path}else o=Array.isArray(t)?ht(t):t;this._setPendingPropertyOrPath(o,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var o;this._addPropertyEffect(t,Jt.READ_ONLY),e&&(this["_set"+(o=t,o[0].toUpperCase()+o.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,o){let n={property:t,method:e,dynamicFn:Boolean(o)};this._addPropertyEffect(t,Jt.OBSERVE,{fn:Qt,info:n,trigger:{name:t}}),o&&this._addPropertyEffect(e,Jt.OBSERVE,{fn:Qt,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let o=be(t);if(!o)throw new Error("Malformed observer expression '"+t+"'");pe(this,o,Jt.OBSERVE,me,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Jt.NOTIFY,{fn:oe,info:{eventName:vt(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Jt.REFLECT,{fn:ne,info:{attrName:e}})}_createComputedProperty(t,e,o){let n=be(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");const r=pe(this,n,Jt.COMPUTE,ae,t,o);Xt(this,"__computeInfo")[t]=r}_marshalArgs(t,e,o){const n=this.__data,r=[];for(let i=0,s=t.length;i<s;i++){let{name:s,structured:a,wildcard:l,value:c,literal:d}=t[i];if(!d)if(l){const t=dt(s,e),r=ve(n,o,t?e:s);c={path:t?e:s,value:r,base:t?mt(n,s):r}}else c=a?ve(n,o,s):n[s];if(I&&!this._overrideLegacyUndefined&&void 0===c&&t.length>1)return Ut;r[i]=c}return r}static addPropertyEffect(t,e,o){this.prototype._addPropertyEffect(t,e,o)}static createPropertyObserver(t,e,o){this.prototype._createPropertyObserver(t,e,o)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,o){this.prototype._createComputedProperty(t,e,o)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let o=this.constructor._parseTemplate(t),n=this.__preBoundTemplateInfo==o;if(!n)for(let t in o.propertyEffects)this._createPropertyAccessor(t);if(e)if(o=Object.create(o),o.wasPreBound=n,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,n=e.lastChild;o.parent=e,e.lastChild=o,o.previousSibling=n,n?n.nextSibling=o:e.firstChild=o}else this.__templateInfo=o;else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(t,e,o){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(o)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),Ce.push(this);let o=super._stampTemplate(t,e);if(Ce.pop(),e.nodeList=o.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=o.firstChild;e;e=e.nextSibling)t.push(e)}return o.templateInfo=e,function(t,e){let{nodeList:o,nodeInfoList:n}=e;if(n.length)for(let e=0;e<n.length;e++){let r=n[e],i=o[e],s=r.bindings;if(s)for(let e=0;e<s.length;e++){let o=s[e];ue(i,o),he(i,t,o)}i.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:o,nextSibling:n,parent:r}=e;o?o.nextSibling=n:r&&(r.firstChild=n),n?n.previousSibling=o:r&&(r.lastChild=o),e.nextSibling=e.previousSibling=null;let i=e.childNodes;for(let t=0;t<i.length;t++){let e=i[t];at(at(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,o,n){let r=e._parseTemplateNode.call(this,t,o,n);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,o);e&&(t.textContent=ye(e)||" ",le(this,o,n,"text","textContent",e),r=!0)}return r}static _parseTemplateNodeAttribute(t,o,n,r,i){let s=this._parseBindings(i,o);if(s){let e=r,i="property";Wt.test(r)?i="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),i="attribute");let a=ye(s);return a&&"attribute"==i&&("class"==r&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(r)),t.setAttribute(r,a)),"attribute"==i&&"disable-upgrade$"==e&&t.setAttribute(r,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(r=gt(r)),le(this,o,n,i,r,s,a),!0}return e._parseTemplateNodeAttribute.call(this,t,o,n,r,i)}static _parseTemplateNestedTemplate(t,o,n){let r=e._parseTemplateNestedTemplate.call(this,t,o,n);const i=t.parentNode,s=n.templateInfo,a="dom-if"===i.localName,l="dom-repeat"===i.localName;F&&(a||l)&&(i.removeChild(t),(n=n.parentInfo).templateInfo=s,n.noted=!0,r=!1);let c=s.hostProps;if(R&&a)c&&(o.hostProps=Object.assign(o.hostProps||{},c),F||(n.parentInfo.noted=!0));else{let t="{";for(let e in c){le(this,o,n,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return r}static _parseBindings(t,e){let o,n=[],r=0;for(;null!==(o=_e.exec(t));){o.index>r&&n.push({literal:t.slice(r,o.index)});let i=o[1][0],s=Boolean(o[2]),a=o[3].trim(),l=!1,c="",d=-1;"{"==i&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let u=be(a),h=[];if(u){let{args:t,methodName:o}=u;for(let e=0;e<t.length;e++){let o=t[e];o.literal||h.push(o)}let n=e.dynamicFns;(n&&n[o]||u.static)&&(h.push(o),u.dynamicFn=!0)}else h.push(a);n.push({source:a,mode:i,negate:s,customEvent:l,signature:u,dependencies:h,event:c}),r=_e.lastIndex}if(r&&r<t.length){let e=t.substring(r);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,o,n,r,i){let s;return s=e.signature?me(t,o,n,0,e.signature):o!=e.source?mt(t,e.source):i&&lt(o)?mt(t,o):t.__data[o],e.negate&&(s=!s),s}}})),Ce=[];const Se=st((t=>{const e=Nt(t);function o(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof r?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const o=t.properties;o&&(e=function(t){const e={};for(let o in t){const n=t[o];e[o]="function"==typeof n?{type:n}:n}return e}(o))}t.__ownProperties=e}return t.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const t=this._properties;this.__observedAttributes=t?Object.keys(t).map((t=>this.prototype._addPropertyToAttributeMap(t))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=o(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=o(this);this.__properties=Object.assign({},t&&t._properties,n(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r})),Ee=window.ShadyCSS&&window.ShadyCSS.cssBuild,ke=st((t=>{const e=Se(xe(t));function o(t,e,o,n){o.computed&&(o.readOnly=!0),o.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,o.computed,n)),o.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!o.computed):!1===o.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),o.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===o.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),o.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===o.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),o.observer&&t._createPropertyObserver(e,o.observer,n[o.observer]),t._addPropertyToAttributeMap(e)}function n(t,e,o,n){if(!Ee){const r=e.content.querySelectorAll("style"),i=W(e),s=function(t){let e=Y(t);return e?X(e):[]}(o),a=e.content.firstElementChild;for(let o=0;o<s.length;o++){let r=s[o];r.textContent=t._processStyleText(r.textContent,n),e.content.insertBefore(r,a)}let l=0;for(let e=0;e<i.length;e++){let o=i[e],s=r[l];s!==o?(o=o.cloneNode(!0),s.parentNode.insertBefore(o,s)):l++,o.textContent=t._processStyleText(o.textContent,n)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,o),D&&Ee&&S){const o=e.content.querySelectorAll("style");if(o){let e="";Array.from(o).forEach((t=>{e+=t.textContent,t.parentNode.removeChild(t)})),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}return class extends e{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((o=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",o))||(o.__ownObservers=o.hasOwnProperty(JSCompiler_renameProperty("observers",o))?o.observers:null),o.__ownObservers);var o;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):N||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)o(this.prototype,e,t[e],t)}static createObservers(t,e){const o=this.prototype;for(let n=0;n<t.length;n++)o._createMethodObserver(t[n],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!A||O)&&(e=q.import(t,"template"),A&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=x(t.url);else{const t=q.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=E,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let o in e){let n=e[o];"value"in n&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[o]=n)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let o=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof o.value?o.value.call(this):o.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return P(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const o=this.importPath;n(this,e,t,o?w(o):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=at(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),L&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=w(this.importPath)),w(t,e)}static _parseTemplateContent(t,o,n){return o.dynamicFns=o.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,o,n)}static _addTemplatePropertyEffect(t,o,n){return!z||o in this._properties||n.info.part.signature&&n.info.part.signature.static||n.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,o,n)}}}))(HTMLElement);class Te{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run((()=>{this._timer=null,Ae.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Ae.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,o){return t instanceof Te?t._cancelAsync():t=new Te,t.setConfig(e,o),t}}let Ae=new Set;let Oe="string"==typeof document.head.style.touchAction,Ne="__polymerGestures",ze="__polymerGesturesHandled",Le="__polymerGesturesTouchAction",Ie=["mousedown","mousemove","mouseup","click"],Me=[0,1,4,2],Fe=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function Re(t){return Ie.indexOf(t)>-1}let De=!1;function He(t){if(!Re(t)&&"touchend"!==t)return Oe&&De&&T?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){De=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let Be=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const je=[],Ve={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},qe={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ye(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let o=t.getRootNode();if(t.id){let n=o.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<n.length;t++)e.push(n[t])}}return e}let $e=function(t){let e=t.sourceCapabilities;var o;if((!e||e.firesTouchEvents)&&(t[ze]={skip:!0},"click"===t.type)){let e=!1,n=Ze(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)je.push(n[t]);else if(o=n[t],Ve[o.localName]){let o=Ye(n[t]);for(let t=0;t<o.length;t++)e=e||je.indexOf(o[t])>-1}if(n[t]===We.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function Ue(t){let e=Be?["click"]:Ie;for(let o,n=0;n<e.length;n++)o=e[n],t?(je.length=0,document.addEventListener(o,$e,!0)):document.removeEventListener(o,$e,!0)}function Je(t){let e=t.type;if(!Re(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Fe&&(e=Me[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let We={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Xe(t,e,o){t.movefn=e,t.upfn=o,document.addEventListener("mousemove",e),document.addEventListener("mouseup",o)}function Ge(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",(function(t){We.mouse.mouseIgnoreJob||Ue(!0),We.mouse.target=Ze(t)[0],We.mouse.mouseIgnoreJob=Te.debounce(We.mouse.mouseIgnoreJob,kt.after(2500),(function(){Ue(),We.mouse.target=null,We.mouse.mouseIgnoreJob=null}))}),!!De&&{passive:!0});const Ze=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Ke={},Qe=[];function to(t){const e=Ze(t);return e.length>0?e[0]:t.target}function eo(t){let e,o=t.type,n=t.currentTarget.__polymerGestures;if(!n)return;let r=n[o];if(r){if(!t[ze]&&(t[ze]={},"touch"===o.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===o&&1===t.touches.length&&(We.touch.id=e.identifier),We.touch.id!==e.identifier)return;Oe||"touchstart"!==o&&"touchmove"!==o||function(t){let e=t.changedTouches[0],o=t.type;if("touchstart"===o)We.touch.x=e.clientX,We.touch.y=e.clientY,We.touch.scrollDecided=!1;else if("touchmove"===o){if(We.touch.scrollDecided)return;We.touch.scrollDecided=!0;let o=function(t){let e="auto",o=Ze(t);for(let t,n=0;n<o.length;n++)if(t=o[n],t[Le]){e=t[Le];break}return e}(t),n=!1,r=Math.abs(We.touch.x-e.clientX),i=Math.abs(We.touch.y-e.clientY);t.cancelable&&("none"===o?n=!0:"pan-x"===o?n=i>r:"pan-y"===o&&(n=r>i)),n?t.preventDefault():so("track")}}(t)}if(e=t[ze],!e.skip){for(let o,n=0;n<Qe.length;n++)o=Qe[n],r[o.name]&&!e[o.name]&&o.flow&&o.flow.start.indexOf(t.type)>-1&&o.reset&&o.reset();for(let n,i=0;i<Qe.length;i++)n=Qe[i],r[n.name]&&!e[n.name]&&(e[n.name]=!0,n[o](t))}}}function oo(t,e,o){return!!Ke[e]&&(function(t,e,o){let n=Ke[e],r=n.deps,i=n.name,s=t[Ne];s||(t[Ne]=s={});for(let e,o,n=0;n<r.length;n++)e=r[n],Be&&Re(e)&&"click"!==e||(o=s[e],o||(s[e]=o={_count:0}),0===o._count&&t.addEventListener(e,eo,He(e)),o[i]=(o[i]||0)+1,o._count=(o._count||0)+1);t.addEventListener(e,o),n.touchAction&&function(t,e){Oe&&t instanceof HTMLElement&&At.run((()=>{t.style.touchAction=e}));t[Le]=e}(t,n.touchAction)}(t,e,o),!0)}function no(t,e,o){return!!Ke[e]&&(function(t,e,o){let n=Ke[e],r=n.deps,i=n.name,s=t[Ne];if(s)for(let e,o,n=0;n<r.length;n++)e=r[n],o=s[e],o&&o[i]&&(o[i]=(o[i]||1)-1,o._count=(o._count||1)-1,0===o._count&&t.removeEventListener(e,eo,He(e)));t.removeEventListener(e,o)}(t,e,o),!0)}function ro(t){Qe.push(t);for(let e=0;e<t.emits.length;e++)Ke[t.emits[e]]=t}function io(t,e,o){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=o,at(t).dispatchEvent(n),n.defaultPrevented){let t=o.preventer||o.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function so(t){let e=function(t){for(let e,o=0;o<Qe.length;o++){e=Qe[o];for(let o,n=0;n<e.emits.length;n++)if(o=e.emits[n],o===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function ao(t,e,o,n){e&&io(e,t,{x:o.clientX,y:o.clientY,sourceEvent:o,preventer:n,prevent:function(t){return so(t)}})}function lo(t,e,o){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),r=Math.abs(t.y-o);return n>=5||r>=5}function co(t,e,o){if(!e)return;let n,r=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],s=i.x-t.x,a=i.y-t.y,l=0;r&&(n=i.x-r.x,l=i.y-r.y),io(e,"track",{state:t.state,x:o.clientX,y:o.clientY,dx:s,dy:a,ddx:n,ddy:l,sourceEvent:o,hover:function(){return function(t,e){let o=document.elementFromPoint(t,e),n=o;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let r=n;if(n=n.shadowRoot.elementFromPoint(t,e),r===n)break;n&&(o=n)}return o}(o.clientX,o.clientY)}})}function uo(t,e,o){let n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),i=to(o||e);!i||qe[i.localName]&&i.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=25&&r<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=to(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let o=e.getBoundingClientRect(),n=t.pageX,r=t.pageY;return!(n>=o.left&&n<=o.right&&r>=o.top&&r<=o.bottom)}return!1}(e))&&(t.prevent||io(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:o}))}ro({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Ge(this.info)},mousedown:function(t){if(!Je(t))return;let e=to(t),o=this;Xe(this.info,(function(t){Je(t)||(ao("up",e,t),Ge(o.info))}),(function(t){Je(t)&&ao("up",e,t),Ge(o.info)})),ao("down",e,t)},touchstart:function(t){ao("down",to(t),t.changedTouches[0],t)},touchend:function(t){ao("up",to(t),t.changedTouches[0],t)}}),ro({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ge(this.info)},mousedown:function(t){if(!Je(t))return;let e=to(t),o=this,n=function(t){let n=t.clientX,r=t.clientY;lo(o.info,n,r)&&(o.info.state=o.info.started?"mouseup"===t.type?"end":"track":"start","start"===o.info.state&&so("tap"),o.info.addMove({x:n,y:r}),Je(t)||(o.info.state="end",Ge(o.info)),e&&co(o.info,e,t),o.info.started=!0)};Xe(this.info,n,(function(t){o.info.started&&n(t),Ge(o.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=to(t),o=t.changedTouches[0],n=o.clientX,r=o.clientY;lo(this.info,n,r)&&("start"===this.info.state&&so("tap"),this.info.addMove({x:n,y:r}),co(this.info,e,o),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=to(t),o=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:o.clientX,y:o.clientY}),co(this.info,e,o))}}),ro({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){Je(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){Je(t)&&uo(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){uo(this.info,t.changedTouches[0],t)}});const ho=st((t=>class extends t{_addEventListenerToNode(t,e,o){oo(t,e,o)||super._addEventListenerToNode(t,e,o)}_removeEventListenerFromNode(t,e,o){no(t,e,o)||super._removeEventListenerFromNode(t,e,o)}})),po=t=>class extends t{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),"theme"===t&&this._setTheme(o)}},mo=t=>class extends(po(t)){static finalize(){super.finalize();const t=this.prototype._template,e=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,o=Object.getPrototypeOf(this.prototype)._template;o&&!e&&Array.from(o.content.querySelectorAll("style[include]")).forEach((e=>{this._includeStyle(e.getAttribute("include"),t)})),this._includeMatchingThemes(t)}static _includeMatchingThemes(t){const e=q.prototype.modules;let o=!1;const n=this.is+"-default-theme";Object.keys(e).sort(((t,e)=>{const o=0===t.indexOf("vaadin-"),n=0===e.indexOf("vaadin-"),r=["lumo-","material-"],i=r.filter((e=>0===t.indexOf(e))).length>0,s=r.filter((t=>0===e.indexOf(t))).length>0;return o!==n?o?-1:1:i!==s?i?-1:1:0})).forEach((r=>{if(r!==n){const n=e[r].getAttribute("theme-for");n&&n.split(" ").forEach((e=>{new RegExp("^"+e.split("*").join(".*")+"$").test(this.is)&&(o=!0,this._includeStyle(r,t))}))}})),!o&&e[n]&&this._includeStyle(n,t)}static _includeStyle(t,e){if(e&&!e.content.querySelector(`style[include="${t}"]`)){const o=document.createElement("style");o.setAttribute("include",t),e.content.appendChild(o)}}};let fo=!1;window.addEventListener("keydown",(()=>{fo=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{fo=!1}),{capture:!0});const _o=t=>class extends((t=>class extends t{static get properties(){var t={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(t.tabIndex=t.tabindex),t}})(t)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",(t=>{t.composedPath()[0]===this?this.contains(t.relatedTarget)||this._focus():-1===t.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)})),this.addEventListener("focusout",(t=>this._setFocused(!1))),super.ready();const t=t=>{t.composed||t.target.dispatchEvent(new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",t),this.shadowRoot.addEventListener("focusout",t),this.addEventListener("keydown",(t=>{if(!t.defaultPrevented&&9===t.keyCode)if(t.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout((()=>this._isShiftTabbing=!1),0);else{const t=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(t&&parseFloat(t[1])>=63&&parseFloat(t[1])<66&&this.parentNode&&this.nextSibling){const t=document.createElement("input");t.style.position="absolute",t.style.opacity="0",t.tabIndex=this.tabIndex,this.parentNode.insertBefore(t,this.nextSibling),t.focus(),t.addEventListener("focusout",(()=>this.parentNode.removeChild(t)))}}})),this.autofocus&&!this.disabled&&window.requestAnimationFrame((()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){t?this.setAttribute("focused",""):this.removeAttribute("focused"),t&&fo?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(t){this.focusElement.disabled=t,t?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(t){void 0!==t&&(this.focusElement.tabIndex=t),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=t=void 0),window.ShadyDOM&&this.setProperties({tabIndex:t,tabindex:t})}click(){this.disabled||super.click()}};class yo{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,o){const{scrollLeft:n}=o;if("rtl"!==e||!t)return n;switch(t){case"negative":return o.scrollWidth-o.clientWidth+n;case"reverse":return o.scrollWidth-o.clientWidth-n}return n}static setNormalizedScrollLeft(t,e,o,n){if("rtl"===e&&t)switch(t){case"negative":o.scrollLeft=o.clientWidth-o.scrollWidth+n;break;case"reverse":o.scrollLeft=o.scrollWidth-o.clientWidth-n;break;default:o.scrollLeft=n}else o.scrollLeft=n}}const bo=[];let go;new MutationObserver((function(){const t=wo();bo.forEach((e=>{vo(e,t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const vo=function(t,e){e?t.setAttribute("dir",e):t.removeAttribute("dir")},wo=function(){return document.documentElement.getAttribute("dir")},Po=t=>class extends t{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),go||(go=yo.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),vo(this,wo()))}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),"dir"!==t)return;const n=o===wo()&&-1===bo.indexOf(this),r=!o&&e&&-1===bo.indexOf(this),i=o!==wo()&&e===wo();n||r?(this.__subscribe(),vo(this,wo())):i&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(t=!0){t?-1===bo.indexOf(this)&&bo.push(this):bo.indexOf(this)>-1&&bo.splice(bo.indexOf(this),1)}__getNormalizedScrollLeft(t){return yo.getNormalizedScrollLeft(go,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return yo.setNormalizedScrollLeft(go,this.getAttribute("dir")||"ltr",t,e)}},xo=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Co=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function So(t,e){if("function"!=typeof t)return;const o=xo.exec(t.toString());if(o)try{t=new Function(o[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const Eo=function(t,e){if(window.Vaadin.developmentMode)return So(t,e)};function ko(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Co?!(Co&&Object.keys(Co).map((t=>Co[t])).filter((t=>t.productionMode)).length>0):!So((function(){return!0})))}catch(t){return!1}}());const To=function(){return Eo(ko)};let Ao;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){To&&To()};const Oo=new Set,No=t=>class extends(Po(t)){static finalize(){super.finalize();const{is:t}=this;var e;t&&!Oo.has(t)&&(window.Vaadin.registrations.push(this),Oo.add(t),window.Vaadin.developmentModeCallback&&(Ao=Te.debounce(Ao,Tt,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),e=Ao,Ae.add(e)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};class zo extends(No(_o(mo(ho(ke))))){static get template(){return nt`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.5.0"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(t){this._storedName=t}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const t=this.getAttribute("name");t&&(this.name=t),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const t=this.shadowRoot.querySelector('[part~="label"]'),e=t.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(e)?t.setAttribute("empty",""):t.removeAttribute("empty")}_isAssignedNodesEmpty(t){return 0===t.length||1==t.length&&t[0].nodeType==Node.TEXT_NODE&&""===t[0].textContent.trim()}_checkedChanged(t){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(t))}_indeterminateChanged(t){t?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",(t=>{this.__interactionsAllowed(t)&&this.setAttribute("active","")})),this._addEventListenerToNode(this,"up",(()=>this.removeAttribute("active"))),this.addEventListener("keydown",(t=>{this.__interactionsAllowed(t)&&32===t.keyCode&&(t.preventDefault(),this.setAttribute("active",""))})),this.addEventListener("keyup",(t=>{this.__interactionsAllowed(t)&&32===t.keyCode&&(t.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))}))}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(t){return!this.disabled&&"a"!==t.target.localName}_handleClick(t){this.__interactionsAllowed(t)&&(this.indeterminate?(this.indeterminate=!1,t.preventDefault(),this._toggleChecked()):t.composedPath()[0]!==this._nativeCheckbox&&(t.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(zo.is,zo);const Lo=document.createElement("template");Lo.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(Lo.content);const Io=document.createElement("template");Io.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(Io.content);const Mo=document.createElement("template");Mo.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Mo.content);const Fo=nt`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Fo.content);class Ro extends(No(_o(mo(ho(ke))))){static get template(){return nt`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){oo(this,"down",(()=>!this.disabled&&this.setAttribute("active",""))),oo(this,"up",(()=>this.removeAttribute("active"))),this.addEventListener("keydown",(t=>!this.disabled&&[13,32].indexOf(t.keyCode)>=0&&this.setAttribute("active",""))),this.addEventListener("keyup",(()=>this.removeAttribute("active"))),this.addEventListener("blur",(()=>this.removeAttribute("active")))}get focusElement(){return this.$.button}}customElements.define(Ro.is,Ro);export{Ro as ButtonElement,zo as CheckboxElement};
