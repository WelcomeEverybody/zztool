<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

const str = 'how are you?';
const isHas = zztool.regIsHas(str, 'you');
console.log(isHas)
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  
  const str = 'how are you?';
  const isHas = zztool.regIsHas(str, 'you');
  console.log(isHas) // true
</script>
</textarea>
</template>