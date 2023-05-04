import React, {useState, useEffect} from "react";
import DestinationsItem from "./DestinationsItem";
import SearchBar from "./SearchBar";

function DestinationsList({ Destinations }) {
  const [destinations, setDestinations] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetch("https://localhost:3000/destinations")
      .then((response) => response.json())
      .then((destinations) => setDestinations(destinations));
  }, []);

  const handleSearch = (word) => {
    setSearchWord(word);
  };

  const filteredDestinations = destinations.filter((destination) => {
    return destination.location
      .toLowerCase()
      .includes(searchWord.toLowerCase());
  });

  return (
    <div className="destinations-list">
      <h1>Your Destination Awaits</h1>
      <main>
        <SearchBar onSearch={handleSearch} />
        {filteredDestinations.map((destination) => (
          <DestinationsItem
            key={destination.id}
            image={destination.image}
            name={destination.name}
            location={destination.location}
            description={destination.description}
          />
        ))}
      </main>
    </div>
  );
}

export default DestinationsList;
