<script setup lang="ts">
import { ref, inject, onMounted, watch, compile } from 'vue'
import ZZTOOL from '../lib/index'


const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
const is = zztool.getDateList(new Date(), 4,false,10);

console.log(is)

</script>

<template>
  <div class="container">
  </div>
</template>
<style scoped>

</style>