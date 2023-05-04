import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Adventour from "../Images/Adventour.jpg";

const NavBar = ({ isLoggedIn, handleLogout }) => {

  const onLogout = () => {
    handleLogout()
  }
  return (
    <>
      <div className="Nav">
        <div className="brand">
          <div className="container">
            <img src={Adventour} alt="logo" />
          </div>
          <div className="toggle"></div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destinations">Event Destinations</Link>
          </li>
          <li>
            <Link to="/restaurants">Where To Eat</Link>
          </li>
          <li>
            <Link to="/accommodations">Where To Stay</Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>login</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default NavBar;
