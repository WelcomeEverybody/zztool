<script setup lang="ts">
import { inject } from 'vue'
import ZZTOOL from '../lib/index'

const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
console.log(zztool.getTimeStep("00:00:00","24:00:00",'00:15','hh:mm:ss'))
</script>

<template>
  <div></div>
</template>