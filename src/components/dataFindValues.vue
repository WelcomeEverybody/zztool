<script lang="ts" setup>
import { inject } from 'vue';
import ZZTOOL from '@zzcpt/zztool';
const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

const str = '1,2,5';
const obj =  [
  {id:1,name:'张三'},
  {id:2,name:'李四'},
  {id:3,name:'王五',list:[{id:5,name:'一二三'}]}
]
const data = zztool.dataFindValues(str,obj,'id');
console.log("三个参数: ",data)
const data2 = zztool.dataFindValues(str,obj,'id','list');
console.log("存在第四个参数: ",data2)
</script>
<template>
<textarea class="w-full h-full" name="" id="">
第一个参数是对应第三个参数的值，第二个参数是数组，第四个参数在父级未找到对应的值则会在list中寻找

只有三个参数指挥在一维数组中寻找

<script lang="ts" setup>
  import { inject } from 'vue';
  import ZZTOOL from '@zzcpt/zztool';
  const zztool:ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
  
  const str = '1,2,5';
  const obj =  [
    {id:1,name:'张三'},
    {id:2,name:'李四'},
    {id:3,name:'王五',list:[{id:5,name:'一二三'}]}
  ]
  const data = zztool.dataFindValues(str,obj,'id');
  console.log("三个参数: ",data)
  const data2 = zztool.dataFindValues(str,obj,'id','list');
  console.log("存在第四个参数: ",data2)
</script>
</textarea>
</template>