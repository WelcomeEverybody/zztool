/**
 * ZZTOOL工具类
 */
"use strict";
const version = "1.1.0";
class ZZTOOL {
    constructor() {
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "v", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // 防抖
        Object.defineProperty(this, "debounce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (() => {
                let timer = null;
                return (callback, wait = 800) => {
                    timer && clearTimeout(timer);
                    timer = setTimeout(callback, wait);
                };
            })()
        });
        // 节流
        Object.defineProperty(this, "throttle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (() => {
                let last = 0;
                return (callback, wait = 800) => {
                    let now = +new Date();
                    if (now - last > wait) {
                        callback();
                        last = now;
                    }
                };
            })()
        });
        this.version = version;
        this.v = version;
        console.log("%czztoll%c" + `V${this.v}`, "background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px", "background: #FFD700; color: #000000; border-radius: 0 3px 3px 0;padding:2px 5px");
        if (ZZTOOL.instance) {
            return ZZTOOL.instance;
        }
        return (ZZTOOL.instance = this);
    }
    /**
     * -----公共方法
     */
    getVersion() {
        return this.version;
    }
    error(msg) {
        throw new Error(msg);
    }
    /**
     * -----类型检测
     */
    getType(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    }
    isArray(obj) {
        return this.getType(obj) === "array";
    }
    isObject(obj) {
        return this.getType(obj) === "object";
    }
    isFunction(obj) {
        return this.getType(obj) === "function";
    }
    isString(obj) {
        return this.getType(obj) === "string";
    }
    isNumber(obj) {
        return this.getType(obj) === "number";
    }
    isBoolean(obj) {
        return this.getType(obj) === "boolean";
    }
    isNaN(obj) {
        return this.getType(obj) === "nan";
    }
    isNull(obj) {
        return this.getType(obj) === "null";
    }
    isUndefined(obj) {
        return this.getType(obj) === "undefined";
    }
    isDate(obj) {
        return this.getType(obj) === "date";
    }
    isRegExp(obj) {
        return this.getType(obj) === "regexp";
    }
    isError(obj) {
        return this.getType(obj) === "error";
    }
    isSymbol(obj) {
        return this.getType(obj) === "symbol";
    }
    isPromise(obj) {
        return this.getType(obj) === "promise";
    }
    isElement(obj) {
        return this.getType(obj) === "element";
    }
    /**
     * -----正则表达式
     */
    regIsHas(str, char) {
        return new RegExp(char).test(str);
    }
    regEmail(str) {
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
    }
    regPhone(str) {
        return /^1[3456789]\d{9}$/.test(str);
    }
    regIdcard(str) {
        if (!/^\d{17}(\d|X)$/i.test(str)) {
            return false;
        }
        const provinceCodes = {
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
        if (birthDate.getFullYear() !== parseInt(year) ||
            birthDate.getMonth() + 1 !== parseInt(month) ||
            birthDate.getDate() !== parseInt(day)) {
            return false;
        }
        const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        const checkCodes = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
        let sum = 0;
        for (let i = 0; i < 17; i++) {
            console.log(str[i], weights[i]);
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
    getFirstChar(str) {
        if (!this.isString(str)) {
            this.error("参数类型错误，必须为字符串");
        }
        return str.charAt(0);
    }
    getLastChar(str) {
        if (!this.isString(str)) {
            this.error("参数类型错误，必须为字符串");
        }
        return str.substring(str.length - 1, str.length);
    }
    getChar(str, start, end) {
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
    getUrlParam(url) {
        return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => ((a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a), {});
    }
    paramformat(obj, type = "url") {
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
    toString(obj) {
        if (!obj)
            this.error;
        const chars = JSON.stringify(obj);
        if (this.getFirstChar(chars) === "\\") {
            return chars.replace(/\\/g, "");
        }
        return chars;
    }
    toArray(obj, index = "") {
        if (this.isUndefined(obj) || this.isNull(obj) || obj === "")
            this.error("该变量没有值");
        if (this.isArray(obj))
            return [...obj];
        const chars = this.isString(obj) ? obj : this.toString(obj);
        const firstChar = this.getFirstChar(chars);
        try {
            if (firstChar === "{" || firstChar === "[")
                return JSON.parse(chars);
            if (chars.includes(","))
                return chars.split(",");
            if (chars.includes(" "))
                return chars.split(" ");
            return chars.split(index);
        }
        catch (e) {
            return chars;
        }
    }
    toNumber(obj) {
        if (this.isUndefined(obj) || this.isNull(obj) || obj === "")
            this.error("该变量没有值");
        if (this.isNumber(obj))
            return obj;
        const chars = this.isString(obj) ? obj : this.toString(obj);
        return this.isNaN(Number(chars)) ? Number(chars) : chars;
    }
    toBoolean(obj) {
        return Boolean(obj);
    }
    /**
     * -----工具函数
     */
    getRandom(min, max) {
        if (!this.isNumber(min) || !this.isNumber(max)) {
            this.error("参数类型错误，必须为数字");
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    getRandomArray(length, min, max) {
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
        return `rgb(${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 255)})`;
    }
    getRandomRGBA() {
        return `rgba(${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 100) / 100})`;
    }
    /**
     * 金额以千分位符格式化
     * @param money
     * @param char
     * @param first
     * @returns
     */
    moneyFormat(money, char = ",", first = "") {
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
     * @param {boolean} returnIndex 是否返回不一致的索引
     */
    dataEqual(obj1, obj2, returnIndex = false) {
        const type1 = this.getType(obj1);
        const type2 = this.getType(obj2);
        if (type1 !== type2) {
            return false;
        }
        if (!returnIndex) {
            return JSON.stringify(obj1) === JSON.stringify(obj2);
        }
        function diffObjects(obj1, obj2) {
            const differences = {};
            const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
            for (const key of keys) {
                if (obj1[key] !== obj2[key]) {
                    // 如果值不相同，且值之一是对象，则递归调用 diffObjects
                    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
                        const nestedDiff = diffObjects(obj1[key], obj2[key]);
                        if (Object.keys(nestedDiff).length > 0) {
                            differences[key] = nestedDiff;
                        }
                    }
                    else {
                        differences[key] = {
                            oldValue: obj1[key] ? obj1[key] : "",
                            newValue: obj2[key] ? obj2[key] : "",
                        };
                    }
                }
            }
            return differences;
        }
        return diffObjects(obj1, obj2);
    }
    /**
     * 判断对象中是否有空值
     * @param {*} obj
     * @param {boolean} index 是否返回空值的索引
     * @returns
     */
    dataEmpty(obj, index = false) {
        if (obj == null ||
            obj == undefined ||
            this.toString(obj) === "{}" ||
            this.toString(obj) === "[]")
            return true;
        const that = this;
        const EmptyIndex = {};
        function empty(obj) {
            for (const key in obj) {
                const value = obj[key];
                if (value === "" ||
                    value == null ||
                    value == undefined ||
                    that.toString(value) === "{}" ||
                    that.toString(value) === "[]") {
                    if (index) {
                        EmptyIndex[key] = value;
                    }
                    else {
                        return true;
                    }
                }
                else if (that.isObject(value) || that.isArray(value)) {
                    return empty(value);
                }
            }
            return false;
        }
        const hasEmpty = empty(obj);
        if (index) {
            return this.toString(EmptyIndex) === "{}" ? false : EmptyIndex;
        }
        return hasEmpty;
    }
    /**
     * 深克隆
     * @param {*} obj
     * @returns
     */
    deepClone(obj) {
        if (obj === null || obj === undefined)
            return obj;
        if (typeof obj !== "object")
            return obj;
        if (obj instanceof Date)
            return new Date(obj.getTime());
        if (Array.isArray(obj)) {
            const arrCopy = [];
            obj.forEach((item, index) => {
                arrCopy[index] = this.deepClone(item);
            });
            return arrCopy;
        }
        if (obj instanceof Object) {
            const objCopy = {};
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
    toTree(data, pid) {
        let tree = [];
        let lookup = {};
        data.forEach((item) => {
            lookup[item.id] = { ...item, children: [] };
        });
        data.forEach((item) => {
            if (item[pid] === null) {
                tree.push(lookup[item.id]);
            }
            else {
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
    groupBy(data, key) {
        return data.reduce((result, item) => {
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
    dataMerge(data1, data2, type = 1) {
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
    dataUnique(data) {
        return [...new Set(data)];
    }
    /**
     * 根据某个字段找对应的数组或对象，如果有两个相同的数据会优先返回第一个
     * @param {*} data
     * @param {*} key
     * @param {*} value
     */
    dataFind(data, key, value) {
        const find = (data) => {
            for (const itemkey in data) {
                if (itemkey === key && data[itemkey] === value) {
                    return { key: itemkey, value: data[itemkey] };
                }
                else if (this.isArray(data[itemkey]) ||
                    this.isObject(data[itemkey])) {
                    const result = find(data[itemkey]);
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
    dataUnEmpty(data) {
        return data.filter((item) => item !== "" && item !== null && item !== undefined);
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
    dataFindValues(str, data, key, nestedKey = "") {
        const values = str.split(",");
        const arrs = [];
        if (nestedKey) {
            const search = (data) => {
                for (const itemkey in data) {
                    const item = data[itemkey];
                    if (!item[nestedKey] &&
                        item[key] &&
                        values.includes(item[key].toString())) {
                        arrs.push(item);
                    }
                    else if (item[nestedKey] && this.isArray(item[nestedKey])) {
                        search(item[nestedKey]);
                    }
                }
            };
            search(data);
        }
        else {
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
     */
    getDateInfo(str) {
        let strs = str;
        if (this.isString(str) && this.regIsHas(str, "-")) {
            strs = str.replaceAll("-", "/");
        }
        const date = strs ? new Date(strs) : new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        const hour = date.getHours().toString().padStart(2, "0");
        const minute = date.getMinutes().toString().padStart(2, "0");
        const second = date.getSeconds().toString().padStart(2, "0");
        return { year, month, day, hour, minute, second };
    }
    /**
     * 获取日期类型
     * @param date
     * @param type
     * @returns
     */
    getDateType(date, type = "Y/M/D h:m:s") {
        if (this.isObject(date)) {
            var { year, month, day, hour, minute, second } = date;
        }
        else {
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
    getDate(str, type = "Y/M/D h:m:s") {
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
     * 获取日期是星期几
     * @param {*} date
     * @returns
     */
    getMonthDays(year = new Date().getFullYear(), month = new Date().getMonth() + 1) {
        let stratDate = new Date(year, month - 1, 1).getTime(), endData = new Date(year, month, 1).getTime();
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
        }
        else {
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
        }
        else if (first == 0) {
            first = 1;
        }
        else {
            first = 8 - first;
        }
        if ((year % 4 == 0 && year % 100 != 0) ||
            (year % 100 == 0 && year % 400 == 0)) {
            var allyears = 366;
        }
        else {
            var allyears = 365;
        }
        let week = Math.ceil((allyears - first) / 7) + (first !== 0 ? 1 : 0);
        return week;
    }
}
Object.defineProperty(ZZTOOL, "instance", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: null
});
export default ZZTOOL;
