/**
 * 根据某个字段找对应的数组或对象，如果有两个相同的数据会优先返回第一个
 * @param {*} data
 * @param {*} key
 * @param {*} value
 */
export function dataFind(data: any, key: any, value: any) {
  const find = (data: any) => {
    for (const itemkey in data) {
      if (itemkey === key && data[itemkey] === value) {
        return data;
      } else if (
        Array.isArray(data[itemkey]) ||
        typeof data[itemkey] === "object"
      ) {
        const result: any = find(data[itemkey]);
        if (result) {
          return result;
        }
      }
    }
    return {message:"Not Found"};
  };
  return find(data);
}