/**
 * 延迟函数
 */
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
