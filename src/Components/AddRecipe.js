import React from "react";
import "./AddRecipe.css";

const AddRecipe = () => {
  return (
    <div className="add">
      <div>
        <h2 className="h22">Add New Recipe</h2>{" "}
      </div>
      <div className="formm">
        <label className="recipee">Recipe Title:</label>
        <input type="text"></input>
        <label className="des">Description:</label>
        <input type="text"></input>
        <label>Ingredients:</label>
        <input></input>
        <input type=""></input>
        <p>+Add</p>
        <label>Instructions:</label>
        <input></input>
        <div className="time">
          <label>Cooking Time:</label>
          <input></input>
          <input></input>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
