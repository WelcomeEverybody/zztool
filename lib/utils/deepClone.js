import { error } from "./public";
/**
 * 深克隆
 * @param {*} obj
 * @returns
 */
export function deepClone(obj) {
    if (obj === null || obj === undefined)
        return obj;
    if (typeof obj !== "object")
        return obj;
    if (obj instanceof Date)
        return new Date(obj.getTime());
    if (Array.isArray(obj)) {
        const arrCopy = [];
        obj.forEach((item, index) => {
            arrCopy[index] = deepClone(item);
        });
        return arrCopy;
    }
    if (obj instanceof Object) {
        const objCopy = {};
        Object.keys(obj).forEach((key) => {
            objCopy[key] = deepClone(obj[key]);
        });
        return objCopy;
    }
    error("Unsupported data type");
}
