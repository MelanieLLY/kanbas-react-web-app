import { FaPlusCircle, FaSearch,FaBook } from "react-icons/fa";
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
          <button className="btn btn-secondary me-2">
            <FaPlusCircle className="me-1" /> Group
          </button>

          <button className="btn btn-danger">
            <FaPlusCircle className="me-1" /> Assignment
          </button>
        </div>
        </div>
{/* assignment title */}

<div className="d-flex justify-content-between align-items-center p-2 bg-light border border-gray">

        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-4" />
          <span className="me-2">▼</span>
          <h3 className="m-0">ASSIGNMENTS</h3>
        </div>
        <div className="d-flex align-items-center">
        <div className="border border-secondary rounded-pill px-3 py-1 me-2" style={{ display: "inline-block" }}>
  40% of Total
</div>

          <FaPlusCircle className="me-3 fs-5" />
          <BsThreeDotsVertical className="fs-5" />
        </div>
      </div>

 {/* assignment item list  */}
 <div className="d-flex justify-content-between align-items-center p-2 bg-white border border-gray">
 <BsGripVertical className="me-2 fs-4" />

 <div id="wd-assignments" className="container">
  <ul id="wd-assignment-list" className="list-group w-100" >
    <li className="wd-assignment-list-item list-group-item d-flex align-items-start" style={{ backgroundColor: 'white', border: 'none' }}>
      <div className="assignment-icon me-3">
        <FaBook className="fs-4 text-muted" /> 
      </div>
      <div className="assignment-info">
        <a className="wd-assignment-link fw-bold text-decoration-none" href="#/Kanbas/Courses/CS1234/Assignments/123">
          A1 - ENV + HTML
        </a>
        <p className="wd-assignment-overview text-muted">
          Multiple Modules | <strong>Not available until:</strong> <span>2024-09-12 09:00 AM</span> | <strong>Due:</strong> <span>2024-09-12 11:59 PM</span> | Total 100
        </p>
      </div>
    </li>

    <li className="wd-assignment-list-item list-group-item d-flex align-items-start" style={{ backgroundColor: 'white', border: 'none', borderBottom: '1px solid gray' }}>
      <div className="assignment-icon me-3">
        <FaBook className="fs-4 text-muted" /> 
      </div>
      <div className="assignment-info">
        <a className="wd-assignment-link fw-bold text-decoration-none" href="#/Kanbas/Courses/CS1234/Assignments/124">
          A2 - CSS Basics
        </a>
        <p className="wd-assignment-overview text-muted">
          Single Module | <strong>Not available until:</strong> <span>2024-09-19 09:00 AM</span> | <strong>Due:</strong> <span>2024-09-19 11:59 PM</span> | Total 100
        </p>

      </div>

    </li>

    <li className="wd-assignment-list-item list-group-item d-flex align-items-start" style={{ backgroundColor: 'white', border: 'none', borderBottom: '1px solid gray' }}>
      <div className="assignment-icon me-3">
        <FaBook className="fs-4 text-muted" /> 
      </div>
      <div className="assignment-info">
        <a className="wd-assignment-link fw-bold text-decoration-none" href="#/Kanbas/Courses/CS1234/Assignments/125">
          A3 - Responsive Design
        </a>
        <p className="wd-assignment-overview text-muted">
          Multiple Modules | <strong>Not available until:</strong> <span>2024-09-26 09:00 AM</span> | <strong>Due:</strong> <span>2024-09-26 11:59 PM</span> | Total 100
        </p>
      </div>
    </li>
  </ul>
</div>
</div>




    </div>
  );
}
