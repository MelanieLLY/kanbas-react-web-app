import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });


axiosWithCredentials.interceptors.response.use(
  (response) => response, 
  (error) => {
    console.error("Axios response error:", error.response || error.message); // 捕获错误
    return Promise.reject(error); 
  }
);

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
console.log("REMOTE_SERVER:", REMOTE_SERVER); // 打印环境变量的值
console.log("USERS_API:", USERS_API);         // 打印生成的 API 地址
export const signin = async (credentials: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response.data;
  };
  
  export const signup = async (user: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
  };
  

  export const updateUser = async (user: any) => {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
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
  

  