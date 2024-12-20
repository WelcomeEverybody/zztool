<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const obj1 = {a:2,b:1,c:{d:1}};
const obj2 = {a:2,b:1,c:{d:1,e:[]}};
const data1 = zztool.dataEmpty(obj1);
const data2 = zztool.dataEmpty(obj2);
console.log(data1,data2)
</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import * as zztool from '@zzcpt/zztool';
  
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = {a:2,b:1,c:{d:1,e:[]}};
  const data1 = zztool.dataEmpty(obj1);
  const data2 = zztool.dataEmpty(obj2);
  console.log(data1,data2) // false true
</script>
</textarea>
</template>