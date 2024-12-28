<script lang="ts" setup>
import {ref} from "vue"
import {useI18n} from "vue-i18n";
import MenuData from "../data/menu";
const emit = defineEmits(["change"])

const { t:$t,locale } = useI18n();
const current = ref('getVersion')
const changeFn = (item:any) => {
    emit("change",item)
    current.value = item.title
}
const localeLange = localStorage.getItem('locale') || 'zh'
const localeChange = (e: any) => {
  localStorage.setItem('locale', e.target.value)
  locale.value = e.target.value
}
</script>

<template>
    <div class="menu">
        <div class="menu-item">
            <h4 style="margin-top: 10px;">{{ $t('current') }}{{ $t('language') }}</h4>
            <select @change="localeChange">
                <option value="zh" :selected="localeLange === 'zh'">{{ $t('zh') }}</option>
                <option value="en" :selected="localeLange === 'en'">{{ $t('en') }}</option>
            </select>
        </div>
        <div class="menu-item">
            <div class="title">{{ $t('illustrate') }}</div>
            <div class="item">{{ $t('illustrateComponent.li1') }}</div>
            <div class="item">{{ $t('illustrateComponent.li2') }}</div>
            <div class="item">{{ $t('illustrateComponent.li3') }}</div>
        </div>
        <div class="menu-item" v-for="(item,index) in MenuData" :key="index">
            <div class="title">{{ $t(item.name) }}</div>
            <div class="item" v-for="(items,indexs) in item.list" :key="indexs" @click="changeFn(items)" :class="[current === items.title?'active':'']">{{ $t(items.name) }}</div>
        </div>
    </div>
</template>

<style scoped>
.menu {
    width: 210px;
    min-width: 210px;
    max-width: 210px;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    box-shadow: 0 0 10px 1px #000000;
    box-sizing: border-box;
}
.menu-item {
    padding: 10px;
    cursor: pointer;
}
.menu-item .title{
    font-size: 16px;
    font-weight: bolder;
}
.menu-item .item{
    font-size: 14px;
    padding-left: 20px;
}
.active{
    background-color: #000;
    transition: all 0.3s;
    transform: scale(1.1);
    transform-origin: center;
    color: rgb(255, 255, 255);
}
</style>