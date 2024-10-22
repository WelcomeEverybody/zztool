<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

const arr = zztool.getRandomArray(10,0,10);
console.log(zztool.shuffleArray(arr));
console.log(zztool.shuffleArray(arr));
</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  
  const arr = zztool.getRandomArray(10,0,10);
  console.log(zztool.shuffleArray(arr));
  console.log(zztool.shuffleArray(arr));
</script>
</textarea>
</template>