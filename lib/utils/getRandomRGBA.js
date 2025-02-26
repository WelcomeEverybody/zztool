import { getRandom } from "./getRandom";
/**
 * 获取随机rgba颜色
 */
export function getRandomRGBA() {
    return `rgba(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 100) / 100})`;
}
