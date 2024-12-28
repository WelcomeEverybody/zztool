<script lang="ts" setup>
const strCode = `
  const phone1 = '15666666666';
  const phone2 = '11111111111';
  const arr = Array.from([phone1, phone2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    console.log(zztool.regPhone(item));
  }
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>