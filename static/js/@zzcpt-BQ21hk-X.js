function bt(h,$){for(var a=0;a<$.length;a++){const y=$[a];if(typeof y!="string"&&!Array.isArray(y)){for(const D in y)if(D!=="default"&&!(D in h)){const A=Object.getOwnPropertyDescriptor(y,D);A&&Object.defineProperty(h,D,A.get?A:{enumerable:!0,get:()=>y[D]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var At=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mt(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var E={exports:{}};(function(h,$){(function(a,y){y($)})(At,function(a){const y="1.2.2";console.log(`%czztool%cV${y}`,"background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px","background: #FFD700; color: #000000; border-radius: 0 3px 3px 0;padding:2px 5px");function D(t,e,r){const n=new RegExp(e,"g");return t.replace(n,r)}function A(){return y}function w(t){throw new Error(t)}const I=function(){let t=null;return(e,r=800)=>{t&&clearTimeout(t),t=setTimeout(e,r)}}(),B=function(){let t=0;return(e,r=800)=>{let n=+new Date;n-t>r&&(e(),t=n)}}();function U(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function v(t,e){return new RegExp(e).test(t)}function G(t){return/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)}function J(t){return/^1[3456789]\d{9}$/.test(t)}function L(t){if(!/^\d{17}(\d|X)$/i.test(t)||!{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[t.substring(0,2)])return!1;const e=t.substring(6,14),r=e.substring(0,4),n=e.substring(4,6),o=e.substring(6,14),u=new Date(r+"/"+n+"/"+o);if(u.getFullYear()!==parseInt(r)||u.getMonth()+1!==parseInt(n)||u.getDate()!==parseInt(o))return!1;const i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],c=["1","0","X","9","8","7","6","5","4","3","2"];let g=0;for(let l=0;l<17;l++)g+=Number(t[l])*i[l];const s=c[g%11];return t[17].toUpperCase()===s}function j(t){return typeof t!="string"&&w("参数类型错误，必须为字符串"),t.charAt(0)}function W(t){return typeof t!="string"&&w("参数类型错误，必须为字符串"),t.substring(t.length-1,t.length)}function Z(t,e,r){return typeof t!="string"&&w("参数类型错误，必须为字符串"),t.substring(e,r)||""}function q(t=""){return t||(t=window.location.href),(t.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce((e,r)=>(e[r.slice(0,r.indexOf("="))]=r.slice(r.indexOf("=")+1),e),{})}function H(t,e="url"){if(e==="url")return Object.keys(t).map(r=>`${r}=${t[r]}`).join("&");if(e==="json")return JSON.stringify(t);if(e==="formData"){const r=new FormData;for(const n in t)r.append(n,t[n]);return r}}function Y(t){const e=JSON.stringify(t);return j(e)==="\\"?e.replace(/\\/g,""):e}function K(t,e=""){if(t||w("该变量没有值"),Array.isArray(t))return[...t];const r=typeof t=="string"?t:Y(t),n=j(r);try{return n==="{"||n==="["?JSON.parse(r):r.includes(",")?r.split(","):r.includes(" ")?r.split(" "):r.split(e)}catch{return r}}function m(t,e){return(typeof t!="number"||typeof e!="number")&&w("参数类型错误，必须为数字"),Math.floor(Math.random()*(e-t+1)+t)}function V(t,e,r){const n=[];for(let o=0;o<t;o++)n.push(m(e,r));return n}function X(t=32,e=""){const r=e||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-";let n="";for(let o=0;o<t;o++)n+=r.charAt(Math.floor(Math.random()*r.length));return n}function Q(t){if(!Array.isArray(t))return t;let e=t.slice();for(let r=e.length-1;r>0;r--){const n=Math.floor(Math.random()*(r+1));[e[r],e[n]]=[e[n],e[r]]}return e}function tt(){return`#${Math.floor(Math.random()*16777215).toString(16)}`}function et(){return`rgb(${m(0,255)},${m(0,255)},${m(0,255)})`}function rt(){return`rgba(${m(0,255)},${m(0,255)},${m(0,255)},${m(0,100)/100})`}function nt(t,e=",",r=""){let n=t.toString(),o=n.indexOf(".");for(o===-1&&(o=n.length);o>3;)o-=3,n=n.slice(0,o)+e+n.slice(o);return r?r+n:n}function _(t,e,r={}){const n={returnKeys:!1,arrayDiff:!1},{returnKeys:o=!1,arrayDiff:u=!1}=Object.assign(n,r),i=[];function c(s){return s&&typeof s=="object"&&!Array.isArray(s)}const g=(s,l,d)=>{if(c(s)&&c(l)){const f=_(s,l,r);Array.isArray(f)&&f.forEach(p=>i.push(`${d}.${p}`))}else Array.isArray(s)&&Array.isArray(l)?(u?s.some((f,p)=>f!==l[p])||s.length!==l.length:s.length!==l.length||!s.every(f=>l.includes(f)))&&i.push(d):s!==l&&i.push(d)};for(let s in t)if(t.hasOwnProperty(s)){const l=t[s],d=e[s];g(l,d,s)}return o?i:i.length>0}function k(t,e=!1,r=""){const n=[];function o(u){return u===""||u===null||u===void 0||typeof u=="object"&&u!==null&&(Array.isArray(u)?u.length===0:Object.keys(u).length===0)}for(let u in t)if(t.hasOwnProperty(u)){const i=r?`${r}.${u}`:u,c=t[u];if(typeof c=="object"&&c!==null&&!o(c)){const g=k(c,!0,i);Array.isArray(g)&&n.push(...g)}else o(c)&&n.push(i)}return e?n:n.length>0}function O(t){if(t==null||typeof t!="object")return t;if(t instanceof Date)return new Date(t.getTime());if(Array.isArray(t)){const e=[];return t.forEach((r,n)=>{e[n]=O(r)}),e}if(t instanceof Object){const e={};return Object.keys(t).forEach(r=>{e[r]=O(t[r])}),e}w("Unsupported data type")}function at(t,e){let r=[],n={};return t.forEach(o=>{n[o.id]={...o,children:[]}}),t.forEach(o=>{o.pid===e?r.push(n[o.id]):n[o.pid]&&n[o.pid].children.push(n[o.id])}),r}function ot(t,e){return t.reduce((r,n)=>((r[n[e]]=r[n[e]]||[]).push(n),r),{})}function ut(t,e,r=1){return r===1?[...new Set([...t,...e])]:r===2?t.filter(n=>e.includes(n)):r===3?t.filter(n=>!e.includes(n)):r===4?[...t.filter(n=>!e.includes(n)),...e.filter(n=>!t.includes(n))]:[]}function it(t){return[...new Set(t)]}function st(t,e,r){const n=o=>{for(const u in o){if(u===e&&o[u]===r)return{key:u,value:o[u]};if(Array.isArray(o[u])||typeof o[u]=="object"){const i=n(o[u]);if(i)return i}}return null};return n(t)}function ct(t){return t.filter(e=>e)}function b(t){let e=t;typeof t=="string"&&v(t,"-")&&(e=D(t,"-","/"));const r=e?new Date(e):new Date,n=r.getFullYear(),o=(r.getMonth()+1).toString().padStart(2,"0"),u=r.getDate().toString().padStart(2,"0"),i=r.getHours().toString().padStart(2,"0"),c=r.getMinutes().toString().padStart(2,"0"),g=r.getSeconds().toString().padStart(2,"0");return{year:n,month:o,day:u,hour:i,minute:c,second:g}}function M(t,e="Y/M/D h:m:s"){if(typeof t=="object")var{year:r,month:n,day:o,hour:u,minute:i,second:c}=t;else var{year:r,month:n,day:o,hour:u,minute:i,second:c}=b(t);return e.replace("Y",r).replace("M",n).replace("D",o).replace("h",u).replace("m",i).replace("s",c)}function C(t="",e="Y/M/D h:m:s"){return arguments.length===0?M(b(new Date),"Y/M/D h:m:s"):arguments.length===1?M(b(new Date),t):M(b(t),e)}function lt(t=new Date){const e=new Date(t),r=e.getDay(),n=new Date(e);return n.setDate(e.getDate()-r+1),Array.from({length:7},(o,u)=>{const i=new Date(n);return i.setDate(n.getDate()+u),i.toLocaleDateString()})}function ft(t=new Date().getFullYear(),e=new Date().getMonth()+1){return new Date(t,e,0).getDate()}function gt(t=new Date){return["日","一","二","三","四","五","六"][new Date(t).getDay()]}function pt(){let t=new Date(new Date().setDate(1)||new Date().setDate(1)),e;t.getDay()===0?e=6:e=t.getDay()-1,t.setMonth(t.getMonth()+1),t.setDate(0);let r=t.getDate()+e;return Math.ceil(r/7)}function dt(t=new Date().getFullYear()){let e=new Date(t,0,1).getDay();if(e==1?e=0:e==0?e=1:e=8-e,t%4==0&&t%100!=0||t%100==0&&t%400==0)var r=366;else var r=365;return Math.ceil((r-e)/7)+(e!==0?1:0)}function T(t,e,r=!1){const n=new Date(t).getTime(),o=new Date(e).getTime();if(r)return Math.abs(n-o)/864e5;const u=[];for(let i=0;i<=Math.abs(n-o)/864e5;i++){const c=n>o?n-i*864e5:n+i*864e5;u.push(C(new Date(c),"Y-M-D"))}return u}function ht(t=new Date,e=1,r=!0,n=0){if(!t)return[];const o="Y-M-D",u=24*60*60*1e3;let i=new Date(t).getTime();r||(i-=u);function c(f){const p=f.getMonth();return{year:p===0?f.getFullYear()-1:f.getFullYear(),month:p===0?12:p}}const g=f=>Array.from({length:f},(p,x)=>{const F=i-(f-x-1)*u;return M(new Date(F),o)}),{year:s,month:l,day:d}=b(t);if(e&&!n)switch(e){case 1:return g(3);case 2:return g(7);case 3:{const{year:f,month:p}=c(new Date(i));return T(`${f}-${p}-${d}`,i)}case 4:return T(`${s-1}/${l}/${d}`,`${s}/${l}/${d}`)}else if(n)return g(n);return[]}function yt(t,e,r="01:00",n="hh:mm"){const[o,u,i=0]=t.split(":").map(Number),[c,g,s=0]=e.split(":").map(Number),[l,d,f=0]=r.split(":").map(Number),p=o*3600+u*60+i,x=c*3600+g*60+s,F=l*3600+d*60+f,z=[];for(let S=p;S<=x;S+=F){const R=String(Math.floor(S/3600)).padStart(2,"0"),P=String(Math.floor(S%3600/60)).padStart(2,"0"),wt=String(S%60).padStart(2,"0");if(n==="hh:mm:ss")z.push(`${R}:${P}:${wt}`);else if(n==="hh:mm")z.push(`${R}:${P}`);else throw new Error(`Unsupported type: ${n}`)}return z}function mt(t=new Date,e=!0){return e?new Date(t).getTime():Math.floor(new Date(t).getTime()/1e3)}function Dt(t,e,r=2){return(t/e*100).toFixed(r)}a.arrayTrim=ct,a.dataEmpty=k,a.dataEqual=_,a.dataFind=st,a.dataMerge=ut,a.debounce=I,a.deepClone=O,a.error=w,a.getBetweenDate=T,a.getChar=Z,a.getDate=C,a.getDateInfo=b,a.getDateType=M,a.getFirstChar=j,a.getLastChar=W,a.getMonthDays=ft,a.getPercentage=Dt,a.getRandom=m,a.getRandomArray=V,a.getRandomColor=tt,a.getRandomRGBA=rt,a.getRandomRGBColor=et,a.getRandomString=X,a.getRecentDate=ht,a.getTimeStamp=mt,a.getTimeStep=yt,a.getType=U,a.getUrlParam=q,a.getVersion=A,a.getWeekDay=gt,a.getWeekTime=lt,a.getYearWeeks=dt,a.groupBy=ot,a.moneyFormat=nt,a.paramformat=H,a.regEmail=G,a.regIdcard=L,a.regIsHas=v,a.regPhone=J,a.replaceAll=D,a.shuffleArray=Q,a.throttle=B,a.toArray=K,a.toString=Y,a.toTree=at,a.uniqueArray=it,a.weekInMonthCount=pt,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})})})(E,E.exports);var N=E.exports;const St=Mt(N),$t=bt({__proto__:null,default:St},[N]);export{$t as a,N as z};
//# sourceMappingURL=@zzcpt-BQ21hk-X.js.map
