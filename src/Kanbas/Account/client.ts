import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
console.log("REMOTE_SERVER:", REMOTE_SERVER); // 打印环境变量的值
console.log("USERS_API:", USERS_API); // 打印生成的 API 地址
const axiosWithCredentials = axios.create({
  baseURL: process.env.REACT_APP_REMOTE_SERVER,
  withCredentials: true,
});
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
axiosWithCredentials.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios response error:", error.response || error.message); // 捕获错误
    return Promise.reject(error);
  }
);
export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials
  );
  console.log("response data",response.data);
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`
  );
  return data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course
  );
  return data;
};

export const findAllCourses = async () => {
  const response = await axiosWithCredentials.get(`${COURSES_API}`);
  return response.data;
};
export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
  return response.data;
};
export const findUsersByRole = async (role: string) => {
  const response = await axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};
export const findUsersByPartialName = async (name: string) => {
  const response = await axios.get(`${USERS_API}?name=${name}`);
  return response.data;
};
export const findUserById = async (id: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/${id}`);
  return response.data; 
};
export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
};
export const createUser = async (user: any) => {
  const response = await axios.post(`${USERS_API}`, user); 
  return response.data; 
};
export const findCoursesForUser = async (user:any) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/${user._id}/courses`);
  return response.data;
};
export const enrollIntoCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
 };
 export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
 };
 
