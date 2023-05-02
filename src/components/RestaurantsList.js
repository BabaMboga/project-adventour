import React from 'react'
// import RestaurantsItem from './RestaurantsItem';

const RestaurantsList = () => {
    return (
      <div className="Restaurants-list">
        {restaurants.map((restaurant) => (
          <RestaurantsItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    );
  };
  

export default RestaurantsList;