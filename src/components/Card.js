import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h3>{props.search}</h3>
      <img src={`https://source.unsplash.com/800x450/?${props.name}`} alt={props.name} />

      <button className="delete" onClick={props.delete}>
        X
      </button>

      <h3>{props.name}</h3>
      <div className="card-info">
        <p className="likes">&hearts; {props.like}</p>
        <button onClick={props.add}>Add like</button>
      </div>
    </div>
  );
}

export default Card;
