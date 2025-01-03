<script lang="ts" setup>
const strCode = `
  const obj = {a:2,b:1,c:{d:1,e:[],a:'xxx'}};
  const data = zztool.getSameIndexValue(obj,'a');
  console.log(data);
`
</script>
<template>
  <InputText :contents="strCode" />
</template>