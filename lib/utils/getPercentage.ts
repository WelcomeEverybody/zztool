/**
 * 计算百分比
 * @param {*} part
 * @param {*} total
 * @param {*} decimalPlaces
 * @returns
 */
export function getPercentage(part: number, total: number, decimalPlaces = 2) {
  return ((part / total) * 100).toFixed(decimalPlaces);
}