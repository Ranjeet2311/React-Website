import React from "react";
import HeroSection from "../HeroSection";
import CardsContainer from "../CardsContainer";
import Heading from "../Heading";
import Footer from "../Footer";

import "./Home.css";

function Home() {
  return (
    <div>
      <HeroSection />
      <Heading text="Our Services" />
      <CardsContainer />

      <Footer />
    </div>
  );
}

export default Home;
