import React, { useContext } from "react";

import './Card.css';
import DetailContext from "../../context/details-context";

export default function Card(props) {
  const detailctx = useContext(DetailContext);
    const clickHandler = () => {
      detailctx.updateShowDetail(true);
      detailctx.updateDetailData({
        name : props.name,
        image : `${props.image}`,
        desc : props.desc
      });
    }
  return (
    <div className="card" onClick={clickHandler}>
      <div className="image-container">
        <img className="image" src={require(`../../Images/${props.image}`)} alt="" />
      </div>
      <div className="details">
        <span>
          {props.name}
        </span>
      </div>
    </div>
  );
}
