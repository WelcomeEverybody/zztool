<script lang="ts" setup>
const strCode = `
const date = zztool.getDateType('2023-6-15',"Y/M/D")
console.log(date)
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>