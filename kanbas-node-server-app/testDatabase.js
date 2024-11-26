import Database from "./Kanbas/Database/index.js";
console.log(new URL(import.meta.url).pathname); // 打印当前文件路径
console.log(new URL('./Kanbas/Database/index.js', import.meta.url).pathname); // 打印期望的模块路径

console.log(Database.courses); // 打印课程数据
console.log(Database.users);   // 打印用户数据
