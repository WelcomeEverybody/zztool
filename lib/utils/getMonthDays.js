/**
 * 获取月份天数
 * @param {*} date
 * @returns
 */
export function getMonthDays(year = new Date().getFullYear(), month = new Date().getMonth() + 1) {
    return new Date(year, month, 0).getDate();
}
