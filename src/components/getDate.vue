<script lang="ts" setup>
const strCode = `
console.log(zztool.getDate())
console.log(zztool.getDate("Y/M/D"))
console.log(zztool.getDate(zztool.getTimeStamp('2020/02/20'),"Y~M~D"))
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>