/**
 * 数据对比
 * @param obj1 对象1
 * @param obj2 对象2
 * @param options 配置
 * @param {Boolean} options.returnKeys 是否返回不一致的key
 * @param {Boolean} options.arrayDiff  是否返回数组差异
 * @returns boolean | Array<string>
 */
export function dataEqual(
  obj1: any,
  obj2: any,
  options = {}
): boolean | Array<string> {
  const defaultOptions = { returnKeys: false, arrayDiff: true };
  const { returnKeys } = Object.assign(defaultOptions, options);

  const differingKeys: Array<string> = [];
  function isObject(value: any) {
    return value && typeof value === "object" && !Array.isArray(value);
  }
  const deepCompare = (value1: any, value2: any, key: string) => {
    if (isObject(value1) && isObject(value2)) {
      const data = dataEqual(value1, value2, options);
      if (Array.isArray(data)) {
        data.forEach((k: any) => differingKeys.push(`${key}.${k}`));
      }
    } else if (Array.isArray(value1) && Array.isArray(value2)) {
      // 深对比
      value1.forEach((v, i) => {
        if (typeof v == "object" && typeof value2[i] == "object") {
          const data = dataEqual(v, value2[i], options);
          if (Array.isArray(data)) {
            data.forEach((k) => differingKeys.push(`${key}.${i}.${k}`));
          }
        } else if (v !== value2[i]) {
          differingKeys.push(`${key}.${i}`);
        }
      });
    } else if (value1 !== value2) {
      differingKeys.push(key);
    }
  };
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      deepCompare(obj1[key], obj2[key], key);
    }
  }
  return returnKeys ? differingKeys : differingKeys.length > 0;
}