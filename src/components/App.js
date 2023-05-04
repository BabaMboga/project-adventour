import React, {useState} from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <div>
        {/* <ScrollToTop /> */}

        <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        {!isLoggedIn ? (<Login handleLogin={handleLogin} />
        ) : (
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/accommodations" element={<AccommodationsList/>} />
            <Route path="/destinations" element={<DestinationsList/>} />
            <Route path="/restaurants" element={<RestaurantsList/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        )}
        
        <Footer />
        <ScrollToTop />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
