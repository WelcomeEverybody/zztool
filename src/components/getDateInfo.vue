<script lang="ts" setup>
const strCode = `
const date = zztool.getDateInfo('2023-6-15')
console.log(date)
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>