import { replaceAll } from "./public";
import {regIsHas} from "./regIsHas";
/**
 * 获取日期信息
 * @param date
 * @returns {year,month,day,hour,minute,second}
 */
export function getDateInfo(str: any): {
  year: any;
  month: any;
  day: any;
  hour: any;
  minute: any;
  second: any;
} {
  let strs = str;
  // 兼容ios
  if (typeof str === "string" && regIsHas(str, "-")) {
    strs = replaceAll(str, "-", "/");
  }
  const date = strs ? new Date(strs) : new Date();
  const year: any = date.getFullYear();
  const month: any = (date.getMonth() + 1).toString().padStart(2, "0");
  const day: any = date.getDate().toString().padStart(2, "0");
  const hour: any = date.getHours().toString().padStart(2, "0");
  const minute: any = date.getMinutes().toString().padStart(2, "0");
  const second: any = date.getSeconds().toString().padStart(2, "0");
  return { year, month, day, hour, minute, second };
}