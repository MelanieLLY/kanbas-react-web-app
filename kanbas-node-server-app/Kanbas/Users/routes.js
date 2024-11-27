import * as dao from "./dao.js";

export default function UserRoutes(app) {
  const createUser = (req, res) => {};
  const deleteUser = (req, res) => {};
  const findAllUsers = (req, res) => {};
  const findUserById = (req, res) => {};
  const updateUser = (req, res) => {
    const userId = req.params.userId;
    const userUpdates = req.body;
    dao.updateUser(userId, userUpdates); 
    const currentUser = dao.findUserById(userId); 
    req.session["currentUser"] = currentUser; 
    res.json(currentUser);
  }

  const signup = (req, res) => {
    const existingUser = dao.findUserByUsername(req.body.username);
    if (existingUser) {
      res.status(400).json({ message: "Username already taken" });
      return;
    }
    const currentUser = dao.createUser(req.body); // 创建新用户
    req.session["currentUser"] = currentUser; // 保存到会话
    console.log("Session before save:", req.session); // 调试会话内容
  
    // 保存会话
    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err); // 保存失败
        res.status(500).json({ message: "Unable to save session" });
      } else {
        console.log("Session saved successfully."); // 保存成功
        res.json(currentUser); // 返回当前用户
      }
    });
  };

  const signin = (req, res) => {
    const { username, password } = req.body;
    const currentUser = dao.findUserByCredentials(username, password);
    if (currentUser) {
      req.session["currentUser"] = currentUser;
      console.log("Session after signin:", req.session); // 打印当前会话
      req.session.save((err) => {
        if (err) {
          console.error("Session save error:", err); // 打印保存会话的错误
          res.status(500).json({ message: "Unable to save session" });
        } else {
          res.json(currentUser);
        }
      });
    } else {
      res.status(401).json({ message: "Unable to login. Try again later." });
    }
  };
  
  app.post("/api/users/signin", signin);
  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };
  const profile = (req, res) => {
    console.log("Current session:", req.session); 
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
