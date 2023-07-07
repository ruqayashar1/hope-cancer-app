import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoggedin, setUserEmail }) => {
  const [email, setUsername] = useState(""); // Add this line

  const [password, setPass] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [resetEmail, setResetUsername] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log({email, password})
    fetch("/loggedin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      //console.log(r)
      if (r.ok) {
        console.log(email);
        setLoggedin(true);
        setUserEmail(email);
        // r.json().then((user) => setUser(user));
        navigate("/user_profile");
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
            <div className="card p-3" style={{ minWidth: "500px" }}>
              <div className="vstack gap-2 justify-content-center align-items-center h-100">
                <h2>{resetPassword ? "Reset Password" : "Login"}</h2>
                {resetPassword ? (
                  <form className="">
                    <label htmlFor="reset-username">username</label>
                    <input
                      value={setResetUsername}
                      onChange={(e) => setResetUsername(e.target.value)}
                      type="username"
                      className="form-control px-2"
                      placeholder="yourusername"
                      id="reset-username"
                      name="reset-username"
                      required
                    />
                    <button className="btn btn-secondary" type="submit">
                      Reset Password
                    </button>
                    <button className="link-btn" onClick={handleBackClick}>
                      Back to Login
                    </button>
                  </form>
                ) : (
                  <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setUsername(e.target.value)}
                      type="email"
                      className="form-control px-2"
                      placeholder="Enter your email"
                      id="username"
                      name="email"
                      required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      value={password}
                      className="form-control px-2"
                      onChange={(e) => setPass(e.target.value)}
                      type="password"
                      placeholder="****"
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
                {!resetPassword && (
                  <button
                    className="link-btn btn btn-primary"
                    onClick={() => navigate("/signup")}
                  >
                    Don't have an account? Register here.
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1576089172869-4f5f6f315620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FuY2VyJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Login Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;