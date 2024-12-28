<script lang="ts" setup>
const strCode = `
  const params = {a: '1', b: '2'}
  const param1 = zztool.paramformat(params,'url');
  const param2 = zztool.paramformat(params,'json');
  const param3 = zztool.paramformat(params,'formData');
  console.log(param1);
  console.log(param2);
  console.log(param3);
`
</script>
<template>
    <InputText :contents="strCode" />
</template>