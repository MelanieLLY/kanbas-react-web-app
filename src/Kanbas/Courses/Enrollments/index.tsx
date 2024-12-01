import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEnrollments, enrollCourseSync, unenrollCourseSync } from "./enrollmentActions";
import * as coursesClient from "../client";
import * as enrollmentsClient from "./client";

export default function Enrollments() {
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const enrollments = useSelector((state: any) => state.enrollments.enrollments);
  const dispatch = useDispatch();
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    if (!currentUser) {
      console.warn("Enrollments Debug - currentUser is null, skipping fetch");
      return;
    }
  
    console.log("Enrollments Debug - useEffect triggered. currentUser:", currentUser);
  
    const fetchData = async () => {
      console.log("Enrollments Debug - Fetching enrollments for user:", currentUser._id);
  
      try {
        const enrollmentsData = await enrollmentsClient.findEnrollmentsByUserId(currentUser._id);
        console.log("Enrollments Debug - Enrollments data fetched:", enrollmentsData);
        dispatch(setEnrollments(enrollmentsData)); // 同步更新注册信息
      } catch (error) {
        console.error("Enrollments Debug - Error fetching enrollments:", error);
      }
  
      try {
        const allCourses = await coursesClient.fetchAllCourses();
        console.log("Enrollments Debug - All courses data fetched:", allCourses);
        setCourses(allCourses); // 更新课程列表
      } catch (error) {
        console.error("Enrollments Debug - Error fetching courses:", error);
      }
    };
  
    fetchData();
  }, [currentUser, dispatch]);

  // 处理课程注册
  const handleEnroll = async (courseId: string) => {
    if (!currentUser) return;
    await enrollmentsClient.enrollUserInCourse(currentUser._id, courseId); // 调用后端 API
    dispatch(enrollCourseSync(currentUser._id, courseId)); // 同步更新 Redux 状态
  };



  const handleUnenroll = async (enrollmentId: string) => {
    await enrollmentsClient.unenrollUserFromCourse(enrollmentId); // 调用后端 API
    dispatch({ type: "UNENROLL_COURSE", payload: enrollmentId }); // 同步更新 Redux 状态
  };
  

  return (
    <div>
      <h2>Enrollments</h2>
      <h3>Your Enrolled Courses</h3>
      <ul>
        {enrollments.map((enrollment: any) => (
          <li key={enrollment._id}>
            {courses.find((course) => course._id === enrollment.course)?.title || "Unknown Course"}
            <button onClick={() => handleUnenroll(enrollment._id)}>Unenroll</button>
          </li>
        ))}
      </ul>
      <h3>Available Courses</h3>
      <ul>
        {courses
          .filter((course: any) => !enrollments.some((e: any) => e.course === course._id))
          .map((course: any) => (
            <li key={course._id}>
              {course.title}
              <button onClick={() => handleEnroll(course._id)}>Enroll</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
