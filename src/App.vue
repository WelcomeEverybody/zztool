<script setup lang="ts">
import { inject } from 'vue'
const zztool: any = inject('$ZZTOOL');
console.log(zztool.getDateType(new Date()));

</script>

<template>
  <div>
  </div>
</template>