<script setup lang="ts">
import { inject } from 'vue'
import ZZTOOL from '../lib/index'

const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 6
  },
  f:[1,2],
}
const obj2 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 6
  },
  f:[2,1]
}
console.log(zztool.dataEqual(obj,obj2,{returnKeys:true}))
</script>

<template>
  <div></div>
</template>