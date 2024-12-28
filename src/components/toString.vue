<script lang="ts" setup>
const strCode = `
  const obj = { a: 1, b: 2 };
  const arr = [1, 2, 3];
  const str1 = zztool.toString(obj);
  const str2 = zztool.toString(arr);
  console.log(str1);
  console.log(str2);
`
</script>
<template>
      <InputText :contents="strCode" />
</template>