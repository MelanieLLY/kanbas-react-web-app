import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const location = useLocation();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const lowerCaseLink = link.toLowerCase();
        const isActive = location.pathname.includes(lowerCaseLink);
        return (
          <Link
            key={link}
            to={`/Kanbas/Courses/${cid}/${lowerCaseLink}`}
            className={`list-group-item border border-0 ${
              isActive ? "active text-danger" : "text-dark"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
