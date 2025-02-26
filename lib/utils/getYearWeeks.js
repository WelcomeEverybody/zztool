/**
 * 获取某年中有几周
 * @param {*} year
 * @returns
 */
export function getYearWeeks(year = new Date().getFullYear()) {
    let first = new Date(year, 0, 1).getDay();
    if (first == 1) {
        first = 0;
    }
    else if (first == 0) {
        first = 1;
    }
    else {
        first = 8 - first;
    }
    if ((year % 4 == 0 && year % 100 != 0) ||
        (year % 100 == 0 && year % 400 == 0)) {
        var allyears = 366;
    }
    else {
        var allyears = 365;
    }
    let week = Math.ceil((allyears - first) / 7) + (first !== 0 ? 1 : 0);
    return week;
}
