import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEnrollments,
  enrollCourseSync,
  unenrollCourseSync,
} from "./Courses/Enrollments/enrollmentActions";
import * as enrollmentsClient from "./Courses/Enrollments/client";

export default function Dashboard({
  courses,
  course,

  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector(
    (state: any) => state.enrollmentReducer.enrollments
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleCourses = () => setShowAllCourses(!showAllCourses);

  const handleCourseNavigation = (courseId: string) => {
    navigate(`/Kanbas/Courses/${courseId}/Home`);
  };

  const handleEnroll = async (courseId: string) => {
    if (!currentUser) return;
    const enrollmentData = await enrollmentsClient.enrollUserInCourse(
      currentUser._id,
      courseId
    );
    dispatch(enrollCourseSync(currentUser._id, courseId)); // Redux 状态更新
    dispatch(setEnrollments([...enrollments, enrollmentData])); // 确保 enrollments 列表最新
  };

  const handleUnenroll = async (enrollmentId: string) => {
    await enrollmentsClient.unenrollUserFromCourse(enrollmentId);
    const updatedEnrollments = enrollments.filter(
      (enrollment: any) => enrollment._id !== enrollmentId
    );
    dispatch({ type: "UNENROLL_COURSE", payload: enrollmentId });
    dispatch(setEnrollments(updatedEnrollments));
  };

  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course) =>
        enrollments.some((enrollment: any) => enrollment.course === course._id)
      );

  // Debugging Output
  console.log("All courses:", courses);
  console.log("User enrollments:", enrollments);
  console.log("Filtered courses (based on showAllCourses):", filteredCourses);

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (!currentUser) return;
      console.log(`Fetching enrollments for user ${currentUser._id}`);
      const enrollmentsData = await enrollmentsClient.findEnrollmentsByUserId(
        currentUser._id
      );
      dispatch(setEnrollments(enrollmentsData));
      console.log("Fetched enrollments:", enrollmentsData);
    };

    fetchEnrollments();
  }, [currentUser, dispatch]);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard<button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
</h1> <hr />
      {currentUser?.role === "FACULTY" && (
        <div>
          <h5>
            New/Edit Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />

          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </div>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({filteredCourses.length})
        <button className="btn btn-primary float-end " onClick={toggleCourses}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => (
            <div
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
              key={course._id}
            >
              <div className="card rounded-3 overflow-hidden h-100 d-flex flex-column">
                <div className="wd-dashboard-course-link text-decoration-none text-dark">
                  <img
                    src={course.image}
                    className="card-img-top"
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                    {enrolling && (
              <button className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                {course.enrolled ? "Unenroll" : "Enroll"}
              </button>
            )}{course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button
                      className="btn btn-primary me-2 "
                      onClick={() => handleCourseNavigation(course._id)}
                    >
                      Go
                    </button>
                    {currentUser?.role === "STUDENT" &&
                      (enrollments.some((e: any) => e.course === course._id) ? (
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            const enrollment = enrollments.find(
                              (e: any) => e.course === course._id
                            );
                            if (enrollment) {
                              handleUnenroll(enrollment._id);
                            }
                          }}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={() => handleEnroll(course._id)}
                        >
                          Enroll
                        </button>
                      ))}
                    {currentUser?.role === "FACULTY" && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            if (
                              window.confirm(
                                "Are you sure you want to delete this course?"
                              )
                            ) {
                              deleteCourse(course._id);
                            }
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p> Images from DALL-E</p>
    </div>
  );
}
