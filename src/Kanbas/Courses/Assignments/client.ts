import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/assignments`;

interface Assignment {
  _id?: string;
  title: string;
  description: string;
  course: string | { $oid: string }; // 允许字符串或 MongoDB ObjectId 格式
  points?: number;
  dueDate?: { date: string; time: string } | null;
  availableDate?: { date: string; time: string } | null;
  availableUntil?: { date: string; time: string } | null;
  assignmentGroup?: string;
  displayGradeAs?: string;
  submissionType?: string;
  onlineEntryOptions?: string[];
  assignTo?: string;
}

// 获取所有作业
export const findAllAssignments = async () => {
  const response = await axios.get(ASSIGNMENTS_API);
  return response.data;
};

// 获取某节课的作业
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  return response.data;
};

// 创建新作业
export const createAssignment = async (courseId: string, assignment: Assignment) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

// 更新作业
export const updateAssignment = async (assignmentId: string, updates: Assignment) => {
  const response = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignmentId}`,
    updates
  );
  return response.data;
};

// 删除作业
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return response.data;
};
