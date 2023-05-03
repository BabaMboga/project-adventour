import React from 'react';
import './NavBar.css';
import Adventour from '../Images/Adventour.jpg'

const NavBar = () => {
  return (
    <>
    <div className='Nav'>
    <div className='brand'>
        <div className='container'>
            <img src={Adventour} alt='logo' />
        </div>
        <div className='toggle'></div>
    </div>
    <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Event Destinations</a></li>
        <li><a href='#'>Where To Eat</a></li>
        <li><a href='#'>Where To Stay</a></li>
    </ul>
    <button>Connect</button>
    </div>
    </>
  )
}

export default NavBar;