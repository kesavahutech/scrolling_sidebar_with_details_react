import React from 'react';
import classes from "./Details.module.css";

export default function Details(props) {
  const {name, img, desc} = props.detail
  return (
    <div className={classes.detail_card}>
      <div className={classes.detail_title}>
        <span>
          {name}
        </span>
      </div>
      <div className={classes.detail_image_container}>
        <img className={classes.image} src={require(`../../Images/${img}`)} alt="" />
      </div>
      <div className={classes.detail_details}>
        <span>
          {desc}
        </span>
      </div>
    </div>
  )
}



