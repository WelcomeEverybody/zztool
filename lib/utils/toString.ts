import {getFirstChar} from './getFirstChar';
import {error} from './public';
/**
 * 转字符串
 * @param obj 数据
 * @returns 字符串
 */
export function toString(obj: any) {
  if (!obj) error("该变量没有值");
  const chars = JSON.stringify(obj);
  if (getFirstChar(chars) === "\\") {
    return chars.replace(/\\/g, "");
  }
  return chars;
}