// import React, { useState } from "react";
// import "./AdminLogin.css";

// export const AdminLogin = (props) => {
//   const [email, setUsername] = useState("");
//   const [pass, setPass] = useState("");
//   const [resetPassword, setResetPassword] = useState(false);
//   const [resetEmail, setResetUsername] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email);
//     props.onLogin();
//   };

//   const handleResetSubmit = (e) => {
//     e.preventDefault();
//     console.log(resetEmail);
//   };

//   const handleResetClick = () => {
//     setResetPassword(true);
//   };

//   const handleBackClick = () => {
//     setResetPassword(false);
//   };

//   return (
//     <div className="container-fluid my-3">
//       <div className="row m-0">
//         <div className="col-md-6 col-12 mx-auto">
//           <div className="vstack gap-2 justify-content-center align-items-center h-100">
//             <h2>{resetPassword ? "Reset Password" : "Login"}</h2>
//             {resetPassword ? (
//               <form className="">
//                 <label htmlFor="reset-username">Doctor's Username</label>
//                 <input
//                   value={setResetUsername}
//                   onChange={(e) => setResetUsername(e.target.value)}
//                   type="username"
//                   placeholder="yourusername"
//                   id="reset-username"
//                   name="reset-username"
//                   required
//                 />
//                 <button type="submit">Reset Password</button>
//                 <button className="link-btn" onClick={handleBackClick}>
//                   Back to Login
//                 </button>
//               </form>
//             ) : (
//               <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="username">Doctor's Username</label>
//                 <input
//                   value={email}
//                   onChange={(e) => setUsername(e.target.value)}
//                   type="username"
//                   placeholder="username"
//                   id="username"
//                   name="username"
//                   required
//                 />
//                 <label htmlFor="password">Password</label>
//                 <input
//                   value={pass}
//                   onChange={(e) => setPass(e.target.value)}
//                   type="password"
//                   placeholder="********"
//                   id="password"
//                   name="password"
//                   required
//                 />
//                 <button className="btn btn-primary mt-2">Log In</button>
//                 <button className="link-btn" onClick={handleResetClick}>
//                   Forgot Password?
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//         <div className="col-md-6 col-12 mx-auto">
//           <img src="/adminpic.jpg" alt="Admin" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AdminLogin.css";
export const AdminLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    // Assuming authentication is successful, redirect to tracking page
    history.push("/tracking");
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
                      value={email}
                      onChange={(e) => setUsername(e.target.value)}
                      type="username"
                      placeholder="username"
                      id="username"
                      name="username"
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

