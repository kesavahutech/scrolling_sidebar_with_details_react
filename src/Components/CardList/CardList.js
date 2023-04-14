import React, { useMemo } from "react";
import Card from "../Card/Card";

import "./CardList.css";

function CardList() {
  const foodimages = useMemo(() => [
    {
      name: "Aloo gobi",
      img: "aloo-gobi-1.webp",
      desc: "Aloo gobi is a vegetarian dish from the Indian subcontinent made with potatoes, cauliflower, and Indian spices. It is popular in Indian cuisine. It is yellowish in colour due to the use of turmeric, and occasionally contains black cumin and curry leaves.",
    },
    {
      name: "Cheese Cake",
      img: "Cheesecake.jpg",
      desc: "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar. If there is a bottom layer, it most often consists of a crust or base made from crushed cookies, graham crackers, pastry, or sometimes sponge cake.",
    },
    {
      name: "Gobi matter",
      img: "gobi-mattar.jpg",
      desc: "Gobi Matar can be made dry like a sautéed vegetable dish or can have a gravy or curry base. This Gobi Matar is a curry recipe with a base of onion-tomato gravy with these three vegetables. It is subtly spiced and truly a delight when paired with some roti, steamed rice or even naan.",
    },
    { 
      name: "Gulab jamun", 
      img: "gulab-jamun.jpg", 
      desc: "Gulab jamun is a sweet confectionery or dessert, originating in the Indian subcontinent and a type of mithai popular in India, Pakistan, Nepal, the Maldives, and Bangladesh, as well as Myanmar." 
    }
  ],[]);
  return (
    <div className="sidebar">
      {foodimages.map((item,ind) => {
        return <Card  image={item.img} name={item.name} desc={item.desc} key={ind} />;
      })}
    </div>
  );
}


export default  React.memo(CardList) ; 