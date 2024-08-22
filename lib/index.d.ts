declare class ZZTOOL {
    static instance: any;
    version: string;
    v: string;
    constructor();
    /**
     * -----公共方法
     */
    getVersion(): string;
    error(msg: string): void;
    debounce: (callback: Function, wait?: number) => void;
    throttle: (callback: Function, wait?: number) => void;
    /**
     * -----类型检测
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
     * -----正则表达式
     */
    regIsHas(str: string, char: string): boolean;
    regEmail(str: string): boolean;
    regPhone(str: string): boolean;
    regIdcard(str: string): boolean;
    /**
     * -----字符串操作
     */
    getFirstChar(str: string): string;
    getLastChar(str: string): string;
    getChar(str: string, start: number, end: number): string;
    /**
     * 参数获取
     */
    getUrlParam(url: string): any;
    paramformat(obj: any, type?: string): string | FormData | undefined;
    /**
     * -----转类型
     */
    toString(obj: any): string;
    toArray(obj: any, index?: string): any;
    toNumber(obj: any): any;
    toBoolean(obj: any): boolean;
    /**
     * -----工具函数
     */
    getRandom(min: number, max: number): number;
    getRandomArray(length: number, min: number, max: number): number[];
    getRandomColor(): string;
    getRandomRGBColor(): string;
    getRandomRGBA(): string;
    /**
     * 金额以千分位符格式化
     * @param money
     * @param char
     * @param first
     * @returns
     */
    moneyFormat(money: string | number, char?: string, first?: string): string;
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
    dataMerge(data1: any[], data2: any[], type?: number): any[] | undefined;
    /**
     * 数组去重
     */
    dataUnique(data: any[]): any[];
    /**
     * 根据某个字段找对应的数组或对象，如果有两个相同的数据会优先返回第一个
     * @param {*} data
     * @param {*} key
     * @param {*} value
     */
    dataFind(data: any, key: any, value: any): any;
    /**
     * 数组去空
     */
    dataUnEmpty(data: any[]): any[];
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
    dataFindValues(str: string, data: any[], key: string, nestedKey?: string): any[];
    /**
     * -----日期
     */
    getDateInfo(str: any): {
        year: any;
        month: any;
        day: any;
        hour: any;
        minute: any;
        second: any;
    };
    /**
     * 获取日期类型
     * @param date
     * @param type
     * @returns
     */
    getDateType(date: any, type?: string): string;
    /**
     * 如果只有一个参数，str会被当为type传递
     * @param str
     * @param type
     * @returns
     */
    getDate(str: any, type?: string): string;
    /**
     * date不为空时获取date的周日期
     * @param {*} date
     * @returns
     */
    getWeekTime(date?: Date): string[];
    /**
     * 获取日期是星期几
     * @param {*} date
     * @returns
     */
    getMonthDays(year?: number, month?: number): number;
    /**
     * 获取日期是星期几
     * @param {*} date
     * @returns
     */
    getWeekDay(date?: Date): string;
    /**
     * 获取本月有几周
     * @returns
     */
    weekInMonthCount(): number;
    /**
     * 获取某年中有几周
     * @param {*} year
     * @returns
     */
    getYearWeeks(year?: number): number;
}
export default ZZTOOL;
