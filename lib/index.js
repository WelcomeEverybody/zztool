const ZZTOOL = (function () {
  let instance = null;
  return function () {
    this.version = "1.0.0";
    if (instance) {
      return instance;
    }
    return (instance = this);
  };
})();
/**
 * 公共方法
 */
const error = function (msg) {
  throw new Error(msg);
};

/**
 * 类型检测
 */
ZZTOOL.prototype.getType = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
ZZTOOL.prototype.isArray = function (obj) {
  return this.getType(obj) === "array";
};
ZZTOOL.prototype.isObject = function (obj) {
  return this.getType(obj) === "object";
};
ZZTOOL.prototype.isFunction = function (obj) {
  return this.getType(obj) === "function";
};
ZZTOOL.prototype.isString = function (obj) {
  return this.getType(obj) === "string";
};
ZZTOOL.prototype.isNumber = function (obj) {
  return this.getType(obj) === "number";
};
ZZTOOL.prototype.isBoolean = function (obj) {
  return this.getType(obj) === "boolean";
};
ZZTOOL.prototype.isNaN = function (obj) {
  return this.getType(obj) === "nan";
};
ZZTOOL.prototype.isNull = function (obj) {
  return this.getType(obj) === "null";
};
ZZTOOL.prototype.isUndefined = function (obj) {
  return this.getType(obj) === "undefined";
};
ZZTOOL.prototype.isDate = function (obj) {
  return this.getType(obj) === "date";
};
ZZTOOL.prototype.isRegExp = function (obj) {
  return this.getType(obj) === "regexp";
};
ZZTOOL.prototype.isError = function (obj) {
  return this.getType(obj) === "error";
};
ZZTOOL.prototype.isSymbol = function (obj) {
  return this.getType(obj) === "symbol";
};
ZZTOOL.prototype.isPromise = function (obj) {
  return this.getType(obj) === "promise";
};
ZZTOOL.prototype.isElement = function (obj) {
  return this.getType(obj) === "element";
};

/**
 * 正则表达式
 */
ZZTOOL.prototype.regIsHas = function (str,char) {
  return new RegExp(char).test(str);

};

/**
 * 字符串操作
 */
ZZTOOL.prototype.getFirstChar = function (str) {
  if (!this.isString(str)) {
    error("参数类型错误，必须为字符串");
  }
  return str.substring(0, 1);
};
ZZTOOL.prototype.getLastChar = function (str) {
  if (!this.isString(str)) {
    error("参数类型错误，必须为字符串");
  }
  return str.substring(str.length - 1, str.length);
};
ZZTOOL.prototype.getChar = function (str, start, end) {
  if (!this.isString(str)) {
    error("参数类型错误，必须为字符串");
  }
  const char = str.substring(start, end);
  if (!char) {
    return "";
  }
  return char;
};

/**
 * 转类型
 */
ZZTOOL.prototype.toString = function (obj){
  const chars = JSON.stringify(obj);
  if(this.getFirstChar(chars) === "\\"){
    return chars.replace(/\\/g,"");
  }
  return chars;
}
ZZTOOL.prototype.toArray = function (obj,index="") {
  if (this.isUndefined(obj) || this.isNull(obj) || obj === "")
    error("该变量没有值");
  if (this.isArray(obj)) return [...obj];
  const chars = this.isString(obj) ? obj : this.toString(obj);
  const firstChar = this.getFirstChar(chars);
  try{
    const method = {
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
};
ZZTOOL.prototype.toNumber = function (obj) {
  if (this.isUndefined(obj) || this.isNull(obj) || obj === "")
    error("该变量没有值");
  if (this.isNumber(obj)) return obj;
  const chars = this.isString(obj) ? obj : this.toString(obj);
  return this.isNaN(Number(chars)) ? Number(chars) : chars;
};
ZZTOOL.prototype.toBoolean = function (obj) {
  if (this.isBoolean(obj)) return obj;
  return obj ? true : false;
};

/**
 * 工具函数
 */
ZZTOOL.prototype.getRandom = function (min, max) {
  if (!this.isNumber(min) || !this.isNumber(max)) {
    error("参数类型错误，必须为数字");
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};
ZZTOOL.prototype.getRandomArray = function (length, min, max) {
  const arr = [];
  for(let i = 0; i < length; i++){
    arr.push(this.getRandom(min, max));
  }
  return arr;
};
ZZTOOL.prototype.getRandomColor = function () {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
};
ZZTOOL.prototype.getRandomRGBColor = function () {
  return `rgb(${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 255)})`;
};
ZZTOOL.prototype.getRandomRGBA = function () {
  return `rgba(${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 255)},${this.getRandom(0, 1)})`;
};
/**
 * 数据对比
 * 以obj1为基准进行比对 
 * @param {*} obj1 
 * @param {*} obj2 
 * @param {boolean} returnIndex 是否返回不一致的索引
 */
ZZTOOL.prototype.dataEqual = function(obj1, obj2,returnIndex=false){
  const type1 = this.getType(obj1);
  const type2 = this.getType(obj2);
  if(type1 !== type2){
    return false;
  }
  if(!returnIndex){
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
ZZTOOL.prototype.dataEmpty = function(obj,index=false){
  if(obj == null || obj == undefined || this.toString(obj) === "{}" || this.toString(obj) === "[]") return true;
  const that = this;
  const EmptyIndex = {};
  function empty(obj){
    for(const key in obj){
      if(value === null || value === undefined || that.toString(value) === "{}" || that.toString(value) === "[]"){
        if(index){
          EmptyIndex[key] = obj[key];
        }else{
          return true;
        }
      }else if(that.isObject(obj[key]) || that.isArray(obj[key])){
        return empty(obj[key])
      }
    }
    return false;
  }
  if(index){
    empty(obj);
    return this.toString(EmptyIndex) === "{}" ? false : EmptyIndex;
  }
  return empty(obj);
}
/**
 * 深克隆
 * @param {*} obj 
 * @returns 
 */
ZZTOOL.prototype.deepClone = function(obj){
  if (obj === null || obj === undefined) return obj;
  if (typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (Array.isArray(obj)) {
    const arrCopy = [];
    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item);
    });
    return arrCopy;
  }
  if (obj instanceof Object) {
    const objCopy = {};
    Object.keys(obj).forEach(key => {
      objCopy[key] = deepClone(obj[key]);
    });
    return objCopy;
  }
  throw new Error("Unsupported data type");
}

export default ZZTOOL;