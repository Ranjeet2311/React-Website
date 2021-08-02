import React from "react";
import "./Heading.css";

function Heading(props) {
  return (
    <div className="text-heading">
      <h1>{props.text}</h1>
      <hr />
    </div>
  );
}

export default Heading;
