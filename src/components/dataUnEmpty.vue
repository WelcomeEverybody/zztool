<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const arr1 = [1,2,3,4,5,5,'','',6];
console.log(arr1)
const data = zztool.arrayTrim(arr1);
console.log(data)

</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import * as zztool from '@zzcpt/zztool';
  
  const arr1 = [1,2,3,4,5,5,'','',6];
  console.log(arr1)
  const data = zztool.dataUnEmpty(arr1);
  console.log(data)

</script>
</textarea>
</template>