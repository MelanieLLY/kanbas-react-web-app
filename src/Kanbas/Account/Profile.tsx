import {  useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null)); 
    localStorage.removeItem("currentUser"); // 清理本地存储
    navigate("/Kanbas/Account/Signin"); 
  };
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
    localStorage.setItem("currentUser", JSON.stringify(updatedProfile)); // 更新缓存

  };
  useEffect(() => {
    if (currentUser) {
      const formattedDob = currentUser.dob
        ? new Date(currentUser.dob).toISOString().split("T")[0] // 格式化为 YYYY-MM-DD
        : "";
        setProfile({ ...currentUser, dob: formattedDob })};
  }, [currentUser]);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>

      {profile && (
        <div>
          <input
            defaultValue={profile.username}
            id="wd-username"
            className="form-control mb-2"
            placeholder="Username"
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <input
            defaultValue={profile.password}
            id="wd-password"
            placeholder="Password"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <input
            defaultValue={profile.firstName}
            id="wd-firstname"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <input
            defaultValue={profile.lastName}
            id="wd-lastname"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <input
            defaultValue={profile.dob}
            id="wd-dob"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
          />
          <input
            defaultValue={profile.email}
            id="wd-email"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
          value={profile.role || "USER"} 
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="form-control mb-2"
            id="wd-role"
          >
            <option value="USER">User</option>{" "}
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>{" "}
            <option value="STUDENT">Student</option>
          </select>
          <button
            onClick={updateProfile}
            className="btn btn-primary w-100 mb-2"
          >
            Update
          </button>
          <button
            onClick={signout}
            className="btn btn-danger w-100 mb-2"
            id="wd-signout-btn"
          >
            Sign out
          </button>
        </div>
      )}

      {/* <input id="wd-username" value="Emily" placeholder="username" /><br/>
      <input id="wd-password" value="123" placeholder="password"
             type="password" /><br/>
      <input id="wd-firstname" value="Alice" placeholder="First Name" /><br/>
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" /><br/>
      <input id="wd-dob" value="2000-01-01" type="date" /><br/>
      <input id="wd-email" value="alice@wonderland" type="email" /><br/>
      <select id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kanbas/Account/Signin" >Sign out</Link> */}
    </div>
  );
}
