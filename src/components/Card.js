import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src="{props.image}" alt="" />
      <h3>{props.name}</h3>
      <p>Title: {props.title}</p>
    </div>
  );
}

export default Card;
