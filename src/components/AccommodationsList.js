import React, { useEffect, useState } from "react";
import AccommodationItems from "./AccommodationItems";

const AccommodationList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("/db.json") // Assuming the db.json file is in the public folder
      .then((response) => response.json())
      .then((data) => {
        setHotels(data.hotels);
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
      });
  }, []);

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
