<script lang="ts" setup>
const strCode = `
// dataChangeIndex 会修改源数据

  const obj = {
    name: "zztool",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
        name: "zztool",
        age: 18,
        sex: 1,
        address: "中国",
        hobby: ["打游戏", "看电影"],
        info: null,
    },
    arr: [
        {
        name: "zztool",
        },
        {
        name: "list",
        },
        1,2,3
    ]
  }
  const obj2 = zztool.deepClone(obj);
  const data = zztool.dataChangeIndex(obj, "name", "Name");
  console.log(obj === data);
  console.log(obj);
  console.log('__________')
  const data2 = zztool.dataChangeIndex(obj2,'name,info','NAME,INFO');
  console.log(data2);
`
</script>
<template>
  <InputText :contents="strCode" />
</template>