<script lang="ts">
import {onUnmounted, ref,nextTick} from "vue"
import { defineComponent,onMounted } from 'vue';
import { ScrollbarProps } from './attribute';
export default defineComponent({
    name:"CptScrollbar",
    props:ScrollbarProps,
    setup(props)
    {   
        var height = props.height === "100%"? 0 :  Number(props.height.replace(/px/,''));
        const scrollbar:any = ref();
        const scrollEle:any = ref();
        const scrollbarBox:any = ref();
        const scrollbarShow = ref(false);
        const scrollbarHeight:any = ref(0);
        const isInit = ref(false);
        const isInitShow = ref(true);
        onMounted(() => {
            nextTick(() => {
                init()
            })
            window.addEventListener('resize',() => {
                init()
            })
        })
        function init(){
            if(props.height === "100%"){
                let pTop = window.getComputedStyle(scrollEle.value.parentElement).getPropertyValue('padding-top');
                let pBottom = window.getComputedStyle(scrollEle.value.parentElement).getPropertyValue('padding-bottom');
                height = scrollEle.value.parentElement.getBoundingClientRect().height - Number(pTop.replace(/px/,'')) - Number(pBottom.replace(/px/,''));
            }
            let itemHeight = 0;
            const childrenLng = scrollbarBox.value.children.length;
            const children = scrollbarBox.value.children;
            for(let i = 0;i < childrenLng;i++){
                itemHeight += children[i].getBoundingClientRect().height;
            }
            if(itemHeight <= height){
                isInitShow.value = false;
            }
            initScrollbar();
        }
        function initScrollbar(){
            const boxHeight = scrollbarBox.value.scrollHeight
            scrollbarHeight.value = height / (boxHeight / height) < 10 ? 15 :  height / (boxHeight / height);
            scrollbar.value.style.height = scrollbarHeight.value + 'px';
        }

        let isStart = ref(false);
        let boxTop = ref(0)
        const startPosition = ref(0);
        function scrollbarEnter(){
            if(!isInitShow.value)return;
            scrollbarShow.value = true;
        }
        function scrollbarMove(e:any){
            if(!isStart.value)return;
            var top = (e.y - startPosition.value) - scrollEle.value.offsetTop - boxTop.value;
            if(top <= 0){
                top = 0;
            }else if(top + scrollbarHeight.value >= height){
                top = height - scrollbarHeight.value;
            }
            scrollbar.value.style.top = top + 'px';
            var scrollTop = Math.trunc(top * ((scrollbarBox.value.scrollHeight - height) / (height - scrollbarHeight.value)));
            setScrollbarBoxTop(scrollTop)
        }
        function setScrollbarPosition(top:number){
            scrollbar.value.style.top = top + 'px';
        }
        function setScrollbarBoxTop(top:number){
            scrollbarBox.value.scrollTop = top;
        }
        function scrollbarDown(e:any){
            setIsInit(true)
            isStart.value = true;
            startPosition.value = e.y - scrollEle.value.offsetTop - scrollbar.value.style.top.replace(/px/,'');
            boxTop.value = scrollbarBox.value.offsetTop;
        }
        function scrollbarLeave(){
            // e.preventDefault();
            if(isStart.value)return;
            scrollbarShow.value = false;
        }
        function scrollbarUp(){
            isStart.value = false;
        }
        function setIsInit(e:boolean){
            isInit.value = e;
        }
        function scroll(e:any){
            if(isStart.value) return;
            setIsInit(true)
            const stepNum = (scrollbarBox.value.scrollHeight - height)/(height - scrollbarHeight.value)
            const top = e.target.scrollTop;
            setScrollbarPosition(Math.trunc((top/stepNum)))
        }
        onMounted(() => {
            document.body.addEventListener('mouseup',scrollbarUp)
            document.body.addEventListener('mousemove',scrollbarMove)
        })
        onUnmounted(() => {
            document.body.removeEventListener('mouseup',scrollbarUp)
            document.body.removeEventListener('mousemove',scrollbarMove)
        })
        return {
            props,
            scrollEle,
            scrollbar,
            scrollbarBox,
            scrollbarShow,
            scrollbarEnter,
            scrollbarMove,
            scrollbarDown,
            scrollbarLeave,
            scrollbarUp,
            scroll,
        }
    }
})

</script>

<template>
    <div 
        class="scrollbarBox" 
        :style="{'height': props.height}"
        ref="scrollEle" 
        :onmouseenter="scrollbarEnter" 
        :onmouseleave="scrollbarLeave" 
        >
        
        <div  
            ref="scrollbarBox"
            :onscroll="scroll" 
            :style="{
                'max-height': props.height,
            }"
            class="boxitem"
            >
            <slot></slot>
        </div>
        <div 
            v-show="scrollbarShow"
            class="scrollbarBoxs"
            style=""
        >
            <div class="scrollbar pointer" :onmousedown="scrollbarDown" ref="scrollbar" ></div>
        </div>
    </div>
</template>

<style scoped>
@import url("../style/style.css");
</style>