import{g as a,r as e,e as s,f as t,h as l,a1 as n,a4 as i,j as r,w as m,a3 as o,t as u,m as c,Y as d,a7 as g,p as b,k as p}from"./vendor.9979cc4f.js";import{_ as f,L as h}from"./index.84782c79.js";import{D as v}from"./Dialog.744bda12.js";const y={components:{Loading:h,Dialog:v},setup(){const s=a(),t=e(!1),l=e("");return{handleSubmit:async a=>{t.value=!0;const{email:e}=a.target.elements;if(e.value.length>0)try{await g(s,e.value),l.value="Email sent on your registered email id"}catch(n){l.value=n.message}else l.value="Enter Email Id";t.value=!1},message:l,loading:t}}},x={class:"t-auth-section"},j=l("h1",{class:"mb-6"},"忘记密码",-1),E=l("hr",null,null,-1),k=l("div",{class:"mb-4"},[l("label",{class:"block text-sm font-bold mb-2",for:"email"}," 邮箱 "),l("input",{class:"t-input",type:"text",id:"email",placeholder:"Email"})],-1),w={class:"flex justify-between items-center"},L={type:"submit",class:"t-btn inline-flex items-center bg-primary"},S=b(" 提交 "),D=b(" 记得密码? "),_=b("登录 ");var I=f(y,[["render",function(a,e,g,b,f,h){const v=s("Loading"),y=s("router-link");return p(),t("section",x,[l("form",{onSubmit:e[0]||(e[0]=d(((...a)=>b.handleSubmit&&b.handleSubmit(...a)),["prevent"])),class:"t-auth-form"},[j,E,k,l("div",w,[l("button",L,[n(r(v,{class:"h-5 w-5"},null,512),[[i,b.loading]]),S]),l("h5",null,[D,r(y,{to:{name:"Login"},class:"text-primary"},{default:m((()=>[_])),_:1})])]),b.message.length>0?(p(),t("div",{key:0,class:o("mt-4 p-4 rounded "+("Email"!==b.message.substr(0,5)?"bg-error":"bg-primary"))},u(b.message),3)):c("",!0)],32)])}]]);export{I as default};