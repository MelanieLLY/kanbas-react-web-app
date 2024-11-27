import Database from "../Database/index.js";

// 创建作业
export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() }; // 生成唯一 _id
  Database.assignments = [...Database.assignments, newAssignment]; // 添加到数据库
  return newAssignment;
}

// 获取所有作业
export function findAllAssignments() {
  return Database.assignments;
}

// 根据 ID 更新作业
export function updateAssignment(assignmentId, updates) {
  const assignment = Database.assignments.find((a) => a._id === assignmentId);
  if (assignment) {
    Object.assign(assignment, updates); // 更新作业
  }
  return assignment;
}

// 删除作业
export function deleteAssignment(assignmentId) {
  Database.assignments = Database.assignments.filter((a) => a._id !== assignmentId); // 删除作业
}
