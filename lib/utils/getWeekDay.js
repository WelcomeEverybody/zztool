/**
 * 获取日期是星期几
 * @param {*} date
 * @returns
 */
export function getWeekDay(date = new Date()) {
    const weekDays = ["日", "一", "二", "三", "四", "五", "六"];
    return weekDays[new Date(date).getDay()];
}
