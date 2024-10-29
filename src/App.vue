<script setup lang="ts">
import { inject } from 'vue'
import ZZTOOL from '../lib/index'

const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
console.log(zztool.getVersion())
</script>

<template>
  <div></div>
</template>