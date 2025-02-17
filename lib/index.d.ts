/**
 * 插件公共方法
 */
export declare function replaceAll(str: string, target: string, replacement: string): string;
/**
 * 获取版本号
 * @returns 版本号
 */
export declare function getVersion(): string;
/**
 * 抛出错误
 * @param msg 错误信息
 */
export declare function error(msg: string): void;
/**
 * 防抖
 * @param callback 回调函数
 * @param wait 等待时间
 */
export declare const debounce: (callback: Function, wait?: number) => void;
/**
 * 节流
 * @param callback 回调函数
 * @param wait 等待时间
 */
export declare const throttle: (callback: Function, wait?: number) => void;
/**
 * 获取类型
 * @param data
 * @returns 类型
 */
export declare function getType(data: any): string;
/**
 * 判断是否包含某字符
 * @param str 字符串
 * @param char 字符
 * @returns 是否包含
 */
export declare function regIsHas(str: string, char: string): boolean;
/**
 * 判断是否为邮箱
 * @param str 字符串
 * @returns 是否为邮箱
 */
export declare function regEmail(str: string): boolean;
/**
 * 判断是否为手机号
 * @param str 字符串
 * @returns 是否为手机号
 */
export declare function regPhone(str: string): boolean;
/**
 * 判断是否为身份证
 * @param str 字符串
 * @returns 是否为身份证
 */
export declare function regIdcard(str: string): boolean;
/**
 * 获取第一个字符
 * @param str 字符串
 * @returns 第一个字符
 */
export declare function getFirstChar(str: string): string;
/**
 * 获取最后一个字符
 * @param str 字符串
 * @returns 最后一个字符
 */
export declare function getLastChar(str: string): string;
/**
 * 字符串替换
 * @param str 字符串
 * @param start 开始位置
 * @param end 结束位置
 * @param icon 替换字符
 * @returns 替换后的字符串
 */
export declare function strReplace(str: string, start: number, end: number, icon?: string): string;
/**
 * 获取字符
 * @param str 字符串
 * @param start 开始位置
 * @param end 结束位置
 * @returns 字符
 */
export declare function getChar(str: string, start: number, end: number): string;
/**
 * 获取url参数
 * @param url url
 * @returns 参数
 */
export declare function getUrlParam(url?: string): any;
/**
 * 参数格式化
 * @param obj 参数
 * @param type 类型
 * @returns 格式化后的参数
 */
export declare function paramformat(obj: any, type?: string): string | FormData | undefined;
/**
 * 转字符串
 * @param obj 数据
 * @returns 字符串
 */
export declare function toString(obj: any): string;
/**
 * 转数组
 * @param obj 数据
 * @param index 分隔符
 * @returns 数组
 */
export declare function toArray(obj: any, index?: string): any;
/**
 * 获取随机数
 * @param min 最小值
 * @param max 最大值
 */
export declare function getRandom(min: number, max: number): number;
/**
 * 获取随机数组
 * @param length 长度
 * @param min 最小值
 * @param max 最大值
 */
export declare function getRandomArray(length: number, min: number, max: number): number[];
/**
 * 获取随机字符串
 * @param length 长度
 * @param charStr 自定义字符
 */
export declare function getRandomString(length?: number, charStr?: string): string;
/**
 * 随机打乱数组
 * @param array 数组
 */
export declare function shuffleArray(array: any[]): any[];
/**
 * 获取随机颜色
 */
export declare function getRandomColor(): string;
/**
 * 获取随机rgb颜色
 */
export declare function getRandomRGBColor(): string;
/**
 * 获取随机rgba颜色
 */
export declare function getRandomRGBA(): string;
/**
 * 金额格式化
 * @param money 金额
 * @param char 分隔符
 * @param first 首字符
 */
export declare function moneyFormat(money: string | number, char?: string, first?: string): string;
/**
 * 数据对比
 * @param obj1 对象1
 * @param obj2 对象2
 * @param options 配置
 * @param {Boolean} options.returnKeys 是否返回不一致的key
 * @param {Boolean} options.arrayDiff  是否返回数组差异
 * @returns boolean | Array<string>
 */
export declare function dataEqual(obj1: any, obj2: any, options?: {}): boolean | Array<string>;
/**
 * 判断对象中是否有空值
 * @param {*} obj
 * @param {boolean} returnKeys 是否返回空值的索引
 * @param {string} parentKey 父级key
 * @returns
 */
export declare function dataEmpty(obj: any, returnKeys?: boolean, parentKey?: string): Array<string> | boolean;
/**
 * 获取对应索引的value
 * @param obj
 * @param index
 * @returns
 */
export declare function getSameIndexValue(obj: any, index: string, parentKey?: string): Array<{
    key: string;
    value: any;
}>;
/**
 * 深克隆
 * @param {*} obj
 * @returns
 */
export declare function deepClone(obj: any): any;
/**
 * 修改对象中的下标
 * index和newIndex必须是字符串，多个下标用逗号分隔
 * @param {*} data
 * @param {*} index
 * @param {*} newIndex
 * @returns {object}
 */
export declare function dataChangeIndex(data: object, index: string, newIndex: string): object;
/**
 * 转树形结构
 * @param {*} data
 * @param {*} pid   父级id
 */
export declare function toTree(data: any[], pid: string): any;
/**
 * 数据分组
 * @param {*} data
 * @param {*} key
 */
export declare function groupBy(data: any[], key: string): any;
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
export declare function dataMerge(data1: any[], data2: any[], type?: number): any[];
/**
 * 数组去重
 * @param data 数组
 */
export declare function uniqueArray(data: any[]): any[];
/**
 * 数组分块
 * 将数组分成size块
 * @param data 数组
 * @param size 大小
 */
export declare function chunkArray(data: any[], size: number): any[];
/**
 * 数组分块
 * 将数组分成每块为size大小
 * @param arr 数组
 * @param size 大小
 */
export declare function chunkArrayItem(arr: any[], size: number): any[];
/**
 * 根据某个字段找对应的数组或对象，如果有两个相同的数据会优先返回第一个
 * @param {*} data
 * @param {*} key
 * @param {*} value
 */
export declare function dataFind(data: any, key: any, value: any): any;
/**
 * 数组去空
 * @param data 数组
 */
export declare function arrayTrim(data: any[]): any[];
/**
 * 获取日期信息
 * @param date
 * @returns {year,month,day,hour,minute,second}
 */
export declare function getDateInfo(str: any): {
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
export declare function getDateType(date: any, type?: string): string;
/**
 * 获取日期
 * 如果只有一个参数，str会被当为type传递
 * @param str
 * @param type
 * @returns
 */
export declare function getDate(str?: any, type?: string): string;
/**
 * date不为空时获取date的周日期
 * @param {*} date
 * @returns
 */
export declare function getWeekTime(date?: any): string[];
/**
 * 获取月份天数
 * @param {*} date
 * @returns
 */
export declare function getMonthDays(year?: number, month?: number): number;
/**
 * 获取日期是星期几
 * @param {*} date
 * @returns
 */
export declare function getWeekDay(date?: any): string;
/**
 * 获取本月有几周
 * @returns
 */
export declare function weekInMonthCount(): number;
/**
 * 获取某年中有几周
 * @param {*} year
 * @returns
 */
export declare function getYearWeeks(year?: any): number;
/**
 * 获取两个日期之间的日期
 * @param {*} date
 * @param {*} date1
 * @param {*} days
 * @returns {Array}
 */
export declare function getBetweenDate(date: any, date1: any, days?: any): number | string[];
/**
 * 获取某日期的近期天数
 * @param {*} date 日期
 * @param {*} type （三天，周，月，年）
 * @param {*} hasNow 生成的日期是否包含今日
 * @param {*} step 生成距离date的step天
 * @returns
 * step优先级大于type
 */
export declare function getRecentDate(date?: any, type?: number, hasNow?: boolean, step?: number): number | string[];
/**
 * 获取时间段
 * @param {*} start 开始时间
 * @param {*} end 结束时间
 * @param {*} step 步长
 * @param {*} type hh:mm:ss hh:mm
 * @returns
 */
export declare function getTimeStep(start: string, end: string, step?: any, type?: any): string[];
/**
 * 获取时间戳
 * @param {*} date
 * @param {*} mill 是否返回毫秒级时间戳
 * @returns
 */
export declare function getTimeStamp(date?: any, mill?: boolean): number;
/**
 * 计算百分比
 * @param {*} part
 * @param {*} total
 * @param {*} decimalPlaces
 * @returns
 */
export declare function getPercentage(part: number, total: number, decimalPlaces?: number): string;
/**
 * 延迟函数
 */
export declare function sleep(ms: number): Promise<unknown>;
/**
 * 获取索引值
 * 仅适用于 对象嵌套
 * 'xxx.xxx.xxx' 形式
 * [xxx,xxx,xxx] 形式
 * @param obj
 * @param path
 * @returns
 */
export declare function getValue(obj: any, path: any): any;
