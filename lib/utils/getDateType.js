import { getDateInfo } from "./getDateInfo";
/**
 * 获取日期类型
 * @param date
 * @param type
 * @returns
 */
export function getDateType(date, type = "Y/M/D h:m:s") {
    if (typeof date == "object") {
        var { year, month, day, hour, minute, second } = date;
    }
    else {
        var { year, month, day, hour, minute, second } = getDateInfo(date);
    }
    return type
        .replace("Y", year)
        .replace("M", month)
        .replace("D", day)
        .replace("h", hour)
        .replace("m", minute)
        .replace("s", second);
}
