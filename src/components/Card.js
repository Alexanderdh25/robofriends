import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={`https://robohash.org/${props.robots.username}`} alt="robots" />
      <div>
        <h2>{props.robots.name}</h2>
        <p>{props.robots.email}</p>
      </div>
    </div>
  );
}

export default Card;
