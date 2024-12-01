import axios from "axios";
import { REMOTE_SERVER } from "../../Account/client";

const ENROLLMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/enrollments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// 获取用户的注册列表
export const findEnrollmentsByUserId = async (userId: string) => {
  const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
  return response.data;
};

// 注册用户到课程
export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(ENROLLMENTS_API, { userId, courseId });
  return response.data;
};

// 取消注册
export const unenrollUserFromCourse = async (enrollmentId: string) => {
  const response = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
  return response.status;
};
export const findAllCourses = async () => {
  const response = await axios.get(`${COURSES_API}`);
  return response.data;
};
