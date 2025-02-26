/**
 * date不为空时获取date的周日期
 * @param {*} date
 * @returns
 */
export function getWeekTime(date: any = new Date()) {
  const now = new Date(date);
  const dayOfWeek = now.getDay();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - dayOfWeek + 1);
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date.toLocaleDateString();
  });
}