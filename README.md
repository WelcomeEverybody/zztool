[MIT](https://github.com/Czhangzihao/zztool/blob/main/LICENSE)     [文档地址](https://czhangzihao.github.io/zztool/)

js 工具库 操作数据，数据对比等等

# 1.1.5


| 增加            | 优化        |
| --------------- | ----------- |
| getRandomString | getTimeStep |
|                 | dataEqual   |
|                 |             |

#### getTimestep：

支持更多格式

#### dataEqual：

发现的问题：1. 同值不同索引会被记录为不同数组。2. 对象值相同地址不同会被记录。

解决方法：1. 数组采用取补集优化数组对比并增加参数应对不同环境。2. 修改整体逻辑判断

# 1.1.4


| 增加                | 优化           |
| ------------------- | -------------- |
| calculatePercentage | getUrlParam    |
| shuffleArray        | getDate        |
|                     | getBetweenDate |

# 1.1.3


| 优化      |
| --------- |
| dataEmpty |
| dataEqual |

# 1.1.2

增加[文档](https://czhangzihao.github.io/zztool/)


| 修复        |
| ----------- |
| getDateList |

# 1.1.1


| 增加           |
| -------------- |
| getBetweenDate |
| getDateList    |
| getTimeStep    |

# 1.1.0


| 修复      |
| --------- |
| regIdcard |

# 1.0.8


| 优化        | 增加             |
| ----------- | ---------------- |
| getDate     | getWeekDay       |
| getDateType | getMonthDays     |
|             | weekInMonthCount |
|             | getYearWeeks     |

# 1.0.7


| 优化        | 增加        |
| ----------- | ----------- |
| toBoolean   | getUrlParam |
| toArray     | paramFormat |
| getDateType | getWeekTime |
