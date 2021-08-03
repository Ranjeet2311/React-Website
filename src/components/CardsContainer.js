import React from "react";
import "./CardsContainer.css";
import Cards from "./Cards";
import imh1 from "../images/eb.jpg";
import imh2 from "../images/lt.jpg";
import imh3 from "../images/vr.jpg";

function CardsContainer() {
  return (
    <div className="container">
      <Cards
        text="Research & Development"
        img={imh1}
        para="It has a more-or-less normal distribution of letters, as opposed to using 'Content here. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose."
      />

      <Cards
        text="Software Development"
        img={imh2}
        para="It has a more-or-less normal distribution of letters, as opposed to using 'Content here. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose."
      />
      <Cards
        text="Virtual Reality"
        img={imh3}
        para="It has a more-or-less normal distribution of letters, as opposed to using 'Content here. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose."
      />
    </div>
  );
}

export default CardsContainer;
