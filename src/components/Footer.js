import React from 'react'
import './Footer.css';
import facebook from '../Images/facebook.jpeg'


function Footer() {
  return (
    <footer id='footer'>
    <span>Copyright &copy; 2023 Adventour. All rights reserved</span>
    <ul className='Links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Event Destinations</a></li>
        <li><a href='#'>Where To Eat</a></li>
        <li><a href='#'>Where To Stay</a></li>
    </ul>

  
    <ul className='socialLinks'></ul>
      <a href="https://www.facebook.com/search/top?q=tk%20adventures"><img src="../Images/facebook.jpeg" alt="FB" /></a>
      <a href="https://twitter.com/TKAdventure"><img src="../Images/twitter.jpeg" alt="twit" /></a>
      <a href="https://www.instagram.com/tkadventures254/"><img src="../Images/instagram.jpeg" alt="insta" /></a>
      <a href="https://www.myglobalviewpoint.com/adventure-quotes/"><img src="../Images/whatsapp.jpeg" alt="APP" /></a>
    </footer>
  )
}

export default Footer;