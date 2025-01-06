<script setup lang="ts">
import { shallowRef, onMounted, ref } from "vue";
import MoveBtn from "./components/moveBtn.vue";
import Menu from "./components/menu.vue";
import { useI18n } from "vue-i18n";
import * as comp from "./components/index"
const current = shallowRef(comp.getVersion);
const map: any = {
  "getVersion": comp.getVersion,
  "error": comp.error,
  "debounce": comp.debounce,
  "throttle": comp.throttle,
  "getType": comp.getType,
  "regIsHas": comp.regIsHas,
  "regEmail": comp.regEmail,
  "regPhone": comp.regPhone,
  "regIdcard": comp.regIdcard,
  "getUrlParam": comp.getUrlParam,
  "paramformat": comp.paramformat,
  "toString":comp.toString,
  "toArray": comp.toArray,
  "getRandom": comp.getRandom,
  "getRandomArray": comp.getRandomArray,
  "getRandomColor": comp.getRandomColor,
  "moneyFormat": comp.moneyFormat,
  "dataEqual": comp.dataEqual,
  "dataEmpty": comp.dataEmpty,
  "deepClone": comp.deepClone,
  "toTree": comp.toTree,
  "groupBy": comp.groupBy,
  "dataMerge": comp.dataMerge,
  "dataUnique": comp.dataUnique,
  "dataUnEmpty": comp.dataUnEmpty,
  "getDateInfo": comp.getDateInfo,
  "getDateType": comp.getDateType,
  "getDate": comp.getDate,
  "getMonthDays": comp.getMonthDays,
  "getBetwenDate": comp.getBetwenDate,
  "getDateList": comp.getDateList,
  "getTimeStep": comp.getTimeStep,
  "shuffleArray": comp.shuffleArray,
  "getPercentage":comp.getPercentage,
  "dataChangeIndex":comp.dataChangeIndex,
  "chunkArray": comp.chunkArray,
  "getSameIndexValue": comp.getSameIndexValue
}
const menuChangeFn = (item: any) => {
  console.log(`%c${item.title}`, "background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px")
  current.value = map[item.com];
}

const { t:$t } = useI18n();
const dialog = ref();
const closeBtn = ref();
onMounted(() => {
  dialog.value = document.getElementById('dialog') as any
  closeBtn.value = document.querySelector('.closeBtn') as any
  dialog.value.showModal();
  closeBtn.value.addEventListener('click', function () {
    dialog.value.close()
  })
})

const switchs = ref(false)
const bgcolor = ref()
setInterval(() => {
  if(!switchs.value) return
    bgcolor.value = zztool.getRandomRGBA()
}, 100)
</script>

<template>
  <MoveBtn />
  <div style="display: flex;">

    <Menu :switchs="switchs" :bgColor="bgcolor" @change="menuChangeFn" />
    <div style="width: 100%;padding: 10px;transition:all 0.2s;" :style="{backgroundColor: bgcolor}">
      <component :is="current" />
    </div>
    <dialog id="dialog">
      <div class="win">
        <div class="container">

          <h4>{{$t('install')}}/{{$t('use')}}</h4>
          <code>
            <pre>
--- install
npm install @zzcpt/zztool@latest
--- file
import * as zztool from '@zzcpt/zztool';
import { xxx } from '@zzcpt/zztool';
            </pre>
          </code>
          <h4>{{$t('illustrate')}}</h4>
          <ul style="list-style: inside;">
            <li>{{$t('dialog.illustrate1')}}</li>
            <li>{{$t('dialog.illustrate2')}}</li>
          </ul>

        </div>
        <button class="closeBtn">{{ $t('close') }}</button>
        <button @click="switchs = !switchs">{{$t('mod')}}</button>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
#dialog {
  box-sizing: border-box;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0;
  width: 500px;
  height: 500px;
  border: 1px solid #000;
}

#dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
}

.closeBtn {
  --bblue: #409EFF;
  margin: 50px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  font-size: 20px;
  background-color: var(--bblue);
  border-radius: 20px;
  transition: all .3s;
  border: 1px solid #3e8cda;
  user-select: none;
}
</style>
