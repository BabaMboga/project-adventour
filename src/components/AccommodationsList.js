import React, { useState } from "react";
import AccomodationsItem from './AccommodationsItem'

function AccomodationsList() {
  const [accomodations, setAccomodations] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/BabaMboga/phase2-code-challenge/transactions')
    .then (response => response.json())
    .then(accomodations => setAccomodations(accomodations));
    
  }, []);

  const handleSearch = word => {
    setSearchWord(word)
  }; 
  
  const filteredAccomodations = accomodations.filter(accomodation => {
    return accomodation.location.toLowerCase().incldes(searchWord.toLowerCase())
  });

  return (
    <div className="container">      
      <h1>HOTELS TO STAY IN NAIROBI</h1>
      <div className="accomodations-list">
        <main>
          {filteredAccomodations.map((accomodation) => (
              <AccomodationsItem 
                  key={accomodation.id}
                  image={accomodation.image}
                  name={accomodation.name}
                  location={accomodation.location}
              />
        
        
          
           ))}
        </main>
      </div>
    </div>
  );
}

export default AccommodationsList;
