/**
 * ZZTOOL工具类
 * version: 1.0.0
 */
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
        this.version = '1.0.0';
        this.v = '1.0.0';
        if (ZZTOOL.instance) {
            return ZZTOOL.instance;
        }
        return ZZTOOL.instance = this;
    }
    /**
     * 公共方法
     */
    getVersion() {
        return this.version;
    }
    error(msg) {
        throw new Error(msg);
    }
    /**
     * 类型检测
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
    ;
    isDate(obj) {
        return this.getType(obj) === "date";
    }
    ;
    isRegExp(obj) {
        return this.getType(obj) === "regexp";
    }
    ;
    isError(obj) {
        return this.getType(obj) === "error";
    }
    isSymbol(obj) {
        return this.getType(obj) === "symbol";
    }
    isPromise(obj) {
        return this.getType(obj) === "promise";
    }
    ;
    isElement(obj) {
        return this.getType(obj) === "element";
    }
    ;
    /**
     * 正则表达式
     */
    regIsHas(str, char) {
        return new RegExp(char).test(str);
    }
    /**
     * 字符串操作
     */
    getFirstChar(str) {
        if (!this.isString(str)) {
            this.error("参数类型错误，必须为字符串");
        }
        return str.substring(0, 1);
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
            const method = {
                "{": () => {
                    return Object.entries(JSON.parse(chars));
                },
                "[": () => { return JSON.parse(chars); }
            };
            if (method[firstChar]) {
                return method[firstChar]();
            }
            if (this.regIsHas(chars, ",")) {
                return chars.split(",");
            }
            if (this.regIsHas(chars, " ")) {
                return chars.split(" ");
            }
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
        if (this.isBoolean(obj))
            return obj;
        return obj ? true : false;
    }
    ;
    /**
     * 工具函数
     */
    getRandom(min, max) {
        if (!this.isNumber(min) || !this.isNumber(max)) {
            this.error("参数类型错误，必须为数字");
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ;
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
        return `rgba(${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 1)})`;
    }
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
                    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                        const nestedDiff = diffObjects(obj1[key], obj2[key]);
                        if (Object.keys(nestedDiff).length > 0) {
                            differences[key] = nestedDiff;
                        }
                    }
                    else {
                        differences[key] = {
                            oldValue: obj1[key] ? obj1[key] : '',
                            newValue: obj2[key] ? obj2[key] : ''
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
        if (obj == null || obj == undefined || this.toString(obj) === "{}" || this.toString(obj) === "[]")
            return true;
        const that = this;
        const EmptyIndex = {};
        function empty(obj) {
            for (const key in obj) {
                const value = obj[key];
                if (!value || value == null || value == undefined || that.toString(value) === "{}" || that.toString(value) === "[]") {
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
        if (typeof obj !== 'object')
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
            Object.keys(obj).forEach(key => {
                objCopy[key] = this.deepClone(obj[key]);
            });
            return objCopy;
        }
        this.error("Unsupported data type");
    }
}
Object.defineProperty(ZZTOOL, "instance", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: null
});
export default ZZTOOL;
