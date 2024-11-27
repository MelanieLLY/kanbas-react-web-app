import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  // 创建作业
  app.post("/api/assignments", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.json(newAssignment); // 返回创建的作业
  });

  // 获取所有作业
  app.get("/api/assignments", (req, res) => {
    const assignments = dao.findAllAssignments();
    res.json(assignments); // 返回所有作业
  });

  // 更新作业
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const updates = req.body;
    const updatedAssignment = dao.updateAssignment(assignmentId, updates);
    res.json(updatedAssignment); // 返回更新后的作业
  });

  // 删除作业
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    dao.deleteAssignment(assignmentId);
    res.sendStatus(204); // 返回 204 表示成功
  });
}
