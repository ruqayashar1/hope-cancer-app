import React, { useState } from "react";
import "./SignUp.css";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    props.onLogin();
  };

  return (
    <div className="auth-form-container">
      <div className="register">
        <img src="https://s3-alpha-sig.figma.com/img/f22f/eab5/bc95a2fbc3cee17b7d1875117f96d7aa?Expires=1689552000&Signature=Vo~bxfSv3-Ml0Z4qZ1bKhcRVyN1ZZ-PULtZiiv3l-A0DwhO08cPXJuIs~o3QFo-XWOnHvN1FODmBrCz0XxyoV6qT3sIe5rflP0u5N2D9a2wIx98axMYrJJkLmqHCwrI-5n8IWf8DauEWslV3cDA4k72QA08ertlxC61Ysq-xy~7JcVLXAwnhR~92CnB7blsLJr~z7edW5QtgGqj0LBu96eUo-mY05HY7DBcrh0VnqhvpWUmtwJz4jlZ5k-1ZRE58Eow321Duoo70wZIdMFfoe3OooV4krZr7AntUWwdF~~3dHOWaw-EQvZZuMmlfv5btfWH0yEQ4uBUSTIadlsKu7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Logo" className="logo" />{/* Add this line */}
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
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
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
          Already have an account? Login here.
        </button>
      </div>
     
       
      
        <img className="signup-image" src="https://s3-alpha-sig.figma.com/img/2015/3761/4cff1b617bbaec910a0b0eb847d98b55?Expires=1689552000&Signature=MtX6Re7zJ5ji2w8zv8Bi8gbJN2Vf3AwCLzThIQt1bLZUV5n4IX98GAj4fkewYynSCD6IwuYA~Pp8LCAiMvTcucoE4uNipBwj5TG0B4FQ6yPvL9XTzxqBXJsoFYW1mNSbOnSDXSXHa3XlG7rHdKX2k89yovLyYABw7oNsaJOArdH3lm23fF70XkMhkw313OfLAUaKORNtGF6bOazpz8Nfo7FGkLyDa0LRjzRcsCkwgjqTpwQ5npqfs8x7bBswuTPiEqvyMg7wQPhAPY92euSyCKOKfgS0Luw~d0ph7jWRxoY8P695SzbJzSEklpSGcAbwf8XOhi5RZC4lGU~8PGRkAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="patient" />
      

    </div>
  );
};
export default SignUp;

// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../components/context/AuthContext';

// function Register() {
//   const { register } = useContext(AuthContext);

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     fetch('/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, email, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response from the server
//         // console.log(data.error);
//         if (data.success) {
//             // Login successful, perform necessary actions (e.g., redirect, update user state)
//             setMessage(data.success);
//              console.log('Signup successfull');
//           } else if (data.error) {
//             // Login unsuccessful, display error message to the user
//             setMessage(data.error);
//             console.log('Login unsuccessful:', data.error);
//           } else if (data.warning) {
//             // Missing fields, display warning message to the user
//             setMessage(data.warning);
//             console.log('Missing fields:', data.warning);
//           }
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <form classname = "row g-3"onSubmit={handleSubmit} action="#" method="POST">
      
//       <h1 className="h3 mb-3 fw-normal">Signup Here!</h1>

//       <div className="form-floating">
//         <input
//           type="text"
//           onChange={(e) => setUsername(e.target.value)}
//           className="form-control"
//           id="floatingInput"
//           placeholder="Name"
//         />
//         <label htmlFor="floatingInput">Name</label>
//       </div>
//       <div className="form-floating">
//         <input
//           type="email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="form-control"
//           id="floatingInput"
//           placeholder="name@example.com"
//         />
//         <label htmlFor="floatingInput">Email address</label>
//       </div>
//       <div className="form-floating">
//         <input
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="form-control"
//           id="floatingPassword"
//           placeholder="Password"
//         />
//         <label htmlFor="floatingPassword">Password</label>
//       </div>

//       <div className="form-check text-start my-3">
//         <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
//         <label className="form-check-label" htmlFor="flexCheckDefault">
//           Remember me
//         </label>
//       </div>
//       <button className="btn btn-primary w-100 py-2" type="submit">
//         Sign Up
//       </button>
//     </form>
//   );
// }

// export default Register;


