<script lang="ts" setup>
import MenuData from "../data/menu";
const emit = defineEmits(["change"])

const changeFn = (item:any) => {
    emit("change",item)
}

</script>

<template>
    <div class="menu">
        <div class="menu-item">
            <div class="title">说明</div>
            <div class="item">安装(请看控制台)</div>
            <div class="item">react/vue都可以使用</div>
            <div class="item">输出结果请看控制台</div>
        </div>
        <div class="menu-item" v-for="(item,index) in MenuData" :key="index">
            <div class="title">{{ item.name }}</div>
            <div class="item" v-for="(items,indexs) in item.list" :key="indexs" @click="changeFn(items)">{{ items.name }}</div>
        </div>
    </div>
</template>

<style scoped>
.menu {
    width: 200px;
    min-width: 200px;
    max-width: 200px;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    box-shadow: 0 0 10px 1px #000000;
    box-sizing: border-box;
}
.menu-item {
    padding: 10px;
    cursor: pointer;
}
.menu-item .title{
    font-size: 16px;
    font-weight: bolder;
}
.menu-item .item{
    font-size: 14px;
    padding-left: 20px;
}
</style>