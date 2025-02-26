/**
 * 随机打乱数组
 * @param array 数组
 */
export function shuffleArray(array) {
    if (!Array.isArray(array))
        return array;
    let arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
