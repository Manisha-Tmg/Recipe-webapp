import React from "react";
import "./Navbar.css";
import food from "../Images/food.png";

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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/recipes">Recipes</a>
        </li>
        <li>
          <a href="/about">About Us</a>
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
