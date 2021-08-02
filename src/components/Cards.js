import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div className="Card">
      <div className="card-items">
        <img src={props.img} alt="pic" />
        <hr />
        <Link to="/services">
          <h2>{props.text}</h2>
        </Link>
        <hr />
        <Link to="/services">
          <p> {props.para}</p>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
