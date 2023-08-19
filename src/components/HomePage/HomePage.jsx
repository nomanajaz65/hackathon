import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'
import Profile from '../../Images/profile.webp'

const HomePage = () => {
  return (
    <div>
        <div className='navbar'>
            <h1>Personal Blogging App</h1>
            <div className='link'>
                <Link to='/userprofile'>Inzamam Malik</Link>
                <Link to="/" >Logout</Link>
            </div>
        </div>
        <h1 className='heading'>Dashboard</h1>
        <div className='blog-publish'>
            <form>    
                <input type='text' name='text' placeholder='Placeholder'/>
                <textarea placeholder='What is in our mind'>
                </textarea>
                <button>Publish Blog</button>
            </form>
        </div>
        <section className='myblogs'>
            <h1>My Blog</h1>
            <div className='myblog-container'>
                <div className='blog-detail'>
                    <img src={Profile} className='profile-img' alt='profile'/>
                    <div className=' blog-header'>
                        <h2>An Action Button Could Be Coming to the iPhone 15</h2>
                        <p>Inzamam Malik - August 16th, 2023</p>
                    </div>
                </div>
                    <p className='blog-text'>
                    Apple could be putting an Action button on your next iPhone. According to a July report from MacRumors, code in the fourth iOS 17 developer beta hints at functionality for an Action button on the next-gen iPhone 15 Pro and Pro Max models.
                    Apple introduced the Action button on the Apple Watch Ultra. It's a physical button on the side of the Apple Watch Ultra that allows you to run a preselected function or program when you press it without unlocking your device or navigating to an app. Some of the preselected functions include starting a stopwatch, beginning a workout and turning on your flashlight.
                    </p>

                    <div className='btns'>
                        <button>Delete</button>
                        <button>Edit</button>
                    </div>
            </div>
            <div className='myblog-container'>
                <div className='blog-detail'>
                    <img src={Profile} className='profile-img' alt='profile'/>
                    <div className=' blog-header'>
                        <h2>What Is the Event Loop and How Does It Improve App Performance?</h2>
                        <p>Inzamam Malik - August 15th, 2023</p>
                    </div>
                </div>
                    <p className='blog-text'>
                    JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications. JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications. JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications. JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications.
                     </p>

                    <div className='btns'>
                        <button>Delete</button>
                        <button>Edit</button>
                    </div>
            </div>
        </section>
    </div>
  )
}
export default HomePage;