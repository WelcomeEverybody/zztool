<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

console.log(zztool.getDate())
console.log(zztool.getDate("2023-6-15"))
console.log(zztool.getDate("Y/M/D"))
</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  
  console.log(zztool.getDate())
  console.log(zztool.getDate("2023-6-15"))
  console.log(zztool.getDate("Y/M/D"))
</script>
</textarea>
</template>