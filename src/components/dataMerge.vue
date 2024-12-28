<script lang="ts" setup>
const strCode = `
const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7,8];
const data1 = zztool.dataMerge(arr1,arr2,1);
const data2 = zztool.dataMerge(arr1,arr2,2);
const data3 = zztool.dataMerge(arr1,arr2,3);
const data4 = zztool.dataMerge(arr1,arr2,4);
console.log(data1)
console.log(data2)
console.log(data3)
console.log(data4)
`
</script>
<template>
  <InputText :contents="strCode" />
</template>