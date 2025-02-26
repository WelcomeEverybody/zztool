/**
 * ZZTOOL工具类
 */
"use strict";
const version = "1.2.9";
console.log(
  "%czztool%c" + `V${version}`,
  "background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px",
  "background: #FFD700; color: #000000; border-radius: 0 3px 3px 0;padding:2px 5px"
);

export { arrayTrim } from "./utils/arrayTrim";

export { chunkArray } from "./utils/chunkArray";
export { chunkArrayItem } from "./utils/chunkArrayItem";

export { dataChangeIndex } from "./utils/dataChangeIndex";
export { dataEmpty } from "./utils/dataEmpty";
export { dataEqual } from "./utils/dataEqual";
export { dataFind } from "./utils/dataFind";
export { dataMerge } from "./utils/dataMerge";
export { debounce } from "./utils/debounce";
export { deepClone } from "./utils/deepClone";

export { getBetweenDate } from "./utils/getBetweenDate";
export { getChar } from "./utils/getChar";
export { getDate } from "./utils/getDate";
export { getDateInfo } from "./utils/getDateInfo";
export { getDateType } from "./utils/getDateType";
export { getFirstChar } from "./utils/getFirstChar";
export { getLastChar } from "./utils/getLastChar";
export { getMonthDays } from "./utils/getMonthDays";
export { getPercentage } from "./utils/getPercentage";
export { getRandom } from "./utils/getRandom";
export { getRandomArray } from "./utils/getRandomArray";
export { getRandomColor } from "./utils/getRandomColor";
export { getRandomRGBA } from "./utils/getRandomRGBA";
export { getRandomRGBColor } from "./utils/getRandomRGBColor";
export { getRecentDate } from "./utils/getRecentDate";
export { getSameIndexValue } from "./utils/getSameIndexValue";
export { getTimeStamp } from "./utils/getTimeStamp";
export { getTimeStep } from "./utils/getTimeStep";
export { getType } from "./utils/getType";
export { getUrlParam } from "./utils/getUrlParam";
export { getValue } from "./utils/getValue";
export { getWeekDay } from "./utils/getWeekDay";
export { getWeekTime } from "./utils/getWeekTime";
export { getYearWeeks } from "./utils/getYearWeeks";
export { groupBy } from "./utils/groupBy";

export { moneyFormat } from "./utils/moneyFormat";

export { paramformat } from "./utils/paramformat";

export { regEmail } from "./utils/regEmail";
export { regIdcard } from "./utils/regIdcard";
export { regIsHas } from "./utils/regIsHas";
export { regPhone } from "./utils/regPhone";

export { shuffleArray } from "./utils/shuffleArray";
export { sleep } from "./utils/sleep";
export { strReplace } from "./utils/strReplace";

export { throttle } from "./utils/throttle";
export { toArray } from "./utils/toArray";
export { toString } from "./utils/toString";
export { toTree } from "./utils/toTree";

export { uniqueArray } from "./utils/uniqueArray";

export { weekInMonthCount } from "./utils/weekInMonthCount";

