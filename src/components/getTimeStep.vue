<script lang="ts" setup>
const strCode = `
const arr = zztool.getTimeStep('01:00',"10:00");
const arr1 = zztool.getTimeStep('01:00',"10:00","00:30");
console.log("默认步长：" + arr)
console.log("步长半小时：" + arr1)
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>