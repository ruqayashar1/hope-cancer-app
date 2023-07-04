import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import Register from './components/SignUp';
import './App.css';
import Signin from './components/SignIn';
import Services from './components/OurServices';
import Research from './components/Research';
import AdminLogin from './components/AdminLogin';




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
          <HomePage />
        {/* </header> */}
        <Routes>
        <Route path='/homepage' element={<Body />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/services' element={<Services />} />
        <Route path='/research' element={<Research />} />
        {/* <Route path='/adminlogin' element={<AdminLogin/>} /> */}
          
        </Routes>
      
        <Footer />
      </>
    
  );
}
export default App;
