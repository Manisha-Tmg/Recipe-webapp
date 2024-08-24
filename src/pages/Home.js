import React from "react";
import Body from "../pages/Body";
import Services from "../pages/Services";
import Recipe from "../pages/Recipe";

const Home = () => {
  return (
    <div>
      <Body />
      <p className="h2">Popular Recipes You Can't Miss</p>
      <p className="pe">
        From comfort food classics to exotic flavours, our featured
      </p>
      <p className="pe1"> recipes are sure to impress.</p>

      <Recipe />
      <Services />
    </div>
  );
};

export default Home;
