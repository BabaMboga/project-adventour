import React from "react";

function DestinationsItem({id, image, name, location, description, likes, onLike }) {

  const handleLike = () => {
    onLike(id);
  }
  return (
    <div className="destination-card">
      <img src={image} alt={name}></img>
      <h3>{name}</h3>
      <small>{location}</small>
      <p id="destination-paragraph">{description}</p>
      <button onClick={handleLike}>{likes} Likes</button>
    </div>
  );
}

export default DestinationsItem;
