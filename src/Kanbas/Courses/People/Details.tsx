import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";

export default function PeopleDetails({
  fetchUsers,
}: {
  fetchUsers: () => Promise<void>;
}) {
  const { uid } = useParams();
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // 新增 email 状态变量
  const [role, setRole] = useState(""); // 新增 role 状态变量
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  // 获取用户信息
  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`); // 初始化名字
    setEmail(user.email); // 初始化 Email
    setRole(user.role); // 初始化 Role
  };

  // 删除用户
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    fetchUsers(); // 刷新用户列表
    navigate(-1); // 返回上一页面
  };

  // 保存用户更新
  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email, role }; // 包括 email 和 role
    await client.updateUser(updatedUser); // 调用客户端函数发送更新请求
    setUser(updatedUser); // 更新本地状态
    setEditing(false); // 退出编辑模式
    fetchUsers(); // 刷新用户列表
    navigate(-1); // 返回表格页面
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  if (!uid) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={() => navigate(-1)}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>

      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />

      {/* 编辑名字 */}
      <div className="text-danger fs-4 wd-name">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}
        {editing && (
          <FaCheck
            onClick={() => saveUser()}
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}
        {!editing && (
          <div className="wd-name" onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}
        {editing && (
          <input
            className="form-control w-50 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveUser();
            }}
          />
        )}
      </div>

      {/* 编辑 Email */}
      <div>
        <b>Email:</b>
        {!editing ? (
          <span className="wd-email">{user.email}</span>
        ) : (
          <input
            type="email"
            className="form-control w-75 wd-edit-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
      </div>

      {/* 编辑 Role */}
      <div>
        <b>Role:</b>
        {!editing ? (
          <span className="wd-role">{user.role}</span>
        ) : (
          <select
            className="form-select w-50 wd-edit-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="STUDENT">Student</option>
            <option value="TA">Teaching Assistant</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Administrator</option>
          </select>
        )}
      </div>

      <hr />
      <div className="wd-detail-fields">
    <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
    <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
    <b>Total Activity:</b>{" "}
    <span className="wd-total-activity">{user.totalActivity}</span> <br />
  </div>
  <hr />
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary float-start wd-cancel"
      >
        Cancel
      </button>
      <button
        onClick={() => deleteUser(uid!)} // 确保 uid 存在
        className="btn btn-danger float-end wd-delete"
      >
        Delete
      </button>
    </div>
  );
}
