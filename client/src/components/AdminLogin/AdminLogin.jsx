import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export const AdminLogin = (props) => {
  const [name, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [resetEmail, setResetUsername] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log({name, password})
    console.log({name, password})
    fetch("/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => 
    {
      console.log(r)
      if (r.ok) {
       // r.json().then((user) => setUser(user));
       navigate('/user_profile');
      }
    });
  }
  const handleResetSubmit = (e) => {
    e.preventDefault();
    console.log(resetEmail);
  };

  const handleResetClick = () => {
    setResetPassword(true);
  };

  const handleBackClick = () => {
    setResetPassword(false);
  };

  return (
    <div className="container-fluid my-3">
      <div className="row m-0">
        <div className="col-md-6 col-12 mx-auto">
          <div className="vstack gap-2 justify-content-center align-items-center h-100">
            <h2>{resetPassword ? "Reset Password" : "Login"}</h2>
            {resetPassword ? (
              <form className="">
                <label htmlFor="reset-username">Doctor's Username</label>
                <input
                  value={setResetUsername}
                  onChange={(e) => setResetUsername(e.target.value)}
                  type="username"
                  placeholder="yourusername"
                  id="reset-username"
                  name="reset-username"
                  required
                />
                <button type="submit">Reset Password</button>
                <button className="link-btn" onClick={handleBackClick}>
                  Back to Login
                </button>
              </form>
            ) : (
              <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Doctor's Username</label>
                <input
                  value={name}
                  onChange={(e) => setUsername(e.target.value)}
                  type="username"
                  placeholder="username"
                  id="username"
                  name="username"
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="********"
                  id="password"
                  name="password"
                  required
                />
                <button className="btn btn-primary mt-2">Log In</button>
                <button className="link-btn" onClick={handleResetClick}>
                  Forgot Password?
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="col-md-6 col-12 mx-auto">
          <img src="/adminpic.jpg" alt="Admin" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
