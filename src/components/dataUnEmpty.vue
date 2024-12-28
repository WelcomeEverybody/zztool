<script lang="ts" setup>
const strCode = `
const arr1 = [1,2,3,4,5,5,'','',6];
console.log(arr1)
const data = zztool.arrayTrim(arr1);
console.log(data)
`;
</script>
<template>
  <InputText :contents="strCode" />

</template>