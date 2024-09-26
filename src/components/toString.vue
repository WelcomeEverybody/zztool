<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

const obj = { a: 1, b: 2 };
const arr = [1, 2, 3];
const str1 = zztool.toString(obj);
const str2 = zztool.toString(arr);
console.log(str1,str2);
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

  const obj = { a: 1, b: 2 };
  const arr = [1, 2, 3];
  const str1 = zztool.toString(obj);
  const str2 = zztool.toString(arr);
  console.log(str1,str2); // {"a":1,"b":2} [1,2,3]
</script>
</textarea>
</template>