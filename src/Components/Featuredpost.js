import React from "react";
import food1 from "../Images/Japan.jpg";
import food2 from "../Images/Mexican.jpg";
import food3 from "../Images/Chinese.jpeg";

const Featuredpost = () => {
  return (
    <div className="f-main">
      <div className="food">
        <img src={food1}></img>
        <img src={food2}></img>
        <img src={food3}></img>
      </div>
    </div>
  );
};

export default Featuredpost;
