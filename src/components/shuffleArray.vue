<script lang="ts" setup>
const strCode = `
const arr = zztool.getRandomArray(10,0,10);
console.log(zztool.shuffleArray(arr));
console.log(zztool.shuffleArray(arr));
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>