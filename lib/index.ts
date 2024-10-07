/**
 * ZZTOOL工具类
 */
"use strict";
const version = "1.1.4";
class ZZTOOL {
  static instance: any = null;
  version: string;
  v: string;
  constructor() {
    this.version = version;
    this.v = version;
    if (ZZTOOL.instance) {
      return ZZTOOL.instance;
    }
    console.log(
      "%czztoll%c" + `V${this.v}`,
      "background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px",
      "background: #FFD700; color: #000000; border-radius: 0 3px 3px 0;padding:2px 5px"
    );
    return (ZZTOOL.instance = this);
  }
  /**
   * -----公共方法
   */
  getVersion() {
    return this.version;
  }
  error(msg: string) {
    throw new Error(msg);
  }
  // 防抖
  debounce = (() => {
    let timer: any = null;
    return (callback: Function, wait = 800) => {
      timer && clearTimeout(timer);
      timer = setTimeout(callback, wait);
    };
  })();
  // 节流
  throttle = (() => {
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
   * -----类型检测
   */
  getType(obj: any) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }
  isArray(obj: any) {
    return this.getType(obj) === "array";
  }
  isObject(obj: any) {
    return this.getType(obj) === "object";
  }
  isFunction(obj: any) {
    return this.getType(obj) === "function";
  }
  isString(obj: any) {
    return this.getType(obj) === "string";
  }
  isNumber(obj: any) {
    return this.getType(obj) === "number";
  }
  isBoolean(obj: any) {
    return this.getType(obj) === "boolean";
  }
  isNaN(obj: any) {
    return this.getType(obj) === "nan";
  }
  isNull(obj: any) {
    return this.getType(obj) === "null";
  }
  isUndefined(obj: any) {
    return this.getType(obj) === "undefined";
  }
  isDate(obj: any) {
    return this.getType(obj) === "date";
  }
  isRegExp(obj: any) {
    return this.getType(obj) === "regexp";
  }
  isError(obj: any) {
    return this.getType(obj) === "error";
  }
  isSymbol(obj: any) {
    return this.getType(obj) === "symbol";
  }
  isPromise(obj: any) {
    return this.getType(obj) === "promise";
  }
  isElement(obj: any) {
    return this.getType(obj) === "element";
  }
  /**
   * -----正则表达式
   */
  regIsHas(str: string, char: string) {
    return new RegExp(char).test(str);
  }
  regEmail(str: string) {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
  }
  regPhone(str: string) {
    return /^1[3456789]\d{9}$/.test(str);
  }
  regIdcard(str: string) {
    if (!/^\d{17}(\d|X)$/i.test(str)) {
      return false;
    }
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
    if (!provinceCodes[str.substring(0, 2)]) {
      return false;
    }
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
      sum += this.toNumber(str[i]) * weights[i];
    }
    const calculatedCheckCode = checkCodes[sum % 11];
    if (str[17].toUpperCase() !== calculatedCheckCode) {
      return false;
    }

    return true;
  }

  /**
   * -----字符串操作
   */
  getFirstChar(str: string) {
    if (!this.isString(str)) {
      this.error("参数类型错误，必须为字符串");
    }
    return str.charAt(0);
  }
  getLastChar(str: string) {
    if (!this.isString(str)) {
      this.error("参数类型错误，必须为字符串");
    }
    return str.substring(str.length - 1, str.length);
  }
  getChar(str: string, start: number, end: number) {
    if (!this.isString(str)) {
      this.error("参数类型错误，必须为字符串");
    }
    const char = str.substring(start, end);
    if (!char) {
      return "";
    }
    return char;
  }
  /**
   * 参数获取
   */
  getUrlParam(url = '') {
    if(!url){
      url = window.location.href;
    }
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
      (a: any, v) => (
        (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
      ),
      {}
    );
  }
  paramformat(obj: any, type = "url") {
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
   * -----转类型
   */
  toString(obj: any) {
    if (!obj) this.error;
    const chars = JSON.stringify(obj);
    if (this.getFirstChar(chars) === "\\") {
      return chars.replace(/\\/g, "");
    }
    return chars;
  }
  toArray(obj: any, index = "") {
    if (this.isUndefined(obj) || this.isNull(obj) || obj === "")
      this.error("该变量没有值");
    if (this.isArray(obj)) return [...obj];
    const chars = this.isString(obj) ? obj : this.toString(obj);
    const firstChar = this.getFirstChar(chars);
    try {
      if (firstChar === "{" || firstChar === "[") return JSON.parse(chars);
      if (chars.includes(",")) return chars.split(",");
      if (chars.includes(" ")) return chars.split(" ");
      return chars.split(index);
    } catch (e) {
      return chars;
    }
  }
  toNumber(obj: any) {
    if (this.isUndefined(obj) || this.isNull(obj) || obj === "")
      this.error("该变量没有值");
    if (this.isNumber(obj)) return obj;
    const chars = this.isString(obj) ? obj : this.toString(obj);
    return this.isNaN(Number(chars)) ? Number(chars) : chars;
  }
  toBoolean(obj: any) {
    return Boolean(obj);
  }
  /**
   * -----工具函数
   */
  getRandom(min: number, max: number) {
    if (!this.isNumber(min) || !this.isNumber(max)) {
      this.error("参数类型错误，必须为数字");
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  getRandomArray(length: number, min: number, max: number) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(this.getRandom(min, max));
    }
    return arr;
  }
  getRandomColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  }
  getRandomRGBColor() {
    return `rgb(${this.getRandom(0, 255)},${this.getRandom(
      0,
      255
    )},${this.getRandom(0, 255)})`;
  }
  getRandomRGBA() {
    return `rgba(${this.getRandom(0, 255)},${this.getRandom(
      0,
      255
    )},${this.getRandom(0, 255)},${this.getRandom(0, 100) / 100})`;
  }
  /**
   * 金额以千分位符格式化
   * @param money
   * @param char
   * @param first
   * @returns
   */
  moneyFormat(money: string | number, char = ",", first = "") {
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
   * -----数据处理
   */
  /**
   * 数据对比
   * 以obj1为基准进行比对
   * @param {*} obj1
   * @param {*} obj2
   * @param {boolean} returnKeys  是否返回不一致的索引
   */
  dataEqual(obj1: any, obj2: any, returnKeys: boolean = false):boolean|Array<string> {
    const differingKeys: Array<string> = [];
    function isObject(value: any) {
      return value && typeof value === "object" && !Array.isArray(value);
    }
    const deepCompare = (value1: any, value2: any, key: string) => {
      if (isObject(value1) && isObject(value2)) {
        const data = this.dataEqual(value1, value2, returnKeys);
        if(Array.isArray(data)){
          data.forEach((k:any) =>
            differingKeys.push(`${key}.${k}`)
          );
        }
      }
      if (Array.isArray(value1) && Array.isArray(value2)) {
        if (
          value1.length !== value2.length ||
          value1.some((v, i) => v !== value2[i])
        ) {
          differingKeys.push(key);
        }
        return;
      }
      if (value1 !== value2) {
        differingKeys.push(key);
      }
    }
    for (let key in obj1) {
      if (obj1.hasOwnProperty(key)) {
        const value1 = obj1[key];
        const value2 = obj2[key];
        deepCompare(value1, value2, key);
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
  dataEmpty(
    obj: any,
    returnKeys = false,
    parentKey = ""
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
          const nestedResult = this.dataEmpty(value, true, fullKey);
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
   * 深克隆
   * @param {*} obj
   * @returns
   */
  deepClone(obj: any) {
    if (obj === null || obj === undefined) return obj;
    if (typeof obj !== "object") return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (Array.isArray(obj)) {
      const arrCopy: any[] = [];
      obj.forEach((item, index) => {
        arrCopy[index] = this.deepClone(item);
      });
      return arrCopy;
    }
    if (obj instanceof Object) {
      const objCopy: any = {};
      Object.keys(obj).forEach((key) => {
        objCopy[key] = this.deepClone(obj[key]);
      });
      return objCopy;
    }
    this.error("Unsupported data type");
  }
  /**
   * 转树形结构
   * @param {*} data
   * @param {*} pid   父级id
   */
  toTree(data: any[], pid: string) {
    let tree: any[] = [];
    let lookup: any = {};

    data.forEach((item) => {
      lookup[item.id] = { ...item, children: [] };
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
  groupBy(data: any[], key: string) {
    return data.reduce((result: any, item: any) => {
      const groupKey = item[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(item);
      return result;
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
  dataMerge(data1: any[], data2: any[], type: number = 1) {
    switch (type) {
      case 1:
        return [...new Set([...data1, ...data2])];
      case 2:
        return data1.filter((item) => data2.includes(item));
      case 3:
        return data1.filter((item) => !data2.includes(item));
      case 4:
        return data1
          .filter((item) => !data2.includes(item))
          .concat(data2.filter((item) => !data1.includes(item)));
    }
  }
  /**
   * 数组去重
   */
  dataUnique(data: any[]) {
    return [...new Set(data)];
  }
  /**
   * 根据某个字段找对应的数组或对象，如果有两个相同的数据会优先返回第一个
   * @param {*} data
   * @param {*} key
   * @param {*} value
   */
  dataFind(data: any, key: any, value: any) {
    const find = (data: any) => {
      for (const itemkey in data) {
        if (itemkey === key && data[itemkey] === value) {
          return { key: itemkey, value: data[itemkey] };
        } else if (
          this.isArray(data[itemkey]) ||
          this.isObject(data[itemkey])
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
   */
  dataUnEmpty(data: any[]) {
    return data.filter(
      (item) => item !== "" && item !== null && item !== undefined
    );
  }
  /**
   * 根据str分割后的数组 在data数据中查咋对应key等于str里的值
   * @param {*} str
   * @param {*} data
   * @param {*} key
   * @param {*} nestedKey
   * @returns
   * zztool.dataFindValues(
   *   '1,2,5',
   *   [
   *     {id:1,name:'张三'},
   *     {id:2,name:'李四'},
   *     {id:3,name:'王五',list:[{id:5,name:'一二三'}]}
   *   ],
   *   'id','list'
   *  )
   */
  dataFindValues(
    str: string,
    data: any[],
    key: string,
    nestedKey: string = ""
  ) {
    const values = str.split(",");
    const arrs: any[] = [];
    if (nestedKey) {
      const search = (data: any[]) => {
        for (const itemkey in data) {
          const item = data[itemkey];
          if (
            !item[nestedKey] &&
            item[key] &&
            values.includes(item[key].toString())
          ) {
            arrs.push(item);
          } else if (item[nestedKey] && this.isArray(item[nestedKey])) {
            search(item[nestedKey]);
          }
        }
      };
      search(data);
    } else {
      if (values.length === 1) {
        const found = data.find((item) => item[key] === values[0]);
        return found ? [found] : [];
      }
      return data.filter((item) => values.includes(item[key].toString()));
    }
    return arrs;
  }
  /**
   * -----日期
   * @param date
   * @returns {year,month,day,hour,minute,second}
   */
  getDateInfo(str: any) {
    let strs = str;
    // 兼容ios
    if (this.isString(str) && this.regIsHas(str, "-")) {
      strs = str.replaceAll("-", "/");
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
  getDateType(date: any, type = "Y/M/D h:m:s") {
    if (this.isObject(date)) {
      var { year, month, day, hour, minute, second } = date;
    } else {
      var { year, month, day, hour, minute, second } = this.getDateInfo(date);
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
   * 如果只有一个参数，str会被当为type传递
   * @param str
   * @param type
   * @returns
   */
  getDate(str:any = "", type = "Y/M/D h:m:s") {
    if(arguments.length === 0){
      return this.getDateType(this.getDateInfo(new Date()), "Y/M/D h:m:s");
    }
    if (arguments.length === 1) {
      return this.getDateType(this.getDateInfo(new Date()), str);
    }
    return this.getDateType(this.getDateInfo(str), type);
  }
  /**
   * date不为空时获取date的周日期
   * @param {*} date
   * @returns
   */
  getWeekTime(date = new Date()) {
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
  getMonthDays(
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1
  ) {
    let stratDate = new Date(year, month - 1, 1).getTime(),
      endData = new Date(year, month, 1).getTime();
    let days = (endData - stratDate) / (1000 * 60 * 60 * 24);
    return days;
  }
  /**
   * 获取日期是星期几
   * @param {*} date
   * @returns
   */
  getWeekDay(date = new Date()) {
    const week = ["日", "一", "二", "三", "四", "五", "六"];
    return week[new Date(date).getDay()];
  }
  /**
   * 获取本月有几周
   * @returns
   */
  weekInMonthCount() {
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
  getYearWeeks(year = new Date().getFullYear()) {
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
   * 获取两个日期之前的日期
   * @param {*} date
   * @param {*} date1
   */
  getBetwenDate(date: any, date1: any) {
    // 一天的时间戳
    const oneDay = 24 * 60 * 60 * 1000;
    const dateTime = new Date(date).getTime();
    const dateTime1 = new Date(date1).getTime();
    const list = [];
    for (let i = 0; i < Math.abs(dateTime - dateTime1) / oneDay; i++) {
      const time =
        dateTime > dateTime1 ? dateTime - i * oneDay : dateTime + i * oneDay;
      list.push(this.getDate(new Date(time), "Y-M-D"));
    }
    return list;
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
  getDateList(date: any, type: number, hasNow = true, step = NaN) {
    if (!date) return [];
    const format = "Y-M-D";
    const oneDay = 24 * 60 * 60 * 1000;
    let now = new Date(date).getTime();
    if (!hasNow) {
      now -= oneDay;
    }
    // helper function
    function getPrevMonth(date: any) {
      const month = date.getMonth();
      return {
        year: month === 0 ? date.getFullYear() - 1 : date.getFullYear(),
        month: month === 0 ? 12 : month,
      };
    }
    const generateDateList = (count: number) =>
      Array.from({ length: count }, (_, i) => {
        const time = now - (count - i - 1) * oneDay;
        return this.getDateType(new Date(time), format);
      });

    // start
    const { year, month, day } = this.getDateInfo(date);
    if (type && !step) {
      switch (type) {
        case 1:
          return generateDateList(3);
        case 2:
          return generateDateList(7);
        case 3:
          const { year: prevYear, month: prevMonth } = getPrevMonth(
            new Date(now)
          );
          return this.getBetwenDate(`${prevYear}-${prevMonth}-${day}`, now);
        case 4:
          return this.getBetwenDate(
            `${year - 1}/${month}/${day}`,
            `${year}/${month}/${day}`
          );
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
   * @returns
   */
  getTimeStep(start: string, end: string, step = "01:00") {
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    const [stepHour, stepMinute] = step.split(":").map(Number);

    const startTime = startHour * 60 + startMinute;
    const endTime = endHour * 60 + endMinute;
    const stepTime = stepHour * 60 + stepMinute;

    const result = [];
    for (let time = startTime; time <= endTime; time += stepTime) {
      const hour = String(Math.floor(time / 60)).padStart(2, "0");
      const minute = String(time % 60).padStart(2, "0");
      result.push(`${hour}:${minute}`);
    }

    return result;
  }
  /**
   * -----计算
   */
  /**
   * 计算百分比
   * @param {*} part
   * @param {*} total
   * @param {*} decimalPlaces
   * @returns
   */
  calculatePercentage(part:number, total:number, decimalPlaces = 2) {
    if (total === 0) return 0;
    return ((part / total) * 100).toFixed(decimalPlaces);
  }

}
export default ZZTOOL;
