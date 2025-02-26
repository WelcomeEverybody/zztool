/**
 * 抛出错误
 * @param msg 错误信息
 */
export function error(msg: string) {
  throw new Error(msg);
}
/**
 * 判断是否为字符串
 * @param str 字符串
 */
export function isString(str: string) {
  if (typeof str !== "string") {
    error("参数类型错误，必须为字符串");
  }
}
export function replaceAll(
  str: string,
  target: string,
  replacement: string
): string {
  return str.replace(new RegExp(target, "g"), replacement);
}