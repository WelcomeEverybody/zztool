<script lang="ts" setup>
const strCode = `
const version = zztool.getVersion();
console.log(version);
`

</script>
<template>
    <InputText :contents="strCode"></InputText>
</template>