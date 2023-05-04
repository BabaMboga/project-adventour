import React from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/destinations">Event Destinations</NavLink>
          </li>
          <li>
            <NavLink to="/restaurants">Where To Eat</NavLink>
          </li>
          <li>
            <NavLink to="/accomodations">Where To Stay</NavLink>
          </li>
        </ul>
        {isLoggedIn ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <NavLink to="/login">
            <button>login</button>
          </NavLink>
        )}
      </div>
    </>
  );
};

export default NavBar;
