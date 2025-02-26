import { error } from "./public";
import { toArray } from "./toArray";
/**
 * 修改对象中的下标
 * index和newIndex必须是字符串，多个下标用逗号分隔
 * @param {*} data
 * @param {*} index
 * @param {*} newIndex
 * @returns {object}
 */
export function dataChangeIndex(data, index, newIndex) {
    if (typeof data !== "object" || data === null)
        return data;
    const indexArr = toArray(index, ",");
    const newIndexArr = toArray(newIndex, ",");
    if (indexArr.length !== newIndexArr.length) {
        error("下表必须和新下标长度一致");
    }
    indexArr.forEach((_item, i) => hfn(data, indexArr[i], newIndexArr[i]));
    function hfn(data, index, newIndex) {
        if (typeof data !== "object" || data === null)
            return;
        Object.keys(data).forEach((key) => {
            if (key === index)
                data[newIndex] = data[key];
            if (typeof data[key] === "object")
                hfn(data[key], index, newIndex);
        });
        if (data.hasOwnProperty(index))
            delete data[index];
    }
    return data;
}
