# @zzcpt/zztool js 工具库

`@zzcpt/zztool` 是一个轻量级，使用ECMAScript 2015，高性能的前端工具库，旨在简化日常开发中的常见操作，提高开发效率。它提供了多种实用的工具函数，包括数据处理、数据校验、格式转换等。

## 安装

通过 npm 安装：

```bash
npm install @zzcpt/zztool
```

通过 yarn 安装：

```bash
yarn add @zzcpt/zztool
```

通过 pnpm 安装：

```bash
pnpm add @zzcpt/zztool
```

## 快速开始

在项目中引入并使用：

```javascript
// 全部引入
import * as zztool from '@zzcpt/zztool';

// 按需引入
import { debounce, throttle } from '@zzcpt/zztool';

// 使用示例
const debouncedFn = () => { debounce(() => console.log('Debounced!'), 300); };
debouncedFn();
```

[MIT](https://github.com/WelcomeEverybody/zztool/blob/main/LICENSE)     [文档地址](https://welcomeeverybody.github.io/zztool/)

## 贡献

欢迎贡献代码或提交 Issue！

GitHub 仓库地址：https://github.com/WelcomeEverybody/zztool

## 许可证

`@zzcpt/zztool` 遵循 MIT 许可证。

# 更新日志

## 1.2.7


| 增加              | col2 | col3 |
| ----------------- | ---- | ---- |
| getSameIndexValue |      |      |
| getValue          |      |      |

## 1.2.4


| 增加            | 优化   |
| --------------- | ------ |
| dataChangeIndex | toTree |
| sleep           |        |
| chunkArray      |        |
| chunkArrayItem  |        |

#### toTree

一个判断出现了失误，更新1.2.1版本为了偷懒使用ai帮助减少体力劳动，更新时本人未检查到位。

## 1.2.1


| 删除           | 增加         |
| -------------- | ------------ |
| dataFindValues | getTimeStamp |

1. 调整导出规则可以按需导入
2. 删除isNumber,isNaN等方法

## 1.1.5


| 增加            | 优化        |
| --------------- | ----------- |
| getRandomString | getTimeStep |
|                 | dataEqual   |

#### getTimestep：

支持更多格式

#### dataEqual：

发现的问题：1. 同值不同索引会被记录为不同数组。2. 对象值相同地址不同会被记录。

解决方法：1. every和includes优化数组对比并增加参数应对不同环境。2. 修改整体逻辑判断

## 1.1.4


| 增加                | 优化           |
| ------------------- | -------------- |
| calculatePercentage | getUrlParam    |
| shuffleArray        | getDate        |
|                     | getBetweenDate |

## 1.1.3


| 优化      |
| --------- |
| dataEmpty |
| dataEqual |

## 1.1.2

增加[文档](https://czhangzihao.github.io/zztool/)


| 修复        |
| ----------- |
| getDateList |

## 1.1.1


| 增加           |
| -------------- |
| getBetweenDate |
| getDateList    |
| getTimeStep    |

## 1.1.0


| 修复      |
| --------- |
| regIdcard |

## 1.0.8


| 优化        | 增加             |
| ----------- | ---------------- |
| getDate     | getWeekDay       |
| getDateType | getMonthDays     |
|             | weekInMonthCount |
|             | getYearWeeks     |

## 1.0.7


| 优化        | 增加        |
| ----------- | ----------- |
| toBoolean   | getUrlParam |
| toArray     | paramFormat |
| getDateType | getWeekTime |
