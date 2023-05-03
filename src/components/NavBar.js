import React from 'react';
import './NavBar.css';
import Adventour from '../Images/Adventour.jpg'

const NavBar = () => {
  return (
    <section className='navBarSection'>
        <div className='header'>
            <div className='logoDiv'>
                <a href = '#' className='logo'>
                    <img src={Adventour} className='icon' alt='Icon'/>
                </a>
            </div>
            <div className='navBar'>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Home</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Event Destinations</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Where To Eat</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Where To Stay</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default NavBar;