import React, { useEffect, useState } from "react";
import Card from "./Card";
import { GET_SHOES_DATA } from "../constant";
import ShimmerUi from "./ShimmerUi";
import { useSelector } from "react-redux";

const CardCointainer = () => {
  const [data, setData] = useState();
  const [searchFilteredData, setSearchFilteredData] = useState([]);
  const fetchData = async () => {
    const data = await fetch(GET_SHOES_DATA);
    const jsonData = await data.json();
    const mainData = jsonData.raw.itemList.items;
    setData(mainData);
    setSearchFilteredData(mainData);
  };
  useEffect(() => {
    fetchData();
    
  }, []);

  const search = useSelector((store) => store.search);
  const filteredData = (search, data) => {
    return data?.filter((d) =>
      d.displayName.toLowerCase().includes(search.toLowerCase())
    );
  };
  console.log(searchFilteredData);
  useEffect(() => {
    setSearchFilteredData(filteredData(search, data));
  }, [search]);

  return !searchFilteredData ? (
    <ShimmerUi />
  ) : (
    <div className="flex min-h-full  flex-wrap items-center justify-center p-4">
      {searchFilteredData?.map((d) => {
        return <Card key={d.productId} {...d} />;
      })}
    </div>
  );
};

export default CardCointainer;
