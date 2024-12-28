<script lang="ts" setup>
const strCode = `
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = {a:2,b:2,c:{d:2}};
  const data = zztool.dataEqual(obj1,obj2);
  const data1 = zztool.dataEqual(obj1,obj2,{returnKeys:true});
  console.log(data)
  console.log(data1)

  const obj3 = {arr:[1,2,3,4]};
  const obj4 = {arr:[1,2,4,3]};
  const data2 = zztool.dataEqual(obj3,obj4,{arrayDiff:true});
  const data3 = zztool.dataEqual(obj3,obj4,{arrayDiff:false});
  console.log(data2)
  console.log(data3)
`
</script>
<template>
    <InputText :contents="strCode" />
</template>