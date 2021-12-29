import{i as D,o as A,g as b,r as h,a as U,b as N,c as T,s as x,d as k,u as w,e as p,f as u,h as d,j as l,w as _,T as L,k as c,F as j,l as V,m as $,n as O,p as g,t as R,q as B,v as F,x as M,y as q,z,A as K,B as G,C as J,D as W,E as Y,G as Q,H as X,I as Z,J as ee,K as te}from"./vendor.1e82f0be.js";const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};oe();D({apiKey:"AIzaSyB1uSE1rOAKYDnG14r4gEoFnwHJorhAhbk",authDomain:"hunshui-72c5c.firebaseapp.com",databaseURL:"https://databaseName.firebaseio.com",projectId:"hunshui-72c5c",storageBucket:"hunshui-72c5c.appspot.com",messagingSenderId:"445243691470",appId:"1:445243691470:web:f9a9a4c0fd57665b451b9f"});const E=()=>{const e=h(null),t=h(null),r=b();let n;U(()=>{n=A(r,s=>e.value=s,s=>t.value=s)}),N(()=>n());const o=T(()=>e.value!=null);return{user:e,error:t,isAuthenticated:o}},C=async()=>{try{const e=b();await x(e)}catch(e){alert(e.message)}},P=()=>new Promise((e,t)=>A(b(),e,t));var v=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r};const ne=k({name:"Menu",setup(){const{isAuthenticated:e}=E(),t=[{name:"Home",link:{name:"Home"}},{name:"Profile",link:{name:"Profile"}},{name:"Database",link:{name:"Database"}}],r=[{name:"Home",link:{name:"Home"}},{name:"Login",link:{name:"Login"}},{name:"Signup",link:{name:"SignUp"}}],n=h(!1),o=()=>{n.value=!n.value},s=w();return{show:n,toggle:o,isAuthenticated:e,signOutUser:async()=>{o(),await C(),await s.replace({name:"Login"})},menuAuth:t,menuNoAuth:r}}}),se={class:"ml-3 relative"},ae={key:0,class:"origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-gray-800 text-white font-heading",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu-button",tabindex:"-1"};function re(e,t,r,n,o,s){const a=p("font-awesome-icon"),m=p("router-link");return c(),u("div",se,[d("div",null,[d("button",{type:"button",class:"text-lg h-8 w-8 rounded-full hover:bg-primary","aria-expanded":"false","aria-haspopup":"true",onClick:t[0]||(t[0]=(...i)=>e.toggle&&e.toggle(...i))},[l(a,{icon:["fas","bars"],class:""})])]),l(L,{name:"fade"},{default:_(()=>[e.show?(c(),u("div",ae,[(c(!0),u(j,null,V(e.isAuthenticated?e.menuAuth:e.menuNoAuth,(i,y)=>(c(),O(m,{key:y,to:i.link,class:"block px-4 py-2 text-sm",onClick:e.toggle},{default:_(()=>[g(R(i.name),1)]),_:2},1032,["to","onClick"]))),128)),e.isAuthenticated?(c(),u("p",{key:0,class:"px-4 py-2 text-sm cursor-pointer text-error",onClick:t[1]||(t[1]=(...i)=>e.signOutUser&&e.signOutUser(...i))}," Logout ")):$("",!0)])):$("",!0)]),_:1})])}var ie=v(ne,[["render",re],["__scopeId","data-v-4a1dd6e8"]]);const ce=k({components:{Menu:ie},setup(){const{user:e}=E(),t=w();return{user:e,signOutUser:async()=>{await C(),await t.replace({name:"Login"})},goToHome:()=>{t.push({name:"Home"})}}}}),ue={class:"t-transition-effect nav-style px-2 md:px-0"},le={class:"t-main-set flex justify-between items-center"},de={key:0,class:"hidden md:block"},me=g("\u9996\u9875 "),pe={key:1,class:"hidden md:block"},_e=g("\u9996\u9875 "),fe=g(" \u767B\u5F55 "),he={class:"block md:hidden"};function ge(e,t,r,n,o,s){const a=p("router-link"),m=p("Menu");return c(),u("nav",ue,[d("div",le,[d("h1",{class:"font-bold text-primary cursor-pointer",onClick:t[0]||(t[0]=(...i)=>e.goToHome&&e.goToHome(...i))}," \u6D51\u6C34 "),e.user?(c(),u("div",de,[l(a,{to:{name:"Home"},class:"nav-link t-transition-effect"},{default:_(()=>[me]),_:1}),d("a",{class:"t-transition-effect py-2 px-4 ml-4 font-heading rounded cursor-pointer bg-error hover:bg-opacity-75",onClick:t[1]||(t[1]=(...i)=>e.signOutUser&&e.signOutUser(...i))},"\u767B\u51FA ")])):(c(),u("div",pe,[l(a,{to:{name:"Home"},class:"nav-link t-transition-effect"},{default:_(()=>[_e]),_:1}),l(a,{to:{name:"Login"},class:"nav-link t-transition-effect"},{default:_(()=>[fe]),_:1})])),d("div",he,[l(m)])])])}var ve=v(ce,[["render",ge],["__scopeId","data-v-7e48e3d4"]]);const ye={},be={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"animate-spin -ml-1 mr-3"},ke=d("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),Ae=d("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),we=[ke,Ae];function Le(e,t){return c(),u("svg",be,we)}var $e=v(ye,[["render",Le]]);const Oe=k({name:"App",components:{Navbar:ve,Loading:$e},setup(e){const t=h(!0);return P().then(()=>{t.value=!1}),{isLoading:t}}}),Ee={key:0,class:"flex items-center justify-center",style:{height:"80vh"}},Ce={key:1},Pe={class:"t-main-set"};function Ie(e,t,r,n,o,s){const a=p("Loading"),m=p("Navbar"),i=p("router-view");return e.isLoading?(c(),u("div",Ee,[l(a,{class:"h-16 w-16"})])):(c(),u("div",Ce,[l(m),d("div",Pe,[l(i,null,{default:_(({Component:y,route:S})=>[l(L,{name:"slide",mode:"out-in"},{default:_(()=>[(c(),O(B(y),{key:S.path}))]),_:2},1024)]),_:1})])]))}var He=v(Oe,[["render",Ie],["__scopeId","data-v-3f15415a"]]);const Se="modulepreload",I={},De="/",f=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${De}${n}`,n in I)return;I[n]=!0;const o=n.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Se,o||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),o)return new Promise((m,i)=>{a.addEventListener("load",m),a.addEventListener("error",i)})})).then(()=>t())},Ue=[{path:"/",name:"Home",component:()=>f(()=>import("./Home.01f1b8e1.js"),["assets/Home.01f1b8e1.js","assets/Home.18253982.css","assets/vendor.1e82f0be.js"])},{path:"/profile",name:"Profile",component:()=>f(()=>import("./Profile.1db018e5.js"),["assets/Profile.1db018e5.js","assets/vendor.1e82f0be.js","assets/Dialog.edd64883.js"]),meta:{requiresAuth:!0}},{path:"/auth/login",name:"Login",component:()=>f(()=>import("./Login.3e591f9e.js"),["assets/Login.3e591f9e.js","assets/vendor.1e82f0be.js","assets/Dialog.edd64883.js","assets/isValidEmail.d4801c25.js"]),meta:{noAuth:!0}},{path:"/auth/signup",name:"SignUp",component:()=>f(()=>import("./SignUp.05ed72bb.js"),["assets/SignUp.05ed72bb.js","assets/vendor.1e82f0be.js","assets/isValidEmail.d4801c25.js"]),meta:{noAuth:!0}},{path:"/auth/forgot-password",name:"ForgotPassword",component:()=>f(()=>import("./ForgotPassword.be04c0b5.js"),["assets/ForgotPassword.be04c0b5.js","assets/vendor.1e82f0be.js","assets/Dialog.edd64883.js"]),meta:{noAuth:!0}},{path:"/database",name:"Database",component:()=>f(()=>import("./Database.c00d3603.js"),["assets/Database.c00d3603.js","assets/vendor.1e82f0be.js"]),meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>f(()=>import("./404.b8747a11.js"),["assets/404.b8747a11.js","assets/vendor.1e82f0be.js"])}],H=F({history:M("/"),routes:Ue});H.beforeEach(async(e,t,r)=>{const n=e.matched.some(a=>a.meta.requiresAuth),o=e.matched.some(a=>a.meta.noAuth),s=await P();n&&!s?r({name:"Login"}):o&&s?r({name:"Home"}):r()});q.add([z,K,G,J,W,Y,Q,X,Z]);ee(He).component("font-awesome-icon",te).use(H).mount("#app");export{$e as L,v as _,C as a,E as u};
