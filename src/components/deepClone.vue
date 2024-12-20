<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const obj1 = {a:2,b:1,c:{d:1}};
const obj2 = zztool.deepClone(obj1);
console.log(obj1==obj2)
</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import * as zztool from '@zzcpt/zztool';
  
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = zztool.deepClone(obj1);
  console.log(obj1==obj2) // false
</script>
</textarea>
</template>