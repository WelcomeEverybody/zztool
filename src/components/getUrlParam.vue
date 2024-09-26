<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

const url = "http://www.baidu.com?a=1&b=2";
const param = zztool.getUrlParam(url);
console.log(param) // {a: '1', b: '2'}
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

  const url = "http://www.baidu.com?a=1&b=2";
  const param = zztool.getUrlParam(url);
  console.log(param) // {a: '1', b: '2'}
</script>
</textarea>
</template>