import{d as c,r as f,o as A,j as n,k as l,t as d,u as g,l as m,F as z,m as w,s as P,f as $,n as B,p as S,q as j}from"./@vue-khtqt46y.js";import{c as U,u as x}from"./vue-i18n-Bbl_lP6Q.js";import{z as r,a as F}from"./@zzcpt-CR3Q-nqy.js";import"./@intlify-C8oQjCmz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();const L={zh:"zh",en:"en",install:"Install",use:"Use",close:"Close",illustrate:"Illustrate",current:"Current ",language:"Language",space:"Space",stop:"Stop",click:"Click",alertTitle:"We are travelers in a hurry, and blessings are like spring rain, nourishing our hearts. May you always smile, live a happy and sweet life, and have a prosperous career and a bright future. May health and happiness always be with you.",dialog:{illustrate1:"Document example output is in the console",illustrate2:"You can use commands such as zz.getVersion() in the console to use this tool library."},illustrateComponent:{li1:"Installation (see console)",li2:"Can be used anywhere",li3:"Please see the console for the output results"},publicmethods:{title:"PublicMethods",list:{li1:{name:"GetVersion",title:"getVersion",com:"getVersion"},li2:{name:"ThrowError",title:"error",com:"error"},li3:{name:"Debounce",title:"debounce",com:"debounce"},li4:{name:"Throttle",title:"throttle",com:"throttle"}}},typedetection:{title:"TypeDetection",list:{li1:{name:"GetType",title:"getType",com:"getType"}}},regexp:{title:"RegExp",list:{li1:{name:"IsContains",title:"regIsHas",com:"regIsHas"},li2:{name:"IsEmail",title:"regEmail",com:"regEmail"},li3:{name:"IsPhone",title:"regPhone",com:"regPhone"},li4:{name:"IsIdcard",title:"regIdcard",com:"regIdcard"}}},getparam:{title:"GetParam",list:{li1:{name:"GetUrlParam",title:"getUrlParam",com:"getUrlParam"},li2:{name:"ParamFormat",title:"paramformat",com:"paramformat"}}},transfertype:{title:"TransferType",list:{li1:{name:"ToString",title:"toString",com:"toString"},li2:{name:"ToArray",title:"toArray",com:"toArray"}}},utilfn:{title:"UtilFn",list:{li1:{name:"GetRandomNum",title:"getRandom",com:"getRandom"},li2:{name:"GetRandomArr",title:"getRandomArray",com:"getRandomArray"},li3:{name:"GetRandomColor",title:"getRandomColor",com:"getRandomColor"},li4:{name:"Thousandths",title:"moneyFormat",com:"moneyFormat"}}},data:{title:"Data",list:{li1:{name:"DataEqual",title:"dataEqual",com:"dataEqual"},li2:{name:"DataEmpty",title:"dataEmpty",com:"dataEmpty"},li3:{name:"DeepClone",title:"deepClone",com:"deepClone"},li4:{name:"ToTree",title:"toTree",com:"toTree"},li5:{name:"GroupBy",title:"groupBy",com:"groupBy"},li6:{name:"DataMerge",title:"dataMerge",com:"dataMerge"},li7:{name:"DataUnique",title:"dataUnique",com:"dataUnique"},li8:{name:"DataUnEmpty",title:"dataUnEmpty",com:"dataUnEmpty"},li9:{name:"ShuffleArray",title:"shuffleArray",com:"shuffleArray"}}},date:{title:"Date",list:{li1:{name:"GetDateInfo",title:"getDateInfo",com:"getDateInfo"},li2:{name:"GetDateType",title:"getDateType",com:"getDateType"},li3:{name:"GetDate",title:"getDate",com:"getDate"},li4:{name:"GetMonthDays",title:"getMonthDays",com:"getMonthDays"},li5:{name:"GetBetwenDate",title:"getBetwenDate",com:"getBetwenDate"},li6:{name:"GetDateList",title:"getDateList",com:"getDateList"},li7:{name:"GetTimeStep",title:"getTimeStep",com:"getTimeStep"}}},calc:{title:"Calc",list:{li1:{name:"Percentage",title:"getPercentage",com:"getPercentage"}}}},q={zh:"中文",en:"英文",install:"安装",use:"使用",close:"关 闭",illustrate:"说明",current:"当前",language:"语言",space:"空格",stop:"停止",click:"点击",alertTitle:"我们是匆匆的行者，祝福如春雨，滋润心田间。愿你笑容常开，生活美满甜；事业步步高，前程似锦绣。健康快乐伴你左右，幸福永远与你相伴。",dialog:{illustrate1:"文档示例输出均在控制台",illustrate2:"可在控制台中使用 zz.getVersion() 等命令使用该工具库"},illustrateComponent:{li1:"安装(请看控制台)",li2:"可以在任何地方使用",li3:"输出结果请看控制台"},publicmethods:{title:"公共方法",list:{li1:{name:"获取版本号",title:"getVersion",com:"getVersion"},li2:{name:"抛错",title:"error",com:"error"},li3:{name:"防抖",title:"debounce",com:"debounce"},li4:{name:"节流",title:"throttle",com:"throttle"}}},typedetection:{title:"类型检测",list:{li1:{name:"获取类型",title:"getType",com:"getType"}}},regexp:{title:"正则表达式",list:{li1:{name:"是否包含",title:"regIsHas",com:"regIsHas"},li2:{name:"是否邮箱",title:"regEmail",com:"regEmail"},li3:{name:"是否手机号",title:"regPhone",com:"regPhone"},li4:{name:"是否身份证",title:"regIdcard",com:"regIdcard"}}},getparam:{title:"参数获取",list:{li1:{name:"获取url参数",title:"getUrlParam",com:"getUrlParam"},li2:{name:"参数格式化",title:"paramformat",com:"paramformat"}}},transfertype:{title:"转类型",list:{li1:{name:"转字符串",title:"toString",com:"toString"},li2:{name:"转数组",title:"toArray",com:"toArray"}}},utilfn:{title:"工具函数",list:{li1:{name:"获取随机数",title:"getRandom",com:"getRandom"},li2:{name:"获取随机数组",title:"getRandomArray",com:"getRandomArray"},li3:{name:"获取随机颜色",title:"getRandomColor",com:"getRandomColor"},li4:{name:"金额千分位",title:"moneyFormat",com:"moneyFormat"}}},data:{title:"数据处理",list:{li1:{name:"数据对比",title:"dataEqual",com:"dataEqual"},li2:{name:"深克隆",title:"deepClone",com:"deepClone"},li3:{name:"转树形结构",title:"toTree",com:"toTree"},li4:{name:"数据分组",title:"groupBy",com:"groupBy"},li5:{name:"取交/并/差/补",title:"dataMerge",com:"dataMerge"},li6:{name:"数组去重",title:"dataUnique",com:"dataUnique"},li7:{name:"数组去空",title:"dataUnEmpty",com:"dataUnEmpty"},li8:{name:"打乱数组",title:"shuffleArray",com:"shuffleArray"}}},date:{title:"日期",list:{li1:{name:"日期信息",title:"getDateInfo",com:"getDateInfo"},li2:{name:"日期类型",title:"getDateType",com:"getDateType"},li3:{name:"获取日期",title:"getDate",com:"getDate"},li4:{name:"月份天数",title:"getMonthDays",com:"getMonthDays"},li5:{name:"两个日期之间的日期",title:"getBetwenDate",com:"getBetwenDate"},li6:{name:"某日期的近期天数",title:"getDateList",com:"getDateList"},li7:{name:"获取时间段",title:"getTimeStep",com:"getTimeStep"}}},calc:{title:"计算",list:{li1:{name:"百分比",title:"getPercentage",com:"getPercentage"}}}},k={en:L,zh:q},C={en:"en",zh:"zh","zh-CN":"zh"};var y=navigator.language;C[y]||(y="zh");localStorage.getItem("locale")===null&&localStorage.setItem("locale",C[y]);const G=localStorage.getItem("locale")||"zh",O=U({legacy:!1,locale:G,messages:k}),V=120,H=30,Z=c({__name:"moveBtn",setup(s){const{t}=x(),e=f(),o=f(!0),a=()=>{const p=r.getRandom(0,window.innerWidth-V),u=r.getRandom(0,window.innerHeight-H);return{x:p,y:u}},i=()=>{if(!o.value)return;const{x:p,y:u}=a(),_=r.getRandomColor(),h=r.getRandomColor();e.value.style.left=p+"px",e.value.style.top=u+"px",e.value.style.backgroundColor=_,e.value.style.color=h};return A(()=>{e.value.addEventListener("mouseenter",i),e.value.addEventListener("click",()=>{alert(t("alertTitle"))}),window.onresize=i,window.addEventListener("keydown",p=>{p.key===" "&&(o.value=!1)}),i()}),(p,u)=>(n(),l("button",{ref_key:"btn",ref:e,id:"btn"},d(g(t)("space"))+d(g(t)("stop"))+"("+d(g(t)("click"))+")",513))}}),D=(s,t)=>{const e=s.__vccOpts||s;for(const[o,a]of t)e[o]=a;return e},N=D(Z,[["__scopeId","data-v-cbbfc1e6"]]),Y=[{name:"publicmethods.title",list:[{name:"publicmethods.list.li1.name",title:"getVersion",com:"getVersion"},{name:"publicmethods.list.li2.name",title:"error",com:"error"},{name:"publicmethods.list.li3.name",title:"debounce",com:"debounce"},{name:"publicmethods.list.li4.name",title:"throttle",com:"throttle"}]},{name:"typedetection.title",list:[{name:"typedetection.list.li1.name",title:"getType",com:"getType"}]},{name:"regexp.title",list:[{name:"regexp.list.li1.name",title:"regIsHas",com:"regIsHas"},{name:"regexp.list.li2.name",title:"regEmail",com:"regEmail"},{name:"regexp.list.li3.name",title:"regPhone",com:"regPhone"},{name:"regexp.list.li4.name",title:"regIdcard",com:"regIdcard"}]},{name:"getparam.get",list:[{name:"getparam.list.li1.name",title:"getUrlParam",com:"getUrlParam"},{name:"getparam.list.li2.name",title:"paramformat",com:"paramformat"}]},{name:"transfertype.title",list:[{name:"transfertype.list.li1.name",title:"toString",com:"toString"},{name:"transfertype.list.li2.name",title:"toArray",com:"toArray"}]},{name:"utilfn.title",list:[{name:"utilfn.list.li1.name",title:"getRandom",com:"getRandom"},{name:"utilfn.list.li2.name",title:"getRandomArray",com:"getRandomArray"},{name:"utilfn.list.li3.name",title:"getRandomColor",com:"getRandomColor"},{name:"utilfn.list.li4.name",title:"moneyFormat",com:"moneyFormat"}]},{name:"data.title",list:[{name:"data.list.li1.name",title:"dataEqual",com:"dataEqual"},{name:"data.list.li2.name",title:"dataEmpty",com:"dataEmpty"},{name:"data.list.li3.name",title:"deepClone",com:"deepClone"},{name:"data.list.li4.name",title:"toTree",com:"toTree"},{name:"data.list.li5.name",title:"groupBy",com:"groupBy"},{name:"data.list.li6.name",title:"dataMerge",com:"dataMerge"},{name:"data.list.li7.name",title:"dataUnique",com:"dataUnique"},{name:"data.list.li8.name",title:"dataUnEmpty",com:"dataUnEmpty"},{name:"data.list.li9.name",title:"shuffleArray",com:"shuffleArray"}]},{name:"date.title",list:[{name:"date.list.li1.name",title:"getDateInfo",com:"getDateInfo"},{name:"date.list.li2.name",title:"getDateType",com:"getDateType"},{name:"date.list.li3.name",title:"getDate",com:"getDate"},{name:"date.list.li4.name",title:"getMonthDays",com:"getMonthDays"},{name:"date.list.li5.name",title:"getBetwenDate",com:"getBetwenDate"},{name:"date.list.li6.name",title:"getDateList",com:"getDateList"},{name:"date.list.li7.name",title:"getTimeStep",com:"getTimeStep"}]},{name:"calc.title",list:[{name:"calc.list.li1.name",title:"getPercentage",com:"getPercentage"}]}],W={class:"menu"},K={class:"menu-item"},X={style:{"margin-top":"10px"}},J=["selected"],Q=["selected"],tt={class:"menu-item"},et={class:"title"},ot={class:"item"},rt={class:"item"},at={class:"item"},nt={class:"title"},lt=["onClick"],st=c({__name:"menu",emits:["change"],setup(s,{emit:t}){const e=t,{t:o,locale:a}=x(),i=_=>{e("change",_)},p=localStorage.getItem("locale")||"zh",u=_=>{localStorage.setItem("locale",_.target.value),a.value=_.target.value};return(_,h)=>(n(),l("div",W,[m("div",K,[m("h4",X,d(g(o)("current"))+d(g(o)("language")),1),m("select",{onChange:u},[m("option",{value:"zh",selected:g(p)==="zh"},d(g(o)("zh")),9,J),m("option",{value:"en",selected:g(p)==="en"},d(g(o)("en")),9,Q)],32)]),m("div",tt,[m("div",et,d(g(o)("illustrate")),1),m("div",ot,d(g(o)("illustrateComponent.li1")),1),m("div",rt,d(g(o)("illustrateComponent.li2")),1),m("div",at,d(g(o)("illustrateComponent.li3")),1)]),(n(!0),l(z,null,w(g(Y),(b,R)=>(n(),l("div",{class:"menu-item",key:R},[m("div",nt,d(g(o)(b.name)),1),(n(!0),l(z,null,w(b.list,(I,M)=>(n(),l("div",{class:"item",key:M,onClick:Oe=>i(I)},d(g(o)(I.name)),9,lt))),128))]))),128))]))}}),ct=D(st,[["__scopeId","data-v-60709aef"]]),it={class:"w-full h-full",name:"",id:""},v=c({__name:"getVersion",setup(s){const t=r.getVersion();return console.log(t),(e,o)=>(n(),l("textarea",it,`<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
const version = zztool.getVersion();\r
console.log(version);\r
<\/script>\r
        `))}}),mt={class:"w-full h-full",name:"",id:""},pt=c({__name:"error",setup(s){return setTimeout(()=>{r.error("抛出错误")},100),(t,e)=>(n(),l("textarea",mt,`<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
setTimeout(() => {\r
    zztool.error('抛出错误');\r
}, 100);\r
<\/script>\r
`))}}),gt=c({__name:"debounce",setup(s){const t=()=>{r.debounce(()=>{console.log("防抖")},1e3)};return(e,o)=>(n(),l(z,null,[m("button",{onClick:o[0]||(o[0]=a=>t())},"点击"),o[1]||(o[1]=m("textarea",{class:"w-full h-50",name:"",id:""},`<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
const clickFn = zztool.debounce(() => {\r
    console.log('防抖');\r
}, 1000);\r
<\/script>\r
`,-1))],64))}}),dt=c({__name:"throttle",setup(s){const t=()=>{r.throttle(()=>{console.log("节流")},1e3)};return(e,o)=>(n(),l(z,null,[m("button",{onClick:t},"点击"),o[0]||(o[0]=m("textarea",{class:"w-full h-50",name:"",id:""},`<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  const clickFn = () => {\r
    zztool.throttle(() => {\r
        console.log('节流');\r
    }, 1000);\r
 }\r
<\/script>\r
`,-1))],64))}}),ut={class:"w-full h-50",name:"",id:""},_t=10,zt=c({__name:"getType",setup(s){const t=r.getType(_t);return console.log(t),(e,o)=>(n(),l("textarea",ut,`<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
const number = 10;\r
const type = zztool.getType(number);\r
console.log(type)\r
<\/script>\r
`))}}),ft={class:"w-full h-50",name:"",id:""},ht="how are you?",yt=c({__name:"regIsHas",setup(s){const t=r.regIsHas(ht,"you");return console.log(t),(e,o)=>(n(),l("textarea",ft,`<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
\r
const str = 'how are you?';\r
const isHas = zztool.regIsHas(str, 'you');\r
console.log(isHas)\r
<\/script>\r
`))}}),xt={class:"w-full h-50",name:"",id:""},Dt="xxxx@163.com",bt="xxxx@gmail.com",It="xxxx1234234.com",wt=c({__name:"regEmail",setup(s){const t=Array.from([Dt,bt,It]);for(let e=0;e<t.length;e++){const o=t[e];console.log(r.regEmail(o))}return(e,o)=>(n(),l("textarea",xt,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const email1 = 'xxxx@163.com';\r
  const email2 = 'xxxx@gmail.com';\r
  const email3 = 'xxxx1234234.com';\r
  const arr = Array.from([email1,email2,email3])\r
  for(let i = 0; i < arr.length; i++){\r
    const item = arr[i];\r
    console.log(zztool.regEmail(item));\r
  }\r
<\/script>\r
`))}}),$t={class:"w-full h-50",name:"",id:""},vt="15666666666",Tt="11111111111",At=c({__name:"regPhone",setup(s){const t=Array.from([vt,Tt]);for(let e=0;e<t.length;e++){const o=t[e];console.log(r.regPhone(o))}return(e,o)=>(n(),l("textarea",$t,`<script lang="ts" setup>\r
  -- 验证手机号,仅支持中国大陆手机号\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const phone1 = '15666666666';\r
  const phone2 = '11111111111';\r
  const arr = Array.from([phone1, phone2]);\r
  for(let i = 0; i < arr.length; i++){\r
    const item = arr[i];\r
    console.log(zztool.regPhone(item)); // true false\r
  }\r
<\/script>\r
`))}}),Ct={class:"w-full h-50",name:"",id:""},Et="111111111111111111",Rt="46516546549874654x",Mt=c({__name:"regIdcard",setup(s){const t=Array.from([Et,Rt]);for(let e=0;e<t.length;e++){const o=t[e],a=r.regIdcard(o);console.log(a)}return(e,o)=>(n(),l("textarea",Ct,`--- 本方法验证的是真实有效的身份证号码 ---\r
------------------------------------------\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const idcard1 = '111111111111111111';\r
  const idcard2 = '46516546549874654x';\r
  const arr = Array.from([idcard1, idcard2]);\r
  for(let i = 0; i < arr.length; i++){\r
    const item = arr[i];\r
    const result = zztool.regIdcard(item);\r
    console.log(result); // false false\r
  }\r
<\/script>\r
`))}}),Pt={class:"w-full h-50",name:"",id:""},Bt="http://www.baidu.com?a=1&b=2",St=c({__name:"getUrlParam",setup(s){const t=r.getUrlParam(Bt);return console.log(t),(e,o)=>(n(),l("textarea",Pt,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const url = "http://www.baidu.com?a=1&b=2";\r
  const param = zztool.getUrlParam(url); // 无参数则会获取url\r
  console.log(param) // {a: '1', b: '2'}\r
<\/script>\r
`))}}),jt={class:"w-full h-50",name:"",id:""},Ut=c({__name:"paramformat",setup(s){const t={a:"1",b:"2"},e=r.paramformat(t,"url"),o=r.paramformat(t,"json"),a=r.paramformat(t,"formData");return console.log(e,o,a),(i,p)=>(n(),l("textarea",jt,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const params = {a: '1', b: '2'}\r
  const param1 = zztool.paramformat(params,'url');\r
  const param2 = zztool.paramformat(params,'json');\r
  const param3 = zztool.paramformat(params,'formData');\r
  console.log(param1,param2,param3)\r
<\/script>\r
`))}}),Ft={class:"w-full h-50",name:"",id:""},Lt=c({__name:"toString",setup(s){const t={a:1,b:2},e=[1,2,3],o=r.toString(t),a=r.toString(e);return console.log(o,a),(i,p)=>(n(),l("textarea",Ft,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const obj = { a: 1, b: 2 };\r
  const arr = [1, 2, 3];\r
  const str1 = zztool.toString(obj);\r
  const str2 = zztool.toString(arr);\r
  console.log(str1,str2); // {"a":1,"b":2} [1,2,3]\r
<\/script>\r
`))}}),qt={class:"w-full h-50",name:"",id:""},kt="1,2,3,4,5",Gt="1-2-3-4-5",Ot="12345",Vt=c({__name:"toArray",setup(s){const t={a:1,b:2},e=[1,2,3],o=r.toArray(t),a=r.toArray(e),i=r.toArray(kt),p=r.toArray(Gt,"-"),u=r.toArray(Ot);return console.log(o,a,i,p,u),(_,h)=>(n(),l("textarea",qt,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const obj = { a: 1, b: 2 };\r
  const arr = [1, 2, 3];\r
  const string1 = '1,2,3,4,5';\r
  const string2 = '1-2-3-4-5';\r
  const string3 = '12345';\r
  const str1 = zztool.toArray(obj);\r
  const str2 = zztool.toArray(arr);\r
  const str3 = zztool.toArray(string1);\r
  const str4 = zztool.toArray(string2,'-');\r
  const str5 = zztool.toArray(string3);\r
  console.log(str1,str2,str3,str4,str5);\r
<\/script>\r
`))}}),Ht={class:"w-full h-50",name:"",id:""},Zt=c({__name:"getRandom",setup(s){const t=r.getRandom(0,100);return console.log(t),(e,o)=>(n(),l("textarea",Ht,`<script lang="ts" setup>\r
 import * as zztool from '@zzcpt/zztool';\r
  \r
  const random = zztool.getRandom(0,100);\r
  console.log(random)\r
<\/script>\r
`))}}),Nt={class:"w-full h-50",name:"",id:""},Yt=c({__name:"getRandomArray",setup(s){const t=r.getRandomArray(100,0,100);return console.log(t),(e,o)=>(n(),l("textarea",Nt,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const random = zztool.getRandomArray(100,0,100);\r
  console.log(random)\r
<\/script>\r
`))}}),Wt={class:"w-full h-50",name:"",id:""},Kt=c({__name:"getRandomColor",setup(s){const t=r.getRandomColor(),e=r.getRandomRGBColor(),o=r.getRandomRGBA();return console.log(t,e,o),(a,i)=>(n(),l("textarea",Wt,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const color = zztool.getRandomColor();\r
  const rgbColor = zztool.getRandomRGBColor();\r
  const rgbaColor = zztool.getRandomRGBA();\r
  console.log(color,rgbColor,rgbaColor)\r
<\/script>\r
`))}}),Xt={class:"w-full h-50",name:"",id:""},T=1e6,Jt=c({__name:"moneyFormat",setup(s){const t=r.moneyFormat(T),e=r.moneyFormat(T,"~","$");return console.log(t,e),(o,a)=>(n(),l("textarea",Xt,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const money = 1000000;\r
  const moneyFormat = zztool.moneyFormat(money);\r
  const moneyFormat2 = zztool.moneyFormat(money,'~','$');\r
  console.log(moneyFormat,moneyFormat2);\r
<\/script>\r
`))}}),Qt={class:"w-full h-full",name:"",id:""},te=c({__name:"dataEqual",setup(s){const t={a:2,b:1,c:{d:1}},e={a:2,b:2,c:{d:2}},o=r.dataEqual(t,e);return console.log(o),(a,i)=>(n(),l("textarea",Qt,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const obj1 = {a:2,b:1,c:{d:1}};\r
  const obj2 = {a:2,b:2,c:{d:2}};\r
  const data = zztool.dataEqual(obj1,obj2);\r
  console.log(data)\r
<\/script>\r
`))}}),ee={class:"w-full h-full",name:"",id:""},oe=c({__name:"dataEmpty",setup(s){const t={a:2,b:1,c:{d:1}},e={a:2,b:1,c:{d:1,e:[]}},o=r.dataEmpty(t),a=r.dataEmpty(e);return console.log(o,a),(i,p)=>(n(),l("textarea",ee,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const obj1 = {a:2,b:1,c:{d:1}};\r
  const obj2 = {a:2,b:1,c:{d:1,e:[]}};\r
  const data1 = zztool.dataEmpty(obj1);\r
  const data2 = zztool.dataEmpty(obj2);\r
  console.log(data1,data2) // false true\r
<\/script>\r
`))}}),re={class:"w-full h-full",name:"",id:""},ae=c({__name:"deepClone",setup(s){const t={a:2,b:1,c:{d:1}},e=r.deepClone(t);return console.log(t==e),(o,a)=>(n(),l("textarea",re,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const obj1 = {a:2,b:1,c:{d:1}};\r
  const obj2 = zztool.deepClone(obj1);\r
  console.log(obj1==obj2) // false\r
<\/script>\r
`))}}),ne={class:"w-full h-full",name:"",id:""},le=c({__name:"toTree",setup(s){var t=[{id:1,parentId:null,name:"Item 1"},{id:2,parentId:1,name:"Item 1.1"},{id:3,parentId:1,name:"Item 1.2"},{id:4,parentId:2,name:"Item 1.1.1"},{id:5,parentId:null,name:"Item 2"}];const e=r.toTree(t,"parentId");return console.log(e),(o,a)=>(n(),l("textarea",ne,`<script lang="ts" setup>\r
 import * as zztool from '@zzcpt/zztool';\r
  \r
  var data = [\r
    { id: 1, parentId: null, name: "Item 1" },\r
    { id: 2, parentId: 1, name: "Item 1.1" },\r
    { id: 3, parentId: 1, name: "Item 1.2" },\r
    { id: 4, parentId: 2, name: "Item 1.1.1" },\r
    { id: 5, parentId: null, name: "Item 2" }\r
  ];\r
  const tree = zztool.toTree(data, 'parentId');\r
  console.log(tree)\r
<\/script>\r
`))}}),se={class:"w-full h-full",name:"",id:""},ce=c({__name:"groupBy",setup(s){var t=[{id:1,parentId:2,name:"Item 1"},{id:2,parentId:1,name:"Item 1.1"},{id:3,parentId:1,name:"Item 1.2"},{id:4,parentId:2,name:"Item 1.1.1"}];const e=r.groupBy(t,"parentId");return console.log(e),(o,a)=>(n(),l("textarea",se,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  var data = [\r
    { id: 1, parentId: 2, name: "Item 1" },\r
    { id: 2, parentId: 1, name: "Item 1.1" },\r
    { id: 3, parentId: 1, name: "Item 1.2" },\r
    { id: 4, parentId: 2, name: "Item 1.1.1" },\r
  ]\r
  const datas = zztool.groupBy(data, 'parentId');\r
  console.log(datas)\r
<\/script>\r
`))}}),ie={class:"w-full h-full",name:"",id:""},me=c({__name:"dataMerge",setup(s){const t=[1,2,3,4,5],e=[4,5,6,7,8],o=r.dataMerge(t,e,1),a=r.dataMerge(t,e,2),i=r.dataMerge(t,e,3),p=r.dataMerge(t,e,4);return console.log(o),console.log(a),console.log(i),console.log(p),(u,_)=>(n(),l("textarea",ie,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const arr1 = [1,2,3,4,5];\r
  const arr2 = [4,5,6,7,8];\r
  const data1 = zztool.dataMerge(arr1,arr2,1);\r
  const data2 = zztool.dataMerge(arr1,arr2,2);\r
  const data3 = zztool.dataMerge(arr1,arr2,3);\r
  const data4 = zztool.dataMerge(arr1,arr2,4);\r
  console.log(data1)\r
  console.log(data2)\r
  console.log(data3)\r
  console.log(data4)\r
\r
<\/script>\r
`))}}),pe={class:"w-full h-full",name:"",id:""},ge=c({__name:"dataUnique",setup(s){const t=[1,2,3,4,5,5,6],e=r.uniqueArray(t);return console.log(e),(o,a)=>(n(),l("textarea",pe,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const arr1 = [1,2,3,4,5,5,6];\r
  const data = zztool.uniqueArray(arr1);\r
  console.log(data)\r
\r
<\/script>\r
`))}}),de={class:"w-full h-full",name:"",id:""},ue=c({__name:"dataUnEmpty",setup(s){const t=[1,2,3,4,5,5,"","",6];console.log(t);const e=r.arrayTrim(t);return console.log(e),(o,a)=>(n(),l("textarea",de,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const arr1 = [1,2,3,4,5,5,'','',6];\r
  console.log(arr1)\r
  const data = zztool.dataUnEmpty(arr1);\r
  console.log(data)\r
\r
<\/script>\r
`))}}),_e={class:"w-full h-full",name:"",id:""},ze=c({__name:"getDateInfo",setup(s){return console.log(r.getDateInfo("2023-6-15")),(t,e)=>(n(),l("textarea",_e,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  console.log(zztool.getDateInfo('2023-6-15'))\r
<\/script>\r
`))}}),fe={class:"w-full h-full",name:"",id:""},he=c({__name:"getDateType",setup(s){return console.log(r.getDateType("2023-6-15","Y/M/D")),(t,e)=>(n(),l("textarea",fe,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  console.log(zztool.getDateType('2023-6-15',"Y/M/D"))\r
<\/script>\r
`))}}),ye={class:"w-full h-full",name:"",id:""},xe=c({__name:"getDate",setup(s){return console.log(r.getDate()),console.log(r.getDate("2023-6-15")),console.log(r.getDate("Y/M/D")),(t,e)=>(n(),l("textarea",ye,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  console.log(zztool.getDate())\r
  console.log(zztool.getDate("2023-6-15"))\r
  console.log(zztool.getDate("Y/M/D"))\r
<\/script>\r
`))}}),De={class:"w-full h-full",name:"",id:""},be=c({__name:"getMonthDays",setup(s){return console.log(r.getMonthDays(2024,6)),(t,e)=>(n(),l("textarea",De,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  console.log(zztool.getMonthDays(2024,6))\r
<\/script>\r
`))}}),Ie={class:"w-full h-full",name:"",id:""},we=c({__name:"getBetwenDate",setup(s){return console.log(r.getBetweenDate("2024-06-01","2024-06-15",!0)),console.log(r.getBetweenDate("2024-06-01","2024-06-15")),(t,e)=>(n(),l("textarea",Ie,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15',true))\r
  console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15'))\r
<\/script>\r
`))}}),$e={class:"w-full h-full",name:"",id:""},ve=c({__name:"getDateList",setup(s){const t=r.getRecentDate(new Date("2024-6-15"),1),e=r.getRecentDate(new Date("2024-6-15"),2),o=r.getRecentDate(new Date("2024-6-15"),3);return console.log("前三天：",t),console.log("前一周：",e),console.log("前一月：",o),(a,i)=>(n(),l("textarea",$e,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const day1 = zztool.getDateList(new Date('2024-6-15'),1);\r
  const day2 = zztool.getDateList(new Date('2024-6-15'),2);\r
  const day3 = zztool.getDateList(new Date('2024-6-15'),3);\r
  console.log('前三天：',day1)\r
  console.log('前一周：',day2)\r
  console.log('前一月：',day3)\r
<\/script>\r
`))}}),Te={class:"w-full h-full",name:"",id:""},Ae=c({__name:"getTimeStep",setup(s){const t=r.getTimeStep("01:00","10:00"),e=r.getTimeStep("01:00","10:00","00:30");return console.log("默认步长：",t),console.log("步长半小时：",e),(o,a)=>(n(),l("textarea",Te,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const arr = zztool.getTimeStep('01:00',"10:00");\r
  const arr1 = zztool.getTimeStep('01:00',"10:00","00:30");\r
  console.log("默认步长：",arr)\r
  console.log("步长半小时：",arr1)\r
<\/script>\r
`))}}),Ce={class:"w-full h-full",name:"",id:""},Ee=c({__name:"shuffleArray",setup(s){const t=r.getRandomArray(10,0,10);return console.log(r.shuffleArray(t)),console.log(r.shuffleArray(t)),(e,o)=>(n(),l("textarea",Ce,`<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const arr = zztool.getRandomArray(10,0,10);\r
  console.log(zztool.shuffleArray(arr));\r
  console.log(zztool.shuffleArray(arr));\r
<\/script>\r
`))}}),Re={class:"w-full h-50",name:"",id:""},Me=c({__name:"getPercentage",setup(s){const t=r.getPercentage(10,100,2);return console.log(t),(e,o)=>(n(),l("textarea",Re,`<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
const number = zztool.getPercentage(10, 100,2);\r
console.log(number)\r
<\/script>\r
`))}}),Pe={style:{display:"flex"}},Be={style:{width:"100%",padding:"10px"}},Se={id:"dialog"},je={class:"win"},Ue={class:"container"},Fe={style:{"list-style":"inside"}},Le={class:"closeBtn"},qe=c({__name:"App",setup(s){const t=P(v),e={getVersion:v,error:pt,debounce:gt,throttle:dt,getType:zt,regIsHas:yt,regEmail:wt,regPhone:At,regIdcard:Mt,getUrlParam:St,paramformat:Ut,toString:Lt,toArray:Vt,getRandom:Zt,getRandomArray:Yt,getRandomColor:Kt,moneyFormat:Jt,dataEqual:te,dataEmpty:oe,deepClone:ae,toTree:le,groupBy:ce,dataMerge:me,dataUnique:ge,dataUnEmpty:ue,getDateInfo:ze,getDateType:he,getDate:xe,getMonthDays:be,getBetwenDate:we,getDateList:ve,getTimeStep:Ae,shuffleArray:Ee,getPercentage:Me},o=u=>{console.log(`%c${u.title}`,"background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px"),t.value=e[u.com]},{t:a}=x(),i=f(),p=f();return A(()=>{i.value=document.getElementById("dialog"),p.value=document.querySelector(".closeBtn"),i.value.showModal(),p.value.addEventListener("click",function(){i.value.close()})}),(u,_)=>(n(),l(z,null,[$(N),m("div",Pe,[$(ct,{onChange:o}),m("div",Be,[(n(),B(S(t.value)))]),m("dialog",Se,[m("div",je,[m("div",Ue,[m("h4",null,d(g(a)("install"))+"/"+d(g(a)("use")),1),_[0]||(_[0]=m("code",null,[m("pre",null,`--- install
npm install @zzcpt/zztool@latest
--- file
import * as zztool from '@zzcpt/zztool';
import { xxx } from '@zzcpt/zztool';

            `)],-1)),m("h4",null,d(g(a)("illustrate")),1),m("ul",Fe,[m("li",null,d(g(a)("dialog.illustrate1")),1),m("li",null,d(g(a)("dialog.illustrate2")),1)])]),m("button",Le,d(g(a)("close")),1)])])])],64))}}),ke=D(qe,[["__scopeId","data-v-4faa9b5c"]]),Ge=window;Ge.zz=F;const E=j(ke);E.use(O);E.mount("#app");
//# sourceMappingURL=index-DLBkLCgm.js.map
