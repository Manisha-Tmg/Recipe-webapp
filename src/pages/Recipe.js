import React from "react";
import "./Recipe.css";

import recipe1 from "../Images/Sprout.jpg";
import recipe2 from "../Images/Chicken.jpg";
import recipe3 from "../Images/vegetable.jpg";
import recipe4 from "../Images/Cake.jpeg";
import RecipeCard from "../Components/RecipeCard";

const Recipe = () => {
  return (
    <div>
      {" "}
      <p className="h2">Popular Recipes You Can't Miss</p>
      <p className="p">
        From comfort food classics to exotic flavours, our featured
      </p>
      <p className="p"> recipes are sure to impress.</p>
      <section className="recipe-list1">
        <div className="recipe-list">
          <RecipeCard
            image={recipe1}
            title="Sprout Salad "
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />

          <RecipeCard
            image={recipe2}
            title="Chicken Curry"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />
          <RecipeCard
            image={recipe3}
            title="Vegetable Salad"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />

          <RecipeCard
            image={recipe4}
            title="Chocolate Cake"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />
        </div>
      </section>
    </div>
  );
};

export default Recipe;
