<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;


var data = [
    { id: 1, parentId: null, name: "Item 1" },
    { id: 2, parentId: 1, name: "Item 1.1" },
    { id: 3, parentId: 1, name: "Item 1.2" },
    { id: 4, parentId: 2, name: "Item 1.1.1" },
    { id: 5, parentId: null, name: "Item 2" }
];
const tree = zztool.toTree(data, 'parentId');
console.log(tree)
</script>
<template>
<textarea class="w-full h-full" name="" id="">
<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  
  var data = [
    { id: 1, parentId: null, name: "Item 1" },
    { id: 2, parentId: 1, name: "Item 1.1" },
    { id: 3, parentId: 1, name: "Item 1.2" },
    { id: 4, parentId: 2, name: "Item 1.1.1" },
    { id: 5, parentId: null, name: "Item 2" }
  ];
  const tree = zztool.toTree(data, 'parentId');
  console.log(tree)
</script>
</textarea>
</template>