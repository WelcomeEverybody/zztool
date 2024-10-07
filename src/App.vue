<script setup lang="ts">
import { inject } from 'vue'
import ZZTOOL from '../lib/index'

const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
console.time()
const is = zztool.getDate()
console.timeEnd()
console.log(is)
</script>

<template>
  <div class="container">
  </div>
</template>
<style scoped>

</style>