import{_ as e}from"./index.b0acdd5d.js";import{r as l,f as o,h as t,O as n,P as s,k as r}from"./vendor.08bd9b48.js";const c={setup(){const e={61:!0,107:!0,109:!0,173:!0,187:!0,189:!0};document.onkeydown=function(l){window.event.returnValue=!1,27==window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1);const o=l||window.event;(o.ctrlKey||o.metaKey)&&e[o.keyCode]?o.preventDefault():o.detail&&(l.returnValue=!1)},document.body.addEventListener("wheel",(e=>{if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}),{passive:!1}),window.oncontextmenu=function(e){let l=document.documentElement;l.requestFullscreen?l.requestFullscreen():l.mozRequestFullScreen?l.mozRequestFullScreen():l.webkitRequestFullscreen?l.webkitRequestFullscreen():l.msRequestFullscreen&&l.msRequestFullscreen(),e.preventDefault()};let o=l(""),t=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);return{changeColor:function(e){document.getElementById("fullscreenelement").style.backgroundColor=e,function(){if(t)if(vid)vid.src=o.substring(1)+".mp4?v=2",vid.addEventListener("loadedmetadata",(function(){vid.webkitEnterFullscreen()}),!1);else{let e=document.createElement("video");e.src=o.substring(1)+".mp4?v=2",e.autoplay=!0,e.loop=!0,e.playsInline=!0,e.controls=!0,document.body.appendChild(e),e.addEventListener("loadedmetadata",(function(){e.webkitEnterFullscreen()}),!1),vid=e}fullscreenelement.requestFullscreen?fullscreenelement.requestFullscreen():fullscreenelement.webkitRequestFullscreen?fullscreenelement.webkitRequestFullscreen():fullscreenelement.msRequestFullscreen&&fullscreenelement.msRequestFullscreen()}()}}}},a=e=>(n("data-v-356ee9c4"),e=e(),s(),e),d={class:"t-main-set"},i={id:"colors-list",class:"p-4 t-page-position bg-secondary"},u={class:"color-wrap"},f=a((()=>t("div",{class:"color-description"},"屏幕变黑",-1))),v={class:"color-wrap"},m=a((()=>t("div",{class:"color-description"},"屏幕变白",-1))),p={class:"color-wrap"},w=a((()=>t("div",{class:"color-description"},"屏幕变绿",-1))),b={class:"color-wrap"},k=a((()=>t("div",{class:"color-description"},"屏幕变蓝",-1))),C={class:"color-wrap"},g=a((()=>t("div",{class:"color-description"},"屏幕变红",-1))),F={class:"color-wrap"},q=a((()=>t("div",{class:"color-description"},"屏幕变紫",-1))),y=a((()=>t("div",{id:"fullscreenelement"},null,-1)));var h=e(c,[["render",function(e,l,n,s,c,a){return r(),o("div",d,[t("section",i,[t("div",u,[t("button",{class:"color black",onClick:l[0]||(l[0]=e=>s.changeColor("#000000")),"data-color":"#000000"}),f]),t("div",v,[t("button",{class:"color white",onClick:l[1]||(l[1]=e=>s.changeColor("#ffffff")),"data-color":"#ffffff"}),m]),t("div",p,[t("button",{class:"color green",onClick:l[2]||(l[2]=e=>s.changeColor("#008000")),"data-color":"#008000"}),w]),t("div",b,[t("button",{class:"color blue",onClick:l[3]||(l[3]=e=>s.changeColor("#0000ff")),"data-color":"#0000ff"}),k]),t("div",C,[t("button",{class:"color red",onClick:l[4]||(l[4]=e=>s.changeColor("#ff0000")),"data-color":"#ff0000"}),g]),t("div",F,[t("button",{class:"color purple",onClick:l[5]||(l[5]=e=>s.changeColor("#800080")),"data-color":"#800080"}),q])]),y])}],["__scopeId","data-v-356ee9c4"]]);export{h as default};