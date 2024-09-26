import{d as l,i,r as _,o as v,a,c as s,b as x,F as O,e as f,u as w,f as z,t as T,s as I,g as L,h as D,j as A,k as F}from"./@vue-BhQ9nhU0.js";import{Z}from"./@zzcpt-08Gm5pNA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const E=120,R=30,C=l({__name:"moveBtn",setup(c){const t=i("$ZZTOOL"),o=_(),r=_(!0),e=()=>{const m=t.getRandom(0,window.innerWidth-E),p=t.getRandom(0,window.innerHeight-R);return{x:m,y:p}},n=()=>{if(!r.value)return;const{x:m,y:p}=e(),d=t.getRandomColor(),u=t.getRandomColor();o.value.style.left=m+"px",o.value.style.top=p+"px",o.value.style.backgroundColor=d,o.value.style.color=u};return v(()=>{o.value.addEventListener("mouseenter",n),o.value.addEventListener("click",()=>{alert("我们是匆匆的行者，祝福如春雨，滋润心田间。愿你笑容常开，生活美满甜；事业步步高，前程似锦绣。健康快乐伴你左右，幸福永远与你相伴。")}),window.onresize=n,window.addEventListener("keydown",m=>{m.key===" "&&(r.value=!1)}),n()}),(m,p)=>(a(),s("button",{ref_key:"btn",ref:o,id:"btn"},"空格定身(点击)",512))}}),g=(c,t)=>{const o=c.__vccOpts||c;for(const[r,e]of t)o[r]=e;return o},M=g(C,[["__scopeId","data-v-1c206707"]]),B=[{name:"公共方法",list:[{name:"获取版本号",title:"getVersion",com:"getVersion"},{name:"抛错",title:"error",com:"error"},{name:"防抖",title:"debounce",com:"debounce"},{name:"节流",title:"throttle",com:"throttle"}]},{name:"类型检测",list:[{name:"获取类型",title:"getType",com:"getType"}]},{name:"正则操作",list:[{name:"是否包含xx",title:"regIsHas",com:"regIsHas"},{name:"是否为邮箱",title:"regEmail",com:"regEmail"},{name:"是否为手机号",title:"regPhone",com:"regPhone"},{name:"是否为身份证号",title:"regIdcard",com:"regIdcard"}]},{name:"参数获取",list:[{name:"获取url参数",title:"getUrlParam",com:"getUrlParam"},{name:"参数格式化",title:"paramformat",com:"paramformat"}]},{name:"转类型",list:[{name:"转字符串",title:"toString",com:"toString"},{name:"转数组",title:"toArray",com:"toArray"}]},{name:"工具函数",list:[{name:"获取随机数",title:"getRandom",com:"getRandom"},{name:"获取随机数组",title:"getRandomArray",com:"getRandomArray"},{name:"获取随机颜色",title:"getRandomColor",com:"getRandomColor"},{name:"金额千分位",title:"moneyFormat",com:"moneyFormat"}]},{name:"数据处理",list:[{name:"数据对比",title:"dataEqual",com:"dataEqual"},{name:"对象中是否有空值",title:"dataEmpty",com:"dataEmpty"},{name:"深克隆",title:"deepClone",com:"deepClone"},{name:"转树形结构",title:"toTree",com:"toTree"},{name:"数据分组",title:"groupBy",com:"groupBy"},{name:"取交/并/差/补",title:"dataMerge",com:"dataMerge"},{name:"数组去重",title:"dataUnique",com:"dataUnique"},{name:"数组去空",title:"dataUnEmpty",com:"dataUnEmpty"},{name:"dataFindValues",title:"dataFindValues",com:"dataFindValues"}]},{name:"日期",list:[{name:"日期信息",title:"getDateInfo",com:"getDateInfo"},{name:"日期类型",title:"getDateType",com:"getDateType"},{name:"获取日期",title:"getDate",com:"getDate"},{name:"月份天数",title:"getMonthDays",com:"getMonthDays"},{name:"两个日期之间的日期",title:"getBetwenDate",com:"getBetwenDate"},{name:"某日期的近期天数",title:"getDateList",com:"getDateList"},{name:"获取时间段",title:"getTimeStep",com:"getTimeStep"}]}],q={class:"menu"},S={class:"title"},k=["onClick"],U=l({__name:"menu",emits:["change"],setup(c,{emit:t}){const o=t,r=e=>{o("change",e)};return(e,n)=>(a(),s("div",q,[n[0]||(n[0]=x('<div class="menu-item" data-v-83227898><div class="title" data-v-83227898>说明</div><div class="item" data-v-83227898>安装(请看控制台)</div><div class="item" data-v-83227898>react/vue都可以使用</div><div class="item" data-v-83227898>输出结果请看控制台</div></div>',1)),(a(!0),s(O,null,f(w(B),(m,p)=>(a(),s("div",{class:"menu-item",key:p},[z("div",S,T(m.name),1),(a(!0),s(O,null,f(m.list,(d,u)=>(a(),s("div",{class:"item",key:u,onClick:b=>r(d)},T(d.name),9,k))),128))]))),128))]))}}),V=g(U,[["__scopeId","data-v-83227898"]]),P={class:"w-full h-full",name:"",id:""},h=l({__name:"getVersion",setup(c){const o=i("$ZZTOOL").v;return console.log(o),(r,e)=>(a(),s("textarea",P,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  const version = zztool.v;\r
  console.log(version);\r
<\/script>\r
        `))}}),H={class:"w-full h-full",name:"",id:""},N=l({__name:"error",setup(c){const t=i("$ZZTOOL");return setTimeout(()=>{t.error("抛出错误")},100),(o,r)=>(a(),s("textarea",H,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  zztool.error('抛出错误');\r
<\/script>\r
`))}}),Y=l({__name:"debounce",setup(c){const t=i("$ZZTOOL"),o=()=>{t.debounce(()=>{console.log("防抖")},1e3)};return(r,e)=>(a(),s(O,null,[z("button",{onClick:o},"点击"),e[0]||(e[0]=z("textarea",{class:"w-full h-50",name:"",id:""},`\r
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
`,-1))],64))}}),G=l({__name:"throttle",setup(c){const t=i("$ZZTOOL"),o=()=>{t.throttle(()=>{console.log("节流")},1e3)};return(r,e)=>(a(),s(O,null,[z("button",{onClick:o},"点击"),e[0]||(e[0]=z("textarea",{class:"w-full h-50",name:"",id:""},`\r
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
`,-1))],64))}}),K={class:"w-full h-50",name:"",id:""},W=10,X=l({__name:"getType",setup(c){const o=i("$ZZTOOL").getType(W);return console.log(o),(r,e)=>(a(),s("textarea",K,`\r
<script lang="ts" setup>\r
import { inject } from 'vue';\r
import ZZTOOL from '@zzcpt/zztool';\r
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
const number = 10;\r
const type = zztool.getType(number);\r
console.log(type) // number\r
<\/script>\r
`))}}),J={class:"w-full h-50",name:"",id:""},Q="how are you?",tt=l({__name:"regIsHas",setup(c){const o=i("$ZZTOOL").regIsHas(Q,"you");return console.log(o),(r,e)=>(a(),s("textarea",J,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const str = 'how are you?';\r
  const isHas = zztool.regIsHas(str, 'you');\r
  console.log(isHas) // true\r
<\/script>\r
`))}}),ot={class:"w-full h-50",name:"",id:""},rt="xxxx@163.com",et="xxxx@gmail.com",nt="xxxx1234234.com",at=l({__name:"regEmail",setup(c){const t=i("$ZZTOOL"),o=Array.from([rt,et,nt]);for(let r=0;r<o.length;r++){const e=o[r];console.log(t.regEmail(e))}return(r,e)=>(a(),s("textarea",ot,`\r
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
`))}}),st={class:"w-full h-50",name:"",id:""},ct="15666666666",lt="11111111111",it=l({__name:"regPhone",setup(c){const t=i("$ZZTOOL"),o=Array.from([ct,lt]);for(let r=0;r<o.length;r++){const e=o[r];console.log(t.regPhone(e))}return(r,e)=>(a(),s("textarea",st,`\r
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
`))}}),mt={class:"w-full h-50",name:"",id:""},pt="111111111111111111",dt="46516546549874654x",zt=l({__name:"regIdcard",setup(c){const t=i("$ZZTOOL"),o=Array.from([pt,dt]);for(let r=0;r<o.length;r++){const e=o[r],n=t.regIdcard(e);console.log(n)}return(r,e)=>(a(),s("textarea",mt,`\r
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
`))}}),ut={class:"w-full h-50",name:"",id:""},Ot="http://www.baidu.com?a=1&b=2",_t=l({__name:"getUrlParam",setup(c){const o=i("$ZZTOOL").getUrlParam(Ot);return console.log(o),(r,e)=>(a(),s("textarea",ut,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
\r
  const url = "http://www.baidu.com?a=1&b=2";\r
  const param = zztool.getUrlParam(url);\r
  console.log(param) // {a: '1', b: '2'}\r
<\/script>\r
`))}}),Zt={class:"w-full h-50",name:"",id:""},gt=l({__name:"paramformat",setup(c){const t=i("$ZZTOOL"),o={a:"1",b:"2"},r=t.paramformat(o,"url"),e=t.paramformat(o,"json"),n=t.paramformat(o,"formData");return console.log(r,e,n),(m,p)=>(a(),s("textarea",Zt,`\r
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
`))}}),ft={class:"w-full h-50",name:"",id:""},Tt=l({__name:"toString",setup(c){const t=i("$ZZTOOL"),o={a:1,b:2},r=[1,2,3],e=t.toString(o),n=t.toString(r);return console.log(e,n),(m,p)=>(a(),s("textarea",ft,`\r
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
`))}}),Lt={class:"w-full h-50",name:"",id:""},ht="1,2,3,4,5",$t="1-2-3-4-5",yt="12345",vt=l({__name:"toArray",setup(c){const t=i("$ZZTOOL"),o={a:1,b:2},r=[1,2,3],e=t.toArray(o),n=t.toArray(r),m=t.toArray(ht),p=t.toArray($t,"-"),d=t.toArray(yt);return console.log(e,n,m,p,d),(u,b)=>(a(),s("textarea",Lt,`\r
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
`))}}),xt={class:"w-full h-50",name:"",id:""},jt=l({__name:"getRandom",setup(c){const o=i("$ZZTOOL").getRandom(0,100);return console.log(o),(r,e)=>(a(),s("textarea",xt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const random = zztool.getRandom(0,100);\r
  console.log(random)\r
<\/script>\r
`))}}),bt={class:"w-full h-50",name:"",id:""},wt=l({__name:"getRandomArray",setup(c){const o=i("$ZZTOOL").getRandomArray(100,0,100);return console.log(o),(r,e)=>(a(),s("textarea",bt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const random = zztool.getRandomArray(100,0,100);\r
  console.log(random)\r
<\/script>\r
`))}}),It={class:"w-full h-50",name:"",id:""},Dt=l({__name:"getRandomColor",setup(c){const t=i("$ZZTOOL"),o=t.getRandomColor(),r=t.getRandomRGBColor(),e=t.getRandomRGBA();return console.log(o,r,e),(n,m)=>(a(),s("textarea",It,`\r
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
`))}}),At={class:"w-full h-50",name:"",id:""},$=1e6,Ft=l({__name:"moneyFormat",setup(c){const t=i("$ZZTOOL"),o=t.moneyFormat($),r=t.moneyFormat($,"~","$");return console.log(o,r),(e,n)=>(a(),s("textarea",At,`\r
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
`))}}),Et={class:"w-full h-full",name:"",id:""},Rt=l({__name:"dataEqual",setup(c){const t=i("$ZZTOOL"),o={a:2,b:1,c:{d:1}},r={a:2,b:2,c:{d:2}},e=t.dataEqual(o,r);return console.log(e),(n,m)=>(a(),s("textarea",Et,`\r
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
`))}}),Ct={class:"w-full h-full",name:"",id:""},Mt=l({__name:"dataEmpty",setup(c){const t=i("$ZZTOOL"),o={a:2,b:1,c:{d:1}},r={a:2,b:1,c:{d:1,e:[]}},e=t.dataEmpty(o),n=t.dataEmpty(r);return console.log(e,n),(m,p)=>(a(),s("textarea",Ct,`\r
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
`))}}),Bt={class:"w-full h-full",name:"",id:""},qt=l({__name:"deepClone",setup(c){const t=i("$ZZTOOL"),o={a:2,b:1,c:{d:1}},r=t.deepClone(o);return console.log(o==r),(e,n)=>(a(),s("textarea",Bt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  const obj1 = {a:2,b:1,c:{d:1}};\r
  const obj2 = zztool.deepClone(obj1);\r
  console.log(obj1==obj2) // false\r
<\/script>\r
`))}}),St={class:"w-full h-full",name:"",id:""},kt=l({__name:"toTree",setup(c){const t=i("$ZZTOOL");var o=[{id:1,parentId:null,name:"Item 1"},{id:2,parentId:1,name:"Item 1.1"},{id:3,parentId:1,name:"Item 1.2"},{id:4,parentId:2,name:"Item 1.1.1"},{id:5,parentId:null,name:"Item 2"}];const r=t.toTree(o,"parentId");return console.log(r),(e,n)=>(a(),s("textarea",St,`\r
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
`))}}),Ut={class:"w-full h-full",name:"",id:""},Vt=l({__name:"groupBy",setup(c){const t=i("$ZZTOOL");var o=[{id:1,parentId:2,name:"Item 1"},{id:2,parentId:1,name:"Item 1.1"},{id:3,parentId:1,name:"Item 1.2"},{id:4,parentId:2,name:"Item 1.1.1"}];const r=t.groupBy(o,"parentId");return console.log(r),(e,n)=>(a(),s("textarea",Ut,`\r
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
`))}}),Pt={class:"w-full h-full",name:"",id:""},Ht=l({__name:"dataMerge",setup(c){const t=i("$ZZTOOL"),o=[1,2,3,4,5],r=[4,5,6,7,8],e=t.dataMerge(o,r,1),n=t.dataMerge(o,r,2),m=t.dataMerge(o,r,3),p=t.dataMerge(o,r,4);return console.log(e),console.log(n),console.log(m),console.log(p),(d,u)=>(a(),s("textarea",Pt,`\r
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
`))}}),Nt={class:"w-full h-full",name:"",id:""},Yt=l({__name:"dataUnique",setup(c){const t=i("$ZZTOOL"),o=[1,2,3,4,5,5,6],r=t.dataUnique(o);return console.log(r),(e,n)=>(a(),s("textarea",Nt,`\r
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
`))}}),Gt={class:"w-full h-full",name:"",id:""},Kt=l({__name:"dataUnEmpty",setup(c){const t=i("$ZZTOOL"),o=[1,2,3,4,5,5,"","",6];console.log(o);const r=t.dataUnEmpty(o);return console.log(r),(e,n)=>(a(),s("textarea",Gt,`\r
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
`))}}),Wt={class:"w-full h-full",name:"",id:""},y="1,2,5",Xt=l({__name:"dataFindValues",setup(c){const t=i("$ZZTOOL"),o=[{id:1,name:"张三"},{id:2,name:"李四"},{id:3,name:"王五",list:[{id:5,name:"一二三"}]}],r=t.dataFindValues(y,o,"id");console.log("三个参数: ",r);const e=t.dataFindValues(y,o,"id","list");return console.log("存在第四个参数: ",e),(n,m)=>(a(),s("textarea",Wt,`\r
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
`))}}),Jt={class:"w-full h-full",name:"",id:""},Qt=l({__name:"getDateInfo",setup(c){const t=i("$ZZTOOL");return console.log(t.getDateInfo("2023-6-15")),(o,r)=>(a(),s("textarea",Jt,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  console.log(zztool.getDateInfo('2023-6-15'))\r
<\/script>\r
`))}}),to={class:"w-full h-full",name:"",id:""},oo=l({__name:"getDateType",setup(c){const t=i("$ZZTOOL");return console.log(t.getDateType("2023-6-15","Y/M/D")),(o,r)=>(a(),s("textarea",to,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  console.log(zztool.getDateType('2023-6-15',"Y/M/D"))\r
<\/script>\r
`))}}),ro={class:"w-full h-full",name:"",id:""},eo=l({__name:"getDate",setup(c){const t=i("$ZZTOOL");return console.log(t.getDate("2023-6-15")),console.log(t.getDate("Y/M/D")),(o,r)=>(a(),s("textarea",ro,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  console.log(zztool.getDate("2023-6-15"))\r
  console.log(zztool.getDate("Y/M/D"))\r
<\/script>\r
`))}}),no={class:"w-full h-full",name:"",id:""},ao=l({__name:"getMonthDays",setup(c){const t=i("$ZZTOOL");return console.log(t.getMonthDays(2024,6)),(o,r)=>(a(),s("textarea",no,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  console.log(zztool.getMonthDays(2024,6))\r
<\/script>\r
`))}}),so={class:"w-full h-full",name:"",id:""},co=l({__name:"getBetwenDate",setup(c){const t=i("$ZZTOOL");return console.log(t.getBetwenDate("2024-06-01","2024-06-15")),(o,r)=>(a(),s("textarea",so,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
  \r
  console.log(zztool.getBetwenDate('2024-06-01', '2024-06-15'))\r
<\/script>\r
`))}}),lo={class:"w-full h-full",name:"",id:""},io=l({__name:"getDateList",setup(c){const t=i("$ZZTOOL"),o=t.getDateList(new Date("2024-6-15"),1),r=t.getDateList(new Date("2024-6-15"),2),e=t.getDateList(new Date("2024-6-15"),3);return console.log("前三天：",o),console.log("前一周：",r),console.log("前一月：",e),(n,m)=>(a(),s("textarea",lo,`\r
<script lang="ts" setup>\r
  import { inject } from 'vue';\r
  import ZZTOOL from '@zzcpt/zztool';\r
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;\r
\r
  const day1 = zztool.getDateList(new Date('2024-6-15'),1);\r
  const day2 = zztool.getDateList(new Date('2024-6-15'),2);\r
  const day3 = zztool.getDateList(new Date('2024-6-15'),3);\r
  console.log('前三天：',day1)\r
  console.log('前一周：',day2)\r
  console.log('前一月：',day3)\r
<\/script>\r
`))}}),mo={class:"w-full h-full",name:"",id:""},po=l({__name:"getTimeStep",setup(c){const t=i("$ZZTOOL"),o=t.getTimeStep("01:00","10:00"),r=t.getTimeStep("01:00","10:00","00:30");return console.log("默认步长：",o),console.log("步长半小时：",r),(e,n)=>(a(),s("textarea",mo,`\r
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
`))}}),zo={style:{display:"flex"}},uo={style:{width:"100%",padding:"10px"}},Oo=l({__name:"App",setup(c){const t=I(h),o={getVersion:h,error:N,debounce:Y,throttle:G,getType:X,regIsHas:tt,regEmail:at,regPhone:it,regIdcard:zt,getUrlParam:_t,paramformat:gt,toString:Tt,toArray:vt,getRandom:jt,getRandomArray:wt,getRandomColor:Dt,moneyFormat:Ft,dataEqual:Rt,dataEmpty:Mt,deepClone:qt,toTree:kt,groupBy:Vt,dataMerge:Ht,dataUnique:Yt,dataUnEmpty:Kt,dataFindValues:Xt,getDateInfo:Qt,getDateType:oo,getDate:eo,getMonthDays:ao,getBetwenDate:co,getDateList:io,getTimeStep:po},r=m=>{console.log(`%c${m.title}`,"background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px"),t.value=o[m.com]},e=_(),n=_();return v(()=>{e.value=document.getElementById("dialog"),n.value=document.querySelector(".closeBtn"),e.value.showModal(),n.value.addEventListener("click",function(){e.value.close()})}),(m,p)=>(a(),s(O,null,[L(M),z("div",zo,[L(V,{onChange:r}),z("div",uo,[(a(),D(A(t.value)))]),p[0]||(p[0]=x(`<dialog id="dialog" data-v-7536a0c8><div class="win" data-v-7536a0c8><div class="container" data-v-7536a0c8><h4 data-v-7536a0c8>安装/使用</h4><code data-v-7536a0c8><pre data-v-7536a0c8>===== Vue
--- install
npm install @zzcpt/zztool@latest
--- main.ts
import ZZTOOL from &#39;@zzcpt/zztool&#39;;
createApp(App).provide(&quot;$ZZTOOL&quot;,new ZZTOOL()).mount(&#39;#app&#39;)
---xxx.vue
import { inject } from &#39;vue&#39;;
import ZZTOOL from &#39;@zzcpt/zztool&#39;;
const zztool:ZZTOOL = inject(&#39;$ZZTOOL&#39;) as ZZTOOL;

===== Nuxt
npm install @zzcpt/zztool@latest
--- composables/zztool.ts
import ZZTOOL from &quot;@zzcpt/zztool&quot;;
export const tool:ZZTOOL = (() =&gt; {
    return new ZZTOOL();
})()
            </pre></code><h4 data-v-7536a0c8>说明</h4><ul style="list-style:inside;" data-v-7536a0c8><li data-v-7536a0c8>文档示例输出均在控制台</li><li data-v-7536a0c8>可在控制台中使用 zz.getVersion() 等命令使用该工具库</li></ul></div><button class="closeBtn" data-v-7536a0c8>关 闭</button></div></dialog>`,1))])],64))}}),_o=g(Oo,[["__scopeId","data-v-7536a0c8"]]),j=window;j.zz=new Z;j.zz=new Z;F(_o).provide("$ZZTOOL",new Z).mount("#app");
//# sourceMappingURL=index-iO_ONkmZ.js.map
