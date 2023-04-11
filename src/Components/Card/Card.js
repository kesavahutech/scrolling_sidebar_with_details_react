import React, { useContext } from "react";

import './Card.css';
import DetailContext from "../../context/details-context";

export default function Card(props) {
  const detailctx = useContext(DetailContext);
    const clickHandler = () => {
      detailctx.updateShowDetail(true);
      detailctx.updateDetailData({
        image : `${props.image}`
      });
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
