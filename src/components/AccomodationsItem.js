import React from "react";

const AccommodationItems = ({ hotel }) => {
  return (
    <div>
      <h2>{hotel.name}</h2>
      <p>Location: {hotel.location}</p>
      <img src={hotel.image} alt={hotel.name} />
    </div>
  );
};

export default AccommodationItems;
