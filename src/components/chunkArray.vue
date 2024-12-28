<script lang="ts" setup>
const strCode = `
  const arr = zztool.getRandomArray(10, 1, 100);
  const data = zztool.chunkArray(arr, 2);
  console.log(data)

  const arr2 = zztool.getRandomArray(10, 1, 100);
  const data2 = zztool.chunkArrayItem(arr2, 4);
  console.log(data2)
`
</script>
<template>
  <InputText :contents="strCode" />
</template>