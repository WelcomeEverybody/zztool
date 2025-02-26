/**
 * 数据分组
 * @param {*} data
 * @param {*} key
 */
export function groupBy(data: any[], key: string) {
  return data.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}