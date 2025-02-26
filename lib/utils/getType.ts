/**
 * 获取类型
 * @param data
 * @returns 类型
 */
export function getType(data: any) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}