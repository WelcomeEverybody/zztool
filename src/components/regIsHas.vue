<script lang="ts" setup>
const strCode = `
const str = 'how are you?';
const isHas = zztool.regIsHas(str, 'you');
console.log(isHas)
`
</script>
<template>
    <InputText :contents="strCode"></InputText>
</template>