const express = require('express'); // 等同于 import，用于加载 Express 库。
const app = express(); // 创建 Express 实例

// 路由 /hello
app.get('/hello', (req, res) => {
    res.send('Life is good!');
  });
  
  // 路由 /
  app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!');
  });
  

// 监听端口 4000
app.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});
