<script setup lang="ts">
import { shallowRef, onMounted, ref } from "vue";
import MoveBtn from "./components/moveBtn.vue";
import Menu from "./components/menu.vue";
import {
  shuffleArray,
  getVersion,
  error,
  debounce,
  throttle,
  getType,
  regIsHas,
  regEmail,
  regPhone,
  regIdcard,
  getUrlParam,
  paramformat,
  toString,
  toArray,
  getRandom,
  getRandomArray,
  getRandomColor,
  moneyFormat,
  dataEqual,
  dataEmpty,
  deepClone,
  toTree,
  groupBy,
  dataMerge,
  dataUnique,
  dataUnEmpty,
  dataFindValues,
  getDateInfo,
  getDateType,
  getDate,
  getMonthDays,
  getBetwenDate,
  getDateList,
  getTimeStep,
} from "./components/index"
const current = shallowRef(getVersion);
const map: any = {
  "getVersion": getVersion,
  "error": error,
  "debounce": debounce,
  "throttle": throttle,
  "getType": getType,
  "regIsHas": regIsHas,
  "regEmail": regEmail,
  "regPhone": regPhone,
  "regIdcard": regIdcard,
  "getUrlParam": getUrlParam,
  "paramformat": paramformat,
  "toString": toString,
  "toArray": toArray,
  "getRandom": getRandom,
  "getRandomArray": getRandomArray,
  "getRandomColor": getRandomColor,
  "moneyFormat": moneyFormat,
  "dataEqual": dataEqual,
  "dataEmpty": dataEmpty,
  "deepClone": deepClone,
  "toTree": toTree,
  "groupBy": groupBy,
  "dataMerge": dataMerge,
  "dataUnique": dataUnique,
  "dataUnEmpty": dataUnEmpty,
  "dataFindValues": dataFindValues,
  "getDateInfo": getDateInfo,
  "getDateType": getDateType,
  "getDate": getDate,
  "getMonthDays": getMonthDays,
  "getBetwenDate": getBetwenDate,
  "getDateList": getDateList,
  "getTimeStep": getTimeStep,
  "shuffleArray": shuffleArray
}
const menuChangeFn = (item: any) => {
  console.log(`%c${item.title}`, "background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px")
  current.value = map[item.com];
}

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
</script>

<template>
  <MoveBtn />
  <div style="display: flex;">

    <Menu @change="menuChangeFn" />
    <div style="width: 100%;padding: 10px;">
      <component :is="current" />
    </div>
    <dialog id="dialog">
      <div class="win">
        <div class="container">

          <h4>安装/使用</h4>
          <code>
            <pre>
===== Vue
--- install
npm install @zzcpt/zztool@latest
--- main.ts
import ZZTOOL from '@zzcpt/zztool';
createApp(App).provide("$ZZTOOL",new ZZTOOL()).mount('#app')
---xxx.vue
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

===== Nuxt
npm install @zzcpt/zztool@latest
--- composables/zztool.ts
import ZZTOOL from "@zzcpt/zztool";
export const tool:ZZTOOL = (() => {
    return new ZZTOOL();
})()
            </pre>
          </code>
          <h4>说明</h4>
          <ul style="list-style: inside;">
            <li>文档示例输出均在控制台</li>
            <li>可在控制台中使用 zz.getVersion() 等命令使用该工具库</li>
          </ul>
        </div>
        <button class="closeBtn">关 闭</button>
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
