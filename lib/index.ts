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
/**
 * 插件公共方法
 */
export function replaceAll(
  str: string,
  target: string,
  replacement: string
): string {
  return str.replace(new RegExp(target, "g"), replacement);
}
function isString(str: string) {
  if (typeof str !== "string") {
    error("参数类型错误，必须为字符串");
  }
}
/**
 * 获取版本号
 * @returns 版本号
 */
export function getVersion() {
  return version;
}
/**
 * 抛出错误
 * @param msg 错误信息
 */
export function error(msg: string) {
  throw new Error(msg);
}

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
/**
 * 节流
 * @param callback 回调函数
 * @param wait 等待时间
 */
export const throttle = (function () {
  let last = 0;
  return (callback: Function, wait = 800) => {
    let now = +new Date();
    if (now - last > wait) {
      callback();
      last = now;
    }
  };
})();
/**
 * 获取类型
 * @param data
 * @returns 类型
 */
export function getType(data: any) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
/**
 * 判断是否包含某字符
 * @param str 字符串
 * @param char 字符
 * @returns 是否包含
 */
export function regIsHas(str: string, char: string) {
  return new RegExp(char).test(str);
}
/**
 * 判断是否为邮箱
 * @param str 字符串
 * @returns 是否为邮箱
 */
export function regEmail(str: string) {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
}
/**
 * 判断是否为手机号
 * @param str 字符串
 * @returns 是否为手机号
 */
export function regPhone(str: string) {
  return /^1[3456789]\d{9}$/.test(str);
}
/**
 * 判断是否为身份证
 * @param str 字符串
 * @returns 是否为身份证
 */
export function regIdcard(str: string) {
  if (!/^\d{17}(\d|X)$/i.test(str)) return false;

  const provinceCodes: any = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外",
  };
  if (!provinceCodes[str.substring(0, 2)]) return false;
  const birthday = str.substring(6, 14);
  const year = birthday.substring(0, 4);
  const month = birthday.substring(4, 6);
  const day = birthday.substring(6, 14);
  const birthDate = new Date(year + "/" + month + "/" + day);
  if (
    birthDate.getFullYear() !== parseInt(year) ||
    birthDate.getMonth() + 1 !== parseInt(month) ||
    birthDate.getDate() !== parseInt(day)
  ) {
    return false;
  }
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const checkCodes = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += Number(str[i]) * weights[i];
  }
  const calculatedCheckCode = checkCodes[sum % 11];
  if (str[17].toUpperCase() !== calculatedCheckCode) {
    return false;
  }

  return true;
}
/**
 * 获取第一个字符
 * @param str 字符串
 * @returns 第一个字符
 */
export function getFirstChar(str: string) {
  isString(str);
  return str.charAt(0);
}
/**
 * 获取最后一个字符
 * @param str 字符串
 * @returns 最后一个字符
 */
export function getLastChar(str: string) {
  isString(str);
  return str.substring(str.length - 1, str.length);
}
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
/**
 * 获取字符
 * @param str 字符串
 * @param start 开始位置
 * @param end 结束位置
 * @returns 字符
 */
export function getChar(str: string, start: number, end: number) {
  isString(str);
  const char = str.substring(start, end);
  return char ? char : "";
}
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
/**
 * 参数格式化
 * @param obj 参数
 * @param type 类型
 * @returns 格式化后的参数
 */
export function paramformat(obj: any, type = "url") {
  if (type === "url") {
    return Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join("&");
  }
  if (type === "json") {
    return JSON.stringify(obj);
  }
  if (type === "formData") {
    const formData = new FormData();
    for (const key in obj) {
      formData.append(key, obj[key]);
    }
    return formData;
  }
}
/**
 * 转字符串
 * @param obj 数据
 * @returns 字符串
 */
export function toString(obj: any) {
  if (!obj) error("该变量没有值");
  const chars = JSON.stringify(obj);
  if (getFirstChar(chars) === "\\") {
    return chars.replace(/\\/g, "");
  }
  return chars;
}
/**
 * 转数组
 * @param obj 数据
 * @param index 分隔符
 * @returns 数组
 */
export function toArray(obj: any, index = "") {
  if (!obj) error("该变量没有值");
  if (Array.isArray(obj)) return [...obj];
  const chars = typeof obj === "string" ? obj : toString(obj);
  const firstChar = getFirstChar(chars);
  try {
    if (firstChar === "{" || firstChar === "[") return JSON.parse(chars);
    if (chars.includes(",")) return chars.split(",");
    if (chars.includes(" ")) return chars.split(" ");
    return chars.split(index);
  } catch (e) {
    return chars;
  }
}
/**
 * 获取随机数
 * @param min 最小值
 * @param max 最大值
 */
export function getRandom(min: number, max: number) {
  if (typeof min !== "number" || typeof max !== "number") {
    error("参数类型错误，必须为数字");
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * 获取随机数组
 * @param length 长度
 * @param min 最小值
 * @param max 最大值
 */
export function getRandomArray(length: number, min: number, max: number) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(getRandom(min, max));
  }
  return arr;
}
/**
 * 获取随机字符串
 * @param length 长度
 * @param charStr 自定义字符
 */
export function getRandomString(length: number = 32, charStr = "") {
  const chars = charStr
    ? charStr
    : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}
/**
 * 随机打乱数组
 * @param array 数组
 */
export function shuffleArray(array: any[]) {
  if (!Array.isArray(array)) return array;
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
/**
 * 获取随机颜色
 */
export function getRandomColor() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}
/**
 * 获取随机rgb颜色
 */
export function getRandomRGBColor() {
  return `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`;
}
/**
 * 获取随机rgba颜色
 */
export function getRandomRGBA() {
  return `rgba(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)},${
    getRandom(0, 100) / 100
  })`;
}
/**
 * 金额格式化
 * @param money 金额
 * @param char 分隔符
 * @param first 首字符
 */
export function moneyFormat(money: string | number, char = ",", first = "") {
  let str = money.toString();
  let index = str.indexOf(".");
  if (index === -1) {
    index = str.length;
  }
  while (index > 3) {
    index -= 3;
    str = str.slice(0, index) + char + str.slice(index);
  }
  return first ? first + str : str;
}
/**
 * 数据对比
 * @param obj1 对象1
 * @param obj2 对象2
 * @param options 配置
 * @param {Boolean} options.returnKeys 是否返回不一致的key
 * @param {Boolean} options.arrayDiff  是否返回数组差异
 * @returns boolean | Array<string>
 */
export function dataEqual(
  obj1: any,
  obj2: any,
  options = {}
): boolean | Array<string> {
  const defaultOptions = { returnKeys: false, arrayDiff: true };
  const { returnKeys } = Object.assign(defaultOptions, options);

  const differingKeys: Array<string> = [];
  function isObject(value: any) {
    return value && typeof value === "object" && !Array.isArray(value);
  }
  const deepCompare = (value1: any, value2: any, key: string) => {
    if (isObject(value1) && isObject(value2)) {
      const data = dataEqual(value1, value2, options);
      if (Array.isArray(data)) {
        data.forEach((k: any) => differingKeys.push(`${key}.${k}`));
      }
    } else if (Array.isArray(value1) && Array.isArray(value2)) {
      // 深对比
      value1.forEach((v, i) => {
        if (typeof v == "object" && typeof value2[i] == "object") {
          const data = dataEqual(v, value2[i], options);
          if (Array.isArray(data)) {
            data.forEach((k) => differingKeys.push(`${key}.${i}.${k}`));
          }
        } else if (v !== value2[i]) {
          differingKeys.push(`${key}.${i}`);
        }
      });
      // if (arrayDiff) {
      // } 
      // 浅对比 
      // else {
        // if (value1.length !== value2.length) {
        //   differingKeys.push(key);
        // } else {
        //   const tempData1 = [...value1];
        //   const tempData2 = [...value2];
        //   const isEqual = tempData1.every((item1) => {
        //     if (isObject(item1)) {
        //       const index = tempData2.findIndex((item2) => isObject(item2) ? dataEqual(item1, item2, options) : false);
        //       if (index === -1) return false;
        //       tempData2.splice(index, 1);
        //       return true;
        //     } else {
        //       const index = tempData2.indexOf(item1);
        //       if (index === -1) return false;
        //       tempData2.splice(index, 1);
        //       return true;
        //     }
        //   });

        //   if (!isEqual) differingKeys.push(key);
        // }
      // }
    } else if (value1 !== value2) {
      differingKeys.push(key);
    }
  };
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      deepCompare(obj1[key], obj2[key], key);
    }
  }
  return returnKeys ? differingKeys : differingKeys.length > 0;
}
/**
 * 判断对象中是否有空值
 * @param {*} obj
 * @param {boolean} returnKeys 是否返回空值的索引
 * @param {string} parentKey 父级key
 * @returns
 */
export function dataEmpty(
  obj: any,
  returnKeys: boolean = false,
  parentKey: string = ""
): Array<string> | boolean {
  const emptyKeys: string[] = [];

  function checkEmpty(value: any): boolean {
    return (
      value === "" ||
      value === null ||
      value === undefined ||
      (typeof value === "object" &&
        value !== null &&
        (Array.isArray(value)
          ? value.length === 0
          : Object.keys(value).length === 0))
    );
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];
      if (typeof value === "object" && value !== null && !checkEmpty(value)) {
        const nestedResult = dataEmpty(value, true, fullKey);
        if (Array.isArray(nestedResult)) {
          emptyKeys.push(...nestedResult);
        }
      } else if (checkEmpty(value)) {
        emptyKeys.push(fullKey);
      }
    }
  }

  if (returnKeys) {
    return emptyKeys;
  }

  return emptyKeys.length > 0;
}
/**
 * 获取对应索引的value
 * @param obj
 * @param index
 * @returns
 */
export function getSameIndexValue(
  obj: any,
  index: string,
  parentKey: string = ""
): Array<{ key: string; value: any }> {
  const arr: { key: string; value: any }[] = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];
      if (typeof value === "object") {
        arr.push(...getSameIndexValue(value, index, fullKey));
      } else if (key == index) {
        arr.push({
          key: fullKey,
          value,
        });
      }
    }
  }
  return arr;
}
/**
 * 深克隆
 * @param {*} obj
 * @returns
 */
export function deepClone(obj: any) {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (Array.isArray(obj)) {
    const arrCopy: any[] = [];
    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item);
    });
    return arrCopy;
  }
  if (obj instanceof Object) {
    const objCopy: any = {};
    Object.keys(obj).forEach((key) => {
      objCopy[key] = deepClone(obj[key]);
    });
    return objCopy;
  }
  error("Unsupported data type");
}

/**
 * 修改对象中的下标
 * index和newIndex必须是字符串，多个下标用逗号分隔
 * @param {*} data
 * @param {*} index
 * @param {*} newIndex
 * @returns {object}
 */
export function dataChangeIndex(
  data: object,
  index: string,
  newIndex: string
): object {
  if (typeof data !== "object" || data === null) return data;
  const indexArr = toArray(index, ",");
  const newIndexArr = toArray(newIndex, ",");
  if (indexArr.length !== newIndexArr.length) {
    error("下表必须和新下标长度一致");
  }
  indexArr.forEach((_item: any, i: any) =>
    hfn(data, indexArr[i], newIndexArr[i])
  );
  function hfn(data: any, index: string, newIndex: string) {
    if (typeof data !== "object" || data === null) return;
    Object.keys(data).forEach((key) => {
      if (key === index) data[newIndex] = data[key];
      if (typeof data[key] === "object") hfn(data[key], index, newIndex);
    });
    if (data.hasOwnProperty(index)) delete data[index];
  }
  return data;
}

/**
 * 转树形结构
 * @param {*} data
 * @param {*} pid   父级id
 */
export function toTree(data: any[], pid: string) {
  let tree: any = [];
  let lookup: any = {};
  data.forEach((item) => {
    lookup[item.id] = Object.assign(Object.assign({}, item), { children: [] });
  });
  data.forEach((item) => {
    if (item[pid] === null) {
      tree.push(lookup[item.id]);
    } else {
      lookup[item[pid]].children.push(lookup[item.id]);
    }
  });
  return tree;
}
/**
 * 数据分组
 * @param {*} data
 * @param {*} key
 */
export function groupBy(data: any[], key: string) {
  return data.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}
/**
 * 合并数据，取交集/并集/差集/补集
 * @param {*} data1
 * @param {*} data2
 * @param {*} type 1：并集，2：交集，3：差集，4：补集
 * 并集：合并去重
 * 交集：两个数组都有的值
 * 差集：data1中有，data2中没有的值
 * 补集：两个数组中各自没有的值
 */
export function dataMerge(data1: any[], data2: any[], type: number = 1) {
  if (type === 1) {
    return [...new Set([...data1, ...data2])];
  }
  if (type === 2) {
    return data1.filter((v) => data2.includes(v));
  }
  if (type === 3) {
    return data1.filter((v) => !data2.includes(v));
  }
  if (type === 4) {
    return [
      ...data1.filter((v) => !data2.includes(v)),
      ...data2.filter((v) => !data1.includes(v)),
    ];
  }
  return [];
}
/**
 * 数组去重
 * @param data 数组
 */
export function uniqueArray(data: any[]) {
  return [...new Set(data)];
}
/**
 * 数组分块
 * 将数组分成size块
 * @param data 数组
 * @param size 大小
 */
export function chunkArray(data: any[], size: number): any[] {
  if (size <= 1) {
    return [data];
  }
  const result: any[] = [];
  const lng = Math.ceil(data.length / size);
  for (let i = 0; i < size; i++) {
    result.push(data.slice(i * lng, (i + 1) * lng));
  }
  return result;
}
/**
 * 数组分块
 * 将数组分成每块为size大小
 * @param arr 数组
 * @param size 大小
 */
export function chunkArrayItem(arr: any[], size: number): any[] {
  const result: any[] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
/**
 * 根据某个字段找对应的数组或对象，如果有两个相同的数据会优先返回第一个
 * @param {*} data
 * @param {*} key
 * @param {*} value
 */
export function dataFind(data: any, key: any, value: any) {
  const find = (data: any) => {
    for (const itemkey in data) {
      if (itemkey === key && data[itemkey] === value) {
        return data;
      } else if (
        Array.isArray(data[itemkey]) ||
        typeof data[itemkey] === "object"
      ) {
        const result: any = find(data[itemkey]);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };
  return find(data);
}
/**
 * 数组去空
 * @param data 数组
 */
export function arrayTrim(data: any[]) {
  return data.filter((item) => item);
}
/**
 * 获取日期信息
 * @param date
 * @returns {year,month,day,hour,minute,second}
 */
export function getDateInfo(str: any): {
  year: any;
  month: any;
  day: any;
  hour: any;
  minute: any;
  second: any;
} {
  let strs = str;
  // 兼容ios
  if (typeof str === "string" && regIsHas(str, "-")) {
    strs = replaceAll(str, "-", "/");
  }
  const date = strs ? new Date(strs) : new Date();
  const year: any = date.getFullYear();
  const month: any = (date.getMonth() + 1).toString().padStart(2, "0");
  const day: any = date.getDate().toString().padStart(2, "0");
  const hour: any = date.getHours().toString().padStart(2, "0");
  const minute: any = date.getMinutes().toString().padStart(2, "0");
  const second: any = date.getSeconds().toString().padStart(2, "0");
  return { year, month, day, hour, minute, second };
}
/**
 * 获取日期类型
 * @param date
 * @param type
 * @returns
 */
export function getDateType(date: any, type = "Y/M/D h:m:s") {
  if (typeof date == "object") {
    var { year, month, day, hour, minute, second } = date;
  } else {
    var { year, month, day, hour, minute, second } = getDateInfo(date);
  }
  return type
    .replace("Y", year)
    .replace("M", month)
    .replace("D", day)
    .replace("h", hour)
    .replace("m", minute)
    .replace("s", second);
}
/**
 * 获取日期
 * 如果只有一个参数，str会被当为type传递
 * @param str
 * @param type
 * @returns
 */
export function getDate(str: any = "", type = "Y/M/D h:m:s") {
  if (arguments.length === 0) {
    return getDateType(getDateInfo(new Date()), "Y/M/D h:m:s");
  }
  if (arguments.length === 1) {
    return getDateType(getDateInfo(new Date()), str);
  }
  return getDateType(getDateInfo(str), type);
}
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
/**
 * 获取月份天数
 * @param {*} date
 * @returns
 */
export function getMonthDays(
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1
) {
  return new Date(year, month, 0).getDate();
}
/**
 * 获取日期是星期几
 * @param {*} date
 * @returns
 */
export function getWeekDay(date: any = new Date()) {
  const weekDays = ["日", "一", "二", "三", "四", "五", "六"];
  return weekDays[new Date(date).getDay()];
}
/**
 * 获取本月有几周
 * @returns
 */
export function weekInMonthCount() {
  //设置时间为本月的1号
  let date = new Date(new Date().setDate(1) || new Date().setDate(1));
  let firstWeekDate;
  if (date.getDay() === 0) {
    firstWeekDate = 6;
  } else {
    firstWeekDate = date.getDay() - 1;
  }
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  let monthHasDays = date.getDate() + firstWeekDate;
  return Math.ceil(monthHasDays / 7);
}
/**
 * 获取某年中有几周
 * @param {*} year
 * @returns
 */
export function getYearWeeks(year: any = new Date().getFullYear()) {
  let first = new Date(year, 0, 1).getDay();
  if (first == 1) {
    first = 0;
  } else if (first == 0) {
    first = 1;
  } else {
    first = 8 - first;
  }
  if (
    (year % 4 == 0 && year % 100 != 0) ||
    (year % 100 == 0 && year % 400 == 0)
  ) {
    var allyears = 366;
  } else {
    var allyears = 365;
  }
  let week = Math.ceil((allyears - first) / 7) + (first !== 0 ? 1 : 0);
  return week;
}
/**
 * 获取两个日期之间的日期
 * @param {*} date
 * @param {*} date1
 * @param {*} days
 * @returns {Array}
 */
export function getBetweenDate(date: any, date1: any, days: any = false) {
  const oneDay = 24 * 60 * 60 * 1000;
  const dateTime = getTimeStamp(date);
  const dateTime1 = getTimeStamp(date1);
  if (days) {
    return Math.abs(dateTime - dateTime1) / oneDay;
  }
  return Array.from({ length: Math.abs(dateTime - dateTime1) / oneDay }).map(
    (_, i) => {
      const time =
        dateTime > dateTime1 ? dateTime1 - i * oneDay : dateTime + i * oneDay;
      return getDate(new Date(time), "Y-M-D");
    }
  );
}
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
/**
 * 获取时间段
 * @param {*} start 开始时间
 * @param {*} end 结束时间
 * @param {*} step 步长
 * @param {*} type hh:mm:ss hh:mm
 * @returns
 */
export function getTimeStep(
  start: string,
  end: string,
  step: any = "01:00",
  type: any = "hh:mm"
) {
  const toSeconds = (time: string) =>
    time
      .split(":")
      .map(Number)
      .reduce((a, v, i) => a + v * [3600, 60, 1][i], 0);
  const format = (time: number) =>
    [Math.floor(time / 3600), Math.floor((time % 3600) / 60), time % 60]
      .map((v) => String(v).padStart(2, "0"))
      .join(":");

  const startTime = toSeconds(start);
  const endTime = toSeconds(end);
  const stepTime = toSeconds(step);

  const result = [];
  for (let time = startTime; time <= endTime; time += stepTime) {
    result.push(type === "hh:mm:ss" ? format(time) : format(time).slice(0, 5));
  }

  return result;
}
/**
 * 获取时间戳
 * @param {*} date
 * @param {*} mill 是否返回毫秒级时间戳
 * @returns
 */
export function getTimeStamp(date: any = new Date(), mill = true) {
  return mill
    ? new Date(date).getTime()
    : Math.floor(new Date(date).getTime() / 1000);
}
/**
 * 计算百分比
 * @param {*} part
 * @param {*} total
 * @param {*} decimalPlaces
 * @returns
 */
export function getPercentage(part: number, total: number, decimalPlaces = 2) {
  return ((part / total) * 100).toFixed(decimalPlaces);
}

/**
 * 延迟函数
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 获取索引值
 * 仅适用于 对象嵌套
 * 'xxx.xxx.xxx' 形式
 * [xxx,xxx,xxx] 形式
 * @param obj
 * @param path
 * @returns
 */
export function getValue(obj: any, path: any) {
  if (typeof path === "string" && regIsHas(path, ".")) {
    path = path.split(".");
  }
  if (!Array.isArray(path) || !path) {
    return "";
  }
  return path.reduce((acc: any, key: any) => acc && acc[key], obj);
}
