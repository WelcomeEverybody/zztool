import { inject } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const zztool = inject('$ZZTOOL');
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
        emptyObject: {}
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
        emptyObject: {}
    },
    active: true
};
const is = zztool.dataEqual(complexObj, complexObj1, true);
console.log(is);
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("container") }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {};
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
