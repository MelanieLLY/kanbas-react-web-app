import { FaPlusCircle, FaSearch, FaBook, FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";


import { BsThreeDotsVertical, BsGripVertical } from "react-icons/bs";
import AssLessonControlButtons from "./AssLessonControlButtons";

export default function Assignments() {
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

      {/* assignment title */}

      <div className="d-flex justify-content-between align-items-center p-2 bg-light border border-gray">
        <div className="d-flex align-items-center">
          <BsGripVertical className="mb-1 me-2 fs-4" />
          <MdArrowDropDown className="fs-2" />
          <h3 className="m-0">ASSIGNMENTS</h3>
        </div>
        <div className="d-flex align-items-center">
          <div
            className="border border-secondary rounded-pill px-3 py-1 me-2"
          >
            40% of Total
          </div>

          <GoPlus className="me-3 fs-4" />
          <BsThreeDotsVertical className="fs-5" />
        </div>
      </div>

      {/* assignment item list  */}
      <div className="d-flex justify-content-between align-items-center p-2 bg-white border border-gray">
        <div id="wd-assignments" className="container p-0">
          <ul id="wd-assignment-list" className="list-group p-0 m-0">
            <li className="wd-assignment-list-item d-flex align-items-center border-bottom border-gray">
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
                <a
                  className="wd-assignment-link fw-bold text-decoration-none text-dark"
                  href="#/Kanbas/Courses/CS1234/Assignments/123"
                  // style={{ color: "black", fontWeight: "bold" }}
                >
                  A1 - ENV + HTML
                </a>
                <p className="wd-assignment-overview text-muted">
                <span className="text-danger">Multiple Modules</span> | 
                <strong> Not available until:</strong> <span>2024-09-12 09:00 AM</span> | 
                <strong> Due:</strong> <span>2024-09-12 11:59 PM</span> | 100 pts
              </p>
              </div>

              <div className="ms-auto">
                <AssLessonControlButtons />
              </div>
            </li>

            <li className="wd-assignment-list-item d-flex align-items-center border-bottom border-gray">
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
                <a
                  className="wd-assignment-link fw-bold text-decoration-none text-dark"
                  href="#/Kanbas/Courses/CS1234/Assignments/124"
                >
                  A2 - CSS Basics
                </a>
                <p className="wd-assignment-overview text-muted">
                <span className="text-danger">Single Modules</span> | <strong>Not available until:</strong>{" "}
                  <span>2024-09-19 09:00 AM</span> | <strong>Due:</strong>{" "}
                  <span>2024-09-19 11:59 PM</span> | 100 pts
                </p>
              </div>
              <div className="ms-auto">
                <AssLessonControlButtons />
              </div>
            </li>

            <li className="wd-assignment-list-item d-flex align-items-center border-bottom border-gray">
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
                <a
                  className="wd-assignment-link fw-bold text-decoration-none text-dark"
                  href="#/Kanbas/Courses/CS1234/Assignments/125"
                >
                  A3 - Responsive Design
                </a>
                <p className="wd-assignment-overview text-muted">
                <span className="text-danger">Single Modules</span> | <strong>Not available until:</strong>{" "}
                  <span>2024-09-26 09:00 AM</span> | <strong>Due:</strong>{" "}
                  <span>2024-09-26 11:59 PM</span> | 100 pts
                </p>
              </div>
              <div className="ms-auto">
                <AssLessonControlButtons />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
