/**
 * 获取对应索引的value
 * @param obj 对象
 * @param index 索引
 * @param parentKey 父级key
 * @returns
 */
export function getSameIndexValue(obj, index, parentKey = "") {
    const arr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const fullKey = parentKey ? `${parentKey}.${key}` : key;
            const value = obj[key];
            if (typeof value === "object") {
                arr.push(...getSameIndexValue(value, index, fullKey));
            }
            else if (key == index) {
                arr.push({
                    key: fullKey,
                    value,
                });
            }
        }
    }
    return arr;
}
