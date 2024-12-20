<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const money = 1000000;
const moneyFormat = zztool.moneyFormat(money);
const moneyFormat2 = zztool.moneyFormat(money,'~','$');
console.log(moneyFormat,moneyFormat2);
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
  import * as zztool from '@zzcpt/zztool';

  const money = 1000000;
  const moneyFormat = zztool.moneyFormat(money);
  const moneyFormat2 = zztool.moneyFormat(money,'~','$');
  console.log(moneyFormat,moneyFormat2);
</script>
</textarea>
</template>