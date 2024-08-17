import React from "react";
import "./AboutUs.css";
import img from "../Images/image.png";

function AboutUs() {
  return (
    <section className="about-us">
      <h2>Discover Our Story</h2>
      <div className="about">
        <p className="ptag">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          vehicula dolor nec nisi aliquet, sit amet bibendum libero
          dignissim.Exercitation sint officia pariatur ad labore. Veniam et nisi
          ex cupidatat ut esse do amet velit cillum culpa. Cupidatat do enim
          sint sunt in anim. Quis qui eu cillum commodo amet sint id culpa dolor
          tempor mollit incididunt eu. Consectetur excepteur elit nulla sint
          veniam reprehenderit cupidatat cillum velit qui labore sint velit.
          Sunt id excepteur Lorem proident officia commodo esse velit. Esse amet
          adipisicing sunt ut magna enim. Ullamco mollit voluptate aliquip sint.
          Amet in velit et laborum non elit voluptate consectetur adipisicing.
          Veniam est excepteur deserunt eu minim sint aliquip consequat
          excepteur duis laborum velit aliquip. Irure quis ullamco consequat ad
          officia. Ad consequat non pariatur et aute. Aliquip tempor
          exercitation aute sit dolor minim cupidatat pariatur eiusmod dolore.
          Ipsum consectetur tempor aute dolor ea velit officia. Ullamco occaecat
          irure commodo nulla id proident quis tempor ea ut. Nulla sint ad
          aliquip voluptate et aute dolor. Ea magna dolor nisi deserunt dolor
          dolor minim minim duis adipisicing et eiusmod et. Dolore qui duis
          veniam veniam quis quis aute ex exercitation adipisicing ad.
          Adipisicing in eu eu tempor velit. Elit culpa incididunt et voluptate
          sit. Esse dolore do amet nostrud ipsum ut enim. Ut ullamco ea mollit
          do laborum qui ad aliqua. Enim do qui nostrud commodo pariatur dolor
          aliquip incididunt laboris. Occaecat ad enim quis consectetur quis
          labore duis. Proident labore id ullamco et id. Labore et mollit eu
          cillum sunt laborum proident dolor.
        </p>
        <img className="img" src={img} alt=""></img>
      </div>
    </section>
  );
}

export default AboutUs;
