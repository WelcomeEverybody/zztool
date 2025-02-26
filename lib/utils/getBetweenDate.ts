import {getDate} from "./getDate";
import {getTimeStamp} from "./getTimeStamp";
/**
 * 获取两个日期之间的日期
 * @param {*} date
 * @param {*} date1
 * @param {*} days
 * @returns {Array}
 */
export function getBetweenDate(date: any, date1: any, days: any = false) {
  const oneDay = 24 * 60 * 60 * 1000;
  const dateTime = getTimeStamp(date);
  const dateTime1 = getTimeStamp(date1);
  if (days) {
    return Math.abs(dateTime - dateTime1) / oneDay;
  }
  return Array.from({ length: Math.abs(dateTime - dateTime1) / oneDay }).map(
    (_, i) => {
      const time =
        dateTime > dateTime1 ? dateTime1 - i * oneDay : dateTime + i * oneDay;
      return getDate(new Date(time), "Y-M-D");
    }
  );
}