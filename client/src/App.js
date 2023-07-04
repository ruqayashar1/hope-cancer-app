import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Signup, { SignUp } from './components/SignUp/SignUp';
import './App.css';
import Login from './components/Login/Login';
import Services from './components/OurServices/OurServices';
import Research from './components/Research/Research';
import AdminLogin from './components/AdminLogin/AdminLogin';




// function App() {
//   // const [signUpData, setSignUpData] = useState([]);
//   // const [trainData, setTrainData] = useState([]);
//   return (
//     <>
//      <Navbar />  
//       <header className="App-header">
        
//         <p>
//           WELCOME HOME
//         </p>
     
//      <HomePage />
//      {/* <Routes>
//      {/* <Route path='/' element={<Signup signUpData={signUpData}/>}/> */}
//           {/* <Route path="/signin" element={< signinform data={trainData} />} />

//      </Routes> */} 
//       </header>
//       <Routes>
//       <Route path='/signup' element={<Signup />}/>
//       </Routes>
//       <Body />
//       <Footer />
//     </>
//   );
// }

// export default App;

function App() {
  return (
    
      <>
        <Navbar />
        {/* <header className="App-header">
          <p>WELCOME HOME</p> */}
          {/* <HomePage /> */}
        {/* </header> */}
        <Routes>
        <Route path='/homepage' element={<Body />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/research' element={<Research />} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
          
        </Routes>
      
        <Footer />
      </>
    
  );
}
export default App;
