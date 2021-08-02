import React from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import HeroSection from "./components/HeroSection";
import Home from "./components/WebPages/Home";
import About from "./components/WebPages/About";
import Contact from "./components/WebPages/Contact";
import Services from "./components/WebPages/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
