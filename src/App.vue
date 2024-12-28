<script setup lang="ts">
import * as tool from "../lib/index.js";

// const obj = {
//   name: "z",
//   age: 18,
//   sex: 1,
//   address: "中国",
//   hobby: ["打游戏", "看电影"],
//   info: {
//     name: "zhangsan",
//     age: 18,
//     sex: 1,
//     address: "中国",
//     hobby: ["打游戏", "看电影"],
//     info: null,
//   },
//   arr: [
//     {
//       name: "zhangsan",
//     },
//     {
//       name: "lisi",
//     },
//     1,2,3
//   ]
// }
const data = tool.getChar('111111111111111111',0,2);
console.log(data);

</script>

<template>
  <div>
  </div>
</template>