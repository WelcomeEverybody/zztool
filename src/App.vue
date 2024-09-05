<script setup lang="ts">
import { inject } from 'vue'
import ZZTOOL from '../lib/index'

const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
const is = zztool.getDateList('2024-3-1',3);
console.log(is)
</script>

<template>
  <div class="container">
  </div>
</template>
<style scoped>

</style>