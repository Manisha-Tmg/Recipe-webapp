import React from "react";
import "./Navbar.css";
import food from "../Images/food.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-container">
        <img src={food} alt="Cooking Inc." className="flogo" />
        <div className="logo1">Meal</div>
        <div className="logo">Hub</div>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>

      <div className="auth-buttons">
        <button className="btn">Log in</button>
        <button className="btn-S">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
