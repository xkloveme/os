import{_ as e}from"./index.37d00e0c.js";import{r as t,f as n,h as s,t as a,W as l,X as r,p as o,k as u}from"./vendor.f1e5cef0.js";const c={setup(){let e=t("1%"),n=1;var s=setInterval((function(){n++,100==n&&clearInterval(s),e.value=`${n}%`}),1e5);const a={61:!0,107:!0,109:!0,173:!0,187:!0,189:!0};return document.onkeydown=function(e){window.event.returnValue=!1,27==window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1);const t=e||window.event;(t.ctrlKey||t.metaKey)&&a[t.keyCode]?t.preventDefault():t.detail&&(e.returnValue=!1)},document.body.addEventListener("wheel",(e=>{if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}),{passive:!1}),window.oncontextmenu=function(e){let t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),e.preventDefault()},{num:e}}},i=e=>(l("data-v-728f340e"),e=e(),r(),e),d={class:"vista"},m={className:"tip"},f=i((()=>s("img",{className:"loading",src:"//gitee.com/zyanggc/oss/raw/master/works/fake.update.win7.loading.gif"},null,-1))),v={className:"txt"},p={className:"line"},w=o(" Installing Updates 5 of 68 - "),g={className:"percent"},k=o(" complete. "),y=i((()=>s("span",{className:"line"},"Do not turn off your computer",-1))),q=i((()=>s("img",{className:"logo",src:"https://gitee.com/zyanggc/oss/raw/master/works/fake.update.win.vista.logo.png"},null,-1)));var F=e(c,[["render",function(e,t,l,r,o,c){return u(),n("div",d,[s("div",m,[f,s("div",v,[s("span",p,[w,s("span",g,a(r.num),1),k]),y])]),q])}],["__scopeId","data-v-728f340e"]]);export{F as default};