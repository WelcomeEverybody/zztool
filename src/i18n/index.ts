import { createI18n } from "vue-i18n";

import en from "./lang/en";
import zh from "./lang/zh";

const messages = {
    en,
    zh
};

const emnu:any = {
    'en':'en',
    'zh':'zh',
    'zh-CN':'zh',
}

var systemLanguage = navigator.language;
if(!emnu[systemLanguage]){
    systemLanguage = 'zh';
}

if(localStorage.getItem('locale') === null){
    localStorage.setItem('locale',emnu[systemLanguage]);
}

const locale = localStorage.getItem('locale') || "zh";
const i18n = createI18n({
    legacy: false,
    locale,
    messages
});
export default i18n;