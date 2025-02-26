/**
 * 数组分块
 * 将数组分成每块为size大小
 * @param arr 数组
 * @param size 大小
 */
export function chunkArrayItem(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
