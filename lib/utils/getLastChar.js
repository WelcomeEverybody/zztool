import { isString } from './public';
/**
 * 获取最后一个字符
 * @param str 字符串
 * @returns 最后一个字符
 */
export function getLastChar(str) {
    isString(str);
    return str.substring(str.length - 1, str.length);
}
