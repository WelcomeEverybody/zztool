<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const params = {a: '1', b: '2'}
const param1 = zztool.paramformat(params,'url');
const param2 = zztool.paramformat(params,'json');
const param3 = zztool.paramformat(params,'formData');
console.log(param1,param2,param3)
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  import * as zztool from '@zzcpt/zztool';

  const params = {a: '1', b: '2'}
  const param1 = zztool.paramformat(params,'url');
  const param2 = zztool.paramformat(params,'json');
  const param3 = zztool.paramformat(params,'formData');
  console.log(param1,param2,param3)
</script>
</textarea>
</template>