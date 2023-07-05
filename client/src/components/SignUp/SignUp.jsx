import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

import "./SignUp.css";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");

  const [password, setPass] = useState("");

  const [name, setName] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('clicked!')
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
        navigate('/login')
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

          <h2>Register</h2>

          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>

            <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Full Name"
              required
            />

            <label htmlFor="email">Email</label>

            <input
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
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="****"
              id="password"
              name="password"
              required
            />

            <button type="submit">Register</button>
          </form>

          <button
            className="link-btn mt-3"
            onClick={() => navigate('/login')}
          >
            Already have an account? Login here.
          </button>
        </div>
        <div className="col-md-6 col-12 mx-auto">
          <img
            src="https://s3-alpha-sig.figma.com/img/2015/3761/4cff1b617bbaec910a0b0eb847d98b55?Expires=1689552000&Signature=MtX6Re7zJ5ji2w8zv8Bi8gbJN2Vf3AwCLzThIQt1bLZUV5n4IX98GAj4fkewYynSCD6IwuYA~Pp8LCAiMvTcucoE4uNipBwj5TG0B4FQ6yPvL9XTzxqBXJsoFYW1mNSbOnSDXSXHa3XlG7rHdKX2k89yovLyYABw7oNsaJOArdH3lm23fF70XkMhkw313OfLAUaKORNtGF6bOazpz8Nfo7FGkLyDa0LRjzRcsCkwgjqTpwQ5npqfs8x7bBswuTPiEqvyMg7wQPhAPY92euSyCKOKfgS0Luw~d0ph7jWRxoY8P695SzbJzSEklpSGcAbwf8XOhi5RZC4lGU~8PGRkAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="patient"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
