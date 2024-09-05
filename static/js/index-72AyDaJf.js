import{d as l,o as n,c as a,a as h,F as O,r as Z,u as $,b as z,t as u,i,s as y,e as x,f as j,g as v,h as b}from"./@vue-Vemz2CzF.js";import{Z as I}from"./@zzcpt-CEC27UK7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function o(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(e){if(e.ep)return;e.ep=!0;const c=o(e);fetch(e.href,c)}})();const w=[{name:"公共方法",list:[{name:"获取版本号",title:"getVersion",com:"getVersion"},{name:"抛错",title:"error",com:"error"},{name:"防抖",title:"debounce",com:"debounce"},{name:"节流",title:"throttle",com:"throttle"}]},{name:"类型检测",list:[{name:"获取类型",title:"getType",com:"getType"}]},{name:"正则操作",list:[{name:"是否包含xx",title:"regIsHas",com:"regIsHas"},{name:"是否为邮箱",title:"regEmail",com:"regEmail"},{name:"是否为手机号",title:"regPhone",com:"regPhone"},{name:"是否为身份证号",title:"regIdcard",com:"regIdcard"}]},{name:"参数获取",list:[{name:"获取url参数",title:"getUrlParam",com:"getUrlParam"},{name:"参数格式化",title:"paramformat",com:"paramformat"}]},{name:"转类型",list:[{name:"转字符串",title:"toString",com:"toString"},{name:"转数组",title:"toArray",com:"toArray"}]},{name:"工具函数",list:[{name:"获取随机数",title:"getRandom",com:"getRandom"},{name:"获取随机数组",title:"getRandomArray",com:"getRandomArray"},{name:"获取随机颜色",title:"getRandomColor",com:"getRandomColor"},{name:"金额千分位",title:"moneyFormat",com:"moneyFormat"}]},{name:"数据处理",list:[{name:"数据对比",title:"dataEqual",com:"dataEqual"},{name:"对象中是否有空值",title:"dataEmpty",com:"dataEmpty"},{name:"深克隆",title:"deepClone",com:"deepClone"},{name:"转树形结构",title:"toTree",com:"toTree"},{name:"数据分组",title:"groupBy",com:"groupBy"},{name:"取交/并/差/补",title:"dataMerge",com:"dataMerge"},{name:"数组去重",title:"dataUnique",com:"dataUnique"},{name:"数组去空",title:"dataUnEmpty",com:"dataUnEmpty"},{name:"dataFindValues",title:"dataFindValues",com:"dataFindValues"}]},{name:"日期",list:[{name:"日期信息",title:"getDateInfo",com:"getDateInfo"},{name:"日期类型",title:"getDateType",com:"getDateType"},{name:"获取日期",title:"getDate",com:"getDate"},{name:"月份天数",title:"getMonthDays",com:"getMonthDays"},{name:"两个日期之间的日期",title:"getBetwenDate",com:"getBetwenDate"},{name:"某日期的近期天数",title:"getDateList",com:"getDateList"},{name:"获取时间段",title:"getTimeStep",com:"getTimeStep"}]}],D={class:"menu"},F={class:"title"},A=["onClick"],C=l({__name:"menu",emits:["change"],setup(s,{emit:t}){const o=t,r=e=>{o("change",e)};return console.log(`
--- main.ts
import ZZTOOL from '@zzcpt/zztool';

createApp(App).provide("$ZZTOOL",new ZZTOOL()).mount('#app')
---xxx.vue
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
    `),(e,c)=>(n(),a("div",D,[c[0]||(c[0]=h('<div class="menu-item" data-v-d6020e94><div class="title" data-v-d6020e94>说明</div><div class="item" data-v-d6020e94>安装(请看控制台)</div><div class="item" data-v-d6020e94>react/vue都可以使用</div><div class="item" data-v-d6020e94>输出结果请看控制台</div></div>',1)),(n(!0),a(O,null,Z($(w),(m,p)=>(n(),a("div",{class:"menu-item",key:p},[z("div",F,u(m.name),1),(n(!0),a(O,null,Z(m.list,(d,_)=>(n(),a("div",{class:"item",key:_,onClick:L=>r(d)},u(d.name),9,A))),128))]))),128))]))}}),E=(s,t)=>{const o=s.__vccOpts||s;for(const[r,e]of t)o[r]=e;return o},R=E(C,[["__scopeId","data-v-d6020e94"]]),M={class:"w-full h-full",name:"",id:""},g=l({__name:"getVersion",setup(s){const o=i("$ZZTOOL").v;return console.log(o),(r,e)=>(n(),a("textarea",M,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  const version = zztool.v;\r
  console.log(version);\r
<\/script>\r
        `))}}),B={class:"w-full h-full",name:"",id:""},S=l({__name:"error",setup(s){const t=i("$ZZTOOL");return setTimeout(()=>{t.error("抛出错误")},100),(o,r)=>(n(),a("textarea",B,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  zztool.error('抛出错误');\r
<\/script>\r
`))}}),U=l({__name:"debounce",setup(s){const t=i("$ZZTOOL"),o=()=>{t.debounce(()=>{console.log("防抖")},1e3)};return(r,e)=>(n(),a(O,null,[z("button",{onClick:o},"点击"),e[0]||(e[0]=z("textarea",{class:"w-full h-50",name:"",id:""},`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  const clickFn = () => {\r
      zztool.debounce(() => {\r
          console.log('防抖');\r
      }, 1000);\r
  }\r
<\/script>\r
`,-1))],64))}}),P=l({__name:"throttle",setup(s){const t=i("$ZZTOOL"),o=()=>{t.throttle(()=>{console.log("节流")},1e3)};return(r,e)=>(n(),a(O,null,[z("button",{onClick:o},"点击"),e[0]||(e[0]=z("textarea",{class:"w-full h-50",name:"",id:""},`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  const clickFn = () => {\r
      zztool.debounce(() => {\r
          console.log('节流');\r
      }, 1000);\r
  }\r
<\/script>\r
`,-1))],64))}}),V={class:"w-full h-50",name:"",id:""},q=10,k=l({__name:"getType",setup(s){const o=i("$ZZTOOL").getType(q);return console.log(o),(r,e)=>(n(),a("textarea",V,`\r
<script lang="ts" setup>\r
import { inject } from 'vue';\r
import ZZTOOL from '@zzcpt/zztool';\r
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
const number = 10;\r
const type = zztool.getType(number);\r
console.log(type) // number\r
<\/script>\r
`))}}),H={class:"w-full h-50",name:"",id:""},N="how are you?",G=l({__name:"regIsHas",setup(s){const o=i("$ZZTOOL").regIsHas(N,"you");return console.log(o),(r,e)=>(n(),a("textarea",H,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const str = 'how are you?';\r
  const isHas = zztool.regIsHas(str, 'you');\r
  console.log(isHas) // true\r
<\/script>\r
`))}}),Y={class:"w-full h-50",name:"",id:""},K="xxxx@163.com",J="xxxx@gmail.com",Q="xxxx1234234.com",W=l({__name:"regEmail",setup(s){const t=i("$ZZTOOL"),o=Array.from([K,J,Q]);for(let r=0;r<o.length;r++){const e=o[r];console.log(t.regEmail(e))}return(r,e)=>(n(),a("textarea",Y,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
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
`))}}),X={class:"w-full h-50",name:"",id:""},tt="15666666666",ot="11111111111",rt=l({__name:"regPhone",setup(s){const t=i("$ZZTOOL"),o=Array.from([tt,ot]);for(let r=0;r<o.length;r++){const e=o[r];console.log(t.regPhone(e))}return(r,e)=>(n(),a("textarea",X,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const phone1 = '15666666666';\r
  const phone2 = '11111111111';\r
  const arr = Array.from([phone1, phone2]);\r
  for(let i = 0; i < arr.length; i++){\r
    const item = arr[i];\r
    console.log(zztool.regPhone(item)); // true false\r
  }\r
<\/script>\r
`))}}),et={class:"w-full h-50",name:"",id:""},nt="111111111111111111",at="46516546549874654x",st=l({__name:"regIdcard",setup(s){const t=i("$ZZTOOL"),o=Array.from([nt,at]);for(let r=0;r<o.length;r++){const e=o[r],c=t.regIdcard(e);console.log(c)}return(r,e)=>(n(),a("textarea",et,`\r
--- 本方法验证的是真实有效的身份证号码 ---\r
------------------------------------------\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
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
`))}}),ct={class:"w-full h-50",name:"",id:""},lt="http://www.baidu.com?a=1&b=2",it=l({__name:"getUrlParam",setup(s){const o=i("$ZZTOOL").getUrlParam(lt);return console.log(o),(r,e)=>(n(),a("textarea",ct,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
\r
  const url = "http://www.baidu.com?a=1&b=2";\r
  const param = zztool.getUrlParam(url);\r
  console.log(param) // {a: '1', b: '2'}\r
<\/script>\r
`))}}),mt={class:"w-full h-50",name:"",id:""},pt=l({__name:"paramformat",setup(s){const t=i("$ZZTOOL"),o={a:"1",b:"2"},r=t.paramformat(o,"url"),e=t.paramformat(o,"json"),c=t.paramformat(o,"formData");return console.log(r,e,c),(m,p)=>(n(),a("textarea",mt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
\r
  const params = {a: '1', b: '2'}\r
  const param1 = zztool.paramformat(params,'url');\r
  const param2 = zztool.paramformat(params,'json');\r
  const param3 = zztool.paramformat(params,'formData');\r
  console.log(param1,param2,param3)\r
<\/script>\r
`))}}),zt={class:"w-full h-50",name:"",id:""},dt=l({__name:"toString",setup(s){const t=i("$ZZTOOL"),o={a:1,b:2},r=[1,2,3],e=t.toString(o),c=t.toString(r);return console.log(e,c),(m,p)=>(n(),a("textarea",zt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
\r
  const obj = { a: 1, b: 2 };\r
  const arr = [1, 2, 3];\r
  const str1 = zztool.toString(obj);\r
  const str2 = zztool.toString(arr);\r
  console.log(str1,str2); // {"a":1,"b":2} [1,2,3]\r
<\/script>\r
`))}}),Ot={class:"w-full h-50",name:"",id:""},_t="1,2,3,4,5",Zt="1-2-3-4-5",ut="12345",gt=l({__name:"toArray",setup(s){const t=i("$ZZTOOL"),o={a:1,b:2},r=[1,2,3],e=t.toArray(o),c=t.toArray(r),m=t.toArray(_t),p=t.toArray(Zt,"-"),d=t.toArray(ut);return console.log(e,c,m,p,d),(_,L)=>(n(),a("textarea",Ot,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
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
`))}}),ft={class:"w-full h-50",name:"",id:""},Tt=l({__name:"getRandom",setup(s){const o=i("$ZZTOOL").getRandom(0,100);return console.log(o),(r,e)=>(n(),a("textarea",ft,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const random = zztool.getRandom(0,100);\r
  console.log(random)\r
<\/script>\r
`))}}),Lt={class:"w-full h-50",name:"",id:""},ht=l({__name:"getRandomArray",setup(s){const o=i("$ZZTOOL").getRandomArray(100,0,100);return console.log(o),(r,e)=>(n(),a("textarea",Lt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const random = zztool.getRandomArray(100,0,100);\r
  console.log(random)\r
<\/script>\r
`))}}),$t={class:"w-full h-50",name:"",id:""},yt=l({__name:"getRandomColor",setup(s){const t=i("$ZZTOOL"),o=t.getRandomColor(),r=t.getRandomRGBColor(),e=t.getRandomRGBA();return console.log(o,r,e),(c,m)=>(n(),a("textarea",$t,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const color = zztool.getRandomColor();\r
  const rgbColor = zztool.getRandomRGBColor();\r
  const rgbaColor = zztool.getRandomRGBA();\r
  console.log(color,rgbColor,rgbaColor)\r
<\/script>\r
`))}}),xt={class:"w-full h-50",name:"",id:""},f=1e6,jt=l({__name:"moneyFormat",setup(s){const t=i("$ZZTOOL"),o=t.moneyFormat(f),r=t.moneyFormat(f,"~","$");return console.log(o,r),(e,c)=>(n(),a("textarea",xt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
\r
  const money = 1000000;\r
  const moneyFormat = zztool.moneyFormat(money);\r
  const moneyFormat2 = zztool.moneyFormat(money,'~','$');\r
  console.log(moneyFormat,moneyFormat2);\r
<\/script>\r
`))}}),vt={class:"w-full h-full",name:"",id:""},bt=l({__name:"dataEqual",setup(s){const t=i("$ZZTOOL"),o={a:2,b:1,c:{d:1}},r={a:2,b:2,c:{d:2}},e=t.dataEqual(o,r);return console.log(e),(c,m)=>(n(),a("textarea",vt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const obj1 = {a:2,b:1,c:{d:1}};\r
  const obj2 = {a:2,b:2,c:{d:2}};\r
  const data = zztool.dataEqual(obj1,obj2);\r
  console.log(data)\r
<\/script>\r
`))}}),It={class:"w-full h-full",name:"",id:""},wt=l({__name:"dataEmpty",setup(s){const t=i("$ZZTOOL"),o={a:2,b:1,c:{d:1}},r={a:2,b:1,c:{d:1,e:[]}},e=t.dataEmpty(o),c=t.dataEmpty(r);return console.log(e,c),(m,p)=>(n(),a("textarea",It,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const obj1 = {a:2,b:1,c:{d:1}};\r
  const obj2 = {a:2,b:1,c:{d:1,e:[]}};\r
  const data1 = zztool.dataEmpty(obj1);\r
  const data2 = zztool.dataEmpty(obj2);\r
  console.log(data1,data2) // false true\r
<\/script>\r
`))}}),Dt={class:"w-full h-full",name:"",id:""},Ft=l({__name:"deepClone",setup(s){const t=i("$ZZTOOL"),o={a:2,b:1,c:{d:1}},r=t.deepClone(o);return console.log(o==r),(e,c)=>(n(),a("textarea",Dt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const obj1 = {a:2,b:1,c:{d:1}};\r
  const obj2 = zztool.deepClone(obj1);\r
  console.log(obj1==obj2) // false\r
<\/script>\r
`))}}),At={class:"w-full h-full",name:"",id:""},Ct=l({__name:"toTree",setup(s){const t=i("$ZZTOOL");var o=[{id:1,parentId:null,name:"Item 1"},{id:2,parentId:1,name:"Item 1.1"},{id:3,parentId:1,name:"Item 1.2"},{id:4,parentId:2,name:"Item 1.1.1"},{id:5,parentId:null,name:"Item 2"}];const r=t.toTree(o,"parentId");return console.log(r),(e,c)=>(n(),a("textarea",At,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
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
`))}}),Et={class:"w-full h-full",name:"",id:""},Rt=l({__name:"groupBy",setup(s){const t=i("$ZZTOOL");var o=[{id:1,parentId:2,name:"Item 1"},{id:2,parentId:1,name:"Item 1.1"},{id:3,parentId:1,name:"Item 1.2"},{id:4,parentId:2,name:"Item 1.1.1"}];const r=t.groupBy(o,"parentId");return console.log(r),(e,c)=>(n(),a("textarea",Et,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
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
`))}}),Mt={class:"w-full h-full",name:"",id:""},Bt=l({__name:"dataMerge",setup(s){const t=i("$ZZTOOL"),o=[1,2,3,4,5],r=[4,5,6,7,8],e=t.dataMerge(o,r,1),c=t.dataMerge(o,r,2),m=t.dataMerge(o,r,3),p=t.dataMerge(o,r,4);return console.log(e),console.log(c),console.log(m),console.log(p),(d,_)=>(n(),a("textarea",Mt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
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
`))}}),St={class:"w-full h-full",name:"",id:""},Ut=l({__name:"dataUnique",setup(s){const t=i("$ZZTOOL"),o=[1,2,3,4,5,5,6],r=t.dataUnique(o);return console.log(r),(e,c)=>(n(),a("textarea",St,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const arr1 = [1,2,3,4,5,5,6];\r
  const data = zztool.dataUnique(arr1);\r
  console.log(data)\r
\r
<\/script>\r
`))}}),Pt={class:"w-full h-full",name:"",id:""},Vt=l({__name:"dataUnEmpty",setup(s){const t=i("$ZZTOOL"),o=[1,2,3,4,5,5,"","",6];console.log(o);const r=t.dataUnEmpty(o);return console.log(r),(e,c)=>(n(),a("textarea",Pt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const arr1 = [1,2,3,4,5,5,'','',6];\r
  console.log(arr1)\r
  const data = zztool.dataUnEmpty(arr1);\r
  console.log(data)\r
\r
<\/script>\r
`))}}),qt={class:"w-full h-full",name:"",id:""},T="1,2,5",kt=l({__name:"dataFindValues",setup(s){const t=i("$ZZTOOL"),o=[{id:1,name:"张三"},{id:2,name:"李四"},{id:3,name:"王五",list:[{id:5,name:"一二三"}]}],r=t.dataFindValues(T,o,"id");console.log("三个参数: ",r);const e=t.dataFindValues(T,o,"id","list");return console.log("存在第四个参数: ",e),(c,m)=>(n(),a("textarea",qt,`\r
第一个参数是对应第三个参数的值，第二个参数是数组，第四个参数在父级未找到对应的值则会在list中寻找\r
\r
只有三个参数指挥在一维数组中寻找\r
\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const str = '1,2,5';\r
  const obj =  [\r
    {id:1,name:'张三'},\r
    {id:2,name:'李四'},\r
    {id:3,name:'王五',list:[{id:5,name:'一二三'}]}\r
  ]\r
  const data = zztool.dataFindValues(str,obj,'id');\r
  console.log("三个参数: ",data)\r
  const data2 = zztool.dataFindValues(str,obj,'id','list');\r
  console.log("存在第四个参数: ",data2)\r
<\/script>\r
`))}}),Ht={class:"w-full h-full",name:"",id:""},Nt=l({__name:"getDateInfo",setup(s){const t=i("$ZZTOOL");return console.log(t.getDateInfo("2023-6-15")),(o,r)=>(n(),a("textarea",Ht,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  console.log(zztool.getDateInfo('2023-6-15'))\r
<\/script>\r
`))}}),Gt={class:"w-full h-full",name:"",id:""},Yt=l({__name:"getDateType",setup(s){const t=i("$ZZTOOL");return console.log(t.getDateType("2023-6-15","Y/M/D")),(o,r)=>(n(),a("textarea",Gt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  console.log(zztool.getDateType('2023-6-15',"Y/M/D"))\r
<\/script>\r
`))}}),Kt={class:"w-full h-full",name:"",id:""},Jt=l({__name:"getDate",setup(s){const t=i("$ZZTOOL");return console.log(t.getDate("2023-6-15")),console.log(t.getDate("Y/M/D")),(o,r)=>(n(),a("textarea",Kt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  console.log(zztool.getDate("2023-6-15"))\r
  console.log(zztool.getDate("Y/M/D"))\r
<\/script>\r
`))}}),Qt={class:"w-full h-full",name:"",id:""},Wt=l({__name:"getMonthDays",setup(s){const t=i("$ZZTOOL");return console.log(t.getMonthDays(2024,6)),(o,r)=>(n(),a("textarea",Qt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  console.log(zztool.getMonthDays(2024,6))\r
<\/script>\r
`))}}),Xt={class:"w-full h-full",name:"",id:""},to=l({__name:"getBetwenDate",setup(s){const t=i("$ZZTOOL");return console.log(t.getBetwenDate("2024-06-01","2024-06-15")),(o,r)=>(n(),a("textarea",Xt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  console.log(zztool.getBetwenDate('2024-06-01', '2024-06-15'))\r
<\/script>\r
`))}}),oo={class:"w-full h-full",name:"",id:""},ro=l({__name:"getDateList",setup(s){return(t,o)=>(n(),a("textarea",oo,`\r
新版本上传后会更新\r
\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
<\/script>\r
`))}}),eo={class:"w-full h-full",name:"",id:""},no=l({__name:"getTimeStep",setup(s){const t=i("$ZZTOOL"),o=t.getTimeStep("01:00","10:00"),r=t.getTimeStep("01:00","10:00","00:30");return console.log("默认步长：",o),console.log("步长半小时：",r),(e,c)=>(n(),a("textarea",eo,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
\r
  const arr = zztool.getTimeStep('01:00',"10:00");\r
  const arr1 = zztool.getTimeStep('01:00',"10:00","00:30");\r
  console.log("默认步长：",arr)\r
  console.log("步长半小时：",arr1)\r
<\/script>\r
`))}}),ao={style:{display:"flex"}},so={style:{width:"100%",padding:"10px"}},co=l({__name:"App",setup(s){const t=y(g),o={getVersion:g,error:S,debounce:U,throttle:P,getType:k,regIsHas:G,regEmail:W,regPhone:rt,regIdcard:st,getUrlParam:it,paramformat:pt,toString:dt,toArray:gt,getRandom:Tt,getRandomArray:ht,getRandomColor:yt,moneyFormat:jt,dataEqual:bt,dataEmpty:wt,deepClone:Ft,toTree:Ct,groupBy:Rt,dataMerge:Bt,dataUnique:Ut,dataUnEmpty:Vt,dataFindValues:kt,getDateInfo:Nt,getDateType:Yt,getDate:Jt,getMonthDays:Wt,getBetwenDate:to,getDateList:ro,getTimeStep:no},r=e=>{console.log(`%c${e.title}`,"background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px"),t.value=o[e.com]};return(e,c)=>(n(),a("div",ao,[x(R,{onChange:r}),z("div",so,[(n(),j(v(t.value)))])]))}});b(co).provide("$ZZTOOL",new I).mount("#app");
//# sourceMappingURL=index-72AyDaJf.js.map
