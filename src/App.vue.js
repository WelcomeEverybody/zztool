import * as tool from "../lib/index.js";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const obj = {
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
            age: ''
        },
        info: null,
    },
    arr: [
        {
            name: "zhangsan",
        },
        {
            name: "lisi",
        },
        1, 2, 3
    ]
};
/**
 * 获取对象所有相同下标的值
 *
 */
const data = tool.getSameIndexValue(obj, 'arr');
// const result = data.map(path => tool.getValue(obj, path.key));
console.log(data);
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
