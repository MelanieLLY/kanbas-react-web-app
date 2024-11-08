import { FaPlusCircle, FaSearch, FaBook, FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";
import { useParams } from "react-router";

import { BsThreeDotsVertical, BsGripVertical } from "react-icons/bs";
import AssLessonControlButtons from "./AssLessonControlButtons";
import { assignments } from "../../Database";
import { useSelector } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex justify-content-between mb-4">
        {/* search top */}
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control border-start-0"
            style={{ boxShadow: "none" }}
            placeholder="Search for Assignments"
          />
        </div>
        {/* search right      */}
        <div>
          <button className="btn btn-secondary m-1">
            <GoPlus className="fs-4" /> Group
          </button>

          <button className="btn btn-danger m-1">
            <GoPlus className="fs-4" /> Assignment
          </button>
        </div>
      </div>

      {/* assignment item list */}
      <div className="d-flex justify-content-between align-items-center p-2 bg-white border border-gray">
        <div id="wd-assignments" className="container p-0">
          <ul id="wd-assignment-list" className="list-group p-0 m-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment) => (
                <li
                  key={assignment._id}
                  className="wd-assignment-list-item d-flex align-items-center border-bottom border-gray"
                >
                  <div
                    style={{
                      backgroundColor: "green",
                      width: "3px",
                      height: "80px",
                    }}
                  ></div>

                  <div className="assignment-icon d-flex align-items-center me-3">
                    <BsGripVertical className="me-2 fs-4" />
                    <FaBook className="fs-4 text-success" />
                  </div>

                  <div className="assignment-info">
                    {currentUser?.role === "FACULTY" ? (
                      <a
                        className="wd-assignment-link fw-bold text-decoration-none text-dark"
                        href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </a>
                    ) : (
                      <span className="fw-bold text-dark">
                        {assignment.title}
                      </span>
                    )}

                    <p className="wd-assignment-overview text-muted">
                      <span className="text-danger">Single Module</span> |
                      <strong> Not available until:</strong>{" "}
                      <span>
                        {typeof assignment.availableDate === "object"
                          ? `${assignment.availableDate.date} ${assignment.availableDate.time}`
                          : "TBD"}
                      </span>{" "}
                      |<strong> Due:</strong>{" "}
                      <span>
                        {typeof assignment.dueDate === "object"
                          ? `${assignment.dueDate.date} ${assignment.dueDate.time}`
                          : "TBD"}
                      </span>{" "}
                      | {assignment.points || 100} pts
                    </p>
                  </div>

                  <div className="ms-auto">
                    <AssLessonControlButtons />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
