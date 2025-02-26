import { error } from "./public";
import { getFirstChar } from "./getFirstChar";
import { toString } from "./toString";
/**
 * 转数组
 * @param obj 数据
 * @param index 分隔符
 * @returns 数组
 */
export function toArray(obj, index = "") {
    if (!obj)
        error("该变量没有值");
    if (Array.isArray(obj))
        return [...obj];
    const chars = typeof obj === "string" ? obj : toString(obj);
    const firstChar = getFirstChar(chars);
    try {
        if (firstChar === "{" || firstChar === "[")
            return JSON.parse(chars);
        if (chars.includes(","))
            return chars.split(",");
        if (chars.includes(" "))
            return chars.split(" ");
        return chars.split(index);
    }
    catch (e) {
        return chars;
    }
}
