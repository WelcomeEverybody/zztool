/**
 * 数组去重
 * @param data 数组
 */
export function uniqueArray(data: any[]) {
  return [...new Set(data)];
}