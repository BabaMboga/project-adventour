import React from "react";
import "./App.css";
// import ScrollToTop from "./ScrollToTop";
import NavBar from "./NavBar";
import About from "./About";
import Services from "./Services";
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
      <About />
      <Services />
      <AccommodationsList />
      <Recommend />
      <Testimonials />
      <Footer />
     
      <RestaurantsList />
      <DestinationsList/>
    </div>
  )
}

export default App;
