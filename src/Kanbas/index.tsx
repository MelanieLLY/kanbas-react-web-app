import { Routes, Route, Navigate } from "react-router";
import { Link, useParams, useLocation } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as db from "./Database";
import React, { useEffect, useState } from "react";
import store from "./store";
import { Provider, useSelector } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useDispatch } from "react-redux";
import { setEnrollments } from "./Courses/Enrollments/enrollmentActions";
import * as enrollmentsClient from "./Courses/Enrollments/client";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2024-01-15",
    endDate: "2024-05-15",
    department: "D000",
    credits: 3,
    description: "Course description",
    link: "/Kanbas/Courses/CH000/Home",
    image: "/images/CoursePicDefault.webp",
    buttonText: "Go",
  });
  const dispatch = useDispatch(); 


  const { cid } = useParams();
  const location = useLocation();
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course); // 调用 API 创建课程
    setCourses([...courses, newCourse]); // 更新状态
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const fetchCourses = async () => {
    let courses = [];
    try {
      courses = await userClient.findAllCourses();
    } catch (error) {
      console.error(error);
    }
    setCourses(courses);
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const fetchEnrollments = async () => {
    if (!currentUser) return;
  
    const enrollmentsData = await enrollmentsClient.findEnrollmentsByUserId(currentUser._id);
    dispatch(setEnrollments(enrollmentsData));
  };
  
  useEffect(() => {
    fetchCourses();
    fetchEnrollments(); // 加载注册信息
  }, [currentUser]);

  return (
    // <Provider store={store}>
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="Courses/:cid/*"
              element={
                <ProtectedRoute requiresEnrollment>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
    // </Provider>
  );
}
