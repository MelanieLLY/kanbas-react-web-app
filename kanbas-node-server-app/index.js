import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
import cors from "cors";

const app = express();
app.use(cors()); 
// 将 app 传递给 Hello.js 中的路由函数
Hello(app);
Lab5(app);

const PORT = process.env.PORT || 4000;


// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});