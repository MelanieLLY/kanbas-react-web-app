import express from 'express';
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
import userController from "./Kanbas/Users/controller.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js"; // 导入 Assignments 路由

const app = express();

// 配置 CORS，用来支持跨域请求，并允许前端传递 Cookies
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
);

// 配置解析 JSON 的中间件，用来处理 POST 请求的 JSON 数据
app.use(express.json());

// 配置会话管理，支持多用户会话
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

// 注册功能模块路由，包括用户 API 和其他功能
app.use("/users", userController); // 用于处理 /users 页面相关的功能
Hello(app); 
Lab5(app); 
UserRoutes(app); // 用户相关的 API，比如登录、注册等
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app); // 注册 Assignments 路由

// 启动服务器并监听指定端口
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



app.use((req, res, next) => {
  console.log("Session:", req.session); 
});

console.log("SESSION_SECRET:", process.env.SESSION_SECRET);
