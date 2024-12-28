<script lang="ts" setup>
const strCode = `
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = {a:2,b:1,c:{d:1,e:[]}};
  const data1 = zztool.dataEmpty(obj1);
  const data2 = zztool.dataEmpty(obj2);
  console.log(data1);
  console.log(data2);
`
</script>
<template>
  <InputText :contents="strCode" />
</template>