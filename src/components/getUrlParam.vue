<script lang="ts" setup>
const strCode = `
  const url = "http://www.baidu.com?a=1&b=2";
  const param = zztool.getUrlParam(url); // 无参数则会获取url
  console.log(param) // {a: '1', b: '2'}
`
</script>
<template>
  <InputText :contents="strCode" />
</template>