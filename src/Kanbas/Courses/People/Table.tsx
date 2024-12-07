import { FaUserCircle } from "react-icons/fa";
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import PeopleDetails from "./Details";
import { findUsersForCourse } from "../client"; // 引入从后端获取课程用户数据的函数
import { findAllUsers } from "../../Account/client"; // 查询所有用户 API

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
  courseId, // 用于区分是否是课程相关页面
}: {
  courseId?: string;
}) {
  const [users, setUsers] = useState<any[]>([]);

  // 动态加载用户数据
  const fetchUsers = useCallback(async () => {
    try {
      if (courseId) {
        // 课程页面：获取课程的用户
        const fetchedUsers = await findUsersForCourse(courseId);
        setUsers(fetchedUsers);
      } else {
        // 管理员页面：获取所有用户
        const fetchedUsers = await findAllUsers();
        setUsers(fetchedUsers);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }, [courseId]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  
  return (
    
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
