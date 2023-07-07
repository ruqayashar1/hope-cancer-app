import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignUp.css";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");

  const [password, setPass] = useState("");

  const [name, setName] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked!");
    fetch("/signedup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    }).then((r) => {
      console.log(r);
      if (r.ok) {
        //r.json().then((user) => setUser(user));
        navigate("/login");
      }
    });
  }

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
          <div className="vstack gap-2 justify-content-center align-items-center">
            <div className="card p-3" style={{ minWidth: "500px" }}>
              <h2>Register</h2>
              <div className="vstack gap-2 justify-content-center align-items-center">
                <form className="register-form" onSubmit={handleSubmit}>
                  <label htmlFor="name">Username</label>

                  <input
                    value={name}
                    className="form-control px-4 py-2"
                    style={{ width: "fit-content" }}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="Full Name"
                    required
                  />

                  <label htmlFor="email">Email</label>

                  <input
                    className="form-control px-4 py-2"
                    style={{ width: "fit-content" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                    required
                  />

                  <label htmlFor="password">Password</label>

                  <input
                    className="form-control px-4 py-2"
                    style={{ width: "fit-content" }}
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="**"
                    id="password"
                    name="password"
                    required
                  />

                  <button
                    className="btn btn-primary px-4 mt-3"
                    style={{ width: "fit-content" }}
                    type="submit"
                  >
                    Register
                  </button>
                </form>

                <button
                  className="link-btn mt-2"
                  onClick={() => navigate("/login")}
                >
                  Already have an account? Login here.
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 mx-auto">
          <img src="sign.jpg" alt="patient" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
