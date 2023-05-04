import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import NavBar from "./NavBar";
import Home from "./Home";
import AccommodationsList from "./AccommodationsList";
import DestinationsList from "./DestinationsList";
import RestaurantsList from "./RestaurantsList";
import Footer from "./Footer";
import Login from "./Login";

function App() {
  return (
    <div>
        {/* <ScrollToTop /> */}
        <BrowserRouter>
        <NavBar />
       <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/accommodations" component={AccommodationsList} />
          <Route path="/destinations" component={DestinationsList} />
          <Route path="/restaurants" component={RestaurantsList} />
        </Routes>
        <Home />
        <Footer />
        <ScrollToTop />
        </BrowserRouter>
      </div>
  )
}

export default App;
