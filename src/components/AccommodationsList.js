import React, { useState } from "react";
import AccommodationsItem from './AccommodationsItem'
import SearchBar from "./SearchBar";

function AccommodationsList() {
  const [accommodations, setAccommodations] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  

  useEffect(() => {
    fetch('http://localhost:3000/accommodations')
    .then (response => response.json())
    .then(accommodations => setAccommodations(accommodations));
    
  }, []);

  const handleSearch = word => {
    setSearchWord(word)
  }; 
  
  const filteredAccommodations = accommodations.filter(accommodation => {
    return accommodation.location.toLowerCase().incldes(searchWord.toLowerCase())
  });

  return (
    <div className="container">      
      <h1>HOTELS TO STAY IN NAIROBI</h1>
      <div className="accomodations-list">
        <main>
          <SearchBar onSearch={handleSearch}/>
          {filteredAccommodations.map((accommodation) => (
              <AccommodationsItem 
                  key={accommodation.id}
                  image={accommodation.image}
                  name={accommodation.name}
                  location={accommodation.location}
              />
        
        
          
           ))}
        </main>
      </div>
    </div>
  );
}

export default AccommodationsList;