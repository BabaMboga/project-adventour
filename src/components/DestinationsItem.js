import React from "react";

function DestinationsItem({ image, name, location, description, likes, onLike }) {

  const handleLike = () => {
    onLike(id);
  }
  return (
    <div className="destination-card">
      <img src={image} alt={name}></img>
      <h3>{name}</h3>
      <small>{location}</small>
      <p id="destination-paragraph">{description}</p>
      <span>{likes}</span>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default DestinationsItem;
