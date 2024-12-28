<script lang="ts" setup>
const strCode = `
  const random = zztool.getRandomArray(100,0,100);
  console.log(random)
`
</script>
<template>
  <InputText :contents="strCode" />
</template>