<script lang="ts" setup>
const strCode = `
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = zztool.deepClone(obj1);
  console.log(obj1 == obj2)
  console.log(obj1 === obj2)
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>