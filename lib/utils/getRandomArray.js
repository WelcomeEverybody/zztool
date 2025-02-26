import { getRandom } from './getRandom';
/**
 * 获取随机数组
 * @param length 长度
 * @param min 最小值
 * @param max 最大值
 */
export function getRandomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(getRandom(min, max));
    }
    return arr;
}
