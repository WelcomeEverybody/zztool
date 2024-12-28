<script lang="ts" setup>
const strCode = `
const data = 10;
const type = zztool.getType(data);
console.log(type)
`
</script>
<template>
    <InputText :contents="strCode"></InputText>
</template>