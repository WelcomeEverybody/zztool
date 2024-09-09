<script setup lang="ts">
import { inject } from 'vue'
import ZZTOOL from '../lib/index'

const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL;
const complexObj = {
    name: '',
    age: 25,
    address: {
        city: null,
        postalCode: '',
        details: {
            street: '',
            number: 123
        }
    },
    job: undefined,
    hobbies: [],
    preferences: {
        colors: ['red', 'blue'],
        emptyList: [],
        emptyObject:{}
    },
    active: true
};
const complexObj1 = {
    name: '',
    age: 23,
    address: {
        city: null,
        postalCode: '',
        details: {
            street: '',
            number: 1
        }
    },
    job: undefined,
    hobbies: [],
    preferences: {
        colors: ['blue', 'blue'],
        emptyList: [],
        emptyObject:{}
    },
    active: true
};
const is = zztool.dataEqual(complexObj,complexObj1,true);
console.log(is)
</script>

<template>
  <div class="container">
  </div>
</template>
<style scoped>

</style>