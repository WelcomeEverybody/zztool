/**
 * 节流
 * @param callback 回调函数
 * @param wait 等待时间
 */
export declare function throttle(callback: Function, wait?: number): (...args: any[]) => void;
