import React, { useEffect, useState } from "react";
import './App.css';
import ScrollToTop from "./ScrollToTop";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Recommend from "./Recommend";
import Testimonials from "./Testimonials";
import Accommodation from "./AccommodationsList"
import DestinationsList from "./DestinationsList";
import RestaurantsList from "./RestaurantsList";
import Footer from "./Footer";



function App() {

  const [accomodations, setAccomodations] = useState([]);
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


  return (
    <div>     
      {/* <ScrollToTop /> */}
      <NavBar />
      <Hero />
      <About />
      <Recommend />
      <Testimonials />
      <Accommodation accomodations={accomodations}/>
      <Footer />
      {/* <DestinationsList destinations={destinations}/> */}
      {/* <RestaurantsList restaurants={restaurants}/> */}
    </div>
  );
}

export default App;


