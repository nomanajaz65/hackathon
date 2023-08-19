import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
        <div className='navbar'>
            <h1>Personal Blogging App</h1>
            <div className='link'>
                <Link to="/signup" >SignUp</Link>
            </div>
        </div>
        <h1 className='heading'>Login</h1>
        <div className='hero'>
                <form>
                    <input type='email' name='email' placeholder='Email' />
                    <input type='password' name='password' placeholder='Password' />
                    <div className='homepage-link'>
                      <Link to='/homepage'>Login</Link>
                    </div>
                </form>
        </div>
    </div>
  )
}
export default Login