<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

const money = 1000000;
const moneyFormat = zztool.moneyFormat(money);
const moneyFormat2 = zztool.moneyFormat(money,'~','$');
console.log(moneyFormat,moneyFormat2);
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

  const money = 1000000;
  const moneyFormat = zztool.moneyFormat(money);
  const moneyFormat2 = zztool.moneyFormat(money,'~','$');
  console.log(moneyFormat,moneyFormat2);
</script>
</textarea>
</template>