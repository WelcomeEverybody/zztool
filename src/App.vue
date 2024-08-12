<script setup lang="ts">
import { inject } from 'vue'
const zztool: any = inject('$ZZTOOL');
console.log(zztool.getDate(new Date(),'Y-M-D'))
console.log(
  zztool.dataFindValues(
    '1,2,5',
    [
      {id:1,name:'张三'},
      {id:2,name:'李四'},
      {id:3,name:'王五',list:[{id:5,name:'一二三'}]}
    ],
    'id','list'
  )
)
</script>

<template>
  <div>
  </div>
</template>
