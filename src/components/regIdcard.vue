<script lang="ts" setup>
const strCode = `
  const idcard1 = '111111111111111111';
  const idcard2 = '46516546549874654x';
  const arr = Array.from([idcard1, idcard2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    const result = zztool.regIdcard(item);
    console.log(result); // false false
  }
`
</script>
<template>
  <InputText :contents="strCode" />
</template>