import React from "react";
import AccommodationItems from "./AccommodationItems";

const AccommodationList = () => {
  const hotels = [
    {
      id: 1,
      name: "Hotel 1",
      location: "Location 1",
      image: "hotel1.jpg",
    },
    // Add data for other hotels here
    {
      id: 15,
      name: "Hotel 15",
      location: "Location 15",
      image: "hotel15.jpg",
    },
  ];

  return (
    <div>
      <h1>Accommodation List</h1>
      {hotels.map((hotel) => (
        <AccommodationItems key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default AccommodationList;
