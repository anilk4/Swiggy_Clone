import { useState, useEffect } from "react";
import { filterData } from "../../Constants";

const useFashionData = () => {
  const [fashionData, setFashionData] = useState([]);
  const [filteredFashion, setFilteredFashion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setFashionData(json);
        setFilteredFashion(json);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching fashion data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchText) => {
    const filteredData = filterData(searchText, fashionData);
    setFilteredFashion(filteredData);
  };

  return { fashionData, filteredFashion, isLoading, handleSearch };
};

export default useFashionData;
