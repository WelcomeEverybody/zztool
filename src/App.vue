<script setup lang="ts">
import * as tool from "../lib/index.js";

const obj = {
  name: "z",
  age: 18,
  sex: 1,
  address: "中国",
  hobby: ["打游戏", "看电影"],
  info: {
    name: "zhangsan",
    age: 18,
    sex: 1,
    address: "xxxx", 
    hobby: ["打游戏", "看电影"],
    arr:{
      name: "zhangsan",
      age:''
    },
    info: null,
  },
  arr: [
    {
      name: "zhangsan",
    },
    {
      name: "lisi",
    },
    1,2,3
  ]
}

/**
 * 获取对象所有相同下标的值
 * 
 */


const data = tool.getSameIndexValue(obj,'arr');
// const result = data.map(path => tool.getValue(obj, path.key));
console.log(data)

</script>

<template>
  <div>
  </div>
</template>