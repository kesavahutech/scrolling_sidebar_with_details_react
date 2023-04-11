import React, { useContext } from 'react';
import DetailContext from '../../context/details-context';

import './Details.css';

export default function Details() {
  const detailctx = useContext(DetailContext);
  return (
    <div className="detail-card">
      <div className="detail-image-container">
        <img className="image" src={require(`../../Images/${detailctx.detaildata.image}`)} alt="" />
      </div>
      <div class="detail-details">
        <span>
          this is a food image
        </span>
      </div>
    </div>
  )
}
