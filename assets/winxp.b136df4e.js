import{_ as e}from"./index.b0acdd5d.js";import{r as t,f as n,h as u,t as s,X as r,O as l,P as a,k as o}from"./vendor.08bd9b48.js";const d={setup(){let e=t("1%"),n=1;var u=setInterval((function(){n++,100==n&&clearInterval(u),e.value=`${n}%`}),1e5);const s={61:!0,107:!0,109:!0,173:!0,187:!0,189:!0};return document.onkeydown=function(e){window.event.returnValue=!1,27==window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1);const t=e||window.event;(t.ctrlKey||t.metaKey)&&s[t.keyCode]?t.preventDefault():t.detail&&(e.returnValue=!1)},document.body.addEventListener("wheel",(e=>{if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}),{passive:!1}),window.oncontextmenu=function(e){let t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),e.preventDefault()},{num:e}}},c=e=>(l("data-v-535f77ad"),e=e(),a(),e),i=c((()=>u("div",{class:"logo"},null,-1))),v={class:"txt"},f={class:"line"},m=c((()=>u("span",{class:"line"},"Do not turn off or unplug your computer.",-1)));var p=e(d,[["render",function(e,t,l,a,d,c){return o(),n("div",{class:"xp",style:r({cursor:"url(http://cuijiahua.com/xxx/cursor_1.png), default"})},[i,u("div",v,[u("span",f," Installing Windows Updates... "+s(a.num),1),m])],4)}],["__scopeId","data-v-535f77ad"]]);export{p as default};