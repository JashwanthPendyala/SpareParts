
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import Footer from './Components/Footer/Footer';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import HomeNav from './Components/NavBar/HomeNav';
import UserNavBar from './Components/NavBar/UserNavBar';
import SignUp from './Components/Signup/SignUp';
import UserPage from './Components/UserPage/UserPage';
import ChartBar from './Components/LandingPage/ChartBar';
import LandingPage1 from './Components/LandingPage/LandingPage1';
import SideNav from './Components/SideNav/SideNav';





function App() {
  return (
    <div className="App">
  
      {/* <SignUp /> */}
      
    <LandingPage1 />
   
      <HomeNav />
      {/* <SideNav /> */}
      
      {/* <Router>
        <Routes>
          {/* <Route exact path='/' element={<LandingPage />} /> */}
          {/* <Route exact path='/signin' element={<Login/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/LandingPage' element={<LandingPage1/>}/> */}
          {/* <Route exact path='/userpage' element={<UserPage />}/> */}
          {/* <Route exact path='/userpage' element={<UserPage />}/> */}
          {/* <Route exact path='/usernav' element={<UserNavBar/>}/> */}
          {/* <Route exact path='/changepass' element={<ChangePassword/>}/> */}
        {/* </Routes> */}
      {/* </Router>  */}
   
   
      {/* <Footer /> */}
       
    </div>
  );
}

export default App;
