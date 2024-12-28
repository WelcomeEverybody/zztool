import{d as defineComponent,r as ref,o as onMounted,j as openBlock,k as createElementBlock,t as toDisplayString,u as unref,l as createBaseVNode,F as Fragment,m as renderList,n as normalizeClass,p as resolveComponent,q as createBlock,f as createVNode,v as createCommentVNode,s as shallowRef,x as resolveDynamicComponent,y as createApp}from"./@vue-CSo4dXoX.js";import{c as createI18n,u as useI18n}from"./vue-i18n-Cdrwamjd.js";import{z as zztool_umdExports,a as zztool$1}from"./@zzcpt-5cEhDoFt.js";import"./@intlify-DCvRJ7Og.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();const en={zh:"zh",en:"en",install:"Install",use:"Use",close:"Close",illustrate:"Illustrate",current:"Current ",language:"Language",space:"Space",stop:"Stop",click:"Click",run:"Run",output:"Output",alertTitle:"We are travelers in a hurry, and blessings are like spring rain, nourishing our hearts. May you always smile, live a happy and sweet life, and have a prosperous career and a bright future. May health and happiness always be with you.",dialog:{illustrate1:"Document example output is in the console",illustrate2:"You can use commands such as zz.getVersion() in the console to use this tool library."},illustrateComponent:{li1:"Installation (see console)",li2:"Can be used anywhere",li3:"Please see the console for the output results"},publicmethods:{title:"PublicMethods",list:{li1:{name:"GetVersion",title:"getVersion",com:"getVersion"},li2:{name:"ThrowError",title:"error",com:"error"},li3:{name:"Debounce",title:"debounce",com:"debounce"},li4:{name:"Throttle",title:"throttle",com:"throttle"}}},typedetection:{title:"TypeDetection",list:{li1:{name:"GetType",title:"getType",com:"getType"}}},regexp:{title:"RegExp",list:{li1:{name:"IsContains",title:"regIsHas",com:"regIsHas"},li2:{name:"IsEmail",title:"regEmail",com:"regEmail"},li3:{name:"IsPhone",title:"regPhone",com:"regPhone"},li4:{name:"IsIdcard",title:"regIdcard",com:"regIdcard"}}},getparam:{title:"GetParam",list:{li1:{name:"GetUrlParam",title:"getUrlParam",com:"getUrlParam"},li2:{name:"ParamFormat",title:"paramformat",com:"paramformat"}}},transfertype:{title:"TransferType",list:{li1:{name:"ToString",title:"toString",com:"toString"},li2:{name:"ToArray",title:"toArray",com:"toArray"}}},utilfn:{title:"UtilFn",list:{li1:{name:"GetRandomNum",title:"getRandom",com:"getRandom"},li2:{name:"GetRandomArr",title:"getRandomArray",com:"getRandomArray"},li3:{name:"GetRandomColor",title:"getRandomColor",com:"getRandomColor"},li4:{name:"Thousandths",title:"moneyFormat",com:"moneyFormat"}}},data:{title:"Data",list:{li1:{name:"DataEqual",title:"dataEqual",com:"dataEqual"},li2:{name:"DataEmpty",title:"dataEmpty",com:"dataEmpty"},li3:{name:"DeepClone",title:"deepClone",com:"deepClone"},li4:{name:"ToTree",title:"toTree",com:"toTree"},li5:{name:"GroupBy",title:"groupBy",com:"groupBy"},li6:{name:"DataMerge",title:"dataMerge",com:"dataMerge"},li7:{name:"DataUnique",title:"dataUnique",com:"dataUnique"},li8:{name:"DataUnEmpty",title:"dataUnEmpty",com:"dataUnEmpty"},li9:{name:"ShuffleArray",title:"shuffleArray",com:"shuffleArray"},li10:{name:"DataChangeIndex",title:"dataChangeIndex",com:"dataChangeIndex"},li11:{name:"ChunkArray",title:"chunkArray",com:"chunkArray"}}},date:{title:"Date",list:{li1:{name:"GetDateInfo",title:"getDateInfo",com:"getDateInfo"},li2:{name:"GetDateType",title:"getDateType",com:"getDateType"},li3:{name:"GetDate",title:"getDate",com:"getDate"},li4:{name:"GetMonthDays",title:"getMonthDays",com:"getMonthDays"},li5:{name:"GetBetwenDate",title:"getBetwenDate",com:"getBetwenDate"},li6:{name:"GetDateList",title:"getDateList",com:"getDateList"},li7:{name:"GetTimeStep",title:"getTimeStep",com:"getTimeStep"}}},calc:{title:"Calc",list:{li1:{name:"Percentage",title:"getPercentage",com:"getPercentage"}}}},zh={zh:"中文",en:"英文",install:"安装",use:"使用",close:"关 闭",illustrate:"说明",current:"当前",language:"语言",space:"空格",stop:"停止",click:"点击",run:"运行",output:"输出",alertTitle:"我们是匆匆的行者，祝福如春雨，滋润心田间。愿你笑容常开，生活美满甜；事业步步高，前程似锦绣。健康快乐伴你左右，幸福永远与你相伴。",dialog:{illustrate1:"文档示例输出均在控制台",illustrate2:"可在控制台中使用 zz.getVersion() 等命令使用该工具库"},illustrateComponent:{li1:"安装(请看控制台)",li2:"可以在任何地方使用",li3:"输出结果请看控制台"},publicmethods:{title:"公共方法",list:{li1:{name:"获取版本号",title:"getVersion",com:"getVersion"},li2:{name:"抛错",title:"error",com:"error"},li3:{name:"防抖",title:"debounce",com:"debounce"},li4:{name:"节流",title:"throttle",com:"throttle"}}},typedetection:{title:"类型检测",list:{li1:{name:"获取类型",title:"getType",com:"getType"}}},regexp:{title:"正则表达式",list:{li1:{name:"是否包含",title:"regIsHas",com:"regIsHas"},li2:{name:"是否邮箱",title:"regEmail",com:"regEmail"},li3:{name:"是否手机号",title:"regPhone",com:"regPhone"},li4:{name:"是否身份证",title:"regIdcard",com:"regIdcard"}}},getparam:{title:"参数获取",list:{li1:{name:"获取url参数",title:"getUrlParam",com:"getUrlParam"},li2:{name:"参数格式化",title:"paramformat",com:"paramformat"}}},transfertype:{title:"转类型",list:{li1:{name:"转字符串",title:"toString",com:"toString"},li2:{name:"转数组",title:"toArray",com:"toArray"}}},utilfn:{title:"工具函数",list:{li1:{name:"获取随机数",title:"getRandom",com:"getRandom"},li2:{name:"获取随机数组",title:"getRandomArray",com:"getRandomArray"},li3:{name:"获取随机颜色",title:"getRandomColor",com:"getRandomColor"},li4:{name:"金额千分位",title:"moneyFormat",com:"moneyFormat"}}},data:{title:"数据处理",list:{li1:{name:"数据对比",title:"dataEqual",com:"dataEqual"},li2:{name:"数据是否有空值",title:"dataEmpty",com:"dataEmpty"},li3:{name:"深克隆",title:"deepClone",com:"deepClone"},li4:{name:"转树形结构",title:"toTree",com:"toTree"},li5:{name:"数据分组",title:"groupBy",com:"groupBy"},li6:{name:"取交/并/差/补",title:"dataMerge",com:"dataMerge"},li7:{name:"数组去重",title:"dataUnique",com:"dataUnique"},li8:{name:"数组去空",title:"dataUnEmpty",com:"dataUnEmpty"},li9:{name:"打乱数组",title:"shuffleArray",com:"shuffleArray"},li10:{name:"修改索引",title:"dataChangeIndex",com:"dataChangeIndex"},li11:{name:"数组分块",title:"chunkArray",com:"chunkArray"}}},date:{title:"日期",list:{li1:{name:"日期信息",title:"getDateInfo",com:"getDateInfo"},li2:{name:"日期类型",title:"getDateType",com:"getDateType"},li3:{name:"获取日期",title:"getDate",com:"getDate"},li4:{name:"月份天数",title:"getMonthDays",com:"getMonthDays"},li5:{name:"两个日期之间的日期",title:"getBetwenDate",com:"getBetwenDate"},li6:{name:"某日期的近期天数",title:"getDateList",com:"getDateList"},li7:{name:"获取时间段",title:"getTimeStep",com:"getTimeStep"}}},calc:{title:"计算",list:{li1:{name:"百分比",title:"getPercentage",com:"getPercentage"}}}},messages={en,zh},emnu={en:"en",zh:"zh","zh-CN":"zh"};var systemLanguage=navigator.language;emnu[systemLanguage]||(systemLanguage="zh");localStorage.getItem("locale")===null&&localStorage.setItem("locale",emnu[systemLanguage]);const locale=localStorage.getItem("locale")||"zh",i18n=createI18n({legacy:!1,locale,messages}),width=120,height=30,_sfc_main$E=defineComponent({__name:"moveBtn",setup(n){const{t}=useI18n(),o=ref(),e=ref(!0),a=()=>{const r=zztool_umdExports.getRandom(0,window.innerWidth-width),c=zztool_umdExports.getRandom(0,window.innerHeight-height);return{x:r,y:c}},s=()=>{if(!e.value)return;const{x:r,y:c}=a(),i=zztool_umdExports.getRandomColor(),l=zztool_umdExports.getRandomColor();o.value.style.left=r+"px",o.value.style.top=c+"px",o.value.style.backgroundColor=i,o.value.style.color=l};return onMounted(()=>{o.value.addEventListener("mouseenter",s),o.value.addEventListener("click",()=>{alert(t("alertTitle"))}),window.onresize=s,window.addEventListener("keydown",r=>{r.key===" "&&(e.value=!1)}),s()}),(r,c)=>(openBlock(),createElementBlock("button",{ref_key:"btn",ref:o,id:"btn"},toDisplayString(unref(t)("space"))+toDisplayString(unref(t)("stop"))+"("+toDisplayString(unref(t)("click"))+")",513))}}),_export_sfc=(n,t)=>{const o=n.__vccOpts||n;for(const[e,a]of t)o[e]=a;return o},MoveBtn=_export_sfc(_sfc_main$E,[["__scopeId","data-v-cbbfc1e6"]]),MenuData=[{name:"publicmethods.title",list:[{name:"publicmethods.list.li1.name",title:"getVersion",com:"getVersion"},{name:"publicmethods.list.li2.name",title:"error",com:"error"},{name:"publicmethods.list.li3.name",title:"debounce",com:"debounce"},{name:"publicmethods.list.li4.name",title:"throttle",com:"throttle"}]},{name:"typedetection.title",list:[{name:"typedetection.list.li1.name",title:"getType",com:"getType"}]},{name:"regexp.title",list:[{name:"regexp.list.li1.name",title:"regIsHas",com:"regIsHas"},{name:"regexp.list.li2.name",title:"regEmail",com:"regEmail"},{name:"regexp.list.li3.name",title:"regPhone",com:"regPhone"},{name:"regexp.list.li4.name",title:"regIdcard",com:"regIdcard"}]},{name:"getparam.title",list:[{name:"getparam.list.li1.name",title:"getUrlParam",com:"getUrlParam"},{name:"getparam.list.li2.name",title:"paramformat",com:"paramformat"}]},{name:"transfertype.title",list:[{name:"transfertype.list.li1.name",title:"toString",com:"toString"},{name:"transfertype.list.li2.name",title:"toArray",com:"toArray"}]},{name:"utilfn.title",list:[{name:"utilfn.list.li1.name",title:"getRandom",com:"getRandom"},{name:"utilfn.list.li2.name",title:"getRandomArray",com:"getRandomArray"},{name:"utilfn.list.li3.name",title:"getRandomColor",com:"getRandomColor"},{name:"utilfn.list.li4.name",title:"moneyFormat",com:"moneyFormat"}]},{name:"data.title",list:[{name:"data.list.li1.name",title:"dataEqual",com:"dataEqual"},{name:"data.list.li2.name",title:"dataEmpty",com:"dataEmpty"},{name:"data.list.li3.name",title:"deepClone",com:"deepClone"},{name:"data.list.li4.name",title:"toTree",com:"toTree"},{name:"data.list.li5.name",title:"groupBy",com:"groupBy"},{name:"data.list.li6.name",title:"dataMerge",com:"dataMerge"},{name:"data.list.li7.name",title:"dataUnique",com:"dataUnique"},{name:"data.list.li8.name",title:"dataUnEmpty",com:"dataUnEmpty"},{name:"data.list.li9.name",title:"shuffleArray",com:"shuffleArray"},{name:"data.list.li10.name",title:"dataChangeIndex",com:"dataChangeIndex"},{name:"data.list.li11.name",title:"chunkArray",com:"chunkArray"}]},{name:"date.title",list:[{name:"date.list.li1.name",title:"getDateInfo",com:"getDateInfo"},{name:"date.list.li2.name",title:"getDateType",com:"getDateType"},{name:"date.list.li3.name",title:"getDate",com:"getDate"},{name:"date.list.li4.name",title:"getMonthDays",com:"getMonthDays"},{name:"date.list.li5.name",title:"getBetwenDate",com:"getBetwenDate"},{name:"date.list.li6.name",title:"getDateList",com:"getDateList"},{name:"date.list.li7.name",title:"getTimeStep",com:"getTimeStep"}]},{name:"calc.title",list:[{name:"calc.list.li1.name",title:"getPercentage",com:"getPercentage"}]}],_hoisted_1$3={class:"menu"},_hoisted_2$3={class:"menu-item"},_hoisted_3$2={style:{"margin-top":"10px"}},_hoisted_4$1=["selected"],_hoisted_5$1=["selected"],_hoisted_6$1={class:"menu-item"},_hoisted_7$1={class:"title"},_hoisted_8={class:"item"},_hoisted_9={class:"item"},_hoisted_10={class:"item"},_hoisted_11={class:"title"},_hoisted_12=["onClick"],_sfc_main$D=defineComponent({__name:"menu",emits:["change"],setup(n,{emit:t}){const o=t,{t:e,locale:a}=useI18n(),s=ref("getVersion"),r=l=>{o("change",l),s.value=l.title},c=localStorage.getItem("locale")||"zh",i=l=>{localStorage.setItem("locale",l.target.value),a.value=l.target.value};return(l,u)=>(openBlock(),createElementBlock("div",_hoisted_1$3,[createBaseVNode("div",_hoisted_2$3,[createBaseVNode("h4",_hoisted_3$2,toDisplayString(unref(e)("current"))+toDisplayString(unref(e)("language")),1),createBaseVNode("select",{onChange:i},[createBaseVNode("option",{value:"zh",selected:unref(c)==="zh"},toDisplayString(unref(e)("zh")),9,_hoisted_4$1),createBaseVNode("option",{value:"en",selected:unref(c)==="en"},toDisplayString(unref(e)("en")),9,_hoisted_5$1)],32)]),createBaseVNode("div",_hoisted_6$1,[createBaseVNode("div",_hoisted_7$1,toDisplayString(unref(e)("illustrate")),1),createBaseVNode("div",_hoisted_8,toDisplayString(unref(e)("illustrateComponent.li1")),1),createBaseVNode("div",_hoisted_9,toDisplayString(unref(e)("illustrateComponent.li2")),1),createBaseVNode("div",_hoisted_10,toDisplayString(unref(e)("illustrateComponent.li3")),1)]),(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(MenuData),(p,d)=>(openBlock(),createElementBlock("div",{class:"menu-item",key:d},[createBaseVNode("div",_hoisted_11,toDisplayString(unref(e)(p.name)),1),(openBlock(!0),createElementBlock(Fragment,null,renderList(p.list,(m,_)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["item",[s.value===m.title?"active":""]]),key:_,onClick:g=>r(m)},toDisplayString(unref(e)(m.name)),11,_hoisted_12))),128))]))),128))]))}}),Menu=_export_sfc(_sfc_main$D,[["__scopeId","data-v-a7935385"]]),strCode$z=`
const version = zztool.getVersion();
console.log(version);
`,_sfc_main$C=defineComponent({__name:"getVersion",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$z})}}}),strCode$y=`
zztool.error('抛出错误');
`,_sfc_main$B=defineComponent({__name:"error",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$y,show:!1})}}}),strCode$x=`
const clickFn = zztool.debounce(() => {
    console.log('防抖');
}, 1000);
`,_sfc_main$A=defineComponent({__name:"debounce",setup(n){const t=()=>{zztool.debounce(()=>{console.log("防抖")},1e3)};return(o,e)=>{const a=resolveComponent("InputText");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("button",{onClick:e[0]||(e[0]=s=>t())},"点击"),createVNode(a,{contents:strCode$x,show:!1})],64)}}}),strCode$w=`
zztool.throttle(() => {
    console.log('节流');
}, 1000);
`,_sfc_main$z=defineComponent({__name:"throttle",setup(n){const t=()=>{zztool_umdExports.throttle(()=>{console.log("节流")},1e3)};return(o,e)=>{const a=resolveComponent("InputText");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("button",{onClick:t},"点击"),createVNode(a,{contents:strCode$w,show:!1})],64)}}}),strCode$v=`
const data = 10;
const type = zztool.getType(data);
console.log(type)
`,_sfc_main$y=defineComponent({__name:"getType",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$v})}}}),strCode$u=`
const str = 'how are you?';
const isHas = zztool.regIsHas(str, 'you');
console.log(isHas)
`,_sfc_main$x=defineComponent({__name:"regIsHas",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$u})}}}),_hoisted_1$2={class:"w-50 h-full"},_hoisted_2$2={style:{height:"calc(100% - 37px)"},disabled:"",id:"output",class:"w-full",name:""},_sfc_main$w=defineComponent({__name:"output",props:{content:String},setup(n){const t=n,{t:o}=useI18n();return(e,a)=>(openBlock(),createElementBlock("div",_hoisted_1$2,[createBaseVNode("h1",null,toDisplayString(unref(o)("output")),1),createBaseVNode("textarea",_hoisted_2$2,toDisplayString(t.content),1)]))}}),_hoisted_1$1={style:{display:"flex"},class:"h-full"},_hoisted_2$1={class:"h-full w-50"},_hoisted_3$1={class:"w-full h-full",name:"",id:"textarea"},_sfc_main$v=defineComponent({__name:"inputText",props:{contents:{type:String,default:""},show:{type:Boolean,default:!0}},setup(__props){const props=__props,{t:$t}=useI18n(),start=()=>{const outputDom=document.getElementById("output");outputDom.value="";const dom=document.getElementById("textarea"),value=dom.value,str=zztool_umdExports.replaceAll(value,"console.log","var outputDom = document.getElementById('output');outputDom.value = outputDom.value + '\\n' + '>>> ' + zztool.toString");eval(str)};return(n,t)=>(openBlock(),createElementBlock("div",_hoisted_1$1,[createBaseVNode("div",_hoisted_2$1,[createBaseVNode("textarea",_hoisted_3$1,"          "+toDisplayString(props.contents)+`\r
      `,1)]),props.show?(openBlock(),createElementBlock(Fragment,{key:0},[createBaseVNode("button",{onClick:start},toDisplayString(unref($t)("run")),1),createVNode(_sfc_main$w)],64)):createCommentVNode("",!0)]))}}),strCode$t=`
const email1 = 'xxxx@163.com';
const email2 = 'xxxx@gmail.com';
const email3 = 'xxxx1234234.com';
const arr = Array.from([email1,email2,email3])
for(let i = 0; i < arr.length; i++){
  const item = arr[i];
  console.log(zztool.regEmail(item));
}`,_sfc_main$u=defineComponent({__name:"regEmail",setup(n){return(t,o)=>(openBlock(),createBlock(_sfc_main$v,{contents:strCode$t}))}}),strCode$s=`
  const phone1 = '15666666666';
  const phone2 = '11111111111';
  const arr = Array.from([phone1, phone2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    console.log(zztool.regPhone(item));
  }
`,_sfc_main$t=defineComponent({__name:"regPhone",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$s})}}}),strCode$r=`
  const idcard1 = '111111111111111111';
  const idcard2 = '46516546549874654x';
  const arr = Array.from([idcard1, idcard2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    const result = zztool.regIdcard(item);
    console.log(result); // false false
  }
`,_sfc_main$s=defineComponent({__name:"regIdcard",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$r})}}}),strCode$q=`
  const url = "http://www.baidu.com?a=1&b=2";
  const param = zztool.getUrlParam(url); // 无参数则会获取url
  console.log(param) // {a: '1', b: '2'}
`,_sfc_main$r=defineComponent({__name:"getUrlParam",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$q})}}}),strCode$p=`
  const params = {a: '1', b: '2'}
  const param1 = zztool.paramformat(params,'url');
  const param2 = zztool.paramformat(params,'json');
  const param3 = zztool.paramformat(params,'formData');
  console.log(param1);
  console.log(param2);
  console.log(param3);
`,_sfc_main$q=defineComponent({__name:"paramformat",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$p})}}}),strCode$o=`
  const obj = { a: 1, b: 2 };
  const arr = [1, 2, 3];
  const str1 = zztool.toString(obj);
  const str2 = zztool.toString(arr);
  console.log(str1);
  console.log(str2);
`,_sfc_main$p=defineComponent({__name:"toString",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$o})}}}),strCode$n=`
  const obj = { a: 1, b: 2 };
  const arr = [1, 2, 3];
  const string1 = '1,2,3,4,5';
  const string2 = '1-2-3-4-5';
  const string3 = '12345';
  const str1 = zztool.toArray(obj);
  const str2 = zztool.toArray(arr);
  const str3 = zztool.toArray(string1);
  const str4 = zztool.toArray(string2,'-');
  const str5 = zztool.toArray(string3);
  console.log(str1);
  console.log(str2);
  console.log(str3);
  console.log(str4);
  console.log(str5);
`,_sfc_main$o=defineComponent({__name:"toArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$n})}}}),strCode$m=`
  const random = zztool.getRandom(0,100);
  console.log(random)
`,_sfc_main$n=defineComponent({__name:"getRandom",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$m})}}}),strCode$l=`
  const random = zztool.getRandomArray(100,0,100);
  console.log(random)
`,_sfc_main$m=defineComponent({__name:"getRandomArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$l})}}}),strCode$k=`
  const color = zztool.getRandomColor();
  const rgbColor = zztool.getRandomRGBColor();
  const rgbaColor = zztool.getRandomRGBA();
  console.log(color)
  console.log(rgbColor)
  console.log(rgbaColor)
`,_sfc_main$l=defineComponent({__name:"getRandomColor",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$k})}}}),money=1e6,strCode$j=`
const money = 1000000;
const moneyFormat = zztool.moneyFormat(money);
const moneyFormat2 = zztool.moneyFormat(money,'~','$');
console.log(moneyFormat);
console.log(moneyFormat2);
`,_sfc_main$k=defineComponent({__name:"moneyFormat",setup(n){const t=zztool_umdExports.moneyFormat(money),o=zztool_umdExports.moneyFormat(money,"~","$");return console.log(t,o),(e,a)=>{const s=resolveComponent("InputText");return openBlock(),createBlock(s,{contents:strCode$j})}}}),strCode$i=`
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = {a:2,b:2,c:{d:2}};
  const data = zztool.dataEqual(obj1,obj2);
  const data1 = zztool.dataEqual(obj1,obj2,{returnKeys:true});
  console.log(data)
  console.log(data1)

  const obj3 = {arr:[1,2,3,4]};
  const obj4 = {arr:[1,2,4,3]};
  const data2 = zztool.dataEqual(obj3,obj4,{arrayDiff:true});
  const data3 = zztool.dataEqual(obj3,obj4,{arrayDiff:false});
  console.log(data2)
  console.log(data3)
`,_sfc_main$j=defineComponent({__name:"dataEqual",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$i})}}}),strCode$h=`
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = {a:2,b:1,c:{d:1,e:[]}};
  const data1 = zztool.dataEmpty(obj1);
  const data2 = zztool.dataEmpty(obj2);
  console.log(data1);
  console.log(data2);
`,_sfc_main$i=defineComponent({__name:"dataEmpty",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$h})}}}),strCode$g=`
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = zztool.deepClone(obj1);
  console.log(obj1 == obj2)
  console.log(obj1 === obj2)
`,_sfc_main$h=defineComponent({__name:"deepClone",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$g})}}}),strCode$f=`
  var data = [
    { id: 1, parentId: null, name: "Item 1" },
    { id: 2, parentId: 1, name: "Item 1.1" },
    { id: 3, parentId: 1, name: "Item 1.2" },
    { id: 4, parentId: 2, name: "Item 1.1.1" },
    { id: 5, parentId: null, name: "Item 2" }
  ];
  const tree = zztool.toTree(data, 'parentId');
  console.log(tree)
`,_sfc_main$g=defineComponent({__name:"toTree",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$f})}}}),strCode$e=`
var data = [
    { id: 1, parentId: 2, name: "Item 1" },
    { id: 2, parentId: 1, name: "Item 1.1" },
    { id: 3, parentId: 1, name: "Item 1.2" },
    { id: 4, parentId: 2, name: "Item 1.1.1" },
]
const datas = zztool.groupBy(data, 'parentId');
console.log(datas)
`,_sfc_main$f=defineComponent({__name:"groupBy",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$e})}}}),strCode$d=`
const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7,8];
const data1 = zztool.dataMerge(arr1,arr2,1);
const data2 = zztool.dataMerge(arr1,arr2,2);
const data3 = zztool.dataMerge(arr1,arr2,3);
const data4 = zztool.dataMerge(arr1,arr2,4);
console.log(data1)
console.log(data2)
console.log(data3)
console.log(data4)
`,_sfc_main$e=defineComponent({__name:"dataMerge",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$d})}}}),strCode$c=`
const arr1 = [1,2,3,4,5,5,6];
const data = zztool.uniqueArray(arr1);
console.log(data)
`,_sfc_main$d=defineComponent({__name:"dataUnique",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$c})}}}),strCode$b=`
const arr1 = [1,2,3,4,5,5,'','',6];
console.log(arr1)
const data = zztool.arrayTrim(arr1);
console.log(data)
`,_sfc_main$c=defineComponent({__name:"dataUnEmpty",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$b})}}}),strCode$a=`
const date = zztool.getDateInfo('2023-6-15')
console.log(date)
`,_sfc_main$b=defineComponent({__name:"getDateInfo",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$a})}}}),strCode$9=`
const date = zztool.getDateType('2023-6-15',"Y/M/D")
console.log(date)
`,_sfc_main$a=defineComponent({__name:"getDateType",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$9})}}}),strCode$8=`
console.log(zztool.getDate())
console.log(zztool.getDate("Y/M/D"))
console.log(zztool.getDate(zztool.getTimeStamp('2020/02/20'),"Y~M~D"))
`,_sfc_main$9=defineComponent({__name:"getDate",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$8})}}}),strCode$7=`
const days = zztool.getMonthDays(2024,6);
console.log(days);
`,_sfc_main$8=defineComponent({__name:"getMonthDays",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$7})}}}),strCode$6=`
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15',true))
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15'))
`,_sfc_main$7=defineComponent({__name:"getBetwenDate",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$6})}}}),strCode$5=`
const day1 = zztool.getRecentDate(new Date('2024-6-15'),1);
const day2 = zztool.getRecentDate(new Date('2024-6-15'),2);
const day3 = zztool.getRecentDate(new Date('2024-6-15'),3);
console.log('前三天：'+day1)
console.log('前一周：'+day2)
console.log('前一月：'+day3)
`,_sfc_main$6=defineComponent({__name:"getDateList",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$5})}}}),strCode$4=`
const arr = zztool.getTimeStep('01:00',"10:00");
const arr1 = zztool.getTimeStep('01:00',"10:00","00:30");
console.log("默认步长：" + arr)
console.log("步长半小时：" + arr1)
`,_sfc_main$5=defineComponent({__name:"getTimeStep",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$4})}}}),strCode$3=`
const arr = zztool.getRandomArray(10,0,10);
console.log(zztool.shuffleArray(arr));
console.log(zztool.shuffleArray(arr));
`,_sfc_main$4=defineComponent({__name:"shuffleArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$3})}}}),strCode$2=`
const number = zztool.getPercentage(10, 100,2);
console.log(number)
`,_sfc_main$3=defineComponent({__name:"getPercentage",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$2})}}}),strCode$1=`
// dataChangeIndex 会修改源数据

  const obj = {
    name: "zztool",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
        name: "zztool",
        age: 18,
        sex: 1,
        address: "中国",
        hobby: ["打游戏", "看电影"],
        info: null,
    },
    arr: [
        {
        name: "zztool",
        },
        {
        name: "list",
        },
        1,2,3
    ]
  }
  const obj2 = zztool.deepClone(obj);
  const data = zztool.dataChangeIndex(obj, "name", "Name");
  console.log(obj === data);
  console.log(obj);
  console.log('__________')
  const data2 = zztool.dataChangeIndex(obj2,'name,info','NAME,INFO');
  console.log(data2);
`,_sfc_main$2=defineComponent({__name:"dataChangeIndex",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$1})}}}),strCode=`
  const arr = zztool.getRandomArray(10, 1, 100);
  const data = zztool.chunkArray(arr, 2);
  console.log(data)

  const arr2 = zztool.getRandomArray(10, 1, 100);
  const data2 = zztool.chunkArrayItem(arr2, 4);
  console.log(data2)
`,_sfc_main$1=defineComponent({__name:"chunkArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode})}}}),_hoisted_1={style:{display:"flex"}},_hoisted_2={style:{width:"100%",padding:"10px"}},_hoisted_3={id:"dialog"},_hoisted_4={class:"win"},_hoisted_5={class:"container"},_hoisted_6={style:{"list-style":"inside"}},_hoisted_7={class:"closeBtn"},_sfc_main=defineComponent({__name:"App",setup(n){const t=shallowRef(_sfc_main$C),o={getVersion:_sfc_main$C,error:_sfc_main$B,debounce:_sfc_main$A,throttle:_sfc_main$z,getType:_sfc_main$y,regIsHas:_sfc_main$x,regEmail:_sfc_main$u,regPhone:_sfc_main$t,regIdcard:_sfc_main$s,getUrlParam:_sfc_main$r,paramformat:_sfc_main$q,toString:_sfc_main$p,toArray:_sfc_main$o,getRandom:_sfc_main$n,getRandomArray:_sfc_main$m,getRandomColor:_sfc_main$l,moneyFormat:_sfc_main$k,dataEqual:_sfc_main$j,dataEmpty:_sfc_main$i,deepClone:_sfc_main$h,toTree:_sfc_main$g,groupBy:_sfc_main$f,dataMerge:_sfc_main$e,dataUnique:_sfc_main$d,dataUnEmpty:_sfc_main$c,getDateInfo:_sfc_main$b,getDateType:_sfc_main$a,getDate:_sfc_main$9,getMonthDays:_sfc_main$8,getBetwenDate:_sfc_main$7,getDateList:_sfc_main$6,getTimeStep:_sfc_main$5,shuffleArray:_sfc_main$4,getPercentage:_sfc_main$3,dataChangeIndex:_sfc_main$2,chunkArray:_sfc_main$1},e=c=>{console.log(`%c${c.title}`,"background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px"),t.value=o[c.com]},{t:a}=useI18n(),s=ref(),r=ref();return onMounted(()=>{s.value=document.getElementById("dialog"),r.value=document.querySelector(".closeBtn"),r.value.addEventListener("click",function(){s.value.close()})}),(c,i)=>(openBlock(),createElementBlock(Fragment,null,[createVNode(MoveBtn),createBaseVNode("div",_hoisted_1,[createVNode(Menu,{onChange:e}),createBaseVNode("div",_hoisted_2,[(openBlock(),createBlock(resolveDynamicComponent(t.value)))]),createBaseVNode("dialog",_hoisted_3,[createBaseVNode("div",_hoisted_4,[createBaseVNode("div",_hoisted_5,[createBaseVNode("h4",null,toDisplayString(unref(a)("install"))+"/"+toDisplayString(unref(a)("use")),1),i[0]||(i[0]=createBaseVNode("code",null,[createBaseVNode("pre",null,`--- install
npm install @zzcpt/zztool@latest
--- file
import * as zztool from '@zzcpt/zztool';
import { xxx } from '@zzcpt/zztool';

            `)],-1)),createBaseVNode("h4",null,toDisplayString(unref(a)("illustrate")),1),createBaseVNode("ul",_hoisted_6,[createBaseVNode("li",null,toDisplayString(unref(a)("dialog.illustrate1")),1),createBaseVNode("li",null,toDisplayString(unref(a)("dialog.illustrate2")),1)])]),createBaseVNode("button",_hoisted_7,toDisplayString(unref(a)("close")),1)])])])],64))}}),App=_export_sfc(_sfc_main,[["__scopeId","data-v-2c1965f6"]]),widnows=window;widnows.zz=zztool$1;widnows.zztool=zztool$1;const app=createApp(App);app.component("OutPut",_sfc_main$w);app.component("InputText",_sfc_main$v);app.use(i18n);app.mount("#app");
//# sourceMappingURL=index-nvjd-Yvw.js.map
