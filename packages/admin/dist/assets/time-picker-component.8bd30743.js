import{W as e,h as i,t,s as m,b as o}from"./vendor.897da41b.js";import"./admin-docs.ccbae214.js";import"./index.aa903d64.js";import"./___vite-browser-external_commonjs-proxy.6f562c52.js";var s=Object.defineProperty,d=Object.getOwnPropertyDescriptor;let c=class extends e{constructor(){super(...arguments),this.mdA="\n  ```html\n<o-time-picker></o-time-picker>\n```\n  ",this.mdB='\n  ```html\n  <o-time-picker size="mini"></o-time-picker>\n  <o-time-picker size="small"></o-time-picker>\n  <o-time-picker size="medium"></o-time-picker>\n  ```\n  ',this.mdC='\n  ```html\n  <o-time-picker  width="200px" ></o-time-picker> \n  ```\n  ',this.mdD='\n  ```html\n  <o-time-picker  placeholder = "请选择时间" ></o-time-picker> \n  ```\n  ',this.mdE="\n  ```html\n  <o-time-picker  defaultHour={1} defaultMinute={2} ></o-time-picker> \n  ```\n  ",this.mdF='\n  ```html\n  <o-time-picker  enableSeconds="false"></o-time-picker> \n  ```\n  ',this.mdG="\n  ```html\n  <o-time-picker  hourIncrement={2} minuteIncrement={5} ></o-time-picker> \n  ```\n  ",this.mdH='\n  ```html\n  <o-time-picker  time_24hr="true" ></o-time-picker> \n  ```\n  '}render(){return i("div",{class:t`px-4`},i("div",{class:t`flex flex-col sm:flex-row md:flex-row flex-wrap gap-x-4`},i("code-demo",{class:t`flex-1 md:w-3/6`,title:"基本",describe:"最简单的 Loading",code:this.mdA},i("div",{slot:"demo",class:t`px-5 py-5`},i("o-time-picker",null))),i("code-demo",{class:t`flex-1 md:w-3/6`,title:"不同宽度",describe:"支持传入 width 控制宽度",code:this.mdC},i("div",{slot:"demo",class:t`px-5 py-5`},i("o-time-picker",{width:"250px"}," "))),i("code-demo",{class:t`flex-1 md:w-3/6`,title:"不同尺寸",describe:"size可以设置为'medium'，'small'，'mini'",code:this.mdB},i("div",{slot:"demo",class:t`px-5 py-5`},i("o-time-picker",{size:"mini",style:"margin: auto 1px"}),i("o-time-picker",{size:"small",style:"margin: auto 1px"}),i("o-time-picker",{size:"medium",style:"margin: auto 1px"}))),i("code-demo",{class:t`flex-1 md:w-3/6`,title:"设置占位符",describe:"支持传入 placeholder 控制占位符",code:this.mdD},i("div",{slot:"demo",class:t`px-5 py-5`},i("o-time-picker",{placeholder:"请选择时间"}))),i("code-demo",{class:t`flex-1 md:w-3/6`,title:"设置默认时间",describe:"支持传入 defaultHour、defaultMinute设置默认小时、分钟",code:this.mdE},i("div",{slot:"demo",class:t`px-5 py-5`},i("o-time-picker",{defaultHour:1,defaultMinute:2}))),i("code-demo",{class:t`flex-1 md:w-3/6`,title:"禁用秒",describe:"支持传入 enableSeconds 禁用秒",code:this.mdF},i("div",{slot:"demo",class:t`px-5 py-5`},i("o-time-picker",{enableSeconds:"false"}))),i("code-demo",{class:t`flex-1 md:w-3/6`,title:"设置小时、分钟增量",describe:"支持传入 hourIncrement、minuteIncrement 设置小时、分钟增量",code:this.mdG},i("div",{slot:"demo",class:t`px-5 py-5`},i("o-time-picker",{hourIncrement:2,minuteIncrement:1}))),i("code-demo",{class:t`flex-1 md:w-3/6`,title:"设置24小时制",describe:"支持传入 time_24hr 设置是否为24小时制",code:this.mdH},i("div",{slot:"demo",class:t`px-5 py-5`},i("o-time-picker",{time_24hr:"true"})))))}};c.css=m.target,c=((e,i,t,m)=>{for(var o,c=m>1?void 0:m?d(i,t):i,r=e.length-1;r>=0;r--)(o=e[r])&&(c=(m?o(i,t,c):o(c))||c);return m&&c&&s(i,t,c),c})([o("time-picker-component")],c);export{c as default};
