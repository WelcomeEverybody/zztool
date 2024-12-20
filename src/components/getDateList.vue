<script lang="ts" setup>
import * as zztool from '@zzcpt/zztool';

const day1 = zztool.getRecentDate(new Date('2024-6-15'),1);
const day2 = zztool.getRecentDate(new Date('2024-6-15'),2);
const day3 = zztool.getRecentDate(new Date('2024-6-15'),3);
console.log('前三天：',day1)
console.log('前一周：',day2)
console.log('前一月：',day3)
</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import * as zztool from '@zzcpt/zztool';

  const day1 = zztool.getDateList(new Date('2024-6-15'),1);
  const day2 = zztool.getDateList(new Date('2024-6-15'),2);
  const day3 = zztool.getDateList(new Date('2024-6-15'),3);
  console.log('前三天：',day1)
  console.log('前一周：',day2)
  console.log('前一月：',day3)
</script>
</textarea>
</template>