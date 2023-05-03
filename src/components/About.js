import React from 'react'
import './About.css'
import serviceImage1 from '../Images/serviceImage1.svg'
import serviceImage2 from '../Images/serviceImage2.svg'
import serviceImage3 from '../Images/serviceImage3.svg'
import serviceImage4 from '../Images/serviceImage4.svg'

const About = () => {
  const data = [
    {
      icon: serviceImage1,
      title: "Get Best Prices",
      subTitle:
        "Pay for your activities, food, and accommodation at affordable prices when you pay through us.",
    },
    {
      icon: serviceImage2,
      title: "Clean",
      subTitle:
        "We have all the curated hotels and restaurants that have all the precaution for a germ free environment.",
    },
    {
      icon: serviceImage3,
      title: "Flexible Payment",
      subTitle:
        "Get rewarded everytime you patronize us and check payment plans based on your accommodation requirements.",
    },
    {
      icon: serviceImage4,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels, restaurants, and places to visit near you in a single click.",
    },
  ];
  return (
    <section id='services'>
      {data.map((service) => {
        return(
          <div className='service'>
            <div className='icon'>
              <img src={service.icon} style={{color:'brown'}} alt='Service icons' />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        )
      })}
    </section>
  )
}

export default About