/**
 * 字符串替换
 * @param str 字符串
 * @param start 开始位置
 * @param end 结束位置
 * @param icon 替换字符
 * @returns 替换后的字符串
 */
export function strReplace(str:string, start:number, end:number,icon='*') {
  let len = str.length;
  let s = str.substring(0, start);
  let e = str.substring(end, len);
  let star = '';
  for (let i = 0; i < end - start; i++) {
    star += icon;
  }
  return s + star + e;
}