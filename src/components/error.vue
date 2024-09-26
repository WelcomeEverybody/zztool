<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
setTimeout(() => {
    zztool.error('抛出错误');
}, 100);
</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  zztool.error('抛出错误');
</script>
</textarea>
</template>