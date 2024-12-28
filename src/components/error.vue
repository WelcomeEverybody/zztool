<script lang="ts" setup>
const strCode = `
zztool.error('抛出错误');
`
</script>
<template>
    <InputText :contents="strCode" :show="false"></InputText>
</template>