<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

const idcard1 = '111111111111111111';
const idcard2 = '46516546549874654x';
const arr = Array.from([idcard1, idcard2]);
for(let i = 0; i < arr.length; i++){
  const item = arr[i];
  const result = zztool.regIdcard(item);
  console.log(result);
}
</script>
<template>
<textarea class="w-full h-50" name="" id="">
--- 本方法验证的是真实有效的身份证号码 ---
------------------------------------------
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  
  const idcard1 = '111111111111111111';
  const idcard2 = '46516546549874654x';
  const arr = Array.from([idcard1, idcard2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    const result = zztool.regIdcard(item);
    console.log(result); // false false
  }
</script>
</textarea>
</template>