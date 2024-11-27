import Database from "../Database/index.js";

export function findModulesForCourse(courseId) {
  const { modules } = Database;
  return modules.filter((module) => module.course === courseId); // 筛选匹配的模块
}
export function createModule(module) {
  const newModule = { ...module, _id: Date.now().toString() }; // 生成唯一 _id
  Database.modules = [...Database.modules, newModule]; // 添加到数据库
  return newModule; // 返回新模块
}

export function deleteModule(moduleId) {
  const { modules } = Database;
  Database.modules = modules.filter((module) => module._id !== moduleId);
}

export function updateModule(moduleId, moduleUpdates) {
  const { modules } = Database;
  const module = modules.find((module) => module._id === moduleId);
  Object.assign(module, moduleUpdates);
  return module;
}
