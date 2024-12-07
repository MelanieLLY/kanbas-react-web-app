import { FaPlusCircle, FaSearch, FaBook, FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";
import { BsThreeDotsVertical, BsGripVertical } from "react-icons/bs";
import AssLessonControlButtons from "./AssLessonControlButtons";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { setAssignments, deleteAssignment } from "./reducer";
import * as assignmentsClient from "./client"; // 引入后端 API

// Main Assignment component
export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer); // Getting currentUser from state
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignments); // Getting assignments from Redux state


  const [searchTerm, setSearchTerm] = useState(""); // 搜索框状态

  // 加载作业列表
  useEffect(() => {
    const fetchAssignments = async () => {
      if (!cid) {
        console.error("Error: Course ID (cid) is missing.");
        return;
      }
      // const allAssignments = await assignmentsClient.findAllAssignments(); // 调用 API 获取所有作业
      const allAssignments = await assignmentsClient.findAssignmentsForCourse(cid); // 使用 cid

      const courseAssignments = allAssignments.filter(
        (assignment: any) => assignment.course === cid // 筛选出当前课程的作业
      );
      dispatch(setAssignments(courseAssignments)); // 更新 Redux 状态
    };

    fetchAssignments(); // 加载作业
  }, [cid, dispatch]);

  // 删除作业
  const handleDelete = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId); // 调用 API 删除作业
    dispatch(deleteAssignment(assignmentId)); // 从 Redux 状态中移除
  };
  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment: any) =>
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [assignments, searchTerm]);
  



  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex justify-content-between mb-4">
        
        {/* Search Input */}
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control border-start-0"
            style={{ boxShadow: "none" }}
            placeholder="Search for Assignments"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // 更新搜索状态
          />
        </div>

  {/* 添加作业按钮，仅教师角色可见 */}
  {currentUser?.role === "FACULTY" && (
          <Link to={`/Kanbas/Courses/${cid}/Assignments/Editor`} className="btn btn-primary">
            <FaPlusCircle /> Add Assignment
          </Link>
        )}
      </div>


      {/* Assignment Item List */}
        {/* 作业列表 */}
        <ul id="wd-assignment-list" className="list-group p-0 m-0">
        {assignments
          .filter((assignment: any) =>
            assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) // 根据搜索内容筛选
          )
          .map((assignment: any) => (
            <li
              key={assignment._id}
              className="wd-assignment-list-item d-flex align-items-center border-bottom"
            >
              <div style={{ backgroundColor: "green", width: "3px", height: "80px" }}></div>
              <div className="assignment-icon d-flex align-items-center me-3">
                <BsGripVertical className="me-2 fs-4" />
                <FaBook className="fs-4 text-success" />
              </div>
              <div className="assignment-info">
                {currentUser?.role === "FACULTY" ? (
                  <Link
                    className="wd-assignment-link fw-bold text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                ) : (
                  <span className="fw-bold text-dark">{assignment.title}</span>
                )}
                 <p className="wd-assignment-overview text-muted">
            <span className="text-danger">Single Module</span> |{" "}
            <strong>Not available until:</strong>{" "}
            {assignment.availableDate
              ? `${assignment.availableDate.date} ${assignment.availableDate.time}`
              : "TBD"}{" "}
            | <strong>Due:</strong>{" "}
            {assignment.dueDate
              ? `${assignment.dueDate.date} ${assignment.dueDate.time}`
              : "TBD"}{" "}
            | {assignment.points || 100} pts
          </p>
              </div>

              {/* 删除按钮，仅教师角色可见 */}
              {currentUser?.role === "FACULTY" && (
                <button
                  className="btn btn-outline-danger ms-2"
                  onClick={() => handleDelete(assignment._id)}
                >
                  Delete
                </button>
              )}
            </li>
                ))}
                </ul>
              </div>
            );
          
}
