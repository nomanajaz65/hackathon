import React from 'react'
import './style.css'
import Login from '../Login/login';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
        <div className='navbar'>
            <h1>Personal Blogging App</h1>
            <div className='link'>
                <Link to="/login" >Login</Link>
            </div>
        </div>
        <h1 className='heading'>SignUp</h1>
        <div className='hero'>
                <form>
                    <input type='text' name='text' placeholder='First Name'/>
                    <input type='text' name='text' placeholder='Last Name'/>
                    <input type='email' name='email' placeholder='Email' />
                    <input type='password' name='password' placeholder='Password' />
                    <div className='homepage-link'>
                      <Link to='/login'>Signup</Link>
                    </div>
                </form>
        </div>
    </div>
  )
}
export default Signup;