<script lang="ts" setup>
const strCode = `
  const color = zztool.getRandomColor();
  const rgbColor = zztool.getRandomRGBColor();
  const rgbaColor = zztool.getRandomRGBA();
  console.log(color)
  console.log(rgbColor)
  console.log(rgbaColor)
`
</script>
<template>
  <InputText :contents="strCode" />
</template>