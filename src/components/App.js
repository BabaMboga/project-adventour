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

  return (
    <div>     
      {/* <ScrollToTop /> */}
      <NavBar />
      {/* <SearchBar onSearch={handleSearch}/> */}
      <Hero />
      <About />
      <Recommend />
      <Testimonials />
      <AccommodationsList />
      <Footer />
      {/* <DestinationsList destinations={destinations}/> */}
      <RestaurantsList />
    </div>
  );
}

export default App;
