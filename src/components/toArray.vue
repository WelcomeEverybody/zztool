<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const obj = { a: 1, b: 2 };
const arr = [1, 2, 3];
const string1 = '1,2,3,4,5';
const string2 = '1-2-3-4-5';
const string3 = '12345';
const str1 = zztool.toArray(obj);
const str2 = zztool.toArray(arr);
const str3 = zztool.toArray(string1);
const str4 = zztool.toArray(string2,'-');
const str5 = zztool.toArray(string3);
console.log(str1,str2,str3,str4,str5);
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  import * as zztool from '@zzcpt/zztool';

  const obj = { a: 1, b: 2 };
  const arr = [1, 2, 3];
  const string1 = '1,2,3,4,5';
  const string2 = '1-2-3-4-5';
  const string3 = '12345';
  const str1 = zztool.toArray(obj);
  const str2 = zztool.toArray(arr);
  const str3 = zztool.toArray(string1);
  const str4 = zztool.toArray(string2,'-');
  const str5 = zztool.toArray(string3);
  console.log(str1,str2,str3,str4,str5);
</script>
</textarea>
</template>