import { regIsHas } from "./regIsHas";
/**
 * 获取索引值
 * 仅适用于 对象嵌套
 * 'xxx.xxx.xxx' 形式
 * [xxx,xxx,xxx] 形式
 * @param obj
 * @param path
 * @returns
 */
export function getValue(obj, path) {
    if (typeof path === "string" && regIsHas(path, ".")) {
        path = path.split(".");
    }
    if (!Array.isArray(path) || !path) {
        return "";
    }
    return path.reduce((acc, key) => acc && acc[key], obj);
}
