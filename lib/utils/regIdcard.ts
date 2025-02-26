/**
 * 判断是否为身份证
 * @param str 字符串
 * @returns 是否为身份证
 */
export function regIdcard(str: string) {
  if (!/^\d{17}(\d|X)$/i.test(str)) return false;

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
  if (!provinceCodes[str.substring(0, 2)]) return false;
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
    sum += Number(str[i]) * weights[i];
  }
  const calculatedCheckCode = checkCodes[sum % 11];
  if (str[17].toUpperCase() !== calculatedCheckCode) {
    return false;
  }

  return true;
}