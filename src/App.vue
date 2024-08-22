<script setup lang="ts">
import { inject } from 'vue'
import ZZTOOL from '../lib/index'
const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL; 
const is = zztool.regIdcard("41088120001005855")
console.log(is);

</script>

<template>
  <div>
  </div>
</template>