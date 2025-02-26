import { error } from "./public";
/**
 * 获取随机数
 * @param min 最小值
 * @param max 最大值
 */
export function getRandom(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
        error("参数类型错误，必须为数字");
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}
