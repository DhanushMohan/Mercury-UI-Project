import React from 'react'
import './Hero.css'
import logo from './Assets/logo.png'
import man from './Assets/man.png'
import woman from './Assets/woman.png'
import man2 from './Assets/man2.png'
import mobile from './Assets/mobile.png'



const Hero = () => {
  return (
    <>
    <nav className="container">
      <label className="logo">mercury</label>
      <ul className='unorder'>
        <li><a href="#">product</a></li>
        <li><a href="#">compare</a></li>
        <li><a href="#">pricing</a></li>
        <li><a href="#">contact</a></li>
        <button className='login'>Login</button>
      <button className='talk'>Let's Talk</button>
      </ul>
      
    </nav>
    <div className='rightbox'>

    </div>
    <div className="leftbox">
      <button className='financial'>Financial management</button>
      <h1 className='h11'>A Simpler,</h1>
      <h1 className='h12'>smarter basic</h1>
      <h1 className='h13'>Credit <span>Card.</span></h1>
      <p>Your Powerful Companion On The Road To Financial Success ! Explore </p>
      <p>personal budget management, investment opportunities.</p>
      <button className='Apple'><img src={logo} />App Store</button>
      
      
    </div>
    <div className="emojis"><button className='man'><img src={man} className='man1' /></button></div>
    <div className="emojis2"><button className='man'><img src={woman} className='man1' /></button></div>
    <div className="emojis3"><button className='man'><img src={man2} className='man1' /></button></div>
    <div className="epara"><p>24K+</p></div>
    <div className="epara2"><p>Active User</p></div>
    <div className="mobile"><img src={mobile} className='mobile1' /></div>
    
    
    </>
  
  )
}

export default Hero