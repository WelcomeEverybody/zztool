function $t(d,$){for(var o=0;o<$.length;o++){const y=$[o];if(typeof y!="string"&&!Array.isArray(y)){for(const D in y)if(D!=="default"&&!(D in d)){const A=Object.getOwnPropertyDescriptor(y,D);A&&Object.defineProperty(d,D,A.get?A:{enumerable:!0,get:()=>y[D]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ot(d){return d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var E={exports:{}};(function(d,$){(function(o,y){y($)})(jt,function(o){const y="1.2.6";console.log(`%czztool%cV${y}`,"background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px","background: #FFD700; color: #000000; border-radius: 0 3px 3px 0;padding:2px 5px");function D(t,e,r){const n=new RegExp(e,"g");return t.replace(n,r)}function A(){return y}function w(t){throw new Error(t)}const B=function(){let t=null;return(e,r=800)=>{t&&clearTimeout(t),t=setTimeout(e,r)}}(),U=function(){let t=0;return(e,r=800)=>{let n=+new Date;n-t>r&&(e(),t=n)}}();function G(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function v(t,e){return new RegExp(e).test(t)}function J(t){return/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)}function L(t){return/^1[3456789]\d{9}$/.test(t)}function W(t){if(!/^\d{17}(\d|X)$/i.test(t)||!{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[t.substring(0,2)])return!1;const e=t.substring(6,14),r=e.substring(0,4),n=e.substring(4,6),a=e.substring(6,14),s=new Date(r+"/"+n+"/"+a);if(s.getFullYear()!==parseInt(r)||s.getMonth()+1!==parseInt(n)||s.getDate()!==parseInt(a))return!1;const u=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],l=["1","0","X","9","8","7","6","5","4","3","2"];let i=0;for(let f=0;f<17;f++)i+=Number(t[f])*u[f];const c=l[i%11];return t[17].toUpperCase()===c}function j(t){return typeof t!="string"&&w("参数类型错误，必须为字符串"),t.charAt(0)}function Z(t){return typeof t!="string"&&w("参数类型错误，必须为字符串"),t.substring(t.length-1,t.length)}function q(t,e,r){return typeof t!="string"&&w("参数类型错误，必须为字符串"),t.substring(e,r)||""}function H(t=""){return t||(t=window.location.href),(t.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce((e,r)=>(e[r.slice(0,r.indexOf("="))]=r.slice(r.indexOf("=")+1),e),{})}function K(t,e="url"){if(e==="url")return Object.keys(t).map(r=>`${r}=${t[r]}`).join("&");if(e==="json")return JSON.stringify(t);if(e==="formData"){const r=new FormData;for(const n in t)r.append(n,t[n]);return r}}function Y(t){const e=JSON.stringify(t);return j(e)==="\\"?e.replace(/\\/g,""):e}function O(t,e=""){if(t||w("该变量没有值"),Array.isArray(t))return[...t];const r=typeof t=="string"?t:Y(t),n=j(r);try{return n==="{"||n==="["?JSON.parse(r):r.includes(",")?r.split(","):r.includes(" ")?r.split(" "):r.split(e)}catch{return r}}function m(t,e){return(typeof t!="number"||typeof e!="number")&&w("参数类型错误，必须为数字"),Math.floor(Math.random()*(e-t+1)+t)}function V(t,e,r){const n=[];for(let a=0;a<t;a++)n.push(m(e,r));return n}function X(t=32,e=""){const r=e||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-";let n="";for(let a=0;a<t;a++)n+=r.charAt(Math.floor(Math.random()*r.length));return n}function Q(t){if(!Array.isArray(t))return t;let e=t.slice();for(let r=e.length-1;r>0;r--){const n=Math.floor(Math.random()*(r+1));[e[r],e[n]]=[e[n],e[r]]}return e}function tt(){return`#${Math.floor(Math.random()*16777215).toString(16)}`}function et(){return`rgb(${m(0,255)},${m(0,255)},${m(0,255)})`}function rt(){return`rgba(${m(0,255)},${m(0,255)},${m(0,255)},${m(0,100)/100})`}function nt(t,e=",",r=""){let n=t.toString(),a=n.indexOf(".");for(a===-1&&(a=n.length);a>3;)a-=3,n=n.slice(0,a)+e+n.slice(a);return r?r+n:n}function P(t,e,r={}){const n={returnKeys:!1,arrayDiff:!1},{returnKeys:a=!1,arrayDiff:s=!1}=Object.assign(n,r),u=[];function l(c){return c&&typeof c=="object"&&!Array.isArray(c)}const i=(c,f,h)=>{if(l(c)&&l(f)){const g=P(c,f,r);Array.isArray(g)&&g.forEach(p=>u.push(`${h}.${p}`))}else Array.isArray(c)&&Array.isArray(f)?(s?c.some((g,p)=>g!==f[p])||c.length!==f.length:c.length!==f.length||!c.every(g=>f.includes(g)))&&u.push(h):c!==f&&u.push(h)};for(let c in t)if(t.hasOwnProperty(c)){const f=t[c],h=e[c];i(f,h,c)}return a?u:u.length>0}function _(t,e=!1,r=""){const n=[];function a(s){return s===""||s===null||s===void 0||typeof s=="object"&&s!==null&&(Array.isArray(s)?s.length===0:Object.keys(s).length===0)}for(let s in t)if(t.hasOwnProperty(s)){const u=r?`${r}.${s}`:s,l=t[s];if(typeof l=="object"&&l!==null&&!a(l)){const i=_(l,!0,u);Array.isArray(i)&&n.push(...i)}else a(l)&&n.push(u)}return e?n:n.length>0}function T(t){if(t==null||typeof t!="object")return t;if(t instanceof Date)return new Date(t.getTime());if(Array.isArray(t)){const e=[];return t.forEach((r,n)=>{e[n]=T(r)}),e}if(t instanceof Object){const e={};return Object.keys(t).forEach(r=>{e[r]=T(t[r])}),e}w("Unsupported data type")}function ot(t,e,r){if(typeof t!="object"||t===null)return t;const n=O(e,","),a=O(r,",");n.length!==a.length&&w("下表必须和新下标长度一致");for(let u=0;u<n.length;u++)s(t,n[u],a[u]);function s(u,l,i){typeof u!="object"||u===null||(Object.keys(u).forEach(c=>{c===l&&(u[i]=u[c]),typeof u[c]=="object"&&s(u[c],l,i)}),u.hasOwnProperty(l)&&delete u[l])}return t}function at(t,e){let r=[],n={};return t.forEach(a=>{n[a.id]=Object.assign(Object.assign({},a),{children:[]})}),t.forEach(a=>{a[e]===null?r.push(n[a.id]):n[a[e]].children.push(n[a.id])}),r}function ut(t,e){return t.reduce((r,n)=>((r[n[e]]=r[n[e]]||[]).push(n),r),{})}function st(t,e,r=1){return r===1?[...new Set([...t,...e])]:r===2?t.filter(n=>e.includes(n)):r===3?t.filter(n=>!e.includes(n)):r===4?[...t.filter(n=>!e.includes(n)),...e.filter(n=>!t.includes(n))]:[]}function ct(t){return[...new Set(t)]}function lt(t,e){if(e<=1)return[t];const r=[],n=Math.ceil(t.length/e);for(let a=0;a<e;a++)r.push(t.slice(a*n,(a+1)*n));return r}function ft(t,e){const r=[];for(let n=0;n<t.length;n+=e)r.push(t.slice(n,n+e));return r}function it(t,e,r){const n=a=>{for(const s in a){if(s===e&&a[s]===r)return{key:s,value:a[s]};if(Array.isArray(a[s])||typeof a[s]=="object"){const u=n(a[s]);if(u)return u}}return null};return n(t)}function gt(t){return t.filter(e=>e)}function b(t){let e=t;typeof t=="string"&&v(t,"-")&&(e=D(t,"-","/"));const r=e?new Date(e):new Date,n=r.getFullYear(),a=(r.getMonth()+1).toString().padStart(2,"0"),s=r.getDate().toString().padStart(2,"0"),u=r.getHours().toString().padStart(2,"0"),l=r.getMinutes().toString().padStart(2,"0"),i=r.getSeconds().toString().padStart(2,"0");return{year:n,month:a,day:s,hour:u,minute:l,second:i}}function M(t,e="Y/M/D h:m:s"){if(typeof t=="object")var{year:r,month:n,day:a,hour:s,minute:u,second:l}=t;else var{year:r,month:n,day:a,hour:s,minute:u,second:l}=b(t);return e.replace("Y",r).replace("M",n).replace("D",a).replace("h",s).replace("m",u).replace("s",l)}function C(t="",e="Y/M/D h:m:s"){return arguments.length===0?M(b(new Date),"Y/M/D h:m:s"):arguments.length===1?M(b(new Date),t):M(b(t),e)}function pt(t=new Date){const e=new Date(t),r=e.getDay(),n=new Date(e);return n.setDate(e.getDate()-r+1),Array.from({length:7},(a,s)=>{const u=new Date(n);return u.setDate(n.getDate()+s),u.toLocaleDateString()})}function ht(t=new Date().getFullYear(),e=new Date().getMonth()+1){return new Date(t,e,0).getDate()}function yt(t=new Date){return["日","一","二","三","四","五","六"][new Date(t).getDay()]}function dt(){let t=new Date(new Date().setDate(1)||new Date().setDate(1)),e;t.getDay()===0?e=6:e=t.getDay()-1,t.setMonth(t.getMonth()+1),t.setDate(0);let r=t.getDate()+e;return Math.ceil(r/7)}function mt(t=new Date().getFullYear()){let e=new Date(t,0,1).getDay();if(e==1?e=0:e==0?e=1:e=8-e,t%4==0&&t%100!=0||t%100==0&&t%400==0)var r=366;else var r=365;return Math.ceil((r-e)/7)+(e!==0?1:0)}function x(t,e,r=!1){const n=new Date(t).getTime(),a=new Date(e).getTime();if(r)return Math.abs(n-a)/864e5;const s=[];for(let u=0;u<=Math.abs(n-a)/864e5;u++){const l=n>a?n-u*864e5:n+u*864e5;s.push(C(new Date(l),"Y-M-D"))}return s}function Dt(t=new Date,e=1,r=!0,n=0){if(!t)return[];const a="Y-M-D",s=24*60*60*1e3;let u=new Date(t).getTime();r||(u-=s);function l(g){const p=g.getMonth();return{year:p===0?g.getFullYear()-1:g.getFullYear(),month:p===0?12:p}}const i=g=>Array.from({length:g},(p,F)=>{const k=u-(g-F-1)*s;return M(new Date(k),a)}),{year:c,month:f,day:h}=b(t);if(e&&!n)switch(e){case 1:return i(3);case 2:return i(7);case 3:{const{year:g,month:p}=l(new Date(u));return x(`${g}-${p}-${h}`,u)}case 4:return x(`${c-1}/${f}/${h}`,`${c}/${f}/${h}`)}else if(n)return i(n);return[]}function wt(t,e,r="01:00",n="hh:mm"){const[a,s,u=0]=t.split(":").map(Number),[l,i,c=0]=e.split(":").map(Number),[f,h,g=0]=r.split(":").map(Number),p=a*3600+s*60+u,F=l*3600+i*60+c,k=f*3600+h*60+g,z=[];for(let S=p;S<=F;S+=k){const R=String(Math.floor(S/3600)).padStart(2,"0"),I=String(Math.floor(S%3600/60)).padStart(2,"0"),St=String(S%60).padStart(2,"0");if(n==="hh:mm:ss")z.push(`${R}:${I}:${St}`);else if(n==="hh:mm")z.push(`${R}:${I}`);else throw new Error(`Unsupported type: ${n}`)}return z}function bt(t=new Date,e=!0){return e?new Date(t).getTime():Math.floor(new Date(t).getTime()/1e3)}function At(t,e,r=2){return(t/e*100).toFixed(r)}function Mt(t){return new Promise(e=>setTimeout(e,t))}o.arrayTrim=gt,o.chunkArray=lt,o.chunkArrayItem=ft,o.dataChangeIndex=ot,o.dataEmpty=_,o.dataEqual=P,o.dataFind=it,o.dataMerge=st,o.debounce=B,o.deepClone=T,o.error=w,o.getBetweenDate=x,o.getChar=q,o.getDate=C,o.getDateInfo=b,o.getDateType=M,o.getFirstChar=j,o.getLastChar=Z,o.getMonthDays=ht,o.getPercentage=At,o.getRandom=m,o.getRandomArray=V,o.getRandomColor=tt,o.getRandomRGBA=rt,o.getRandomRGBColor=et,o.getRandomString=X,o.getRecentDate=Dt,o.getTimeStamp=bt,o.getTimeStep=wt,o.getType=G,o.getUrlParam=H,o.getVersion=A,o.getWeekDay=yt,o.getWeekTime=pt,o.getYearWeeks=mt,o.groupBy=ut,o.moneyFormat=nt,o.paramformat=K,o.regEmail=J,o.regIdcard=W,o.regIsHas=v,o.regPhone=L,o.replaceAll=D,o.shuffleArray=Q,o.sleep=Mt,o.throttle=U,o.toArray=O,o.toString=Y,o.toTree=at,o.uniqueArray=ct,o.weekInMonthCount=dt,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})})})(E,E.exports);var N=E.exports;const Tt=Ot(N),xt=$t({__proto__:null,default:Tt},[N]);export{xt as a,N as z};
//# sourceMappingURL=@zzcpt-5cEhDoFt.js.map