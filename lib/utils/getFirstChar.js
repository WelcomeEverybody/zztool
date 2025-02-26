import { isString } from './public';
/**
 * 获取第一个字符
 * @param str 字符串
 * @returns 第一个字符
 */
export function getFirstChar(str) {
    isString(str);
    return str.charAt(0);
}
