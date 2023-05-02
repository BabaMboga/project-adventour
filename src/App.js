import React from 'react'
import AccommodationList from './components/AccommodationsList'
import RestaurantsList from './components/RestaurantsList'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <RestaurantsList />
      <AccommodationList />
    </div>
  )
}

export default App;