import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import User from '../../Images/user2.png'
import User1 from '../../Images/profile.webp'

const Home = () => {
  return (
    <>
    <div>
        <div className='navbar'>
            <h1>Personal Blogging App</h1>
            <div className='link'>
                <Link to="/login" >Login</Link>
            </div>
        </div>
        <h1 className='heading'>Good Morning Readers!</h1>
        <div className='all-blogs'>
            <h1>All Blogs</h1>
            <div className='myblog-container'>
                <div className='blog-detail'>
                    <img src={User} className='profile-img' alt='profile'/>
                    <div className=' blog-header'>
                        <h2>Introducing Whisper</h2>
                        <p>Elon Musk - August 17th, 2023</p>
                    </div>
                </div>
                    <p className='blog-text'>
                    Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. We show that the use of such a large and diverse dataset leads to improved robustness to accents, background noise and technical language. Moreover, it enables transcription in multiple languages, as well as translation from those languages into English. We are open-sourcing models and inference code to serve as a foundation for building useful applications and for further research on robust speech processing. </p>

                    <div className='btns'>
                        <Link to='/datauser'>see all from this user</Link>
                    </div>
            </div>

            <div className='myblog-container'>
                <div className='blog-detail'>
                    <img src={User1} className='profile-img' alt='profile'/>
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
                    <Link to='/datauser'>see all from this user</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Home;