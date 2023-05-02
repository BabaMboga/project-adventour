import React from "react";
import Accommodation from "./AccommodationsList"
import DestinationsItem from "./DestinationsItem";
import DestinationsList from "./DestinationsList";
import './App.css';
import NavBar from "./NavBar";
import RestaurantsList from "./RestaurantsList";




function App() {
  return (
    <div>     
     <h1>My react Project</h1>
    <NavBar />
    <Accommodation />
     {/* <About /> */}
     {/* <DestinationsList /> */}
     <RestaurantsList />
    </div>
  );
}

export default App;


