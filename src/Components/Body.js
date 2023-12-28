import React, { useState } from "react";
import ShoppingCards from "./Shopcards";
import Shimmer from "./ShimmerUi";
import { Link } from "react-router-dom";
import useFashionData from "./Utils/useFashionList";
import useOnline from "./Utils/useOnline";

const Body = () => {
  const [searchTxt, setsearchTxt] = useState("");
  const { fashionData, filteredFashion, isLoading, handleSearch } = useFashionData();
  const isOnline = useOnline();  

  if (!isOnline){
    return(<h1>You are Offline Kindly check your Internet!!!!</h1>)
  }

  return isLoading ? (
    <Shimmer />
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          className="input"
          placeholder="search"
          value={searchTxt}
          onChange={(event) => setsearchTxt(event.target.value)}
        />
        <button className="search-btn" onClick={() => handleSearch(searchTxt)}>
          Search
        </button>
      </div>
      <div className="shop-list">
        {filteredFashion.map((res) => (
          <Link key={res?.id} to={`/products/${res?.id}`}>
            <ShoppingCards {...res} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
