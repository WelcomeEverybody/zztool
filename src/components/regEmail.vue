<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const email1 = 'xxxx@163.com';
const email2 = 'xxxx@gmail.com';
const email3 = 'xxxx1234234.com';
const arr = Array.from([email1,email2,email3])
for(let i = 0; i < arr.length; i++){
  const item = arr[i];
  console.log(zztool.regEmail(item));
}
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  import * as zztool from '@zzcpt/zztool';
  
  const email1 = 'xxxx@163.com';
  const email2 = 'xxxx@gmail.com';
  const email3 = 'xxxx1234234.com';
  const arr = Array.from([email1,email2,email3])
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    console.log(zztool.regEmail(item));
  }
</script>
</textarea>
</template>