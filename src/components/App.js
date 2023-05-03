import React, { useEffect, useState } from "react";
import './App.css';
import ScrollToTop from "./ScrollToTop";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Recommend from "./Recommend";
import Testimonials from "./Testimonials";
import AccommodationsList from "./AccommodationsList"
import DestinationsList from "./DestinationsList";
import RestaurantsList from "./RestaurantsList";
import Footer from "./Footer";



function App() {

  const [accomodations, setAccomodations] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  // const [restaurants, setRestaurants] = useState([]);

  
  const [restaurants, setRestaurants] = useState([]);
  // const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/accomodations')
    .then (response => response.json())
    .then(accomodations => setAccomodations(accomodations));
    
    }, []);
    
  useEffect(() => {
    fetch('http://localhost:4000/restaurants')
    .then (response => response.json())
    .then(restaurants => setRestaurants(restaurants));
      
  }, []);

  // useEffect(() => {
  //   fetch('')
  //   .then (response => response.json())
  //   .then (destinations => setDestinations(destinations));
  // }, [])

  const handleSearch = word => {
    setSearchWord(word)
  };

  const filteredAccomodations = accomodations.filter(accomodation => {
    return accomodation.location.toLowerCase().incldes(searchWord.toLowerCase())
  });

  // const filteredDestinations = destinations.filter(destination => {
  //   return destination.location.toLowerCase().includes(searchWord.toLowerCase())
  // });

  const filteredRestaurants = restaurants.filter(restaurant => {
    return restaurant.location.toLowerCase().includes(searchWord.toLowerCase())
  });

  return (
    <div>     
      {/* <ScrollToTop /> */}
      <NavBar />
      {/* <SearchBar onSearch={handleSearch}/> */}
      <Hero />
      <About />
      <Recommend />
      <Testimonials />
      <AccommodationsList accomodations={filteredAccomodations}/>
      <Footer />
      {/* <DestinationsList destinations={destinations}/> */}
      <RestaurantsList restaurants={restaurants}/>
    </div>
  );
}

export default App;
