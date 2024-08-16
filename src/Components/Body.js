import React from "react";
import "./Body.css";
// import background from "../Images/bodyimage.jpg";

const Body = () => {
  return (
    <section className="hero-section">
      {/* <img src={background} alt="Cooking Inc." className="flogo" /> */}
      <h1>Simple and Tasty Recipes</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>Get Started</button>
    </section>
  );
};

export default Body;
