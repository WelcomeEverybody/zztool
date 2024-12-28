<script lang="ts" setup>
const strCode = `
const days = zztool.getMonthDays(2024,6);
console.log(days);
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>