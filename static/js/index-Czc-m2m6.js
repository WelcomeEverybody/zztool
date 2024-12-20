import{d as l,r as g,o as w,a as s,c as n,b as $,F as u,e as h,u as D,f as d,t as y,s as A,g as x,h as R,i as T,j as E}from"./@vue-C_FGOLCY.js";import{z as r,a as I}from"./@zzcpt-BQ21hk-X.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const m of a)if(m.type==="childList")for(const i of m.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const m={};return a.integrity&&(m.integrity=a.integrity),a.referrerPolicy&&(m.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?m.credentials="include":a.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function e(a){if(a.ep)return;a.ep=!0;const m=o(a);fetch(a.href,m)}})();const j=120,C=30,B=l({__name:"moveBtn",setup(c){const t=g(),o=g(!0),e=()=>{const m=r.getRandom(0,window.innerWidth-j),i=r.getRandom(0,window.innerHeight-C);return{x:m,y:i}},a=()=>{if(!o.value)return;const{x:m,y:i}=e(),p=r.getRandomColor(),_=r.getRandomColor();t.value.style.left=m+"px",t.value.style.top=i+"px",t.value.style.backgroundColor=p,t.value.style.color=_};return w(()=>{t.value.addEventListener("mouseenter",a),t.value.addEventListener("click",()=>{alert("我们是匆匆的行者，祝福如春雨，滋润心田间。愿你笑容常开，生活美满甜；事业步步高，前程似锦绣。健康快乐伴你左右，幸福永远与你相伴。")}),window.onresize=a,window.addEventListener("keydown",m=>{m.key===" "&&(o.value=!1)}),a()}),(m,i)=>(s(),n("button",{ref_key:"btn",ref:t,id:"btn"},"空格定身(点击)",512))}}),z=(c,t)=>{const o=c.__vccOpts||c;for(const[e,a]of t)o[e]=a;return o},M=z(B,[["__scopeId","data-v-7f759790"]]),F=[{name:"公共方法",list:[{name:"获取版本号",title:"getVersion",com:"getVersion"},{name:"抛错",title:"error",com:"error"},{name:"防抖",title:"debounce",com:"debounce"},{name:"节流",title:"throttle",com:"throttle"}]},{name:"类型检测",list:[{name:"获取类型",title:"getType",com:"getType"}]},{name:"正则操作",list:[{name:"是否包含xx",title:"regIsHas",com:"regIsHas"},{name:"是否为邮箱",title:"regEmail",com:"regEmail"},{name:"是否为手机号",title:"regPhone",com:"regPhone"},{name:"是否为身份证号",title:"regIdcard",com:"regIdcard"}]},{name:"参数获取",list:[{name:"获取url参数",title:"getUrlParam",com:"getUrlParam"},{name:"参数格式化",title:"paramformat",com:"paramformat"}]},{name:"转类型",list:[{name:"转字符串",title:"toString",com:"toString"},{name:"转数组",title:"toArray",com:"toArray"}]},{name:"工具函数",list:[{name:"获取随机数",title:"getRandom",com:"getRandom"},{name:"获取随机数组",title:"getRandomArray",com:"getRandomArray"},{name:"获取随机颜色",title:"getRandomColor",com:"getRandomColor"},{name:"金额千分位",title:"moneyFormat",com:"moneyFormat"}]},{name:"数据处理",list:[{name:"数据对比",title:"dataEqual",com:"dataEqual"},{name:"对象中是否有空值",title:"dataEmpty",com:"dataEmpty"},{name:"深克隆",title:"deepClone",com:"deepClone"},{name:"转树形结构",title:"toTree",com:"toTree"},{name:"数据分组",title:"groupBy",com:"groupBy"},{name:"取交/并/差/补",title:"dataMerge",com:"dataMerge"},{name:"数组去重",title:"dataUnique",com:"dataUnique"},{name:"数组去空",title:"dataUnEmpty",com:"dataUnEmpty"},{name:"打乱数组",title:"shuffleArray",com:"shuffleArray"}]},{name:"日期",list:[{name:"日期信息",title:"getDateInfo",com:"getDateInfo"},{name:"日期类型",title:"getDateType",com:"getDateType"},{name:"获取日期",title:"getDate",com:"getDate"},{name:"月份天数",title:"getMonthDays",com:"getMonthDays"},{name:"两个日期之间的日期",title:"getBetwenDate",com:"getBetwenDate"},{name:"某日期的近期天数",title:"getDateList",com:"getDateList"},{name:"获取时间段",title:"getTimeStep",com:"getTimeStep"}]},{name:"计算",list:[{name:"百分比",title:"getPercentage",com:"getPercentage"}]}],P={class:"menu"},L={class:"title"},S=["onClick"],k=l({__name:"menu",emits:["change"],setup(c,{emit:t}){const o=t,e=a=>{o("change",a)};return(a,m)=>(s(),n("div",P,[m[0]||(m[0]=$('<div class="menu-item" data-v-83227898><div class="title" data-v-83227898>说明</div><div class="item" data-v-83227898>安装(请看控制台)</div><div class="item" data-v-83227898>react/vue都可以使用</div><div class="item" data-v-83227898>输出结果请看控制台</div></div>',1)),(s(!0),n(u,null,h(D(F),(i,p)=>(s(),n("div",{class:"menu-item",key:p},[d("div",L,y(i.name),1),(s(!0),n(u,null,h(i.list,(_,f)=>(s(),n("div",{class:"item",key:f,onClick:fo=>e(_)},y(_.name),9,S))),128))]))),128))]))}}),O=z(k,[["__scopeId","data-v-83227898"]]),q={class:"w-full h-full",name:"",id:""},b=l({__name:"getVersion",setup(c){const t=r.getVersion();return console.log(t),(o,e)=>(s(),n("textarea",q,`\r
<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
const version = zztool.getVersion();\r
console.log(version);\r
<\/script>\r
        `))}}),U={class:"w-full h-full",name:"",id:""},H=l({__name:"error",setup(c){return setTimeout(()=>{r.error("抛出错误")},100),(t,o)=>(s(),n("textarea",U,`\r
<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
setTimeout(() => {\r
    zztool.error('抛出错误');\r
}, 100);\r
<\/script>\r
`))}}),V=l({__name:"debounce",setup(c){const t=()=>{r.debounce(()=>{console.log("防抖")},1e3)};return(o,e)=>(s(),n(u,null,[d("button",{onClick:e[0]||(e[0]=a=>t())},"点击"),e[1]||(e[1]=d("textarea",{class:"w-full h-50",name:"",id:""},`\r
<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
const clickFn = zztool.debounce(() => {\r
    console.log('防抖');\r
}, 1000);\r
<\/script>\r
`,-1))],64))}}),Z=l({__name:"throttle",setup(c){const t=()=>{r.throttle(()=>{console.log("节流")},1e3)};return(o,e)=>(s(),n(u,null,[d("button",{onClick:t},"点击"),e[0]||(e[0]=d("textarea",{class:"w-full h-50",name:"",id:""},`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  const clickFn = () => {\r
    zztool.throttle(() => {\r
        console.log('节流');\r
    }, 1000);\r
 }\r
<\/script>\r
`,-1))],64))}}),N={class:"w-full h-50",name:"",id:""},Y=10,G=l({__name:"getType",setup(c){const t=r.getType(Y);return console.log(t),(o,e)=>(s(),n("textarea",N,`\r
<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
const number = 10;\r
const type = zztool.getType(number);\r
console.log(type)\r
<\/script>\r
`))}}),K={class:"w-full h-50",name:"",id:""},W="how are you?",X=l({__name:"regIsHas",setup(c){const t=r.regIsHas(W,"you");return console.log(t),(o,e)=>(s(),n("textarea",K,`\r
<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
\r
const str = 'how are you?';\r
const isHas = zztool.regIsHas(str, 'you');\r
console.log(isHas)\r
<\/script>\r
`))}}),J={class:"w-full h-50",name:"",id:""},Q="xxxx@163.com",tt="xxxx@gmail.com",ot="xxxx1234234.com",rt=l({__name:"regEmail",setup(c){const t=Array.from([Q,tt,ot]);for(let o=0;o<t.length;o++){const e=t[o];console.log(r.regEmail(e))}return(o,e)=>(s(),n("textarea",J,`\r
<script lang="ts" setup>\r
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
`))}}),et={class:"w-full h-50",name:"",id:""},at="15666666666",st="11111111111",nt=l({__name:"regPhone",setup(c){const t=Array.from([at,st]);for(let o=0;o<t.length;o++){const e=t[o];console.log(r.regPhone(e))}return(o,e)=>(s(),n("textarea",et,`\r
<script lang="ts" setup>\r
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
`))}}),ct={class:"w-full h-50",name:"",id:""},lt="111111111111111111",mt="46516546549874654x",it=l({__name:"regIdcard",setup(c){const t=Array.from([lt,mt]);for(let o=0;o<t.length;o++){const e=t[o],a=r.regIdcard(e);console.log(a)}return(o,e)=>(s(),n("textarea",ct,`\r
--- 本方法验证的是真实有效的身份证号码 ---\r
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
`))}}),pt={class:"w-full h-50",name:"",id:""},dt="http://www.baidu.com?a=1&b=2",_t=l({__name:"getUrlParam",setup(c){const t=r.getUrlParam(dt);return console.log(t),(o,e)=>(s(),n("textarea",pt,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const url = "http://www.baidu.com?a=1&b=2";\r
  const param = zztool.getUrlParam(url); // 无参数则会获取url\r
  console.log(param) // {a: '1', b: '2'}\r
<\/script>\r
`))}}),ut={class:"w-full h-50",name:"",id:""},gt=l({__name:"paramformat",setup(c){const t={a:"1",b:"2"},o=r.paramformat(t,"url"),e=r.paramformat(t,"json"),a=r.paramformat(t,"formData");return console.log(o,e,a),(m,i)=>(s(),n("textarea",ut,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const params = {a: '1', b: '2'}\r
  const param1 = zztool.paramformat(params,'url');\r
  const param2 = zztool.paramformat(params,'json');\r
  const param3 = zztool.paramformat(params,'formData');\r
  console.log(param1,param2,param3)\r
<\/script>\r
`))}}),zt={class:"w-full h-50",name:"",id:""},ft=l({__name:"toString",setup(c){const t={a:1,b:2},o=[1,2,3],e=r.toString(t),a=r.toString(o);return console.log(e,a),(m,i)=>(s(),n("textarea",zt,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const obj = { a: 1, b: 2 };\r
  const arr = [1, 2, 3];\r
  const str1 = zztool.toString(obj);\r
  const str2 = zztool.toString(arr);\r
  console.log(str1,str2); // {"a":1,"b":2} [1,2,3]\r
<\/script>\r
`))}}),ht={class:"w-full h-50",name:"",id:""},yt="1,2,3,4,5",xt="1-2-3-4-5",bt="12345",vt=l({__name:"toArray",setup(c){const t={a:1,b:2},o=[1,2,3],e=r.toArray(t),a=r.toArray(o),m=r.toArray(yt),i=r.toArray(xt,"-"),p=r.toArray(bt);return console.log(e,a,m,i,p),(_,f)=>(s(),n("textarea",ht,`\r
<script lang="ts" setup>\r
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
`))}}),wt={class:"w-full h-50",name:"",id:""},$t=l({__name:"getRandom",setup(c){const t=r.getRandom(0,100);return console.log(t),(o,e)=>(s(),n("textarea",wt,`\r
<script lang="ts" setup>\r
 import * as zztool from '@zzcpt/zztool';\r
  \r
  const random = zztool.getRandom(0,100);\r
  console.log(random)\r
<\/script>\r
`))}}),It={class:"w-full h-50",name:"",id:""},Dt=l({__name:"getRandomArray",setup(c){const t=r.getRandomArray(100,0,100);return console.log(t),(o,e)=>(s(),n("textarea",It,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const random = zztool.getRandomArray(100,0,100);\r
  console.log(random)\r
<\/script>\r
`))}}),At={class:"w-full h-50",name:"",id:""},Rt=l({__name:"getRandomColor",setup(c){const t=r.getRandomColor(),o=r.getRandomRGBColor(),e=r.getRandomRGBA();return console.log(t,o,e),(a,m)=>(s(),n("textarea",At,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const color = zztool.getRandomColor();\r
  const rgbColor = zztool.getRandomRGBColor();\r
  const rgbaColor = zztool.getRandomRGBA();\r
  console.log(color,rgbColor,rgbaColor)\r
<\/script>\r
`))}}),Tt={class:"w-full h-50",name:"",id:""},v=1e6,Et=l({__name:"moneyFormat",setup(c){const t=r.moneyFormat(v),o=r.moneyFormat(v,"~","$");return console.log(t,o),(e,a)=>(s(),n("textarea",Tt,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const money = 1000000;\r
  const moneyFormat = zztool.moneyFormat(money);\r
  const moneyFormat2 = zztool.moneyFormat(money,'~','$');\r
  console.log(moneyFormat,moneyFormat2);\r
<\/script>\r
`))}}),jt={class:"w-full h-full",name:"",id:""},Ct=l({__name:"dataEqual",setup(c){const t={a:2,b:1,c:{d:1}},o={a:2,b:2,c:{d:2}},e=r.dataEqual(t,o);return console.log(e),(a,m)=>(s(),n("textarea",jt,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const obj1 = {a:2,b:1,c:{d:1}};\r
  const obj2 = {a:2,b:2,c:{d:2}};\r
  const data = zztool.dataEqual(obj1,obj2);\r
  console.log(data)\r
<\/script>\r
`))}}),Bt={class:"w-full h-full",name:"",id:""},Mt=l({__name:"dataEmpty",setup(c){const t={a:2,b:1,c:{d:1}},o={a:2,b:1,c:{d:1,e:[]}},e=r.dataEmpty(t),a=r.dataEmpty(o);return console.log(e,a),(m,i)=>(s(),n("textarea",Bt,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const obj1 = {a:2,b:1,c:{d:1}};\r
  const obj2 = {a:2,b:1,c:{d:1,e:[]}};\r
  const data1 = zztool.dataEmpty(obj1);\r
  const data2 = zztool.dataEmpty(obj2);\r
  console.log(data1,data2) // false true\r
<\/script>\r
`))}}),Ft={class:"w-full h-full",name:"",id:""},Pt=l({__name:"deepClone",setup(c){const t={a:2,b:1,c:{d:1}},o=r.deepClone(t);return console.log(t==o),(e,a)=>(s(),n("textarea",Ft,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const obj1 = {a:2,b:1,c:{d:1}};\r
  const obj2 = zztool.deepClone(obj1);\r
  console.log(obj1==obj2) // false\r
<\/script>\r
`))}}),Lt={class:"w-full h-full",name:"",id:""},St=l({__name:"toTree",setup(c){var t=[{id:1,parentId:null,name:"Item 1"},{id:2,parentId:1,name:"Item 1.1"},{id:3,parentId:1,name:"Item 1.2"},{id:4,parentId:2,name:"Item 1.1.1"},{id:5,parentId:null,name:"Item 2"}];const o=r.toTree(t,"parentId");return console.log(o),(e,a)=>(s(),n("textarea",Lt,`\r
<script lang="ts" setup>\r
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
`))}}),kt={class:"w-full h-full",name:"",id:""},Ot=l({__name:"groupBy",setup(c){var t=[{id:1,parentId:2,name:"Item 1"},{id:2,parentId:1,name:"Item 1.1"},{id:3,parentId:1,name:"Item 1.2"},{id:4,parentId:2,name:"Item 1.1.1"}];const o=r.groupBy(t,"parentId");return console.log(o),(e,a)=>(s(),n("textarea",kt,`\r
<script lang="ts" setup>\r
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
`))}}),qt={class:"w-full h-full",name:"",id:""},Ut=l({__name:"dataMerge",setup(c){const t=[1,2,3,4,5],o=[4,5,6,7,8],e=r.dataMerge(t,o,1),a=r.dataMerge(t,o,2),m=r.dataMerge(t,o,3),i=r.dataMerge(t,o,4);return console.log(e),console.log(a),console.log(m),console.log(i),(p,_)=>(s(),n("textarea",qt,`\r
<script lang="ts" setup>\r
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
`))}}),Ht={class:"w-full h-full",name:"",id:""},Vt=l({__name:"dataUnique",setup(c){const t=[1,2,3,4,5,5,6],o=r.uniqueArray(t);return console.log(o),(e,a)=>(s(),n("textarea",Ht,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const arr1 = [1,2,3,4,5,5,6];\r
  const data = zztool.uniqueArray(arr1);\r
  console.log(data)\r
\r
<\/script>\r
`))}}),Zt={class:"w-full h-full",name:"",id:""},Nt=l({__name:"dataUnEmpty",setup(c){const t=[1,2,3,4,5,5,"","",6];console.log(t);const o=r.arrayTrim(t);return console.log(o),(e,a)=>(s(),n("textarea",Zt,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const arr1 = [1,2,3,4,5,5,'','',6];\r
  console.log(arr1)\r
  const data = zztool.dataUnEmpty(arr1);\r
  console.log(data)\r
\r
<\/script>\r
`))}}),Yt={class:"w-full h-full",name:"",id:""},Gt=l({__name:"getDateInfo",setup(c){return console.log(r.getDateInfo("2023-6-15")),(t,o)=>(s(),n("textarea",Yt,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  console.log(zztool.getDateInfo('2023-6-15'))\r
<\/script>\r
`))}}),Kt={class:"w-full h-full",name:"",id:""},Wt=l({__name:"getDateType",setup(c){return console.log(r.getDateType("2023-6-15","Y/M/D")),(t,o)=>(s(),n("textarea",Kt,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  console.log(zztool.getDateType('2023-6-15',"Y/M/D"))\r
<\/script>\r
`))}}),Xt={class:"w-full h-full",name:"",id:""},Jt=l({__name:"getDate",setup(c){return console.log(r.getDate()),console.log(r.getDate("2023-6-15")),console.log(r.getDate("Y/M/D")),(t,o)=>(s(),n("textarea",Xt,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  console.log(zztool.getDate())\r
  console.log(zztool.getDate("2023-6-15"))\r
  console.log(zztool.getDate("Y/M/D"))\r
<\/script>\r
`))}}),Qt={class:"w-full h-full",name:"",id:""},to=l({__name:"getMonthDays",setup(c){return console.log(r.getMonthDays(2024,6)),(t,o)=>(s(),n("textarea",Qt,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  console.log(zztool.getMonthDays(2024,6))\r
<\/script>\r
`))}}),oo={class:"w-full h-full",name:"",id:""},ro=l({__name:"getBetwenDate",setup(c){return console.log(r.getBetweenDate("2024-06-01","2024-06-15",!0)),console.log(r.getBetweenDate("2024-06-01","2024-06-15")),(t,o)=>(s(),n("textarea",oo,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15',true))\r
  console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15'))\r
<\/script>\r
`))}}),eo={class:"w-full h-full",name:"",id:""},ao=l({__name:"getDateList",setup(c){const t=r.getRecentDate(new Date("2024-6-15"),1),o=r.getRecentDate(new Date("2024-6-15"),2),e=r.getRecentDate(new Date("2024-6-15"),3);return console.log("前三天：",t),console.log("前一周：",o),console.log("前一月：",e),(a,m)=>(s(),n("textarea",eo,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const day1 = zztool.getDateList(new Date('2024-6-15'),1);\r
  const day2 = zztool.getDateList(new Date('2024-6-15'),2);\r
  const day3 = zztool.getDateList(new Date('2024-6-15'),3);\r
  console.log('前三天：',day1)\r
  console.log('前一周：',day2)\r
  console.log('前一月：',day3)\r
<\/script>\r
`))}}),so={class:"w-full h-full",name:"",id:""},no=l({__name:"getTimeStep",setup(c){const t=r.getTimeStep("01:00","10:00"),o=r.getTimeStep("01:00","10:00","00:30");return console.log("默认步长：",t),console.log("步长半小时：",o),(e,a)=>(s(),n("textarea",so,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
\r
  const arr = zztool.getTimeStep('01:00',"10:00");\r
  const arr1 = zztool.getTimeStep('01:00',"10:00","00:30");\r
  console.log("默认步长：",arr)\r
  console.log("步长半小时：",arr1)\r
<\/script>\r
`))}}),co={class:"w-full h-full",name:"",id:""},lo=l({__name:"shuffleArray",setup(c){const t=r.getRandomArray(10,0,10);return console.log(r.shuffleArray(t)),console.log(r.shuffleArray(t)),(o,e)=>(s(),n("textarea",co,`\r
<script lang="ts" setup>\r
  import * as zztool from '@zzcpt/zztool';\r
  \r
  const arr = zztool.getRandomArray(10,0,10);\r
  console.log(zztool.shuffleArray(arr));\r
  console.log(zztool.shuffleArray(arr));\r
<\/script>\r
`))}}),mo={class:"w-full h-50",name:"",id:""},io=l({__name:"getPercentage",setup(c){const t=r.getPercentage(10,100,2);return console.log(t),(o,e)=>(s(),n("textarea",mo,`\r
<script lang="ts" setup>\r
import * as zztool from '@zzcpt/zztool';\r
const number = zztool.getPercentage(10, 100,2);\r
console.log(number)\r
<\/script>\r
`))}}),po={style:{display:"flex"}},_o={style:{width:"100%",padding:"10px"}},uo=l({__name:"App",setup(c){const t=A(b),o={getVersion:b,error:H,debounce:V,throttle:Z,getType:G,regIsHas:X,regEmail:rt,regPhone:nt,regIdcard:it,getUrlParam:_t,paramformat:gt,toString:ft,toArray:vt,getRandom:$t,getRandomArray:Dt,getRandomColor:Rt,moneyFormat:Et,dataEqual:Ct,dataEmpty:Mt,deepClone:Pt,toTree:St,groupBy:Ot,dataMerge:Ut,dataUnique:Vt,dataUnEmpty:Nt,getDateInfo:Gt,getDateType:Wt,getDate:Jt,getMonthDays:to,getBetwenDate:ro,getDateList:ao,getTimeStep:no,shuffleArray:lo,getPercentage:io},e=i=>{console.log(`%c${i.title}`,"background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px"),t.value=o[i.com]},a=g(),m=g();return w(()=>{a.value=document.getElementById("dialog"),m.value=document.querySelector(".closeBtn"),a.value.showModal(),m.value.addEventListener("click",function(){a.value.close()})}),(i,p)=>(s(),n(u,null,[x(M),d("div",po,[x(O,{onChange:e}),d("div",_o,[(s(),R(T(t.value)))]),p[0]||(p[0]=$(`<dialog id="dialog" data-v-1201cca4><div class="win" data-v-1201cca4><div class="container" data-v-1201cca4><h4 data-v-1201cca4>安装/使用</h4><code data-v-1201cca4><pre data-v-1201cca4>--- install
npm install @zzcpt/zztool@latest
---xxx.vue
import * as zztool from &#39;@zzcpt/zztool&#39;;
import { xxx } from &#39;@zzcpt/zztool&#39;;

            </pre></code><h4 data-v-1201cca4>说明</h4><ul style="list-style:inside;" data-v-1201cca4><li data-v-1201cca4>文档示例输出均在控制台</li><li data-v-1201cca4>可在控制台中使用 zz.getVersion() 等命令使用该工具库</li></ul></div><button class="closeBtn" data-v-1201cca4>关 闭</button></div></dialog>`,1))])],64))}}),go=z(uo,[["__scopeId","data-v-1201cca4"]]),zo=window;zo.zz=I;E(go).provide("$ZZTOOL",I).mount("#app");
//# sourceMappingURL=index-Czc-m2m6.js.map
