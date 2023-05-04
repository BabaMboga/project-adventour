import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// import ScrollToTop from "./ScrollToTop";
import NavBar from "./NavBar";
import About from "./About";
import Services from "./Services";
import Recommend from "./Recommend";
import Testimonials from "./Testimonials";
import AccommodationsList from "./AccommodationsList";
import DestinationsList from "./DestinationsList";
import RestaurantsList from "./RestaurantsList";
import Footer from "./Footer";
import Login from "./Login";

function App() {
  return (
    <div>
        {/* <ScrollToTop /> */}
        {/* <Login /> */}
        <NavBar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/accommodations" component={AccommodationsList} />
          <Route path="/destinations" component={DestinationsList} />
          <Route path="/restaurants" component={RestaurantsList} />
        </Switch>
        <About />
        <Services />
        <Recommend />
        <Testimonials />
        <Footer />
      </div>
  )
}

export default App;
