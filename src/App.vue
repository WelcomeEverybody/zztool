<script setup lang="ts">
import { inject } from 'vue'
const zztool: any = inject('$ZZTOOL');
console.log(zztool.getDate(new Date(),'Y-M-D'))
// const arr = '1,2,3,4';
// const obj = {
//   a:12,
//   b:{
//     c:1,
//     d:2
//   }
// }
console.log(zztool.getWeekTime())
</script>

<template>
  <div>
  </div>
</template>