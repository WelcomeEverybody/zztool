<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const money = 1000000;
const moneyFormat = zztool.moneyFormat(money);
const moneyFormat2 = zztool.moneyFormat(money,'~','$');
console.log(moneyFormat,moneyFormat2);
const strCode = `
const money = 1000000;
const moneyFormat = zztool.moneyFormat(money);
const moneyFormat2 = zztool.moneyFormat(money,'~','$');
console.log(moneyFormat);
console.log(moneyFormat2);
`
</script>
<template>
  <InputText :contents="strCode" />
</template>