[MIT](https://github.com/Czhangzihao/zztool/blob/main/LICENSE)

js 工具库 操作数据，数据对比等等

npm i @zzcpt/zztool

-- main.ts

import ZZTOOL from "@zzcpt/zztool";

const app = createApp(APP)

app.provide("$zztool",new ZZTOOL());

app.mount("#app")

-- ***.vue

import { inject } from "vue";

import { zzType } from "@zzcpt/zztool";

const zztool:zzType =  inject\<zztype>("$zztool", {} as zzType);
