import{s as e,W as t,h as s,t as n,b as r}from"./vendor.fc6dd635.js";import"./admin-docs.fa8bfccc.js";var o=Object.defineProperty,d=Object.getOwnPropertyDescriptor;let i=class extends t{render(e){return s("div",{class:n`w-full border-1 mb-4 border-gray-300 rounded overflow-hidden ${e.class}`,style:Object.assign({breakInside:"avoid"},e.style)},s("div",null,s("slot",{name:"demo"})),s("div",{class:n`border-t-1 border-gray-200 border-solid px-2 text-sm mb-3`},s("h3",{class:n`font-bold bg-white relative -top-2.5 inline-block px-2`},e.title),s("p",null,e.describe)),s("div",null,s("admin-docs",{css:"\n              .docs {\n                padding: 0 !important;\n              }\n            ",mdContent:e.code})))}};i.css=[e.target],i=((e,t,s,n)=>{for(var r,i=n>1?void 0:n?d(t,s):t,l=e.length-1;l>=0;l--)(r=e[l])&&(i=(n?r(t,s,i):r(i))||i);return n&&i&&o(t,s,i),i})([r("code-demo")],i);var l=Object.defineProperty,c=Object.getOwnPropertyDescriptor;let a=class extends t{constructor(){super(...arguments),this.columnCount=2,this.onResize=()=>{this.columnCount=window.innerWidth<768?1:2,this.updateSelf()}}installed(){window.addEventListener("resize",this.onResize)}uninstall(){window.removeEventListener("resize",this.onResize)}render(e){return s("div",{class:e.class,style:Object.assign({columnCount:this.columnCount,columnGap:"1rem",padding:"1rem"},e.style)},s("slot",null))}};a.css=null,a=((e,t,s,n)=>{for(var r,o=n>1?void 0:n?c(t,s):t,d=e.length-1;d>=0;d--)(r=e[d])&&(o=(n?r(t,s,o):r(o))||o);return n&&o&&l(t,s,o),o})([r("code-demo-container")],a);
