<script lang="ts" setup>
import {ref,onMounted} from "vue";
import * as zztool from '@zzcpt/zztool';
import { useI18n } from "vue-i18n";

const { t:$t } = useI18n();
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
        alert($t('alertTitle'))
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
    <button ref="btn" id="btn">{{$t('space')}}{{$t('stop')}}({{ $t('click') }})</button>
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