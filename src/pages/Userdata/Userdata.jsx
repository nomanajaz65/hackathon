import React from 'react'
import { Link } from 'react-router-dom'
import User1 from '../../Images/user2.png'
import './userdata.css'

const Userdata = () => {
  return (
    <div>
          <div className='navbar'>
            <h1>Personal Blogging App</h1>
            <div className='link'>
                <Link to="/login" >Login</Link>
            </div>
        </div>
        <div className='link-all-blog'>
            <Link to="/">Back to all blogs</Link>
        </div>
        <div className='user-blog'>
            <h2>All from Elon Musk</h2>
            <div className='myblog-container'>
                <div className='blog-detail'>
                    <img src={User1} className='profile-img' alt='profile'/>
                    <div className=' blog-header'>
                        <h2>Introducing Whisper</h2>
                        <p>Inzamam Malik - August 16th, 2023</p>
                    </div>
                </div>
                    <p className='blog-text'>
                    Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. We show that the use of such a large and diverse dataset leads to improved robustness to accents, background noise and technical language. Moreover, it enables transcription in multiple languages, as well as translation from those languages into English. We are open-sourcing models and inference code to serve as a foundation for building useful applications and for further research on robust speech processing.</p>
            </div>

            <div className='myblog-container'>
                <div className='blog-detail'>
                    <img src={User1} className='profile-img' alt='profile'/>
                    <div className=' blog-header'>
                        <h2>Introducing ChatGPT</h2>
                        <p>Elon Musk - November 23rd, 2022</p>
                    </div>
                </div>
                    <p className='blog-text'>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.
We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.  Methods:
We trained this model using Reinforcement Learning from Human Feedback (RLHF), using the same methods as InstructGPT, but with slight differences in the data collection setup. We trained an initial model using supervised fine-tuning: human AI trainers provided conversations in which they played both sides—the user and an AI assistant. We gave the trainers access to model-written suggestions to help them compose their responses. We mixed this new dialogue dataset with the InstructGPT dataset, which we transformed into a dialogue format.
To create a reward model for reinforcement learning, we needed to collect comparison data, which consisted of two or more model responses ranked by quality. To collect this data, we took conversations that AI trainers had with the chatbot. We randomly selected a model-written message, sampled several alternative completions, and had AI trainers rank them. Using these reward models, we can fine-tune the model using Proximal Policy Optimization. We performed several iterations of this process.
   </p>
            </div>
        </div>
    </div>
  )
}
export default Userdata;