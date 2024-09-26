import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import ZZTOOL from '@zzcpt/zztool';

const widnows = window as any;
widnows['zz'] = new ZZTOOL();
widnows['zz'] = new ZZTOOL();
createApp(App).provide("$ZZTOOL",new ZZTOOL()).mount('#app')
