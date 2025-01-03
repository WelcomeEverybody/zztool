import * as tool from "../lib/index.js";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const obj1 = {
    name: "z",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
        name: "zhangsan",
        age: 18,
        sex: 1,
        address: "xxxx",
        hobby: ["打游戏", "看电影"],
        arr: {
            name: "zhangsan",
            age: '1'
        },
        info: null,
    },
    prople: [
        { name: "Bob", age: 25 },
        { name: "Alice", age: 30 },
    ],
    arr: [
        {
            name: "git",
            lng: 10,
        },
        {
            name: "hub",
            lng: 30,
        }
    ],
    arrs: [1, 2, 3, 4, 5, 1],
};
const obj2 = {
    name: "z",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
        name: "zhangsan",
        age: 18,
        sex: 1,
        address: "xxxx",
        hobby: ["打游戏", "看电影"],
        arr: {
            name: "zhangsan",
            age: '1'
        },
        info: null,
    },
    prople: [
        { name: "Alice", age: 30 },
        { name: "Charlie", age: 25 }
    ],
    arr: [
        {
            name: "hub",
            lng: 20,
        },
        {
            name: "git",
            lng: 10,
        }
    ],
    arrs: [1, 2, 3, 4, 5],
};
console.log(tool.dataEqual(obj1, obj2, { returnKeys: true }));
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({}, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
