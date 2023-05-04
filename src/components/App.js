import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import ScrollToTop from "./ScrollToTop";
import NavBar from "./NavBar";
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
            <Route exact path="/" component={Home} />
            <Route path="/accommodations" component={AccommodationsList} />
            <Route path="/destinations" component={DestinationsList} />
            <Route path="/restaurants" component={RestaurantsList} />
            <Route path="/login" component={Login} />
          </Routes>
        )}
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
