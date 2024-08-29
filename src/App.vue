<script setup lang="ts">
import { inject } from 'vue'
import ZZTOOL from '../lib/index'

const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
const is = zztool.getTimeStep("20:00","24:00","00:15");
console.log(is)
</script>

<template>
  <div class="container">
  </div>
</template>
<style scoped>

</style>