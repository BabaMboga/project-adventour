import React, { useState } from "react";

function AccommodationsList() {
  const [accommodations, setAccommodations] = useState([]);

  const fetchAccommodations = async () => {
    try {
      const response = await fetch("db.json");
      const data = await response.json();
      setAccommodations(data);
    } catch (error) {
      console.log("Error fetching accommodations:", error);
    }
  };

  // Call the fetchAccommodations function whenever needed
  fetchAccommodations();

  return (
    <div className="main">
      <div className="heading">
        <h1>Accommodation</h1>
      </div>
      <div className="cards">
        {accommodations.map((accommodation) => (
          <div className="myDiv" key={accommodation.id}>
            <h2>{accommodation.heading}</h2>
            <img src={accommodation.imageUrl} alt={accommodation.altText} />
            <h2>{accommodation.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccommodationsList;
