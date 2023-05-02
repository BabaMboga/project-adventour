import React from 'react'

function DestinationsItem({image, name, location, description}) {
  return (
    <div className='destination-card'>
        <img src={image} alt={name}></img>
        <h3>{name}</h3>
        <small>{location}</small>
        <p id='destination-paragraph'>{description}</p>
    </div>
  )
}

export default DestinationsItem;