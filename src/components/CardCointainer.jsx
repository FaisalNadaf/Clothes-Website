import React, { useEffect, useState } from "react";
import Card from "./Card";
import { GET_SHOES_DATA } from "../constant";

const CardCointainer = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const data = await fetch(GET_SHOES_DATA);
    const jsonData = await data.json();
    const mainData = jsonData.raw.itemList.items;
    setData(mainData);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="flex  flex-wrap items-center justify-center p-4">
      {data?.map((d) => {
        return <Card key={d.productId} {...d} />;
      })}
    </div>
  );
};

export default CardCointainer;
