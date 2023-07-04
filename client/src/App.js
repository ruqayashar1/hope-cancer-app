import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Signup from "./components/SignUp/SignUp";
import "./App.css";
import Login from "./components/Login/Login";
import Services from "./components/OurServices/OurServices";
import Research from "./components/Research/Research";
import UserProfile from "./components/UserProfile/UserProfile";
import AdminLogin from "./components/AdminLogin/AdminLogin";

function App() {
  return (
    <div className="h-100">
      <Navbar />
      {/* <header className="App-header">
          <p>WELCOME HOME</p> */}
      {/* <HomePage /> */}
      {/* </header> */}
      <Routes>
        <Route path="/homepage" element={<Body />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user_profile" element={<UserProfile />} />
        <Route path="/research" element={<Research />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
