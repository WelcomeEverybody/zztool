<script lang="ts" setup>
const strCode = `
var data = [
    { id: 1, parentId: 2, name: "Item 1" },
    { id: 2, parentId: 1, name: "Item 1.1" },
    { id: 3, parentId: 1, name: "Item 1.2" },
    { id: 4, parentId: 2, name: "Item 1.1.1" },
]
const datas = zztool.groupBy(data, 'parentId');
console.log(datas)
`
</script>
<template>
  <InputText :contents="strCode" />
</template>