import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  const active = (path: string) => (pathname === path ? "active" : "");

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Account/${link}`}
          id={`wd-account-${link.toLowerCase()}-link`}
          className={`list-group-item text-danger ${active(`/Kanbas/Account/${link}`)} border border-0`}
        >
          {link}
        </Link>
      ))}

      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          id="wd-account-users-link"
          className={`list-group-item text-danger ${active(`/Kanbas/Account/Users`)} border border-0`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
