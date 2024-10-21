<script setup lang="ts">
import { inject } from 'vue'
import ZZTOOL from '../lib/index'

const zztool: ZZTOOL = inject('$ZZTOOL') as ZZTOOL;

console.log(zztool.getBetweenDate('2022-01-01','2022-01-20',true))


function exportToCSV(data:any[], fileName:string) {
  // 将数据数组转化为 CSV 格式的字符串
  const csvContent = data.map(row => row.join(",")).join("\n");
  // 创建 Blob 对象，指定文件类型为 text/csv
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  // 创建一个虚拟的下载链接
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  // 设置下载文件的属性
  link.setAttribute("href", url);
  link.setAttribute("download", `${fileName}.csv`);

  // 将链接添加到页面上，触发点击事件，下载文件
  document.body.appendChild(link);
  link.click();

  // 下载完成后，移除链接
  document.body.removeChild(link);
}

// 使用示例
const data = [
  ["Name", "Age", "Email"],
  ["John", "30", "john@example.com"],
  ["Jane", "25", "jane@example.com"]
];

exportToCSV(data, 'Users');
</script>

<template>
  <div></div>
</template>