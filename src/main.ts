import { createApp } from 'vue';
import i18n from './i18n';
import './style.css';
import App from './App.vue';


import * as zztool from '@zzcpt/zztool';
const widnows = window as any;
widnows['zz'] = zztool;
widnows['zztool'] = zztool;
const app = createApp(App)
app.use(i18n)
app.mount('#app')
