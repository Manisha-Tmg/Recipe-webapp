import React from "react";
import Body from "./Body";
import Services from "./Services";
import Recipe from "./Recipe";
import Featuredpost from "./Featuredpost";

const Home = () => {
  return (
    <div>
      <Body />
      <Recipe />
      <Featuredpost />
      <Services />
    </div>
  );
};

export default Home;
