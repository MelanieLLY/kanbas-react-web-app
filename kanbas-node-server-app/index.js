import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
const app = express();

// 将 app 传递给 Hello.js 中的路由函数
Hello(app);
Lab5(app)
// 启动服务器
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});