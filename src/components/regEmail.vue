<script lang="ts" setup>
import InputText from '../publicCom/inputText.vue';

const strCode = `
const email1 = 'xxxx@163.com';
const email2 = 'xxxx@gmail.com';
const email3 = 'xxxx1234234.com';
const arr = Array.from([email1,email2,email3])
for(let i = 0; i < arr.length; i++){
  const item = arr[i];
  console.log(zztool.regEmail(item));
}`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>