import React from "react";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Accommodation from "./AccommodationsList"
import DestinationsItem from "./DestinationsItem";
import DestinationsList from "./DestinationsList";
import RestaurantsList from "./RestaurantsList";
import Footer from "./Footer";



function App() {
  return (
    <div>     
      <NavBar />
      <Home />
      <Accommodation />
      {/* <DestinationsList /> */}
      {/* <RestaurantsList /> */}
      <Footer />
    </div>
  );
}

export default App;


