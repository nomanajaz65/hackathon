import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../Images/profile.webp'
import './userprofile.css'

const UserProfile = () => {
  return (
    <>
    <div>
        <div className='navbar'>
            <h1>Personal Blogging App</h1>
            <div className='link'>
                <Link to='/userprofile'>Inzamam Malik</Link>
                <Link to="/" >Logout</Link>
            </div>
        </div>
        <h1 className='heading'>Profile</h1>
    </div>
    <section>
        <div className='profile-section'>
            <img src={Profile} alt='profile' className='image'/>
            <h2 className='user-name'>Inzamam Malik</h2>
            <h2>Password</h2>
            <form className='password-container'>
                <input type='text' name='text' placeholder='Old Password' />
                <input type='password' name='text' placeholder='New Password' />
                <input type='password' name='text' placeholder='Repeat Password' />
            </form>
                <button className='button'>Updated Password</button>
        </div>
    </section>
    </>
  )
}
export default UserProfile