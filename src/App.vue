<script setup lang="ts">
import * as tool from "../lib/index.js";

const obj1 = {
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
      age:'1'
    },
    info: null,
  },
  prople:[
    { name: "Bob", age: 25 },
    { name: "Alice", age: 30 },
  ],
  arr: [
    {
      name: "git",
      lng:10,
    },
    {
      name: "hub",
      lng:30,
    }
  ],
  arrs:[1,2,3,4,5,1],
}
const obj2 = {
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
      age:'1'
    },
    info: null,
  },
  prople: [
    { name: "Alice", age: 30 },
    { name: "Charlie", age: 25 }
  ],
  arr: [
    {
      name: "hub",
      lng:20,
    },
    {
      name: "git",
      lng:10,
    }
  ],
  arrs:[1,2,3,4,5],
}


console.log(tool.dataEqual(obj1, obj2, { returnKeys: true}));

</script>

<template>
  <div>
  </div>
</template>