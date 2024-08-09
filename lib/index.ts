/**
 * ZZTOOL工具类
 * version: 1.0.3
 */
class ZZTOOL {
  static instance:any = null;
  version:string;
  v:string;
  constructor() {
    this.version = '1.0.3';
    this.v = '1.0.3'; 
    if(ZZTOOL.instance){
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
  error(msg:string){
    throw new Error(msg);
  }
  // 防抖
  debounce = (() => {
    let timer:any = null
    return (callback:Function, wait = 800) => {
      timer&&clearTimeout(timer)
      timer = setTimeout(callback, wait)
    }
  })()
  // 节流
  throttle = (() => {
    let last = 0
    return (callback:Function, wait = 800) => {
      let now = +new Date()
      if (now - last > wait) {
        callback()
        last = now
      }
    }
  })()
  /**
   * 类型检测
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

  };
  isDate(obj: any) {
    return this.getType(obj) === "date";
  };
  isRegExp(obj: any) {
    return this.getType(obj) === "regexp";
  };
  isError(obj: any) {
    return this.getType(obj) === "error";
  }
  isSymbol(obj: any) {
    return this.getType(obj) === "symbol";
  }
  isPromise(obj: any) {
    return this.getType(obj) === "promise";
  };
  isElement(obj: any) {
    return this.getType(obj) === "element";
  };
  /**
   * 正则表达式
   */
  regIsHas(str:string,char:string) {
    return new RegExp(char).test(str);
  }
  regEmail(str:string) {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
  }
  regPhone(str:string) {
    return /^1[3456789]\d{9}$/.test(str);
  }
  regIdcard(str:string){
    if (!/^\d{17}(\d|X)$/i.test(str)) {
        return false;
    }
    const provinceCodes:any = {
        11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
        21: "辽宁", 22: "吉林", 23: "黑龙江",
        31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东",
        41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南",
        50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏",
        61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆",
        71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
    };
    if (!provinceCodes[str.substring(0, 2)]) {
        return false;
    }
    const birthday = str.substring(6, 8);
    const year = birthday.substring(0, 4);
    const month = birthday.substring(4, 2);
    const day = birthday.substring(6, 2);
    const birthDate = new Date(year + '/' + month + '/' + day);
    if (birthDate.getFullYear() !== parseInt(year) ||
        (birthDate.getMonth() + 1) !== parseInt(month) ||
        birthDate.getDate() !== parseInt(day)) {
        return false;
    }
    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
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
   * 字符串操作
   */
  getFirstChar(str:string) {
    if (!this.isString(str)) {
      this.error("参数类型错误，必须为字符串");
    }
    return str.substring(0, 1);
  }
  getLastChar(str:string) {
    if (!this.isString(str)) {
      this.error("参数类型错误，必须为字符串");
    }
    return str.substring(str.length - 1, str.length);
  }
  getChar(str:string,start:number,end:number) {
    if (!this.isString(str)) {
      this.error("参数类型错误，必须为字符串");
    }
    const char = str.substring(start, end);
    if (!char) {
      return "";
    }
    return char;
  }
  toString(obj:any){
    if(!obj) this.error
    const chars = JSON.stringify(obj);
    if(this.getFirstChar(chars) === "\\"){
      return chars.replace(/\\/g,"");
    }
    return chars;
  }
  toArray(obj:any,index=""){
    if (this.isUndefined(obj) || this.isNull(obj) || obj === "")
      this.error("该变量没有值");
    if (this.isArray(obj)) return [...obj];
    const chars = this.isString(obj) ? obj : this.toString(obj);
    const firstChar = this.getFirstChar(chars);
    try{
      const method:any = {
        "{": () => {
          return Object.entries(JSON.parse(chars))
        },
        "[": () => {return JSON.parse(chars)}
      }
      if(method[firstChar]){
        return method[firstChar]()
      }
      if(this.regIsHas(chars,",")){
        return chars.split(",")
      }
      if(this.regIsHas(chars," ")){
        return chars.split(" ")
      }
      return chars.split(index);
    }catch(e){
      return chars
    }
  }
  toNumber(obj:any) {
    if (this.isUndefined(obj) || this.isNull(obj) || obj === "")
      this.error("该变量没有值");
    if (this.isNumber(obj)) return obj;
    const chars = this.isString(obj) ? obj : this.toString(obj);
    return this.isNaN(Number(chars)) ? Number(chars) : chars;
  }
  toBoolean(obj:any) {
    if (this.isBoolean(obj)) return obj;
    return obj ? true : false;
  };
  /**
   * 工具函数
   */
  getRandom (min:number, max:number) {
    if (!this.isNumber(min) || !this.isNumber(max)) {
      this.error("参数类型错误，必须为数字");
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  getRandomArray(length:number, min:number, max:number){
    const arr = [];
    for(let i = 0; i < length; i++){
      arr.push(this.getRandom(min, max));
    }
    return arr;
  }
  getRandomColor(){
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  }
  getRandomRGBColor(){
    return `rgb(${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 255)})`;
  }
  getRandomRGBA(){
    return `rgba(${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 100) / 100})`;
  }
  /**
   * 数据对比
   * 以obj1为基准进行比对 
   * @param {*} obj1 
   * @param {*} obj2 
   * @param {boolean} returnIndex 是否返回不一致的索引
   */
  dataEqual(obj1:any, obj2:any,returnIndex: boolean=false){
    const type1 = this.getType(obj1);
    const type2 = this.getType(obj2);
    if(type1 !== type2){
      return false;
    }
    if(!returnIndex){
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    function diffObjects(obj1:any, obj2:any) {
      const differences:any = {};
      const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
      for (const key of keys) {
        if (obj1[key] !== obj2[key]) {
          // 如果值不相同，且值之一是对象，则递归调用 diffObjects
          if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            const nestedDiff = diffObjects(obj1[key], obj2[key]);
            if (Object.keys(nestedDiff).length > 0) {
              differences[key] = nestedDiff;
            }
          } else {
            differences[key] = {
              oldValue: obj1[key] ? obj1[key] : '',
              newValue: obj2[key] ? obj2[key] : ''
            };
          }
        }
      }
      return differences;
    }
    return diffObjects(obj1,obj2)
  }
  /**
   * 判断对象中是否有空值
   * @param {*} obj 
   * @param {boolean} index 是否返回空值的索引
   * @returns 
   */
  dataEmpty(obj:any,index: boolean=false){
    if(obj == null || obj == undefined || this.toString(obj) === "{}" || this.toString(obj) === "[]") return true;
    const that = this;
    const EmptyIndex:any = {};
    function empty(obj:any){
      for(const key in obj){
        const value = obj[key];
        if(!value || value == null || value == undefined || that.toString(value) === "{}" || that.toString(value) === "[]"){
          if(index){
            EmptyIndex[key] = value;
          }else{
            return true;
          }
        }else if(that.isObject(value) || that.isArray(value)){
          return empty(value)
        }
      }
      return false;
    }
    const hasEmpty = empty(obj);
    if(index){
      return this.toString(EmptyIndex) === "{}" ? false : EmptyIndex;
    }
    return hasEmpty;
  }
  /**
   * 深克隆
   * @param {*} obj 
   * @returns 
   */
  deepClone(obj:any){
    if (obj === null || obj === undefined) return obj;
    if (typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (Array.isArray(obj)) {
      const arrCopy:any[] = [];
      obj.forEach((item, index) => {
        arrCopy[index] = this.deepClone(item);
      });
      return arrCopy;
    }
    if (obj instanceof Object) {
      const objCopy:any = {};
      Object.keys(obj).forEach(key => {
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
  toTree(data:any[], pid:string){
    let tree:any[] = [];
    let lookup:any = {};
  
    data.forEach(item => {
      lookup[item.id] = { ...item, children: [] };
    });
    data.forEach(item => {
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
  groupBy(data:any[], key:string){
    return data.reduce((result:any, item:any) => {
      const groupKey = item[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(item);
      return result;
    }, {});
  }
}

export default ZZTOOL;