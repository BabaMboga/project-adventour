import React from 'react'
import './Footer.css';


function Footer() {
  return (
    <Footer id='footer'>
    <span>Copyright &copy; 2023 Adventour. All rights reserved</span>
    <ul className='Links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Event Destinations</a></li>
        <li><a href='#'>Where To Eat</a></li>
        <li><a href='#'>Where To Stay</a></li>
    </ul>
    <ul className='socialLinks'></ul>
      <a href="https://www.facebook.com/search/top?q=tk%20adventures"><i class="facebook.jpeg"></i></a>
      <a href="https://twitter.com/TKAdventure"><i class="twitter.jpeg"></i></a>
      <a href="https://www.instagram.com/tkadventures254/"><i class="instagram.jpeg"></i></a>
      <a href="https://www.myglobalviewpoint.com/adventure-quotes/"><i class="whatsapp.jpeg"></i></a>
    </Footer>
  )
}

export default Footer