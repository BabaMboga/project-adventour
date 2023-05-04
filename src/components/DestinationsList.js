import React, {useState, useEffect} from "react";
import DestinationsItem from "./DestinationsItem";
import SearchBar from "./SearchBar";

function DestinationsList() {
  const [destinations, setDestinations] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/destinations")
      .then((response) => response.json())
      .then((destinations) => setDestinations(destinations));
  }, []);

  const handleSearch = (word) => {
    setSearchWord(word);
  };

  const handleLike = (id) => {
    const destinationToUpdate = destinations.find((destination) => destination.id === id);
    const updatedDestination = {...destinationToUpdate, likes: destinationToUpdate.likes + 1};

    fetch(`http://localhost:4000/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDestination),
    })
    .then(response => response.json())
    .then(updatedDestination => {
      const updatedDestinations = destinations.map((destination) => {
        if (destination.id === id) {
          return updatedDestination;
        } else {
          return destination;
        }
      });
      setDestinations(updatedDestinations)
    })
  }

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
            id={destination.id}
            likes={destination.likes}
            onLike={handleLike}
          />
        ))}
      </main>
    </div>
  );
}

export default DestinationsList;
