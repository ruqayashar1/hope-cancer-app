import React, { useState } from "react";

import "./AdminLogin.css";

export const AdminLogin = (props) => {
  const [pass, setPass] = useState("");

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin();
  };

  return (
    <div className="container-fluid">
      <div className="row m-0">
        <div className="col-md-6 col-12 mx-auto">
          <img
            src="https://s3-alpha-sig.figma.com/img/f22f/eab5/bc95a2fbc3cee17b7d1875117f96d7aa?Expires=1689552000&Signature=Vo~bxfSv3-Ml0Z4qZ1bKhcRVyN1ZZ-PULtZiiv3l-A0DwhO08cPXJuIs~o3QFo-XWOnHvN1FODmBrCz0XxyoV6qT3sIe5rflP0u5N2D9a2wIx98axMYrJJkLmqHCwrI-5n8IWf8DauEWslV3cDA4k72QA08ertlxC61Ysq-xy~7JcVLXAwnhR~92CnB7blsLJr~z7edW5QtgGqj0LBu96eUo-mY05HY7DBcrh0VnqhvpWUmtwJz4jlZ5k-1ZRE58Eow321Duoo70wZIdMFfoe3OooV4krZr7AntUWwdF~~3dHOWaw-EQvZZuMmlfv5btfWH0yEQ4uBUSTIadlsKu7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Logo"
            className="logo"
          />
          {/* Add this line */}

          <h2>Register</h2>

          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Doctor's Username</label>

            <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Full Name"
              required
            />

            <label htmlFor="password">Password</label>

            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="****"
              id="password"
              name="password"
              required
            />

            <button type="submit">Log In</button>
          </form>

          <button
            className="link-btn mt-3"
            onClick={() => props.onFormSwitch("login")}
          >
            Already have an account? Register here.
          </button>
        </div>
        <div className="col-md-6 col-12 mx-auto">
          <img src="x.jpg" alt="Admin" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

