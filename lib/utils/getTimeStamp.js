/**
 * 获取时间戳
 * @param {*} date
 * @param {*} mill 是否返回毫秒级时间戳
 * @returns
 */
export function getTimeStamp(date = new Date(), mill = true) {
    return mill
        ? new Date(date).getTime()
        : Math.floor(new Date(date).getTime() / 1000);
}
