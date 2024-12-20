<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const url = "http://www.baidu.com?a=1&b=2";
const param = zztool.getUrlParam(url);
console.log(param) // {a: '1', b: '2'}
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  import * as zztool from '@zzcpt/zztool';

  const url = "http://www.baidu.com?a=1&b=2";
  const param = zztool.getUrlParam(url); // 无参数则会获取url
  console.log(param) // {a: '1', b: '2'}
</script>
</textarea>
</template>