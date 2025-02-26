/**
 * 防抖
 * @param callback 回调函数
 * @param wait 等待时间
 */
export const debounce = (function () {
  let timer: any = null;
  return (callback: Function, wait = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();