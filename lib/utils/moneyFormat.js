/**
 * 金额格式化
 * @param money 金额
 * @param char 分隔符
 * @param first 首字符
 */
export function moneyFormat(money, char = ",", first = "") {
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
