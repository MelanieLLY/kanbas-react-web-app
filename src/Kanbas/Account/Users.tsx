import { useState, useEffect } from "react";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import { FaPlus } from "react-icons/fa6";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };
  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    console.log("Fetched users:", users); // 检查是否成功获取用户数据

    setUsers(users);
  };
  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New", // 默认名
      lastName: `User${users.length + 1}`, // 默认姓
      username: `newuser${Date.now()}`, // 唯一用户名
      password: "password123", // 默认密码
      email: `email${users.length + 1}@neu.edu`, // 默认邮箱
      section: "S101", // 默认分组
      role: "STUDENT", // 默认角色
    });
    setUsers([...users, user]); // 将新用户添加到状态中
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Users</h3>
      <input
        onChange={(e) => filterUsersByName(e.target.value)}
        placeholder="Search people"
        className="form-control float-start w-25 me-2 wd-filter-by-name"
      />
      <select
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="form-select float-start w-25 wd-select-role"
      >
        <option value="">All Roles</option>{" "}
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>{" "}
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <button
        onClick={createUser}
        className="float-end btn btn-danger wd-add-people"
      >
        <FaPlus className="me-2" />
        Users
      </button>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
