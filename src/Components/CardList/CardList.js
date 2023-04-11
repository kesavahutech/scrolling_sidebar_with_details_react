import React from 'react';
import Card from '../Card/Card';

import "./CardList.css";

export default function CardList() {
    const foodimages = [
        {img : "aloo-gobi-1.webp" },
        {img : "Cheesecake.jpg"},
        {img : "gobi-mattar.jpg"},
        {img : "gulab-jamun.jpg"}
    ]
  return (
    <div className='sidebar'>
        {foodimages.map((img) => {
            return <Card image={img.img} />
        })}
    </div>
  )
}
