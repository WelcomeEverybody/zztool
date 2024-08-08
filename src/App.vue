<script setup lang="ts">
import { inject  } from 'vue'
const zztool: any = inject('$ZZTOOL')
// const obj1 = { a: 1, b: { x: 10,y:{a:'1',c:{},b:[1]} }, c: 3 };
// const obj2 = { a: 1, b: { x:[{a:'1',b:[{a:''}]}] }, d: 4 };
// const arr = [1,2,3,4,'']
// console.log(zztool.dataEmpty(arr,true));
// console.log(zztool.toString('123'));
const flatData = [
  { id: 1, name: "Root", parentId: null },
  { id: 2, name: "Child 1", parentId: 1 },
  { id: 3, name: "Child 2", parentId: 1 },
  { id: 4, name: "Child 1.1", parentId: 2 },
  { id: 5, name: "Child 1.2", parentId: 2 },
  { id: 6, name: "Child 2.1", parentId: 3 },
  { id: 7, name: "Child 2.2", parentId: 3 },
  { id: 8, name: "Child 1.1.1", parentId: 4 },
  { id: 9, name: "Child 1.1.2", parentId: 4 },
  { id: 10, name: "Child 1.2.1", parentId: 5 },
  { id: 11, name: "Child 2.1.1", parentId: 6 },
  { id: 12, name: "Child 2.2.1", parentId: 7 },
  { id: 13, name: "Child 2.2.2", parentId: 7 },
  { id: 14, name: "Child 2.2.2.1", parentId: 13 },
  { id: 15, name: "Child 2.2.2.2", parentId: 13 },
  { id: 16, name: "Child 2.2.2.3", parentId: 13 }
];
console.log(flatData)

</script>

<template>
  <div>
  </div>
</template>
