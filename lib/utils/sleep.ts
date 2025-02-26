/**
 * 延迟函数
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}