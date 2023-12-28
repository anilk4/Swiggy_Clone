import { useEffect, useState } from "react";
import {FashionApi} from '../../Constants';
import Shimmer from "../ShimmerUi";

const useFashion = (ShopId) => {
    const [Fashion, setFashion] = useState(Shimmer);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        getFashion();
      }, []);
    
      async function getFashion() {
        const data = await fetch(`${FashionApi}${ShopId}`);
        const json = await data.json();
        setFashion(json);
        setisLoading(false);
      }

      return isLoading ? (
        <Shimmer />
      ) : Fashion 
}

export default useFashion;