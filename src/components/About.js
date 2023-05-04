import React from 'react'
import heroImage from '../Images/hero.jpg'
import './About.css'

const About = () => {
  return (
    <section id='hero'>
      <div className='background'>
        <img className='imageHero' src={heroImage} alt='' />
      </div>
      <div className='content'>
        <div className='title'>
          <h1>COME ON AN ADVENTURE</h1>
          <p>
            Visit the most vibrant destinations in Nairobi and immerse yourself in it's rich culture
          </p>
        </div>
        <div className='search'>
          <div className='container'>
            <label htmlFor=''>Where do you want to go</label>
            <input type='text' placeholder='Pick a location' />
          </div>
          <div className='container'>
            <label htmlFor=''>Check in date</label>
            <input type='date' />
          </div>
          <div className='container'>
            <label htmlFor=''>Check out date</label>
            <input type='date' />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </section>
  )
}

export default About;