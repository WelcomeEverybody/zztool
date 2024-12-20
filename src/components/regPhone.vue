<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const phone1 = '15666666666';
const phone2 = '11111111111';
const arr = Array.from([phone1, phone2]);
for(let i = 0; i < arr.length; i++){
  const item = arr[i];
  console.log(zztool.regPhone(item));
}
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  -- 验证手机号,仅支持中国大陆手机号
  import * as zztool from '@zzcpt/zztool';
  
  const phone1 = '15666666666';
  const phone2 = '11111111111';
  const arr = Array.from([phone1, phone2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    console.log(zztool.regPhone(item)); // true false
  }
</script>
</textarea>
</template>