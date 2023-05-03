import React from 'react'
import './Footer.css';


function Footer() {
  return (
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul1>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Event Destinations">Event Destinations</a></li>
                        <li><a href="#Where To Eat">Where To Eat</a></li>
                        <li><a href="#Where To Stay">Where To Stay</a></li>
                    </ul1>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul1>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul1>
                </div>
                
                <div class="footer-col">
                    <h4>follow us</h4>
                    <ul1>
                    <div class="social-links">
                        <a href="https://www.facebook.com/search/top?q=tk%20adventures"><i class="facebook.jpeg"></i></a>
                        <a href="https://twitter.com/TKAdventure"><i class="twitter.jpeg"></i></a>
                        <a href="https://www.instagram.com/tkadventures254/"><i class="instagram.jpeg"></i></a>
                        <a href="https://www.myglobalviewpoint.com/adventure-quotes/"><i class="whatsapp.jpeg"></i></a>
                    </div>
                    </ul1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer