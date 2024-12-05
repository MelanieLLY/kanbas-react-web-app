import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      navigate("/Kanbas/Dashboard");
    } catch (err: any) {
      console.error("Signin error:", err.response?.data || err.message); // 捕获错误
    }
  };
  


  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input
        type="text"
        placeholder="Username"
        className="form-control mb-2"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control mb-2"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />

      <button
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
      >
        {" "}
        Sign in{" "}
      </button>

      <Link
        id="wd-signup-link"
        to="/Kanbas/Account/Signup"
        className="btn btn-secondary w-100 mb-2"
      >
        Sign up
      </Link>
      <p>( For testing:</p>
      <ul>
        <li>Sample student:</li>
        <ul>
          <li>"username": "iron_man"</li>
          <li>"password": "stark123"</li>
        </ul>
        <li>Sample faculty:</li>
        <ul>
          <li>"username": "black_panther"</li>
          <li>"password": "wakanda123")</li>
        </ul>
        <li>Sample admin:</li>
        <ul>
          <li>"username": "doctor_strange"</li>
          <li>"password": "strange123"</li>
        </ul>
      </ul>
    </div>
  );
}
