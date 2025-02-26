<script setup lang="ts">
// import { onMounted, ref } from 'vue';
import * as tool from "../lib/index.js";
// import HelloWorld from "./components/HelloWorld.vue";

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testObj = { 
  name:'zhangsan',
  age: 18,
  info:{
    address:'beijing',
    name:'zhangsan',
    age: 18,
    sex:true,
    money:'1'
  }
};

console.log(testObj);
console.log(tool.dataEmpty(testObj));

// const arr = tool.dataEqual(obj1, obj2, { returnKeys: true})

// console.log(tool.getTimeStep('08:00', '24:00','00:15','ss:hh:mm'));


</script>

<template>
  <div>
    <div id="time"></div>
    <canvas id="container"></canvas>
    <select name="" id="select">
      <option value="S" selected>小</option>
      <option value="M">中</option>
      <option value="L">大</option>
    </select>
  </div>
</template>