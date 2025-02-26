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
