// src/Kanbas/Account/ProtectedRoute.tsx
import { useSelector } from "react-redux";
import { Navigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const location = useLocation();
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    if (
      requiresEnrollment &&
      currentUser?.role === "STUDENT" &&
      !enrollments.some(
        (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === cid
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
