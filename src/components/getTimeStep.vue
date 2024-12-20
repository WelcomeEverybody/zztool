<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const arr = zztool.getTimeStep('01:00',"10:00");
const arr1 = zztool.getTimeStep('01:00',"10:00","00:30");
console.log("默认步长：",arr)
console.log("步长半小时：",arr1)
</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import * as zztool from '@zzcpt/zztool';

  const arr = zztool.getTimeStep('01:00',"10:00");
  const arr1 = zztool.getTimeStep('01:00',"10:00","00:30");
  console.log("默认步长：",arr)
  console.log("步长半小时：",arr1)
</script>
</textarea>
</template>