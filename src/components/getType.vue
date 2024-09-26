<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
const number = 10;
const type = zztool.getType(number);
console.log(type)
</script>
<template>
<textarea class="w-full h-50" name="" id="">
<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
const number = 10;
const type = zztool.getType(number);
console.log(type) // number
</script>
</textarea>
</template>