import React from "react";

import './Card.css';

export default function Card(props) {
    const clickHandler = (props) => {

    }
  return (
    <div className="card" onClick={clickHandler}>
      <div className="image-container">
        <img className="image" src={require(`../../Images/${props.image}`)} alt="" />
      </div>
      <div class="details">
        <span>
          this is a food image
        </span>
      </div>
    </div>
  );
}
