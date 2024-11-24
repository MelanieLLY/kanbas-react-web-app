let todos = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
  { id: 4, title: "Task 4", completed: true },
];

export default function WorkingWithArrays(app) {


  app.get("/lab5/todos", (req, res) => {
    const { completed } = req.query;
    console.log("Query parameter completed:", completed);

    if (completed !== undefined) {
      const completedBool = completed === "true";

      const filteredTodos = todos.filter((t) => t.completed === completedBool);
      res.json(filteredTodos);

      return;
    }
    res.json(todos);
  });


  app.get("/lab5/todos/create", (req, res) => {
    const newTodo = {
      id: new Date().getTime(), 
      title: "New Task",
      completed: false,
    };
    todos.push(newTodo); 
    res.json(todos); 
  });
  app.get("/lab5/todos/:id/delete", (req, res) => {
    const { id } = req.params; 
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id)); 
    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1); 
    }
    res.json(todos); 
  });
  app.get("/lab5/todos/:id", (req, res) => {
    const { id } = req.params; 
    const todo = todos.find((t) => t.id === parseInt(id));
    res.json(todo); 
  });
  app.get("/lab5/todos/:id/title/:title", (req, res) => {
    const { id, title } = req.params; // 从路径参数获取 ID 和新标题
    const todo = todos.find((t) => t.id === parseInt(id)); // 查找对应任务
    if (todo) {
      todo.title = title; // 更新任务标题
    }
    res.json(todos); // 返回更新后的数组
  });
  app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
    const { id, completed } = req.params; // 获取路径参数
    const todo = todos.find((t) => t.id === parseInt(id)); // 查找对应任务
    if (todo) {
      todo.completed = completed === "true"; // 更新完成状态
    }
    res.json(todos); // 返回更新后的数组
  });
  app.get("/lab5/todos/:id/description/:description", (req, res) => {
    const { id, description } = req.params; // 获取路径参数
    const todo = todos.find((t) => t.id === parseInt(id)); // 查找对应任务
    if (todo) {
      todo.description = description; // 更新描述
    }
    res.json(todos); // 返回更新后的数组
  });
  
  
}
