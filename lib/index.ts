const ZZTOOL = (function () {
    let instance:any = null;
    return function () {
      if (instance) {
        return instance;
      }
      return instance = this;
    };
  })();
  /**
   * 公共方法
   */
  const error = function (msg:string) {
    throw new Error(msg);
  };
  
  /**
   * 类型检测
   */
  ZZTOOL.prototype.getType = function (obj:any) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  };
  ZZTOOL.prototype.isArray = function (obj:any) {
    return this.getType(obj) === "array";
  };
  ZZTOOL.prototype.isObject = function (obj:any) {
    return this.getType(obj) === "object";
  };
  ZZTOOL.prototype.isFunction = function (obj:any) {
    return this.getType(obj) === "function";
  };
  ZZTOOL.prototype.isString = function (obj:any) {
    return this.getType(obj) === "string";
  };
  ZZTOOL.prototype.isNumber = function (obj:any) {
    return this.getType(obj) === "number";
  };
  ZZTOOL.prototype.isBoolean = function (obj:any) {
    return this.getType(obj) === "boolean";
  };
  ZZTOOL.prototype.isNull = function (obj:any) {
    return this.getType(obj) === "null";
  };
  ZZTOOL.prototype.isUndefined = function (obj:any) {
    return this.getType(obj) === "undefined";
  };
  ZZTOOL.prototype.isDate = function (obj:any) {
    return this.getType(obj) === "date";
  };
  ZZTOOL.prototype.isRegExp = function (obj:any) {
    return this.getType(obj) === "regexp";
  };
  ZZTOOL.prototype.isError = function (obj:any) {
    return this.getType(obj) === "error";
  };
  ZZTOOL.prototype.isSymbol = function (obj:any) {
    return this.getType(obj) === "symbol";
  };
  ZZTOOL.prototype.isPromise = function (obj:any) {
    return this.getType(obj) === "promise";
  };
  ZZTOOL.prototype.isElement = function (obj:any) {
    return this.getType(obj) === "element";
  };
  
  /**
   * 正则表达式
   */
  ZZTOOL.prototype.regIsHas = function (str:string,char:string) {
    return new RegExp(char).test(str);
  
  };
  
  /**
   * 字符串操作
   */
  ZZTOOL.prototype.getFirstChar = function (str:string) {
    if (!this.isString(str)) {
      error("参数类型错误，必须为字符串");
    }
    return str.substring(0, 1);
  };
  ZZTOOL.prototype.getLastChar = function (str:string) {
    if (!this.isString(str)) {
      error("参数类型错误，必须为字符串");
    }
    return str.substring(str.length - 1, str.length);
  };
  ZZTOOL.prototype.getChar = function (str:string, start:number, end:number) {
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
  ZZTOOL.prototype.toString = function (obj:any){
    const chars = JSON.stringify(obj);
    console.log(chars)
    if(this.getFirstChar(chars) === "\\"){
      return chars.replace(/\\/g,"");
    }
    return chars;
  }
  ZZTOOL.prototype.toArray = function (obj:any,index="") {
    if (this.isUndefined(obj) || this.isNull(obj) || obj === "")
      error("该变量没有值");
    if (this.isArray(obj)) return [...obj];
    const chars = this.isString(obj) ? obj : this.toString(obj);
    const firstChar = this.getFirstChar(chars);
    const method:any = {
      "{": () => {return Object.entries(JSON.parse(chars))},
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
  };
  ZZTOOL.prototype.toObject = function (obj:any) {
    if (this.isUndefined(obj) || this.isNull(obj) || obj === "")
      error("该变量没有值");
    if (this.isObject(obj)) return {...obj};
    return JSON.parse(this.toString(obj));
  }
  
  
  export default ZZTOOL;
  