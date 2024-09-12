import KanbasNavigation from "../Navigation";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";


export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course CS1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="People" element={<h2>People</h2>} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />

            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
