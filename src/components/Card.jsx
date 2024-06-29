import React, { useState } from "react";
import { colorPalette } from "../constant";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/Slices/cartSlice";

const Card = (d) => {
  const {
    displayName,
    subTitle,
    image,
    colorVariations,
    price,
    rating,
    secondImage,
  } = d;

  const dispatch = useDispatch();
  const handelAddItem = () => {
    dispatch(addItem(d));
  };

  const [displayImg, setDisplayImg] = useState(image.src);
  const [like, setLike] = useState(false);
  return (
    <div
      className={`w-72 h-[400px] rounded-xl bg-[#EBEEEF] mx-4 my-2  border border-gray-300`}
    >
      <figure
        className="h-[55%] bg-cover relative "
        onMouseEnter={() => setDisplayImg(secondImage.src)}
        onMouseLeave={() => setDisplayImg(image.src)}
      >
        <span className="absolute right-5 top-5">
          {like ? (
            <i
              className="fa-solid fa-heart text-xl text-[#FF0000]"
              onClick={() => setLike(!like)}
            ></i>
          ) : (
            <i
              className="fa-regular fa-heart text-xl"
              onClick={() => setLike(!like)}
            ></i>
          )}
        </span>
        <img
          className="w-full h-full  rounded-t-xl"
          loading="lazy"
          src={displayImg}
          alt="Shoes"
        />
      </figure>
      <div
        className={`rounded-xl bg-[${colorPalette.Card}]  shadow-2xl h-[45%] py-2 px-2 border border-gray-300`}
      >
        <p
          className={` font-medium text-sm  overflow-hidden text-[${colorPalette.Text.t4}]`}
        >
          <i className="fa-solid fa-indian-rupee-sign"></i> {price}
        </p>
        <h2
          className={`my-2 font-bold text-xl h-8 overflow-hidden text-[${colorPalette.Text.t2}]`}
        >
          {displayName}
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`my-2 text-lg font-semibold h-6 text-[${colorPalette.Text.t3}]`}
            >
              {subTitle}
            </p>
            <p className={`mx-2 text-[${colorPalette.Text.t4}]`}>
              <p className="mx-2">Colours : {colorVariations.length}</p>
              <p className={`mx-2 text-[${colorPalette.Text.t4}]`}>
                <i className="fa-solid fa-star text-[#FFD700]  drop-shadow-2xl"></i>{" "}
                {rating ? rating : ""}
              </p>
            </p>
          </div>
          <div className="flex items-center justify-end px-4 text-black">
            <button onClick={() => handelAddItem()}>
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
