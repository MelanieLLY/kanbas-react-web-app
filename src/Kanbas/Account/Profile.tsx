import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        value="Emily"
        placeholder="username"
        className="form-control mb-2"
      />

      <input
        id="wd-password"
        value="123"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <input
        id="wd-firstname"
        value="Alice"
        placeholder="First Name"
        className="form-control mb-2"
      />
      <input
        id="wd-lastname"
        value="Wonderland"
        placeholder="Last Name"
        className="form-control mb-2"
      />
      <input
        id="wd-dob"
        value="2000-01-01"
        type="date"
        className="form-control mb-2"
      />
      <input
        id="wd-email"
        value="alice@wonderland.com"
        type="email"
        className="form-control mb-2"
      />

      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link
        id="wd-signout-btn"
        to="/Kanbas/Account/Signin"
        className="btn btn-danger w-100 mb-2"
      >
        Sign out
      </Link>

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
