<script lang="ts" setup>
const clickFn = () => {
    zztool.debounce(() => {
        console.log('防抖');
    }, 1000);
}
const strCode = `
const clickFn = zztool.debounce(() => {
    console.log('防抖');
}, 1000);
`
</script>
<template>
    <button @click="clickFn()">点击</button>
    <InputText :contents="strCode" :show="false"></InputText>
</template>