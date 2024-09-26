<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
const clickFn = () => {
    zztool.debounce(() => {
        console.log('防抖');
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
      zztool.debounce(() => {
          console.log('防抖');
      }, 1000);
  }
</script>
</textarea>
</template>