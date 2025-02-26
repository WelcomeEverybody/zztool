/**
 * 获取url参数
 * @param url url
 * @returns 参数
 */
export function getUrlParam(url = "") {
  if (!url) {
    url = window.location.href;
  }
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a: any, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );
}