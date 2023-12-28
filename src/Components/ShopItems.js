import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFashion from "./Utils/useFashion";


const ShopItems = () => {
  const { id: ShopId } = useParams(); // Destructure 'id' from the params object
  const Fashion = useFashion(ShopId);

  return ( 
    <div className="Shop-items">
      <h1>{Fashion.title}</h1>
      <img src={Fashion.image} alt={Fashion.title} className="item-image" />
      <p>{Fashion.description}</p>
      <div className="item-details">
        <p>Category: {Fashion.category}</p>
        <p>Price: ${Fashion.price}</p>
        <p>Rating: {Fashion.rating?.rate} ({Fashion.rating?.count} reviews)</p>
      </div>
    </div>
  );
};

export default ShopItems;
