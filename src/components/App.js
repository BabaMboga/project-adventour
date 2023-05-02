import React from 'react'
import AccommodationList from './AccomodationsList';
import AccommodationItems from './AccomodationsItem';
import RestaurantsList from './RestaurantsList'

function Home() {
  return (
    <div>
      <RestaurantsList/>
      <AccommodationList/>
    </div>
  )
}

export default Home