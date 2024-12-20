<script lang="ts" setup>
import {ref,onMounted} from "vue";
import * as zztool from '@zzcpt/zztool';

const btn = ref();
const width = 120;
const height = 30;
const isMove = ref(true);
const getRandomPointer = () => {
    const x = zztool.getRandom(0,window.innerWidth - width);
    const y = zztool.getRandom(0,window.innerHeight - height);
    return {x,y};
}
const setXY = () => {
    if(!isMove.value) return;
    const {x,y} = getRandomPointer();
    const Bgcolor = zztool.getRandomColor();
    const color = zztool.getRandomColor();
    btn.value.style.left = x + 'px';
    btn.value.style.top = y + 'px';
    btn.value.style.backgroundColor = Bgcolor;
    btn.value.style.color = color;
}
onMounted(()=>{
    btn.value.addEventListener("mouseenter",setXY);
    btn.value.addEventListener("click",() => {
        alert('我们是匆匆的行者，祝福如春雨，滋润心田间。愿你笑容常开，生活美满甜；事业步步高，前程似锦绣。健康快乐伴你左右，幸福永远与你相伴。')
    })
    window.onresize = setXY;
    window.addEventListener("keydown",(e)=>{  
        if(e.key === ' '){
            isMove.value = false
        }
    })
    setXY()
})
</script>

<template>
    <button ref="btn" id="btn">空格定身(点击)</button>
</template>

<style scoped>
#btn{
    position: absolute;
    width: 120px;
    height: 30px;
    transition:all .3s;
    cursor: pointer;
    border-radius: 5px;
}
</style>