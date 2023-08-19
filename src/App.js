import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from './pages/Login/login';
import Signup from './pages/Sign Up/signup';
import HomePage from './components/HomePage/HomePage';
import UserProfile  from './components/UserProfile/UserProfile';
import Home from './pages/Home/Home';
import Userdata from './pages/Userdata/Userdata';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/datauser' element={<Userdata/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/homepage' element={<HomePage/>}/>
      <Route path='/userprofile' element={<UserProfile/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
