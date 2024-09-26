<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

console.log(zztool.getBetwenDate('2024-06-01', '2024-06-15'))
</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  
  console.log(zztool.getBetwenDate('2024-06-01', '2024-06-15'))
</script>
</textarea>
</template>