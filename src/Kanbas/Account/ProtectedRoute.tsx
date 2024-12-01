import { useSelector } from "react-redux";
import { Navigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";

export default function ProtectedRoute({
  children,
  requiresEnrollment = false,
}: {
  children: any;
  requiresEnrollment?: boolean;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
  const { cid } = useParams();
  const params = useParams();
  const location = useLocation();
  const [shouldNavigate, setShouldNavigate] = useState(false);
  // console.log("Debug - useParams:", cid);
  console.log("ProtectedRoute Debug - useParams output:", params); // 打印完整参数对象
  console.log("ProtectedRoute Debug - currentCourseId (cid):", cid);
  console.log("Debug - Location Pathname before useEffect:", location.pathname);


  useEffect(() => {
    // 这次改了这里 - 从 localStorage 获取用户信息
    const savedUser = localStorage.getItem("currentUser");
    if (!currentUser && savedUser) {
      dispatch(setCurrentUser(JSON.parse(savedUser)));
    }
  }, [currentUser]);

  useEffect(() => {
    console.log("ProtectedRoute Debug - enrollments:", enrollments);
    console.log("ProtectedRoute Debug - currentUser:", currentUser);
    if (!Array.isArray(enrollments)) {
      console.error("ProtectedRoute Error - enrollments is not an array:", enrollments);
      return;
    }
  
    if (
      requiresEnrollment &&
      currentUser?.role === "STUDENT" &&
      !enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id && enrollment.course === cid
      )
    ) {
      alert("You must be enrolled in the course to view its content.");
      setShouldNavigate(true);
    } else {
      setShouldNavigate(false);
    }
  }, [cid, enrollments, currentUser, requiresEnrollment]);
  

  if (!currentUser) {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }

  if (shouldNavigate) {
    return <Navigate to="/Kanbas/Dashboard" replace state={{ from: location }} />;
  }

  return children;
}
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

