<script setup lang="ts">
import { inject } from 'vue'
import ZZTOOL from '../lib/index'

const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
console.log(zztool.getTimeStep("00:00:00","23:00:00"))
</script>

<template>
  <div></div>
</template>