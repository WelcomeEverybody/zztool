<script lang="ts" setup>
const strCode = `
const number = zztool.getPercentage(10, 100,2);
console.log(number)
`
</script>
<template>
    <InputText :contents="strCode" />
</template>