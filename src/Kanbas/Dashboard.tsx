import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadEnrollments,
  enrollCourse,
  unenrollCourse,
} from "./enrollmentActions";

export default function Dashboard({
  courses,
  course,
  setCourse,
  
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector(
    (state: any) => state.enrollmentReducer.enrollments
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleCourses = () => setShowAllCourses(!showAllCourses);

  useEffect(() => {
    if (currentUser?.role === "STUDENT") {
      dispatch(loadEnrollments(currentUser._id));
    }
  }, [currentUser, dispatch]);

  const handleEnroll = (courseId: string) => {
    if (currentUser) {
      dispatch(enrollCourse(currentUser._id, courseId));
    }
  };

  const handleUnenroll = (courseId: string) => {
    if (currentUser) {
      dispatch(unenrollCourse(currentUser._id, courseId));
    }
  };

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

  const handleCourseNavigation = (courseId: string) => {
    if (isEnrolled(courseId) || currentUser?.role === "FACULTY") {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else {
      alert("You must be enrolled in the course to view its content.");
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser?.role === "STUDENT" && (
        <button className="btn btn-primary float-end" onClick={toggleCourses}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}
      {currentUser?.role === "FACULTY" && (
        <div>
          <h5>
            New Course
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
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => {
              // FACULTY can see all courses, STUDENT sees either enrolled courses or all courses based on showAllCourses
              return (
                currentUser?.role === "FACULTY" ||
                showAllCourses ||
                enrollments.some(
                  (enrollment: { user: string; course: string }) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                )
              );
            })
            .map((course) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
                key={course._id}
              >
                <div className="card rounded-3 overflow-hidden h-100 d-flex flex-column">
                  <div className="wd-dashboard-course-link text-decoration-none text-dark">
                    <img
                      src={course.image}
                      width="100%"
                      height={160}
                      alt={course.name}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleCourseNavigation(course._id)}
                      >
                        Go
                      </button>
                      {currentUser?.role === "STUDENT" &&
                        (isEnrolled(course._id) ? (
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => handleUnenroll(course._id)}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success ms-2"
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
                              deleteCourse(course._id);
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
