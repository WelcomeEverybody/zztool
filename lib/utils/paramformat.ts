/**
 * 参数格式化
 * @param obj 参数
 * @param type 类型
 * @returns 格式化后的参数
 */
export function paramformat(obj: any, type = "url") {
  if (type === "url") {
    return Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join("&");
  }
  if (type === "json") {
    return JSON.stringify(obj);
  }
  if (type === "formData") {
    const formData = new FormData();
    for (const key in obj) {
      formData.append(key, obj[key]);
    }
    return formData;
  }
}