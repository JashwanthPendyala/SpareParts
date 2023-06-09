
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
import NewStock from './Components/Inventory/NewStock';
import NewSupplier from './Components/Supplier/NewSupplier';
import NewLogin from './Components/Login/NewLogin';

function App() {
  return (
    <div className="App">

      <Router>
        <HomeNav />
        <UserNavBar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/userpage' element={<UserPage />} />
          <Route path='/usernav' element={<UserNavBar />} />
          <Route path='/changepass' element={<ChangePassword />} />
          <Route path='/newStock' element={<NewStock />} />
          <Route path='/newSupplier' element={<NewSupplier />} />
          <Route path='/newLogin' element={<NewLogin/>}/>
        </Routes>
      </Router>


      <Footer />

    </div>
  );
}

export default App;
