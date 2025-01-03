import{d as defineComponent,r as ref,o as onMounted,j as openBlock,k as createElementBlock,t as toDisplayString,u as unref,n as nextTick,a as onUnmounted,l as createBaseVNode,m as renderSlot,p as normalizeStyle,q as withDirectives,v as vShow,f as createVNode,x as withCtx,F as Fragment,y as renderList,z as normalizeClass,A as resolveComponent,B as createBlock,C as createCommentVNode,s as shallowRef,D as resolveDynamicComponent,E as createApp}from"./@vue-tGShkjHH.js";import{c as createI18n,u as useI18n}from"./vue-i18n-Cu2pcuBZ.js";import{z as zztool_umdExports,a as zztool$1}from"./@zzcpt-CRHnbPtU.js";import"./@intlify-DCvRJ7Og.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const en={zh:"zh",en:"en",install:"Install",use:"Use",close:"Close",illustrate:"Illustrate",current:"Current ",language:"Language",space:"Space",stop:"Stop",click:"Click",run:"Run",output:"Output",mod:"surprise",alertTitle:"We are travelers in a hurry, and blessings are like spring rain, nourishing our hearts. May you always smile, live a happy and sweet life, and have a prosperous career and a bright future. May health and happiness always be with you.",dialog:{illustrate1:"Document example output is in the console",illustrate2:"You can use commands such as zz.getVersion() in the console to use this tool library."},illustrateComponent:{li1:"Installation (see console)",li2:"Can be used anywhere",li3:"Please see the console for the output results"},publicmethods:{title:"PublicMethods",list:{li1:{name:"GetVersion",title:"getVersion",com:"getVersion"},li2:{name:"ThrowError",title:"error",com:"error"},li3:{name:"Debounce",title:"debounce",com:"debounce"},li4:{name:"Throttle",title:"throttle",com:"throttle"}}},typedetection:{title:"TypeDetection",list:{li1:{name:"GetType",title:"getType",com:"getType"}}},regexp:{title:"RegExp",list:{li1:{name:"IsContains",title:"regIsHas",com:"regIsHas"},li2:{name:"IsEmail",title:"regEmail",com:"regEmail"},li3:{name:"IsPhone",title:"regPhone",com:"regPhone"},li4:{name:"IsIdcard",title:"regIdcard",com:"regIdcard"}}},getparam:{title:"GetParam",list:{li1:{name:"GetUrlParam",title:"getUrlParam",com:"getUrlParam"},li2:{name:"ParamFormat",title:"paramformat",com:"paramformat"}}},transfertype:{title:"TransferType",list:{li1:{name:"ToString",title:"toString",com:"toString"},li2:{name:"ToArray",title:"toArray",com:"toArray"}}},utilfn:{title:"UtilFn",list:{li1:{name:"GetRandomNum",title:"getRandom",com:"getRandom"},li2:{name:"GetRandomArr",title:"getRandomArray",com:"getRandomArray"},li3:{name:"GetRandomColor",title:"getRandomColor",com:"getRandomColor"},li4:{name:"Thousandths",title:"moneyFormat",com:"moneyFormat"}}},data:{title:"Data",list:{li1:{name:"DataEqual",title:"dataEqual",com:"dataEqual"},li2:{name:"DataEmpty",title:"dataEmpty",com:"dataEmpty"},li3:{name:"DeepClone",title:"deepClone",com:"deepClone"},li4:{name:"ToTree",title:"toTree",com:"toTree"},li5:{name:"GroupBy",title:"groupBy",com:"groupBy"},li6:{name:"DataMerge",title:"dataMerge",com:"dataMerge"},li7:{name:"DataUnique",title:"dataUnique",com:"dataUnique"},li8:{name:"DataUnEmpty",title:"dataUnEmpty",com:"dataUnEmpty"},li9:{name:"ShuffleArray",title:"shuffleArray",com:"shuffleArray"},li10:{name:"DataChangeIndex",title:"dataChangeIndex",com:"dataChangeIndex"},li11:{name:"ChunkArray",title:"chunkArray",com:"chunkArray"},li12:{name:"GetSameIndexValue",title:"getSameIndexValue",com:"getSameIndexValue"}}},date:{title:"Date",list:{li1:{name:"GetDateInfo",title:"getDateInfo",com:"getDateInfo"},li2:{name:"GetDateType",title:"getDateType",com:"getDateType"},li3:{name:"GetDate",title:"getDate",com:"getDate"},li4:{name:"GetMonthDays",title:"getMonthDays",com:"getMonthDays"},li5:{name:"GetBetwenDate",title:"getBetwenDate",com:"getBetwenDate"},li6:{name:"GetDateList",title:"getDateList",com:"getDateList"},li7:{name:"GetTimeStep",title:"getTimeStep",com:"getTimeStep"}}},calc:{title:"Calc",list:{li1:{name:"Percentage",title:"getPercentage",com:"getPercentage"}}}},zh={zh:"中文",en:"英文",install:"安装",use:"使用",close:"关 闭",illustrate:"说明",current:"当前",language:"语言",space:"空格",stop:"停止",click:"点击",run:"运行",output:"输出",mod:"炫彩模式",alertTitle:"我们是匆匆的行者，祝福如春雨，滋润心田间。愿你笑容常开，生活美满甜；事业步步高，前程似锦绣。健康快乐伴你左右，幸福永远与你相伴。",dialog:{illustrate1:"文档示例输出均在控制台",illustrate2:"可在控制台中使用 zz.getVersion() 等命令使用该工具库"},illustrateComponent:{li1:"安装(请看控制台)",li2:"可以在任何地方使用",li3:"输出结果请看控制台"},publicmethods:{title:"公共方法",list:{li1:{name:"获取版本号",title:"getVersion",com:"getVersion"},li2:{name:"抛错",title:"error",com:"error"},li3:{name:"防抖",title:"debounce",com:"debounce"},li4:{name:"节流",title:"throttle",com:"throttle"}}},typedetection:{title:"类型检测",list:{li1:{name:"获取类型",title:"getType",com:"getType"}}},regexp:{title:"正则表达式",list:{li1:{name:"是否包含",title:"regIsHas",com:"regIsHas"},li2:{name:"是否邮箱",title:"regEmail",com:"regEmail"},li3:{name:"是否手机号",title:"regPhone",com:"regPhone"},li4:{name:"是否身份证",title:"regIdcard",com:"regIdcard"}}},getparam:{title:"参数获取",list:{li1:{name:"获取url参数",title:"getUrlParam",com:"getUrlParam"},li2:{name:"参数格式化",title:"paramformat",com:"paramformat"}}},transfertype:{title:"转类型",list:{li1:{name:"转字符串",title:"toString",com:"toString"},li2:{name:"转数组",title:"toArray",com:"toArray"}}},utilfn:{title:"工具函数",list:{li1:{name:"获取随机数",title:"getRandom",com:"getRandom"},li2:{name:"获取随机数组",title:"getRandomArray",com:"getRandomArray"},li3:{name:"获取随机颜色",title:"getRandomColor",com:"getRandomColor"},li4:{name:"金额千分位",title:"moneyFormat",com:"moneyFormat"}}},data:{title:"数据处理",list:{li1:{name:"数据对比",title:"dataEqual",com:"dataEqual"},li2:{name:"数据是否有空值",title:"dataEmpty",com:"dataEmpty"},li3:{name:"深克隆",title:"deepClone",com:"deepClone"},li4:{name:"转树形结构",title:"toTree",com:"toTree"},li5:{name:"数据分组",title:"groupBy",com:"groupBy"},li6:{name:"取交/并/差/补",title:"dataMerge",com:"dataMerge"},li7:{name:"数组去重",title:"dataUnique",com:"dataUnique"},li8:{name:"数组去空",title:"dataUnEmpty",com:"dataUnEmpty"},li9:{name:"打乱数组",title:"shuffleArray",com:"shuffleArray"},li10:{name:"修改索引",title:"dataChangeIndex",com:"dataChangeIndex"},li11:{name:"数组分块",title:"chunkArray",com:"chunkArray"},li12:{name:"获取索引值",title:"getSameIndexValue",com:"getSameIndexValue"}}},date:{title:"日期",list:{li1:{name:"日期信息",title:"getDateInfo",com:"getDateInfo"},li2:{name:"日期类型",title:"getDateType",com:"getDateType"},li3:{name:"获取日期",title:"getDate",com:"getDate"},li4:{name:"月份天数",title:"getMonthDays",com:"getMonthDays"},li5:{name:"两个日期之间的日期",title:"getBetwenDate",com:"getBetwenDate"},li6:{name:"某日期的近期天数",title:"getDateList",com:"getDateList"},li7:{name:"获取时间段",title:"getTimeStep",com:"getTimeStep"}}},calc:{title:"计算",list:{li1:{name:"百分比",title:"getPercentage",com:"getPercentage"}}}},messages={en,zh},emnu={en:"en",zh:"zh","zh-CN":"zh"};var systemLanguage=navigator.language;emnu[systemLanguage]||(systemLanguage="zh");localStorage.getItem("locale")===null&&localStorage.setItem("locale",emnu[systemLanguage]);const locale=localStorage.getItem("locale")||"zh",i18n=createI18n({legacy:!1,locale,messages}),width=120,height=30,_sfc_main$G=defineComponent({__name:"moveBtn",setup(n){const{t}=useI18n(),o=ref(),e=ref(!0),a=()=>{const s=zztool_umdExports.getRandom(0,window.innerWidth-width),i=zztool_umdExports.getRandom(0,window.innerHeight-height);return{x:s,y:i}},r=()=>{if(!e.value)return;const{x:s,y:i}=a(),m=zztool_umdExports.getRandomColor(),c=zztool_umdExports.getRandomColor();o.value.style.left=s+"px",o.value.style.top=i+"px",o.value.style.backgroundColor=m,o.value.style.color=c};return onMounted(()=>{o.value.addEventListener("mouseenter",r),o.value.addEventListener("click",()=>{alert(t("alertTitle"))}),window.onresize=r,window.addEventListener("keydown",s=>{s.key===" "&&(e.value=!1)}),r()}),(s,i)=>(openBlock(),createElementBlock("button",{ref_key:"btn",ref:o,id:"btn"},toDisplayString(unref(t)("space"))+toDisplayString(unref(t)("stop"))+"("+toDisplayString(unref(t)("click"))+")",513))}}),_export_sfc=(n,t)=>{const o=n.__vccOpts||n;for(const[e,a]of t)o[e]=a;return o},MoveBtn=_export_sfc(_sfc_main$G,[["__scopeId","data-v-16aca347"]]),ScrollbarProps={height:{type:String,default:"100%"}},_sfc_main$F=defineComponent({name:"CptScrollbar",props:ScrollbarProps,setup(n){var t=n.height==="100%"?0:Number(n.height.replace(/px/,""));const o=ref(),e=ref(),a=ref(),r=ref(!1),s=ref(0),i=ref(!1),m=ref(!0);onMounted(()=>{nextTick(()=>{c()}),window.addEventListener("resize",()=>{c()})});function c(){if(n.height==="100%"){let f=window.getComputedStyle(e.value.parentElement).getPropertyValue("padding-top"),k=window.getComputedStyle(e.value.parentElement).getPropertyValue("padding-bottom");t=e.value.parentElement.getBoundingClientRect().height-Number(f.replace(/px/,""))-Number(k.replace(/px/,""))}let l=0;const p=a.value.children.length,g=a.value.children;for(let f=0;f<p;f++)l+=g[f].getBoundingClientRect().height;l<=t&&(m.value=!1),u()}function u(){const l=a.value.scrollHeight;s.value=t/(l/t)<10?15:t/(l/t),o.value.style.height=s.value+"px"}let d=ref(!1),h=ref(0);const _=ref(0);function C(){m.value&&(r.value=!0)}function y(l){if(d.value){var p=l.y-_.value-e.value.offsetTop-h.value;p<=0?p=0:p+s.value>=t&&(p=t-s.value),o.value.style.top=p+"px";var g=Math.trunc(p*((a.value.scrollHeight-t)/(t-s.value)));v(g)}}function $(l){o.value.style.top=l+"px"}function v(l){a.value.scrollTop=l}function B(l){z(!0),d.value=!0,_.value=l.y-e.value.offsetTop-o.value.style.top.replace(/px/,""),h.value=a.value.offsetTop}function I(){d.value||(r.value=!1)}function x(){d.value=!1}function z(l){i.value=l}function b(l){if(d.value)return;z(!0);const p=(a.value.scrollHeight-t)/(t-s.value),g=l.target.scrollTop;$(Math.trunc(g/p))}return onMounted(()=>{document.body.addEventListener("mouseup",x),document.body.addEventListener("mousemove",y)}),onUnmounted(()=>{document.body.removeEventListener("mouseup",x),document.body.removeEventListener("mousemove",y)}),{props:n,scrollEle:e,scrollbar:o,scrollbarBox:a,scrollbarShow:r,scrollbarEnter:C,scrollbarMove:y,scrollbarDown:B,scrollbarLeave:I,scrollbarUp:x,scroll:b}}}),_hoisted_1$4=["onmouseenter","onmouseleave"],_hoisted_2$4=["onscroll"],_hoisted_3$3={class:"scrollbarBoxs",style:{}},_hoisted_4$2=["onmousedown"];function _sfc_render(n,t,o,e,a,r){return openBlock(),createElementBlock("div",{class:"scrollbarBox",style:normalizeStyle({height:n.props.height}),ref:"scrollEle",onmouseenter:n.scrollbarEnter,onmouseleave:n.scrollbarLeave},[createBaseVNode("div",{ref:"scrollbarBox",onscroll:n.scroll,style:normalizeStyle({"max-height":n.props.height}),class:"boxitem"},[renderSlot(n.$slots,"default",{},void 0)],12,_hoisted_2$4),withDirectives(createBaseVNode("div",_hoisted_3$3,[createBaseVNode("div",{class:"scrollbar pointer",onmousedown:n.scrollbarDown,ref:"scrollbar"},null,8,_hoisted_4$2)],512),[[vShow,n.scrollbarShow]])],12,_hoisted_1$4)}const CptScrollbar=_export_sfc(_sfc_main$F,[["render",_sfc_render],["__scopeId","data-v-1e1f516f"]]),MenuData=[{name:"publicmethods.title",list:[{name:"publicmethods.list.li1.name",title:"getVersion",com:"getVersion"},{name:"publicmethods.list.li2.name",title:"error",com:"error"},{name:"publicmethods.list.li3.name",title:"debounce",com:"debounce"},{name:"publicmethods.list.li4.name",title:"throttle",com:"throttle"}]},{name:"typedetection.title",list:[{name:"typedetection.list.li1.name",title:"getType",com:"getType"}]},{name:"regexp.title",list:[{name:"regexp.list.li1.name",title:"regIsHas",com:"regIsHas"},{name:"regexp.list.li2.name",title:"regEmail",com:"regEmail"},{name:"regexp.list.li3.name",title:"regPhone",com:"regPhone"},{name:"regexp.list.li4.name",title:"regIdcard",com:"regIdcard"}]},{name:"getparam.title",list:[{name:"getparam.list.li1.name",title:"getUrlParam",com:"getUrlParam"},{name:"getparam.list.li2.name",title:"paramformat",com:"paramformat"}]},{name:"transfertype.title",list:[{name:"transfertype.list.li1.name",title:"toString",com:"toString"},{name:"transfertype.list.li2.name",title:"toArray",com:"toArray"}]},{name:"utilfn.title",list:[{name:"utilfn.list.li1.name",title:"getRandom",com:"getRandom"},{name:"utilfn.list.li2.name",title:"getRandomArray",com:"getRandomArray"},{name:"utilfn.list.li3.name",title:"getRandomColor",com:"getRandomColor"},{name:"utilfn.list.li4.name",title:"moneyFormat",com:"moneyFormat"}]},{name:"data.title",list:[{name:"data.list.li1.name",title:"dataEqual",com:"dataEqual"},{name:"data.list.li2.name",title:"dataEmpty",com:"dataEmpty"},{name:"data.list.li3.name",title:"deepClone",com:"deepClone"},{name:"data.list.li4.name",title:"toTree",com:"toTree"},{name:"data.list.li5.name",title:"groupBy",com:"groupBy"},{name:"data.list.li6.name",title:"dataMerge",com:"dataMerge"},{name:"data.list.li7.name",title:"dataUnique",com:"dataUnique"},{name:"data.list.li8.name",title:"dataUnEmpty",com:"dataUnEmpty"},{name:"data.list.li9.name",title:"shuffleArray",com:"shuffleArray"},{name:"data.list.li10.name",title:"dataChangeIndex",com:"dataChangeIndex"},{name:"data.list.li11.name",title:"chunkArray",com:"chunkArray"},{name:"data.list.li12.name",title:"getSameIndexValue",com:"getSameIndexValue"}]},{name:"date.title",list:[{name:"date.list.li1.name",title:"getDateInfo",com:"getDateInfo"},{name:"date.list.li2.name",title:"getDateType",com:"getDateType"},{name:"date.list.li3.name",title:"getDate",com:"getDate"},{name:"date.list.li4.name",title:"getMonthDays",com:"getMonthDays"},{name:"date.list.li5.name",title:"getBetwenDate",com:"getBetwenDate"},{name:"date.list.li6.name",title:"getDateList",com:"getDateList"},{name:"date.list.li7.name",title:"getTimeStep",com:"getTimeStep"}]},{name:"calc.title",list:[{name:"calc.list.li1.name",title:"getPercentage",com:"getPercentage"}]}],_hoisted_1$3={class:"menu-item"},_hoisted_2$3={style:{"margin-top":"10px"}},_hoisted_3$2=["selected"],_hoisted_4$1=["selected"],_hoisted_5$1={class:"menu-item"},_hoisted_6$1={class:"title"},_hoisted_7={class:"item"},_hoisted_8={class:"item"},_hoisted_9={class:"item"},_hoisted_10={class:"title"},_hoisted_11=["onClick"],_sfc_main$E=defineComponent({__name:"menu",props:{switchs:{type:Boolean,default:!1},bgColor:{type:String,default:"#fff"}},emits:["change"],setup(n,{emit:t}){const o=t,{t:e,locale:a}=useI18n(),r=ref("getVersion"),s=c=>{o("change",c),r.value=c.title},i=localStorage.getItem("locale")||"zh",m=c=>{localStorage.setItem("locale",c.target.value),a.value=c.target.value};return(c,u)=>(openBlock(),createElementBlock("div",{class:"menu",style:normalizeStyle({backgroundColor:n.bgColor})},[createVNode(unref(CptScrollbar),null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$3,[createBaseVNode("h4",_hoisted_2$3,toDisplayString(unref(e)("current"))+toDisplayString(unref(e)("language")),1),createBaseVNode("select",{onChange:m},[createBaseVNode("option",{value:"zh",selected:unref(i)==="zh"},toDisplayString(unref(e)("zh")),9,_hoisted_3$2),createBaseVNode("option",{value:"en",selected:unref(i)==="en"},toDisplayString(unref(e)("en")),9,_hoisted_4$1)],32)]),createBaseVNode("div",_hoisted_5$1,[createBaseVNode("div",_hoisted_6$1,toDisplayString(unref(e)("illustrate")),1),createBaseVNode("div",_hoisted_7,toDisplayString(unref(e)("illustrateComponent.li1")),1),createBaseVNode("div",_hoisted_8,toDisplayString(unref(e)("illustrateComponent.li2")),1),createBaseVNode("div",_hoisted_9,toDisplayString(unref(e)("illustrateComponent.li3")),1)]),(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(MenuData),(d,h)=>(openBlock(),createElementBlock("div",{class:"menu-item",key:h},[createBaseVNode("div",_hoisted_10,toDisplayString(unref(e)(d.name)),1),(openBlock(!0),createElementBlock(Fragment,null,renderList(d.list,(_,C)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["item",[r.value===_.title?"active":""]]),key:C,onClick:y=>s(_)},toDisplayString(unref(e)(_.name)),11,_hoisted_11))),128))]))),128))]),_:1})],4))}}),Menu=_export_sfc(_sfc_main$E,[["__scopeId","data-v-d869d1a3"]]),strCode$A=`
const version = zztool.getVersion();
console.log(version);
`,_sfc_main$D=defineComponent({__name:"getVersion",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$A})}}}),strCode$z=`
zztool.error('抛出错误');
`,_sfc_main$C=defineComponent({__name:"error",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$z,show:!1})}}}),strCode$y=`
const clickFn = zztool.debounce(() => {
    console.log('防抖');
}, 1000);
`,_sfc_main$B=defineComponent({__name:"debounce",setup(n){const t=()=>{zztool.debounce(()=>{console.log("防抖")},1e3)};return(o,e)=>{const a=resolveComponent("InputText");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("button",{onClick:e[0]||(e[0]=r=>t())},"点击"),createVNode(a,{contents:strCode$y,show:!1})],64)}}}),strCode$x=`
zztool.throttle(() => {
    console.log('节流');
}, 1000);
`,_sfc_main$A=defineComponent({__name:"throttle",setup(n){const t=()=>{zztool_umdExports.throttle(()=>{console.log("节流")},1e3)};return(o,e)=>{const a=resolveComponent("InputText");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("button",{onClick:t},"点击"),createVNode(a,{contents:strCode$x,show:!1})],64)}}}),strCode$w=`
const data = 10;
const type = zztool.getType(data);
console.log(type)
`,_sfc_main$z=defineComponent({__name:"getType",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$w})}}}),strCode$v=`
const str = 'how are you?';
const isHas = zztool.regIsHas(str, 'you');
console.log(isHas)
`,_sfc_main$y=defineComponent({__name:"regIsHas",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$v})}}}),_hoisted_1$2={class:"w-50 h-full"},_hoisted_2$2={style:{height:"calc(100% - 37px)"},disabled:"",id:"output",class:"w-full",name:""},_sfc_main$x=defineComponent({__name:"output",props:{content:String},setup(n){const t=n,{t:o}=useI18n();return(e,a)=>(openBlock(),createElementBlock("div",_hoisted_1$2,[createBaseVNode("h1",null,toDisplayString(unref(o)("output")),1),createBaseVNode("textarea",_hoisted_2$2,toDisplayString(t.content),1)]))}}),_hoisted_1$1={style:{display:"flex"},class:"h-full"},_hoisted_2$1={class:"h-full w-50"},_hoisted_3$1={class:"w-full h-full",name:"",id:"textarea"},_sfc_main$w=defineComponent({__name:"inputText",props:{contents:{type:String,default:""},show:{type:Boolean,default:!0}},setup(__props){const props=__props,{t:$t}=useI18n(),start=()=>{const outputDom=document.getElementById("output");outputDom.value="";const dom=document.getElementById("textarea"),value=dom.value,str=zztool_umdExports.replaceAll(value,"console.log","var outputDom = document.getElementById('output');outputDom.value = outputDom.value + '\\n' + '>>> ' + JSON.stringify");eval(str)};return(n,t)=>(openBlock(),createElementBlock("div",_hoisted_1$1,[createBaseVNode("div",_hoisted_2$1,[createBaseVNode("textarea",_hoisted_3$1,"          "+toDisplayString(props.contents)+`\r
      `,1)]),props.show?(openBlock(),createElementBlock(Fragment,{key:0},[createBaseVNode("button",{onClick:start},toDisplayString(unref($t)("run")),1),createVNode(_sfc_main$x)],64)):createCommentVNode("",!0)]))}}),strCode$u=`
const email1 = 'xxxx@163.com';
const email2 = 'xxxx@gmail.com';
const email3 = 'xxxx1234234.com';
const arr = Array.from([email1,email2,email3])
for(let i = 0; i < arr.length; i++){
  const item = arr[i];
  console.log(zztool.regEmail(item));
}`,_sfc_main$v=defineComponent({__name:"regEmail",setup(n){return(t,o)=>(openBlock(),createBlock(_sfc_main$w,{contents:strCode$u}))}}),strCode$t=`
  const phone1 = '15666666666';
  const phone2 = '11111111111';
  const arr = Array.from([phone1, phone2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    console.log(zztool.regPhone(item));
  }
`,_sfc_main$u=defineComponent({__name:"regPhone",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$t})}}}),strCode$s=`
  const idcard1 = '111111111111111111';
  const idcard2 = '46516546549874654x';
  const arr = Array.from([idcard1, idcard2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    const result = zztool.regIdcard(item);
    console.log(result); // false false
  }
`,_sfc_main$t=defineComponent({__name:"regIdcard",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$s})}}}),strCode$r=`
  const url = "http://www.baidu.com?a=1&b=2";
  const param = zztool.getUrlParam(url); // 无参数则会获取url
  console.log(param) // {a: '1', b: '2'}
`,_sfc_main$s=defineComponent({__name:"getUrlParam",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$r})}}}),strCode$q=`
  const params = {a: '1', b: '2'}
  const param1 = zztool.paramformat(params,'url');
  const param2 = zztool.paramformat(params,'json');
  const param3 = zztool.paramformat(params,'formData');
  console.log(param1);
  console.log(param2);
  console.log(param3);
`,_sfc_main$r=defineComponent({__name:"paramformat",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$q})}}}),strCode$p=`
  const obj = { a: 1, b: 2 };
  const arr = [1, 2, 3];
  const str1 = zztool.toString(obj);
  const str2 = zztool.toString(arr);
  console.log(str1);
  console.log(str2);
`,_sfc_main$q=defineComponent({__name:"toString",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$p})}}}),strCode$o=`
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
`,_sfc_main$p=defineComponent({__name:"toArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$o})}}}),strCode$n=`
  const random = zztool.getRandom(0,100);
  console.log(random)
`,_sfc_main$o=defineComponent({__name:"getRandom",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$n})}}}),strCode$m=`
  const random = zztool.getRandomArray(100,0,100);
  console.log(random)
`,_sfc_main$n=defineComponent({__name:"getRandomArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$m})}}}),strCode$l=`
  const color = zztool.getRandomColor();
  const rgbColor = zztool.getRandomRGBColor();
  const rgbaColor = zztool.getRandomRGBA();
  console.log(color)
  console.log(rgbColor)
  console.log(rgbaColor)
`,_sfc_main$m=defineComponent({__name:"getRandomColor",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$l})}}}),money=1e6,strCode$k=`
const money = 1000000;
const moneyFormat = zztool.moneyFormat(money);
const moneyFormat2 = zztool.moneyFormat(money,'~','$');
console.log(moneyFormat);
console.log(moneyFormat2);
`,_sfc_main$l=defineComponent({__name:"moneyFormat",setup(n){const t=zztool_umdExports.moneyFormat(money),o=zztool_umdExports.moneyFormat(money,"~","$");return console.log(t,o),(e,a)=>{const r=resolveComponent("InputText");return openBlock(),createBlock(r,{contents:strCode$k})}}}),strCode$j=`
// 会对比每一项
  const obj1 = {
    name: "z",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
      name: "zhangsan",
      age: 18,
      sex: 1,
      address: "xxxx", 
      hobby: ["打游戏", "看电影"],
      arr:{
        name: "zhangsan",
        age:'1'
      },
      info: null,
    },
    prople:[
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "xxx", age: 25 },
    ],
    arr: [
      {
        name: "git",
        lng:10,
      },
      {
        name: "hub",
        lng:30,
      }
    ],
    arrs:[1,2,3,4,5],
  }
  const obj2 = {
    name: "z",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
      name: "zhangsan",
      age: 18,
      sex: 1,
      address: "xxxx", 
      hobby: ["打游戏", "看电影"],
      arr:{
        name: "zhangsan",
        age:'1'
      },
      info: null,
    },
    prople: [
      { name: "Alice", age: 30 },
      { name: "Charlie", age: 25 }
    ],
    arr: [
      {
        name: "hub",
        lng:20,
      },
      {
        name: "git",
        lng:10,
      }
    ],
    arrs:[1,2,3,4,5],
  }
  // 第一个参数为修改后的数据，第二个参数为修改前的数据
  const data = zztool.dataEqual(obj1,obj2);
  const data1 = zztool.dataEqual(obj1,obj2,{returnKeys:true});
  /**
   * data1值为
   * ["prople.1.name","arr.0.name","arr.0.lng","arr.1.name","arr.1.lng"];
   * 可以使用getValue获取值
   */
  console.log(data)
  console.log(data1)

  for(let i = 0; i < data1.length; i++){
    console.log(zztool.getValue(obj1,data1[i]))
  }
`,_sfc_main$k=defineComponent({__name:"dataEqual",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$j})}}}),strCode$i=`
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = {a:2,b:1,c:{d:1,e:[]}};
  const data1 = zztool.dataEmpty(obj1);
  const data2 = zztool.dataEmpty(obj2);
  console.log(data1);
  console.log(data2);
`,_sfc_main$j=defineComponent({__name:"dataEmpty",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$i})}}}),strCode$h=`
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = zztool.deepClone(obj1);
  console.log(obj1 == obj2)
  console.log(obj1 === obj2)
`,_sfc_main$i=defineComponent({__name:"deepClone",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$h})}}}),strCode$g=`
  var data = [
    { id: 1, parentId: null, name: "Item 1" },
    { id: 2, parentId: 1, name: "Item 1.1" },
    { id: 3, parentId: 1, name: "Item 1.2" },
    { id: 4, parentId: 2, name: "Item 1.1.1" },
    { id: 5, parentId: null, name: "Item 2" }
  ];
  const tree = zztool.toTree(data, 'parentId');
  console.log(tree)
`,_sfc_main$h=defineComponent({__name:"toTree",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$g})}}}),strCode$f=`
var data = [
    { id: 1, parentId: 2, name: "Item 1" },
    { id: 2, parentId: 1, name: "Item 1.1" },
    { id: 3, parentId: 1, name: "Item 1.2" },
    { id: 4, parentId: 2, name: "Item 1.1.1" },
]
const datas = zztool.groupBy(data, 'parentId');
console.log(datas)
`,_sfc_main$g=defineComponent({__name:"groupBy",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$f})}}}),strCode$e=`
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
`,_sfc_main$f=defineComponent({__name:"dataMerge",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$e})}}}),strCode$d=`
const arr1 = [1,2,3,4,5,5,6];
const data = zztool.uniqueArray(arr1);
console.log(data)
`,_sfc_main$e=defineComponent({__name:"dataUnique",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$d})}}}),strCode$c=`
const arr1 = [1,2,3,4,5,5,'','',6];
console.log(arr1)
const data = zztool.arrayTrim(arr1);
console.log(data)
`,_sfc_main$d=defineComponent({__name:"dataUnEmpty",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$c})}}}),strCode$b=`
const date = zztool.getDateInfo('2023-6-15')
console.log(date)
`,_sfc_main$c=defineComponent({__name:"getDateInfo",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$b})}}}),strCode$a=`
const date = zztool.getDateType('2023-6-15',"Y/M/D")
console.log(date)
`,_sfc_main$b=defineComponent({__name:"getDateType",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$a})}}}),strCode$9=`
console.log(zztool.getDate())
console.log(zztool.getDate("Y/M/D"))
console.log(zztool.getDate(zztool.getTimeStamp('2020/02/20'),"Y~M~D"))
`,_sfc_main$a=defineComponent({__name:"getDate",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$9})}}}),strCode$8=`
const days = zztool.getMonthDays(2024,6);
console.log(days);
`,_sfc_main$9=defineComponent({__name:"getMonthDays",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$8})}}}),strCode$7=`
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15',true))
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15'))
`,_sfc_main$8=defineComponent({__name:"getBetwenDate",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$7})}}}),strCode$6=`
const day1 = zztool.getRecentDate(new Date('2024-6-15'),1);
const day2 = zztool.getRecentDate(new Date('2024-6-15'),2);
const day3 = zztool.getRecentDate(new Date('2024-6-15'),3);
console.log('前三天：'+day1)
console.log('前一周：'+day2)
console.log('前一月：'+day3)
`,_sfc_main$7=defineComponent({__name:"getDateList",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$6})}}}),strCode$5=`
const arr = zztool.getTimeStep('01:00',"10:00");
const arr1 = zztool.getTimeStep('01:00',"10:00","00:30");
console.log("默认步长：" + arr)
console.log("步长半小时：" + arr1)
`,_sfc_main$6=defineComponent({__name:"getTimeStep",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$5})}}}),strCode$4=`
const arr = zztool.getRandomArray(10,0,10);
console.log(zztool.shuffleArray(arr));
console.log(zztool.shuffleArray(arr));
`,_sfc_main$5=defineComponent({__name:"shuffleArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$4})}}}),strCode$3=`
const number = zztool.getPercentage(10, 100,2);
console.log(number)
`,_sfc_main$4=defineComponent({__name:"getPercentage",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$3})}}}),strCode$2=`
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
`,_sfc_main$3=defineComponent({__name:"dataChangeIndex",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$2})}}}),strCode$1=`
  const arr = zztool.getRandomArray(10, 1, 100);
  const data = zztool.chunkArray(arr, 2);
  console.log(data)

  const arr2 = zztool.getRandomArray(10, 1, 100);
  const data2 = zztool.chunkArrayItem(arr2, 4);
  console.log(data2)
`,_sfc_main$2=defineComponent({__name:"chunkArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$1})}}}),strCode=`
  const obj = {a:2,b:1,c:{d:1,e:[],a:'xxx'}};
  const data = zztool.getSameIndexValue(obj,'a');
  console.log(data);
`,_sfc_main$1=defineComponent({__name:"getSameIndexValue",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode})}}}),_hoisted_1={style:{display:"flex"}},_hoisted_2={id:"dialog"},_hoisted_3={class:"win"},_hoisted_4={class:"container"},_hoisted_5={style:{"list-style":"inside"}},_hoisted_6={class:"closeBtn"},_sfc_main=defineComponent({__name:"App",setup(n){const t=shallowRef(_sfc_main$D),o={getVersion:_sfc_main$D,error:_sfc_main$C,debounce:_sfc_main$B,throttle:_sfc_main$A,getType:_sfc_main$z,regIsHas:_sfc_main$y,regEmail:_sfc_main$v,regPhone:_sfc_main$u,regIdcard:_sfc_main$t,getUrlParam:_sfc_main$s,paramformat:_sfc_main$r,toString:_sfc_main$q,toArray:_sfc_main$p,getRandom:_sfc_main$o,getRandomArray:_sfc_main$n,getRandomColor:_sfc_main$m,moneyFormat:_sfc_main$l,dataEqual:_sfc_main$k,dataEmpty:_sfc_main$j,deepClone:_sfc_main$i,toTree:_sfc_main$h,groupBy:_sfc_main$g,dataMerge:_sfc_main$f,dataUnique:_sfc_main$e,dataUnEmpty:_sfc_main$d,getDateInfo:_sfc_main$c,getDateType:_sfc_main$b,getDate:_sfc_main$a,getMonthDays:_sfc_main$9,getBetwenDate:_sfc_main$8,getDateList:_sfc_main$7,getTimeStep:_sfc_main$6,shuffleArray:_sfc_main$5,getPercentage:_sfc_main$4,dataChangeIndex:_sfc_main$3,chunkArray:_sfc_main$2,getSameIndexValue:_sfc_main$1},e=c=>{console.log(`%c${c.title}`,"background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px"),t.value=o[c.com]},{t:a}=useI18n(),r=ref(),s=ref();onMounted(()=>{r.value=document.getElementById("dialog"),s.value=document.querySelector(".closeBtn"),r.value.showModal(),s.value.addEventListener("click",function(){r.value.close()})});const i=ref(!1),m=ref();return setInterval(()=>{i.value&&(m.value=zztool.getRandomRGBA())},100),(c,u)=>(openBlock(),createElementBlock(Fragment,null,[createVNode(MoveBtn),createBaseVNode("div",_hoisted_1,[createVNode(Menu,{switchs:i.value,bgColor:m.value,onChange:e},null,8,["switchs","bgColor"]),createBaseVNode("div",{style:normalizeStyle([{width:"100%",padding:"10px",transition:"all 0.2s"},{backgroundColor:m.value}])},[(openBlock(),createBlock(resolveDynamicComponent(t.value)))],4),createBaseVNode("dialog",_hoisted_2,[createBaseVNode("div",_hoisted_3,[createBaseVNode("div",_hoisted_4,[createBaseVNode("h4",null,toDisplayString(unref(a)("install"))+"/"+toDisplayString(unref(a)("use")),1),u[1]||(u[1]=createBaseVNode("code",null,[createBaseVNode("pre",null,`--- install
npm install @zzcpt/zztool@latest
--- file
import * as zztool from '@zzcpt/zztool';
import { xxx } from '@zzcpt/zztool';
            `)],-1)),createBaseVNode("h4",null,toDisplayString(unref(a)("illustrate")),1),createBaseVNode("ul",_hoisted_5,[createBaseVNode("li",null,toDisplayString(unref(a)("dialog.illustrate1")),1),createBaseVNode("li",null,toDisplayString(unref(a)("dialog.illustrate2")),1)])]),createBaseVNode("button",_hoisted_6,toDisplayString(unref(a)("close")),1),createBaseVNode("button",{onClick:u[0]||(u[0]=d=>i.value=!i.value)},toDisplayString(unref(a)("mod")),1)])])])],64))}}),App=_export_sfc(_sfc_main,[["__scopeId","data-v-f0e59ca4"]]),widnows=window;widnows.zz=zztool$1;widnows.zztool=zztool$1;const app=createApp(App);app.component("OutPut",_sfc_main$x);app.component("InputText",_sfc_main$w);app.use(i18n);app.mount("#app");
//# sourceMappingURL=index-Dt3__5Rb.js.map
