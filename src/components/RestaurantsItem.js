import React from 'react'

function RestaurantsItem({name,location,image}) {
  return (
    <div className='restaurant-card'>
        <img src={image} alt={name}></img>
        <h3>{name}</h3>
        <small>Location: {location}</small>
    </div>
  )
}

export default RestaurantsItem;