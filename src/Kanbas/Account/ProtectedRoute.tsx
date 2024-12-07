import { useSelector } from "react-redux";
import { Navigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

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
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [userCourses, setUserCourses] = useState<string[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserCourses = async () => {
      if (!currentUser) return;

      try {
        const response = await axiosWithCredentials.get(
          `http://localhost:4000/api/users/${currentUser._id}/courses`
        );
        const courses = response.data;
        const courseIds = courses.map((course: any) => course._id); 
        setUserCourses(courseIds);
      } catch (error) {
        console.error("Failed to fetch user courses:", error);
        setUserCourses([]); 
      } finally {
        setLoading(false); 
      }
    };

    fetchUserCourses();
  }, [currentUser]);

  useEffect(() => {
    if (!loading && requiresEnrollment && currentUser?.role === "STUDENT" && cid) {
      const isEnrolled = userCourses.includes(cid);
      if (!isEnrolled) {
        alert("You must be enrolled in the course to view its content. Refresh the page if you just enrolled."); 
      }
      setShouldNavigate(!isEnrolled); 
    }
  }, [loading, requiresEnrollment, currentUser, cid, userCourses]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!currentUser) {
    return <Navigate to="#/Kanbas/Account/Signin" />;
  }

  if (shouldNavigate) {
    window.location.href = "#/Kanbas/Dashboard";     
  }

  return children;
}
