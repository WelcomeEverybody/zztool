/**
 * 获取随机颜色
 */
export function getRandomColor() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}