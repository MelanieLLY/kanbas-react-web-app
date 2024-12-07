import { FaUserCircle } from "react-icons/fa";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PeopleDetails from "./Details";
import { findUsersForCourse } from "../client"; // 引入从后端获取课程用户数据的函数

const formatDate = (isoString: string) => {
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (err) {
    console.warn("Invalid date format:", isoString);
    return isoString; // 如果解析失败，直接返回原始字符串
  }
};
const formatTotalActivity = (activity: string) => {
  try {
    const [hours, minutes, seconds] = activity.split(":");
    return `${hours} hrs ${minutes} mins ${seconds} secs`;
  } catch (err) {
    console.warn("Invalid total activity format:", activity);
    return activity; 
  }
};


export default function PeopleTable({
  users = [],
  fetchUsers, 
}: {
  users?: any[];
  fetchUsers: () => Promise<void>;
}) {  return (
    
    <div id="wd-people-table">
      <PeopleDetails fetchUsers={fetchUsers} />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>

          {users.map((user: any) => (
            <tr key={user._id}>
              {/* 用户名链接到详情页 */}
              <td className="wd-full-name text-nowrap">
                <Link
                  to={`/Kanbas/Account/Users/${user._id}`}
                  className="text-decoration-none"
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.loginId}</td>
              <td>{user.section}</td>
              <td>{formatDate(user.lastActivity)}</td>
              <td>{formatTotalActivity(user.totalActivity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
