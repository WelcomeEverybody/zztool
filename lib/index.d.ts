/**
 * ZZTOOL工具类
 * version: 1.0.1
 */
declare class ZZTOOL {
    static instance: any;
    version: string;
    v: string;
    constructor();
    /**
     * 公共方法
     */
    getVersion(): string;
    error(msg: string): void;
    debounce: (callback: Function, wait?: number) => void;
    throttle: (callback: Function, wait?: number) => void;
    /**
     * 类型检测
     */
    getType(obj: any): string;
    isArray(obj: any): boolean;
    isObject(obj: any): boolean;
    isFunction(obj: any): boolean;
    isString(obj: any): boolean;
    isNumber(obj: any): boolean;
    isBoolean(obj: any): boolean;
    isNaN(obj: any): boolean;
    isNull(obj: any): boolean;
    isUndefined(obj: any): boolean;
    isDate(obj: any): boolean;
    isRegExp(obj: any): boolean;
    isError(obj: any): boolean;
    isSymbol(obj: any): boolean;
    isPromise(obj: any): boolean;
    isElement(obj: any): boolean;
    /**
     * 正则表达式
     */
    regIsHas(str: string, char: string): boolean;
    regEmail(str: string): boolean;
    regPhone(str: string): boolean;
    regIdcard(str: string): boolean;
    /**
     * 字符串操作
     */
    getFirstChar(str: string): string;
    getLastChar(str: string): string;
    getChar(str: string, start: number, end: number): string;
    toString(obj: any): string;
    toArray(obj: any, index?: string): any;
    toNumber(obj: any): any;
    toBoolean(obj: any): any;
    /**
     * 工具函数
     */
    getRandom(min: number, max: number): number;
    getRandomArray(length: number, min: number, max: number): number[];
    getRandomColor(): string;
    getRandomRGBColor(): string;
    getRandomRGBA(): string;
    /**
     * 数据对比
     * 以obj1为基准进行比对
     * @param {*} obj1
     * @param {*} obj2
     * @param {boolean} returnIndex 是否返回不一致的索引
     */
    dataEqual(obj1: any, obj2: any, returnIndex?: boolean): any;
    /**
     * 判断对象中是否有空值
     * @param {*} obj
     * @param {boolean} index 是否返回空值的索引
     * @returns
     */
    dataEmpty(obj: any, index?: boolean): any;
    /**
     * 深克隆
     * @param {*} obj
     * @returns
     */
    deepClone(obj: any): any;
    /**
     * 转树形结构
     * @param {*} data
     * @param {*} pid   父级id
     */
    toTree(data: any[], pid: string): any[];
    /**
     * 数据分组
     * @param {*} data
     * @param {*} key
     */
    groupBy(data: any[], key: string): any;
}
export interface zzType {
    /**
     * 公共方法
     */
    getVersion(): string;
    error(msg: string): void;
    debounce: (callback: Function, wait?: number) => void;
    throttle: (callback: Function, wait?: number) => void;
    /**
     * 类型检测
     */
    getType(obj: any): string;
    isArray(obj: any): boolean;
    isObject(obj: any): boolean;
    isFunction(obj: any): boolean;
    isString(obj: any): boolean;
    isNumber(obj: any): boolean;
    isBoolean(obj: any): boolean;
    isNaN(obj: any): boolean;
    isNull(obj: any): boolean;
    isUndefined(obj: any): boolean;
    isDate(obj: any): boolean;
    isRegExp(obj: any): boolean;
    isError(obj: any): boolean;
    isSymbol(obj: any): boolean;
    isPromise(obj: any): boolean;
    isElement(obj: any): boolean;
    /**
     * 正则表达式
     */
    regIsHas(str: string, char: string): boolean;
    regEmail(str: string): boolean;
    regPhone(str: string): boolean;
    regIdcard(str: string): boolean;
    /**
     * 字符串操作
     */
    getFirstChar(str: string): string;
    getLastChar(str: string): string;
    getChar(str: string, start: number, end: number): string;
    toString(obj: any): string;
    toArray(obj: any, index?: string): any;
    toNumber(obj: any): any;
    toBoolean(obj: any): any;
    /**
     * 工具函数
     */
    getRandom(min: number, max: number): number;
    getRandomArray(length: number, min: number, max: number): number[];
    getRandomColor(): string;
    getRandomRGBColor(): string;
    getRandomRGBA(): string;
    /**
     * 数据对比
     * 以obj1为基准进行比对
     * @param {*} obj1
     * @param {*} obj2
     * @param {boolean} returnIndex 是否返回不一致的索引
     */
    dataEqual(obj1: any, obj2: any, returnIndex?: boolean): any;
    /**
     * 判断对象中是否有空值
     * @param {*} obj
     * @param {boolean} index 是否返回空值的索引
     * @returns
     */
    dataEmpty(obj: any, index?: boolean): any;
    /**
     * 深克隆
     * @param {*} obj
     * @returns
     */
    deepClone(obj: any): any;
    /**
     * 转树形结构
     * @param {*} data
     * @param {*} pid   父级id
     */
    toTree(data: any[], pid: string): any[];
    /**
     * 数据分组
     * @param {*} data
     * @param {*} key
     */
    groupBy(data: any[], key: string): any;
}

export default ZZTOOL;
