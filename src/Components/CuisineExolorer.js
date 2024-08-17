import React from "react";
import "./CuisineExplorer.css";
import japan from "../Images/Japan.jpg";
import Nepali from "../Images/Nepali.png";
import French from "../Images/French.jpg";
// import Nepali from "../Images/Nepali.png";

const CuisineExplorer = () => {
  return (
    <section className="cuisine-explorer">
      <h2>Explore by Cuisine Type</h2>
      <div className="cuisine-grid">
        <div className="cuisine-card">
          <img src={japan} alt="Italian Cuisine" />
          <span>Japanese</span>
        </div>
        <div className="cuisine-card">
          <img src="path_to_image_2" alt="Mexican Cuisine" />
          <span>Mexican</span>
        </div>
        <div className="cuisine-card">
          <img src="path_to_image_3" alt="Chinese Cuisine" />
          <span>Chinese</span>
        </div>
        <div className="cuisine-card">
          <img src={Nepali} alt="Indian Cuisine" />
          <span>Nepali</span>
        </div>
        <div className="cuisine-card">
          <img src={French} alt="French Cuisine" />
          <span>French</span>
        </div>
        <div className="cuisine-card">
          <img src="path_to_image_6" alt="Japanese Cuisine" />
          <span>Japanese</span>
        </div>
      </div>
      <div className="cuisine-navigation">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </section>
  );
};

export default CuisineExplorer;
