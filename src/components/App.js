import React from "react";
import './App.css';
import ScrollToTop from "./ScrollToTop";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Recommend from "./Recommend";
import Testimonials from "./Testimonials";
import Accommodation from "./AccommodationsList"
import DestinationsItem from "./DestinationsItem";
import DestinationsList from "./DestinationsList";
import RestaurantsList from "./RestaurantsList";




function App() {
  return (
    <div>     
      {/* <ScrollToTop /> */}
      <NavBar />
      <Hero />
      <About />
      <Recommend />
      <Testimonials />
      <Accommodation />
      {/* <DestinationsList /> */}
      {/* <RestaurantsList /> */}
    </div>
  );
}

export default App;


