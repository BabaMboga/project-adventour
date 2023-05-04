import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import RestaurantsItem from "./RestaurantsItem";
import "./RestaurantsList.css"

function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/restaurants")
      .then((response) => response.json())
      .then((restaurants) => setRestaurants(restaurants));
  }, []);

  const handleSearch = (word) => {
    setSearchWord(word);
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.location.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="container">
      <h1>THE RESTAURANTS IN NAIROBI</h1>
      <div className="restaurants-list">
        <img
          src="https://static.wixstatic.com/media/4b855c29f0fa4015b5e1adfda7e53fde.jpg/v1/fill/w_636,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4b855c29f0fa4015b5e1adfda7e53fde.jpg"
          alt=""
        />
        <h2> Restaurants around town</h2>
        <main>
          <SearchBar onSearch={handleSearch} />
          {filteredRestaurants.map((restaurant) => (
            <RestaurantsItem
              key={restaurant.id}
              image={restaurant.image}
              location={restaurant.location}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default RestaurantsList;
