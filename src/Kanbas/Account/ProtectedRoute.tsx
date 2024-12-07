import { useSelector } from "react-redux";
import { Navigate, useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const axiosWithCredentials = axios.create({
  baseURL: process.env.REACT_APP_REMOTE_SERVER,
  withCredentials: true, // 确保发送 cookie/session
});
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const USERS_API = `${REMOTE_SERVER}/api/users`;

axiosWithCredentials.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized request: Please check login status.");
    }
    return Promise.reject(error);
  }
);

export default function ProtectedRoute({
  children,
  requiresEnrollment = false,
}: {
  children: any;
  requiresEnrollment?: boolean;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [userCourses, setUserCourses] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUserLoaded, setIsUserLoaded] = useState(false); // 判断 currentUser 是否加载完成

  // Step 1: 确认 currentUser 是否加载完成
  useEffect(() => {
    if (currentUser !== undefined) {
      setIsUserLoaded(true); // 确保加载完成后更新状态
    }
  }, [currentUser]);

  // Step 2: 获取用户课程数据
  useEffect(() => {
    const fetchUserCourses = async () => {
      if (!currentUser || !currentUser._id) {
        console.error("Invalid currentUser: Missing _id.");
        setLoading(false); // 用户未登录或无效，结束加载状态
        return;
      }

      try {
        const response = await axiosWithCredentials.get(
          `${USERS_API}/${currentUser._id}/courses`
        );
        const courses = response.data;
        const courseIds = courses.map((course: any) => course._id);
        setUserCourses(courseIds);
      } catch (error) {
        console.error("Failed to fetch user courses:", error);
        setUserCourses([]);
      } finally {
        setLoading(false); // 确保无论成功或失败，状态都会更新
      }
    };

    if (isUserLoaded) {
      fetchUserCourses(); // 只有在 currentUser 加载完成后调用
    }
  }, [isUserLoaded, currentUser]);

  // Step 3: 判断是否需要导航
  useEffect(() => {
    if (!loading && requiresEnrollment && currentUser?.role === "STUDENT" && cid) {
      const isEnrolled = userCourses.includes(cid);
      if (!isEnrolled) {
        alert(
          "You must be enrolled in the course to view its content. Refresh the page if you just enrolled."
        );
      }
      setShouldNavigate(!isEnrolled);
    }
  }, [loading, requiresEnrollment, currentUser, cid, userCourses]);

  // Step 4: 加载状态和导航逻辑
  if (!isUserLoaded || loading) {
    return <div>Loading...</div>; // 如果用户或数据尚未加载完成，显示加载状态
  }

  if (!currentUser) {
    return <Navigate to="#/Kanbas/Account/Signin" />;
  }

  if (shouldNavigate) {
    navigate("/Kanbas/Dashboard", { replace: true });
    return null; // 确保不再渲染当前内容
  }

  return children;
}
