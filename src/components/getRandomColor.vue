<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

const color = zztool.getRandomColor();
const rgbColor = zztool.getRandomRGBColor();
const rgbaColor = zztool.getRandomRGBA();
console.log(color,rgbColor,rgbaColor)
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  
  const color = zztool.getRandomColor();
  const rgbColor = zztool.getRandomRGBColor();
  const rgbaColor = zztool.getRandomRGBA();
  console.log(color,rgbColor,rgbaColor)
</script>
</textarea>
</template>