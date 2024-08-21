import React from "react";
import "./AddRecipe.css";
import NavbarRecipe from "./NavbarRecipe";

const AddRecipe = () => {
  return (
    <div>
      <NavbarRecipe />
      <div className="add">
        <div className="formm">
          <label className="recipee">Recipe Title:</label>
          <img className="cake" src="" alt="Cake.jpeg"></img>
          <input type="text"></input>
          <label className="des">Description:</label>
          <input type="text"></input>
          <label>Ingredients:</label>
          <input></input> <input type=""></input>
          <p className="pa">+Add</p>
          <label>Instructions:</label>
          <input></input>
          <label>Cooking Time:</label>
          <div className="cook">
            {" "}
            <input></input>
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
