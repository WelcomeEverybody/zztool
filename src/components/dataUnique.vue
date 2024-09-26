<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

const arr1 = [1,2,3,4,5,5,6];
const data = zztool.dataUnique(arr1);
console.log(data)

</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  
  const arr1 = [1,2,3,4,5,5,6];
  const data = zztool.dataUnique(arr1);
  console.log(data)

</script>
</textarea>
</template>