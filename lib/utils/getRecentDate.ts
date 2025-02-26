import {getDateType} from "./getDateType";
import {getDateInfo} from "./getDateInfo";
import {getBetweenDate} from "./getBetweenDate";
/**
 * 获取某日期的近期天数
 * @param {*} date 日期
 * @param {*} type （三天，周，月，年）
 * @param {*} hasNow 生成的日期是否包含今日
 * @param {*} step 生成距离date的step天
 * @returns
 * step优先级大于type
 */
export function getRecentDate(
  date: any = new Date(),
  type = 1,
  hasNow = true,
  step = 0
) {
  if (!date) return [];
  const format = "Y-M-D";
  const oneDay = 24 * 60 * 60 * 1000;
  let now = new Date(date).getTime();
  if (!hasNow) {
    now -= oneDay;
  }
  // helper function
  function getPrevMonth(date: Date) {
    const month = date.getMonth();
    return {
      year: month === 0 ? date.getFullYear() - 1 : date.getFullYear(),
      month: month === 0 ? 12 : month,
    };
  }
  const generateDateList = (count: number) =>
    Array.from({ length: count }, (_, i) => {
      const time = now - (count - i - 1) * oneDay;
      return getDateType(getDateInfo(new Date(time)), format);
    });

  // start
  const { year, month, day } = getDateInfo(date);
  if (type && !step) {
    switch (type) {
      case 1: {
        return generateDateList(3);
      }
      case 2: {
        return generateDateList(7);
      }
      case 3: {
        const { year: prevYear, month: prevMonth } = getPrevMonth(
          new Date(now)
        );
        return getBetweenDate(`${prevYear}-${prevMonth}-${day}`, now);
      }
      case 4: {
        return getBetweenDate(
          `${year - 1}/${month}/${day}`,
          `${year}/${month}/${day}`
        );
      }
    }
  } else if (step) {
    return generateDateList(step);
  }

  return [];
}