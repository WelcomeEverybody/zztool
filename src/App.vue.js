import { inject } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const zztool = inject('$ZZTOOL');
console.log(zztool.getBetweenDate('2022-01-01', '2022-01-20', true));
function exportToCSV(data, fileName) {
    // 将数据数组转化为 CSV 格式的字符串
    const csvContent = data.map(row => row.join(",")).join("\n");
    // 创建 Blob 对象，指定文件类型为 text/csv
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    // 创建一个虚拟的下载链接
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    // 设置下载文件的属性
    link.setAttribute("href", url);
    link.setAttribute("download", `${fileName}.csv`);
    // 将链接添加到页面上，触发点击事件，下载文件
    document.body.appendChild(link);
    link.click();
    // 下载完成后，移除链接
    document.body.removeChild(link);
}
// 使用示例
const data = [
    ["Name", "Age", "Email"],
    ["John", "30", "john@example.com"],
    ["Jane", "25", "jane@example.com"]
];
exportToCSV(data, 'Users');
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
