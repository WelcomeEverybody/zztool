<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';
const clickFn = () => {
    zztool.throttle(() => {
        console.log('节流');
    }, 1000);
}
const strCode = `
zztool.throttle(() => {
    console.log('节流');
}, 1000);
`
</script>
<template>
    <button @click="clickFn">点击</button>
    <InputText :contents="strCode" :show="false"></InputText>
</template>