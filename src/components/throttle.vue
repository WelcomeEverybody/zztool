<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';
const clickFn = () => {
    zztool.throttle(() => {
        console.log('节流');
    }, 1000);
}
</script>
<template>
    <button @click="clickFn">点击</button>
    <textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  const clickFn = () => {
    zztool.throttle(() => {
        console.log('节流');
    }, 1000);
 }
</script>
</textarea>
</template>