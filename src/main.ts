import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import * as zztool from '@zzcpt/zztool';

const widnows = window as any;
widnows['zz'] = zztool;
createApp(App).provide("$ZZTOOL",zztool).mount('#app')
