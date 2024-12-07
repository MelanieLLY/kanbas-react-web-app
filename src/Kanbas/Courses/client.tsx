import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};
export const deleteCourse = async (id: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${id}`);
  return data;
};
export const updateCourse = async (course: any) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course); // 发送 PUT 请求
  return data; // 返回响应数据
};
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data; // 返回新模块数据
};
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course); // 发送 POST 请求
  return data; // 返回创建的课程数据
};
export const findUsersForCourse = async (courseId: string) => {
  try {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
    return response.data; // 返回课程用户数据
  } catch (error) {
    console.error("Error fetching users for course:", error);
    throw error;
  }
};