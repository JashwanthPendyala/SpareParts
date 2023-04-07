
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

function App() {
  return (
    <div className="App">

      <Router>
      <HomeNav />
      <UserNavBar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/signin' element={<Login/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/userpage' element={<UserPage />}/>
          <Route exact path='/usernav' element={<UserNavBar/>}/>
          <Route exact path='/changepass' element={<ChangePassword/>}/>
        </Routes>
      </Router>
   
   
      <Footer />
       
    </div>
  );
}

export default App;
