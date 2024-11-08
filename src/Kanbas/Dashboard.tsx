import { Link } from "react-router-dom";
import * as db from "./Database";
import React, { useState } from "react";
import { useSelector } from "react-redux";

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
  const { enrollments } = db;

  return (
    <div id="wd-dashboard" className="p-4">
    <h1 id="wd-dashboard-title">Dashboard</h1>
    <hr />
    
    {currentUser?.role === "FACULTY" && (
      <>
        <h5>New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
        </h5>
        <hr />
      </>
    )}
  
    <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses
          .filter((course) =>
            enrollments.some(
              (enrollment) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            )
          )
          .map((course) => (
            <div
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
              key={course._id}
            >
              <div className="card rounded-3 overflow-hidden h-100 d-flex flex-column">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src={course.image} width="100%" height={160} alt="Course" />
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
                    <button className="btn btn-primary"> Go </button>
                    
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
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>

  

      <p> Images from DALL-E</p>
    </div>
  );
}
