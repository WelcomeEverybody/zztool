<script lang="ts" setup>
const strCode = `
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15',true))
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15'))
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>