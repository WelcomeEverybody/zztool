import { replaceAll } from "./public";
import { regIsHas } from "./regIsHas";
/**
 * 获取日期信息
 * @param date
 * @returns {year,month,day,hour,minute,second}
 */
export function getDateInfo(str) {
    let strs = str;
    // 兼容ios
    if (typeof str === "string" && regIsHas(str, "-")) {
        strs = replaceAll(str, "-", "/");
    }
    const date = strs ? new Date(strs) : new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    return { year, month, day, hour, minute, second };
}
