import React from "react";
import { colorPalette } from "../constant";
import Button from "./Button";

const Card = () => {
  return (
    <div
      className={`card w-80 h-96 bg-base-100 shadow-xl py-0 bg-[${colorPalette.Card}]`}
    >
      <figure className="h-[80%] m-0">
        <img
        className="p-1 rounded"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body py-2">
        <h2 className={`card-title text-[${colorPalette.Text.t1}]`}>Shoes!</h2>
        <p className={` text-[${colorPalette.Text.t2}]`}>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Button text={"Buy Now"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
