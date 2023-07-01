import React from 'react';
// import { Routes, Route,useLocation} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';




function App() {
  // const [signUpData, setSignUpData] = useState([]);
  // const [trainData, setTrainData] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WELCOME HOME
        </p>
      <Navbar />  
     <HomePage />
     {/* <Routes>
     {/* <Route path='/' element={<Signup signUpData={signUpData}/>}/> */}
          {/* <Route path="/signin" element={< signinform data={trainData} />} />

     </Routes> */} 
      </header>
    </div>
  );
}

export default App;
