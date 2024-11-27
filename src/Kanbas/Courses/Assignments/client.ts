import axios from "axios";

const ASSIGNMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/assignments`;

// 获取所有作业
export const findAllAssignments = async () => {
  const response = await axios.get(ASSIGNMENTS_API);
  return response.data;
};

// 创建新作业
export const createAssignment = async (assignment: any) => {
  const response = await axios.post(ASSIGNMENTS_API, assignment);
  return response.data;
};

// 更新作业
export const updateAssignment = async (assignmentId: string, updates: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, updates);
  return response.data;
};

// 删除作业
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.status;
};
