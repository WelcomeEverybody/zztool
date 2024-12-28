<script lang="ts" setup>

const strCode = `
  const random = zztool.getRandom(0,100);
  console.log(random)
`
</script>
<template>
    <InputText :contents="strCode" />
</template>