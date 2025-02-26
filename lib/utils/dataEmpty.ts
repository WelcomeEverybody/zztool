/**
 * 判断对象中是否有空值
 * @param {*} obj
 * @param {boolean} returnKeys 是否返回空值的索引
 * @param {string} parentKey 父级key
 * @returns
 */
export function dataEmpty(
  obj: any,
  returnKeys: boolean = false,
  parentKey: string = ""
): Array<string> | boolean {
  const emptyKeys: string[] = [];

  function checkEmpty(value: any): boolean {
    return (
      value === "" ||
      value === null ||
      value === undefined ||
      (typeof value === "object" &&
        value !== null &&
        (Array.isArray(value)
          ? value.length === 0
          : Object.keys(value).length === 0))
    );
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];
      if (typeof value === "object" && value !== null && !checkEmpty(value)) {
        const nestedResult = dataEmpty(value, true, fullKey);
        if (Array.isArray(nestedResult)) {
          emptyKeys.push(...nestedResult);
        }
      } else if (checkEmpty(value)) {
        emptyKeys.push(fullKey);
      }
    }
  }

  if (returnKeys) {
    return emptyKeys;
  }

  return emptyKeys.length > 0;
}