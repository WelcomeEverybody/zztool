<script setup lang="ts">
import * as tool from "../lib/index.js";
// import HelloWorld from "./components/HelloWorld.vue";


// const arr = tool.dataEqual(obj1, obj2, { returnKeys: true})
const obj = {
  a: 1,
  b: 2,
  obj: {
    c: 3,
    d: 4,
    obj: {
      e: 5,
      key: 6,
    },
  },
}
console.log(tool.dataFind(obj,'key',6));

</script>

<template>
  <div>
    <!-- <HelloWorld /> -->
  </div>
</template>