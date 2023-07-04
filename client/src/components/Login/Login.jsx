import React, { useState } from 'react';
import  './Login.css';

const Login = (props) => {
  const [email, setUsername] = useState(''); // Add this line

  const [pass, setPass] = useState('');
  const [resetPassword, setResetPassword] = useState(false);
  const [resetEmail, setResetUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    props.onLogin();
  };

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
    <div className="account">
      
      <div className="auth-form-container">
        <h2>{resetPassword ? 'Reset Password' : 'Login'}</h2>
        {resetPassword ? (
            <form className="reset-form" onSubmit={handleResetSubmit}>
            <label htmlFor="reset-username">username</label>
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
            <label htmlFor="username">Username</label>
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
            <button type="submit">Log In</button>
            <button className="link-btn" onClick={handleResetClick}>
                Forgot Password?
            </button>
            </form>
        )}
        {!resetPassword && (
            <button
            className="link-btn"
            onClick={() => props.onFormSwitch('register')}
            >
            Don't have an account? Register here.
            </button>
        )}
      </div>
      <div className="image">
        <img src="https://s3-alpha-sig.figma.com/img/bac9/5e30/ff11c33a71cf747ed1eb59d63164befd?Expires=1689552000&Signature=Bj0fyaoJeC93axp7qMv~TZ6dBErsSSnQrlyj3i2mUqEAqPcIejZQhE0M4cCSxY-6LSedN72IlzrCqrP0jKZZg0AxWa58XUoAr-wCPvkuQP5liNw~Hh3p9kvZFo1nVGA6i5Zw6II1KqgryvkG57p5HC~wQ~L79rfjGplJvOiYOKimpax-CMxum0O00Itv~Ee7BDXq6ZwO5~nZ-H~GD0TH5Z--ug9h9lUDWuSe8YGarsUOMR4Lg4OZatY0S5QgnXD-l65r5xyuley81-URU1w1nfMRzpAFG3OOjRz0H9GDqYvzeouVJS2Aod92VJc2HLDBSKmHaPIC-cKVVuq9gGagVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Login Image" />
      </div>
    </div>
  );
};
     



export default Login;