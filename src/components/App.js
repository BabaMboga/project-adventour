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
import SearchBar from "./SearchBar";



function App() {

  const [accomodations, setAccomodations] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  // const [restaurants, setRestaurants] = useState([]);
  // const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/BabaMboga/phase2-code-challenge/transactions')
    .then (response => response.json())
    .then(accomodations => setAccomodations(accomodations));
    
    }, []);
    
  // useEffect(() => {
  //   fetch('https://my-json-server.typicode.com/BabaMboga/phase2-code-challenge/transactions')
  //   .then (response => response.json())
  //   .then(restaurants => setRestaurants(restaurants));
      
  // }, []);

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

  const filteredDestinations = destinations.filter(destination => {
    return destination.location.toLowerCase().includes(searchWord.toLowerCase())
  });

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
      {/* <DestinationsList destinations={filteredDestinations}/> */}
      {/* <RestaurantsList restaurants={filteredRestaurants}/> */}
    </div>
  );
}

export default App;


