import {getRandom} from './getRandom';
/**
 * 获取随机rgb颜色
 */
export function getRandomRGBColor() {
  return `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`;
}