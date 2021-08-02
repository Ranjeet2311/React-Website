import React from "react";
import "./HeroSection.css";
import img from "../Hero.png";

function HeroSection() {
  return (
    <div className="hero-container">
      <img className="Image" src={img} alt="pics" />
      <div className="text-container">
        <h1>NEXT LEVEL OF TECHNOLOGY</h1>
        <hr />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose.
        </p>
        <div className="btn-container">
          <button className="btn">Get connected</button>
          <button className="btn">See demo</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
