import React from "react";
import "./Ingredents.css";

function Ingrdients({ image, title, time, servings, ingredients }) {
  return (
    <div className="ingredients-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div>
        <p>
          <strong>Time:</strong> {time}
        </p>
        <p>
          <strong>Servings:</strong> {servings}
        </p>
      </div>
      <div>
        <h4>Ingredients:</h4>
      </div>
    </div>
  );
}

export default Ingrdients;
