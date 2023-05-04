import React from 'react'

function AccommodationsItem({name,location,image}) {
  return (
    <div className='accommodation-card'>
        <img src={image} alt={name}></img>
        <h3>{name}</h3>
        <small>Location: {location}</small>
    </div>
  )
}

export default AccommodationsItem;