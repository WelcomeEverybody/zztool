/**
 * 节流
 * @param callback 回调函数
 * @param wait 等待时间
 */
export function throttle(callback:Function, wait = 800) {
  let last = 0;
  return function(...args:any[]) {
      let now = Date.now();
      if (now - last > wait) {
          callback(...args);
          last = now;
      }
  };
}