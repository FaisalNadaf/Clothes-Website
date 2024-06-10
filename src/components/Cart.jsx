import React, { useEffect, useState } from "react";
import Card from "./Card";
import { GET_SHOES_DATA } from "../constant";
import ShimmerUi from "./ShimmerUi";
import { useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((store) => store.cart);

  return !data ? (
    <ShimmerUi />
  ) : (
    <div className="flex  flex-wrap items-center justify-center p-4">
      {data?.map((d) => {
        return <Card key={d.productId} {...d} />;
      })}
    </div>
  );
};

export default Cart;
