<script setup lang="ts">
import { inject } from 'vue'
import ZZTOOL from '../lib/index'

const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

console.log(zztool.shuffleArray([1,2,3,4,5,6,7,8,9,10]))
</script>

<template>
  <div></div>
</template>