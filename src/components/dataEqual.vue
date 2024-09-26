<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

const obj1 = {a:2,b:1,c:{d:1}};
const obj2 = {a:2,b:2,c:{d:2}};
const data = zztool.dataEqual(obj1,obj2);
console.log(data)
</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = {a:2,b:2,c:{d:2}};
  const data = zztool.dataEqual(obj1,obj2);
  console.log(data)
</script>
</textarea>
</template>