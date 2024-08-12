<script setup lang="ts">
import { inject } from 'vue'
const zztool: any = inject('$ZZTOOL');
console.log(zztool.getDate(new Date(),'Y-M-D'))

</script>

<template>
  <div>
  </div>
</template>
