import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import * as zztool from "../lib/index";
// 挂在全局
const widnows = window;
widnows.zztool = zztool;
widnows.zz = zztool;
const app = createApp(App);
app.mount('#app');
