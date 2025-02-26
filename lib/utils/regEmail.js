/**
 * 判断是否为邮箱
 * @param str 字符串
 * @returns 是否为邮箱
 */
export function regEmail(str) {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
}
