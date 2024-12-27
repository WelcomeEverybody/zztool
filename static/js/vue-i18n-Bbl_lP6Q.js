import{a as P,i as G,b as d,c as N,d as y,e as F,s as vt,g as Y,f as Ot,m as M,D as Ue,h as p,j as O,k as Q,l as U,u as H,n as Z,N as ht,o as kt,p as q,q as ee,r as Nt,t as be,v as de,w as yt,C as Pt,x as pt,y as Mt,z as Ct,A as Ee,B as Ie,M as Le,E as Fe,F as Te,G as Re,H as ve,I as St,J as Dt,K as Ve,L as At,O as Wt,P as Ut,Q as Oe,R as Vt,S as xt}from"./@intlify-C8oQjCmz.js";import{d as ce,h as xe,c as j,w as ae,F as $e,e as $t,i as wt,g as B,r as Ht,s as jt,a as Yt,o as Gt,b as Bt,f as Xt,T as Jt}from"./@vue-khtqt46y.js";/*!
  * vue-i18n v11.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const zt="11.0.1";function Kt(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Y().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Y().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Y().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Y().__INTLIFY_PROD_DEVTOOLS__=!1)}const R={UNEXPECTED_RETURN_TYPE:Pt,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:30,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_COMPATIBLE_LEGACY_VUE_I18N:33,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function h(e,...t){return Ot(e,null,void 0)}const ne=M("__translateVNode"),re=M("__datetimeParts"),se=M("__numberParts"),we=M("__setPluralRules"),He=M("__injectWithOption"),le=M("__dispose");function X(e){if(!y(e))return e;for(const t in e)if(ee(e,t))if(!t.includes("."))y(e[t])&&X(e[t]);else{const c=t.split("."),s=c.length-1;let a=e,r=!1;for(let o=0;o<s;o++){if(c[o]in a||(a[c[o]]=N()),!y(a[c[o]])){r=!0;break}a=a[c[o]]}r||(a[c[s]]=e[t],delete e[t]),y(a[c[s]])&&X(a[c[s]])}return e}function ie(e,t){const{messages:c,__i18n:s,messageResolver:a,flatJson:r}=t,o=O(c)?c:p(s)?N():{[e]:N()};if(p(s)&&s.forEach(i=>{if("locale"in i&&"resource"in i){const{locale:u,resource:m}=i;u?(o[u]=o[u]||N(),q(m,o[u])):q(m,o)}else d(i)&&q(JSON.parse(i),o)}),a==null&&r)for(const i in o)ee(o,i)&&X(o[i]);return o}function je(e){return e.type}function Ye(e,t,c){let s=y(t.messages)?t.messages:N();"__i18nGlobal"in c&&(s=ie(e.locale.value,{messages:s,__i18n:c.__i18nGlobal}));const a=Object.keys(s);a.length&&a.forEach(r=>{e.mergeLocaleMessage(r,s[r])});{if(y(t.datetimeFormats)){const r=Object.keys(t.datetimeFormats);r.length&&r.forEach(o=>{e.mergeDateTimeFormat(o,t.datetimeFormats[o])})}if(y(t.numberFormats)){const r=Object.keys(t.numberFormats);r.length&&r.forEach(o=>{e.mergeNumberFormat(o,t.numberFormats[o])})}}}function he(e){return Xt(Jt,null,e,0)}const ke="__INTLIFY_META__",Ne=()=>[],qt=()=>!1;let ye=0;function Pe(e){return(t,c,s,a)=>e(c,s,B()||void 0,a)}const Qt=()=>{const e=B();let t=null;return e&&(t=je(e)[ke])?{[ke]:t}:null};function ue(e={}){const{__root:t,__injectWithOption:c}=e,s=t===void 0,a=e.flatJson,r=Z?Ht:jt;let o=F(e.inheritLocale)?e.inheritLocale:!0;const i=r(t&&o?t.locale.value:d(e.locale)?e.locale:Ue),u=r(t&&o?t.fallbackLocale.value:d(e.fallbackLocale)||p(e.fallbackLocale)||O(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:i.value),m=r(ie(i.value,e)),b=r(O(e.datetimeFormats)?e.datetimeFormats:{[i.value]:{}}),f=r(O(e.numberFormats)?e.numberFormats:{[i.value]:{}});let E=t?t.missingWarn:F(e.missingWarn)||Q(e.missingWarn)?e.missingWarn:!0,T=t?t.fallbackWarn:F(e.fallbackWarn)||Q(e.fallbackWarn)?e.fallbackWarn:!0,k=t?t.fallbackRoot:F(e.fallbackRoot)?e.fallbackRoot:!0,v=!!e.fallbackFormat,J=U(e.missing)?e.missing:null,A=U(e.missing)?Pe(e.missing):null,C=U(e.postTranslation)?e.postTranslation:null,V=t?t.warnHtmlMessage:F(e.warnHtmlMessage)?e.warnHtmlMessage:!0,x=!!e.escapeParameter;const $=t?t.modifiers:O(e.modifiers)?e.modifiers:{};let w=e.pluralRules||t&&t.pluralRules,_;_=(()=>{s&&Oe(null);const n={version:zt,locale:i.value,fallbackLocale:u.value,messages:m.value,modifiers:$,pluralRules:w,missing:A===null?void 0:A,missingWarn:E,fallbackWarn:T,fallbackFormat:v,unresolving:!0,postTranslation:C===null?void 0:C,warnHtmlMessage:V,escapeParameter:x,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};n.datetimeFormats=b.value,n.numberFormats=f.value,n.__datetimeFormatters=O(_)?_.__datetimeFormatters:void 0,n.__numberFormatters=O(_)?_.__numberFormatters:void 0;const l=Nt(n);return s&&Oe(l),l})(),H(_,i.value,u.value);function te(){return[i.value,u.value,m.value,b.value,f.value]}const Xe=j({get:()=>i.value,set:n=>{i.value=n,_.locale=i.value}}),Je=j({get:()=>u.value,set:n=>{u.value=n,_.fallbackLocale=u.value,H(_,i.value,n)}}),ze=j(()=>m.value),Ke=j(()=>b.value),qe=j(()=>f.value);function Qe(){return U(C)?C:null}function Ze(n){C=n,_.postTranslation=n}function et(){return J}function tt(n){n!==null&&(A=Pe(n)),J=n,_.missing=A}const S=(n,l,g,I,D,K)=>{te();let W;try{__INTLIFY_PROD_DEVTOOLS__&&pt(Qt()),s||(_.fallbackContext=t?Mt():void 0),W=n(_)}finally{__INTLIFY_PROD_DEVTOOLS__,s||(_.fallbackContext=void 0)}if(g!=="translate exists"&&G(W)&&W===Ct||g==="translate exists"&&!W){const[Rt,Fa]=l();return t&&k?I(t):D(Rt)}else{if(K(W))return W;throw h(R.UNEXPECTED_RETURN_TYPE)}};function fe(...n){return S(l=>Reflect.apply(Ie,null,[l,...n]),()=>Ee(...n),"translate",l=>Reflect.apply(l.t,l,[...n]),l=>l,l=>d(l))}function at(...n){const[l,g,I]=n;if(I&&!y(I))throw h(R.INVALID_ARGUMENT);return fe(l,g,P({resolvedMessage:!0},I||{}))}function nt(...n){return S(l=>Reflect.apply(Te,null,[l,...n]),()=>Fe(...n),"datetime format",l=>Reflect.apply(l.d,l,[...n]),()=>Le,l=>d(l))}function rt(...n){return S(l=>Reflect.apply(ve,null,[l,...n]),()=>Re(...n),"number format",l=>Reflect.apply(l.n,l,[...n]),()=>Le,l=>d(l))}function st(n){return n.map(l=>d(l)||G(l)||F(l)?he(String(l)):l)}const lt={normalize:st,interpolate:n=>n,type:"vnode"};function ot(...n){return S(l=>{let g;const I=l;try{I.processor=lt,g=Reflect.apply(Ie,null,[I,...n])}finally{I.processor=null}return g},()=>Ee(...n),"translate",l=>l[ne](...n),l=>[he(l)],l=>p(l))}function ct(...n){return S(l=>Reflect.apply(ve,null,[l,...n]),()=>Re(...n),"number format",l=>l[se](...n),Ne,l=>d(l)||p(l))}function it(...n){return S(l=>Reflect.apply(Te,null,[l,...n]),()=>Fe(...n),"datetime format",l=>l[re](...n),Ne,l=>d(l)||p(l))}function ut(n){w=n,_.pluralRules=w}function _t(n,l){return S(()=>{if(!n)return!1;const g=d(l)?l:i.value,I=ge(g),D=_.messageResolver(I,n);return St(D)||Dt(D)||d(D)},()=>[n],"translate exists",g=>Reflect.apply(g.te,g,[n,l]),qt,g=>F(g))}function mt(n){let l=null;const g=Ve(_,u.value,i.value);for(let I=0;I<g.length;I++){const D=m.value[g[I]]||{},K=_.messageResolver(D,n);if(K!=null){l=K;break}}return l}function ft(n){const l=mt(n);return l??(t?t.tm(n)||{}:{})}function ge(n){return m.value[n]||{}}function gt(n,l){if(a){const g={[n]:l};for(const I in g)ee(g,I)&&X(g[I]);l=g[n]}m.value[n]=l,_.messages=m.value}function bt(n,l){m.value[n]=m.value[n]||{};const g={[n]:l};if(a)for(const I in g)ee(g,I)&&X(g[I]);l=g[n],q(l,m.value[n]),_.messages=m.value}function dt(n){return b.value[n]||{}}function Et(n,l){b.value[n]=l,_.datetimeFormats=b.value,be(_,n,l)}function It(n,l){b.value[n]=P(b.value[n]||{},l),_.datetimeFormats=b.value,be(_,n,l)}function Lt(n){return f.value[n]||{}}function Ft(n,l){f.value[n]=l,_.numberFormats=f.value,de(_,n,l)}function Tt(n,l){f.value[n]=P(f.value[n]||{},l),_.numberFormats=f.value,de(_,n,l)}ye++,t&&Z&&(ae(t.locale,n=>{o&&(i.value=n,_.locale=n,H(_,i.value,u.value))}),ae(t.fallbackLocale,n=>{o&&(u.value=n,_.fallbackLocale=n,H(_,i.value,u.value))}));const L={id:ye,locale:Xe,fallbackLocale:Je,get inheritLocale(){return o},set inheritLocale(n){o=n,n&&t&&(i.value=t.locale.value,u.value=t.fallbackLocale.value,H(_,i.value,u.value))},get availableLocales(){return Object.keys(m.value).sort()},messages:ze,get modifiers(){return $},get pluralRules(){return w||{}},get isGlobal(){return s},get missingWarn(){return E},set missingWarn(n){E=n,_.missingWarn=E},get fallbackWarn(){return T},set fallbackWarn(n){T=n,_.fallbackWarn=T},get fallbackRoot(){return k},set fallbackRoot(n){k=n},get fallbackFormat(){return v},set fallbackFormat(n){v=n,_.fallbackFormat=v},get warnHtmlMessage(){return V},set warnHtmlMessage(n){V=n,_.warnHtmlMessage=n},get escapeParameter(){return x},set escapeParameter(n){x=n,_.escapeParameter=n},t:fe,getLocaleMessage:ge,setLocaleMessage:gt,mergeLocaleMessage:bt,getPostTranslationHandler:Qe,setPostTranslationHandler:Ze,getMissingHandler:et,setMissingHandler:tt,[we]:ut};return L.datetimeFormats=Ke,L.numberFormats=qe,L.rt=at,L.te=_t,L.tm=ft,L.d=nt,L.n=rt,L.getDateTimeFormat=dt,L.setDateTimeFormat=Et,L.mergeDateTimeFormat=It,L.getNumberFormat=Lt,L.setNumberFormat=Ft,L.mergeNumberFormat=Tt,L[He]=c,L[ne]=ot,L[re]=it,L[se]=ct,L}function Zt(e){const t=d(e.locale)?e.locale:Ue,c=d(e.fallbackLocale)||p(e.fallbackLocale)||O(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,s=U(e.missing)?e.missing:void 0,a=F(e.silentTranslationWarn)||Q(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,r=F(e.silentFallbackWarn)||Q(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,o=F(e.fallbackRoot)?e.fallbackRoot:!0,i=!!e.formatFallbackMessages,u=O(e.modifiers)?e.modifiers:{},m=e.pluralizationRules,b=U(e.postTranslation)?e.postTranslation:void 0,f=d(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,E=!!e.escapeParameterHtml,T=F(e.sync)?e.sync:!0;let k=e.messages;if(O(e.sharedMessages)){const $=e.sharedMessages;k=Object.keys($).reduce((_,z)=>{const te=_[z]||(_[z]={});return P(te,$[z]),_},k||{})}const{__i18n:v,__root:J,__injectWithOption:A}=e,C=e.datetimeFormats,V=e.numberFormats,x=e.flatJson;return{locale:t,fallbackLocale:c,messages:k,flatJson:x,datetimeFormats:C,numberFormats:V,missing:s,missingWarn:a,fallbackWarn:r,fallbackRoot:o,fallbackFormat:i,modifiers:u,pluralRules:m,postTranslation:b,warnHtmlMessage:f,escapeParameter:E,messageResolver:e.messageResolver,inheritLocale:T,__i18n:v,__root:J,__injectWithOption:A}}function oe(e={}){const t=ue(Zt(e)),{__extender:c}=e,s={id:t.id,get locale(){return t.locale.value},set locale(a){t.locale.value=a},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(a){t.fallbackLocale.value=a},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get missing(){return t.getMissingHandler()},set missing(a){t.setMissingHandler(a)},get silentTranslationWarn(){return F(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(a){t.missingWarn=F(a)?!a:a},get silentFallbackWarn(){return F(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(a){t.fallbackWarn=F(a)?!a:a},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(a){t.fallbackFormat=a},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(a){t.setPostTranslationHandler(a)},get sync(){return t.inheritLocale},set sync(a){t.inheritLocale=a},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(a){t.warnHtmlMessage=a!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(a){t.escapeParameter=a},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...a){return Reflect.apply(t.t,t,[...a])},rt(...a){return Reflect.apply(t.rt,t,[...a])},te(a,r){return t.te(a,r)},tm(a){return t.tm(a)},getLocaleMessage(a){return t.getLocaleMessage(a)},setLocaleMessage(a,r){t.setLocaleMessage(a,r)},mergeLocaleMessage(a,r){t.mergeLocaleMessage(a,r)},d(...a){return Reflect.apply(t.d,t,[...a])},getDateTimeFormat(a){return t.getDateTimeFormat(a)},setDateTimeFormat(a,r){t.setDateTimeFormat(a,r)},mergeDateTimeFormat(a,r){t.mergeDateTimeFormat(a,r)},n(...a){return Reflect.apply(t.n,t,[...a])},getNumberFormat(a){return t.getNumberFormat(a)},setNumberFormat(a,r){t.setNumberFormat(a,r)},mergeNumberFormat(a,r){t.mergeNumberFormat(a,r)}};return s.__extender=c,s}function ea(e,t,c){return{beforeCreate(){const s=B();if(!s)throw h(R.UNEXPECTED_ERROR);const a=this.$options;if(a.i18n){const r=a.i18n;if(a.__i18n&&(r.__i18n=a.__i18n),r.__root=t,this===this.$root)this.$i18n=pe(e,r);else{r.__injectWithOption=!0,r.__extender=c.__vueI18nExtend,this.$i18n=oe(r);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(a.__i18n)if(this===this.$root)this.$i18n=pe(e,a);else{this.$i18n=oe({__i18n:a.__i18n,__injectWithOption:!0,__extender:c.__vueI18nExtend,__root:t});const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}else this.$i18n=e;a.__i18nGlobal&&Ye(t,a,a),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$te=(r,o)=>this.$i18n.te(r,o),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r),c.__setInstance(s,this.$i18n)},mounted(){},unmounted(){const s=B();if(!s)throw h(R.UNEXPECTED_ERROR);const a=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,a.__disposer&&(a.__disposer(),delete a.__disposer,delete a.__extender),c.__deleteInstance(s),delete this.$i18n}}}function pe(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[we](t.pluralizationRules||e.pluralizationRules);const c=ie(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(c).forEach(s=>e.mergeLocaleMessage(s,c[s])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(s=>e.mergeDateTimeFormat(s,t.datetimeFormats[s])),t.numberFormats&&Object.keys(t.numberFormats).forEach(s=>e.mergeNumberFormat(s,t.numberFormats[s])),e}const _e={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function ta({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((s,a)=>[...s,...a.type===$e?a.children:[a]],[]):t.reduce((c,s)=>{const a=e[s];return a&&(c[s]=a()),c},N())}function Ge(){return $e}const aa=ce({name:"i18n-t",props:P({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>G(e)||!isNaN(e)}},_e),setup(e,t){const{slots:c,attrs:s}=t,a=e.i18n||me({useScope:e.scope,__useComponent:!0});return()=>{const r=Object.keys(c).filter(f=>f!=="_"),o=N();e.locale&&(o.locale=e.locale),e.plural!==void 0&&(o.plural=d(e.plural)?+e.plural:e.plural);const i=ta(t,r),u=a[ne](e.keypath,i,o),m=P(N(),s),b=d(e.tag)||y(e.tag)?e.tag:Ge();return xe(b,m,u)}}}),Me=aa;function na(e){return p(e)&&!d(e[0])}function Be(e,t,c,s){const{slots:a,attrs:r}=t;return()=>{const o={part:!0};let i=N();e.locale&&(o.locale=e.locale),d(e.format)?o.key=e.format:y(e.format)&&(d(e.format.key)&&(o.key=e.format.key),i=Object.keys(e.format).reduce((E,T)=>c.includes(T)?P(N(),E,{[T]:e.format[T]}):E,N()));const u=s(e.value,o,i);let m=[o.key];p(u)?m=u.map((E,T)=>{const k=a[E.type],v=k?k({[E.type]:E.value,index:T,parts:u}):[E.value];return na(v)&&(v[0].key=`${E.type}-${T}`),v}):d(u)&&(m=[u]);const b=P(N(),r),f=d(e.tag)||y(e.tag)?e.tag:Ge();return xe(f,b,m)}}const ra=ce({name:"i18n-n",props:P({value:{type:Number,required:!0},format:{type:[String,Object]}},_e),setup(e,t){const c=e.i18n||me({useScope:e.scope,__useComponent:!0});return Be(e,t,ht,(...s)=>c[se](...s))}}),Ce=ra;function sa(e,t){const c=e;if(e.mode==="composition")return c.__getInstance(t)||e.global;{const s=c.__getInstance(t);return s!=null?s.__composer:e.global.__composer}}function la(e){const t=o=>{const{instance:i,value:u}=o;if(!i||!i.$)throw h(R.UNEXPECTED_ERROR);const m=sa(e,i.$),b=Se(u);return[Reflect.apply(m.t,m,[...De(b)]),m]};return{created:(o,i)=>{const[u,m]=t(i);Z&&e.global===m&&(o.__i18nWatcher=ae(m.locale,()=>{i.instance&&i.instance.$forceUpdate()})),o.__composer=m,o.textContent=u},unmounted:o=>{Z&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:i})=>{if(o.__composer){const u=o.__composer,m=Se(i);o.textContent=Reflect.apply(u.t,u,[...De(m)])}},getSSRProps:o=>{const[i]=t(o);return{textContent:i}}}}function Se(e){if(d(e))return{path:e};if(O(e)){if(!("path"in e))throw h(R.REQUIRED_VALUE,"path");return e}else throw h(R.INVALID_VALUE)}function De(e){const{path:t,locale:c,args:s,choice:a,plural:r}=e,o={},i=s||{};return d(c)&&(o.locale=c),G(a)&&(o.plural=a),G(r)&&(o.plural=r),[t,i,o]}function oa(e,t,...c){const s=O(c[0])?c[0]:{};(F(s.globalInstall)?s.globalInstall:!0)&&([Me.name,"I18nT"].forEach(r=>e.component(r,Me)),[Ce.name,"I18nN"].forEach(r=>e.component(r,Ce)),[We.name,"I18nD"].forEach(r=>e.component(r,We))),e.directive("t",la(t))}const ca=M("global-vue-i18n");function va(e={}){const t=__VUE_I18N_LEGACY_API__&&F(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,c=F(e.globalInjection)?e.globalInjection:!0,s=new Map,[a,r]=ia(e,t),o=M("");function i(f){return s.get(f)||null}function u(f,E){s.set(f,E)}function m(f){s.delete(f)}const b={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},async install(f,...E){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,b),O(E[0])){const v=E[0];b.__composerExtend=v.__composerExtend,b.__vueI18nExtend=v.__vueI18nExtend}let T=null;!t&&c&&(T=Ea(f,b.global)),__VUE_I18N_FULL_INSTALL__&&oa(f,b,...E),__VUE_I18N_LEGACY_API__&&t&&f.mixin(ea(r,r.__composer,b));const k=f.unmount;f.unmount=()=>{T&&T(),b.dispose(),k()}},get global(){return r},dispose(){a.stop()},__instances:s,__getInstance:i,__setInstance:u,__deleteInstance:m};return b}function me(e={}){const t=B();if(t==null)throw h(R.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw h(R.NOT_INSTALLED);const c=ua(t),s=ma(c),a=je(t),r=_a(e,a);if(r==="global")return Ye(s,e,a),s;if(r==="parent"){let u=fa(c,t,e.__useComponent);return u==null&&(u=s),u}const o=c;let i=o.__getInstance(t);if(i==null){const u=P({},e);"__i18n"in a&&(u.__i18n=a.__i18n),s&&(u.__root=s),i=ue(u),o.__composerExtend&&(i[le]=o.__composerExtend(i)),ba(o,t,i),o.__setInstance(t,i)}return i}function ia(e,t){const c=$t(),s=__VUE_I18N_LEGACY_API__&&t?c.run(()=>oe(e)):c.run(()=>ue(e));if(s==null)throw h(R.UNEXPECTED_ERROR);return[c,s]}function ua(e){const t=Yt(e.isCE?ca:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw h(e.isCE?R.NOT_INSTALLED_WITH_PROVIDE:R.UNEXPECTED_ERROR);return t}function _a(e,t){return yt(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function ma(e){return e.mode==="composition"?e.global:e.global.__composer}function fa(e,t,c=!1){let s=null;const a=t.root;let r=ga(t,c);for(;r!=null;){const o=e;if(e.mode==="composition")s=o.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const i=o.__getInstance(r);i!=null&&(s=i.__composer,c&&s&&!s[He]&&(s=null))}if(s!=null||a===r)break;r=r.parent}return s}function ga(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function ba(e,t,c){Gt(()=>{},t),Bt(()=>{const s=c;e.__deleteInstance(t);const a=s[le];a&&(a(),delete s[le])},t)}const da=["locale","fallbackLocale","availableLocales"],Ae=["t","rt","d","n","tm","te"];function Ea(e,t){const c=Object.create(null);return da.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r)throw h(R.UNEXPECTED_ERROR);const o=wt(r.value)?{get(){return r.value.value},set(i){r.value.value=i}}:{get(){return r.get&&r.get()}};Object.defineProperty(c,a,o)}),e.config.globalProperties.$i18n=c,Ae.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r||!r.value)throw h(R.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,r)}),()=>{delete e.config.globalProperties.$i18n,Ae.forEach(a=>{delete e.config.globalProperties[`$${a}`]})}}const Ia=ce({name:"i18n-d",props:P({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},_e),setup(e,t){const c=e.i18n||me({useScope:e.scope,__useComponent:!0});return Be(e,t,kt,(...s)=>c[re](...s))}}),We=Ia;Kt();At(Vt);Wt(xt);Ut(Ve);if(__INTLIFY_PROD_DEVTOOLS__){const e=Y();e.__INTLIFY__=!0,vt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}export{va as c,me as u};
//# sourceMappingURL=vue-i18n-Bbl_lP6Q.js.map
