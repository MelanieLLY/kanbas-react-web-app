const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};
const module = {
  id: "CS101",
  name: "Introduction to Computer Science",
  description: "Learn the basics of computer science",
  course: "Computer Science",
};

export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });

  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });

  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });
  // 修改分数
  app.get("/lab5/assignment/score/:score", (req, res) => {
    const { score } = req.params;
    assignment.score = parseInt(score);
    res.json(assignment);
  });

  // 修改完成状态
  app.get("/lab5/assignment/completed/:completed", (req, res) => {
    const { completed } = req.params;
    console.log("Received completed:", completed);
    assignment.completed = completed === "true";
    res.json(assignment);
  });
}
