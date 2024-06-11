import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/Slices/cartSlice";
import ShimmerUi from "./ShimmerUi";
import { colorPalette } from "../constant";

const Cart = () => {
  const dispatch = useDispatch();

  const handelRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const data = useSelector((store) => store.cart);

  return !data ? (
    <ShimmerUi />
  ) : (
    <div className="flex flex-wrap items-center justify-center p-4">
      {data.map((d) => (
        <CartItem
          key={d.productId}
          item={d}
          handelRemoveItem={handelRemoveItem}
        />
      ))}
    </div>
  );
};

const CartItem = ({ item, handelRemoveItem }) => {
  const {
    productId,
    displayName,
    subTitle,
    image,
    colorVariations,
    price,
    rating,
    secondImage,
  } = item;
  const [like, setLike] = useState(false);
  const [displayImg, setDisplayImg] = useState(image?.src);

  return (
    <div
      className={`w-72 h-[400px] rounded-xl bg-[#EBEEEF] mx-4 my-2 border border-gray-300`}
    >
      <figure
        className="h-[55%] bg-cover relative"
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
          className="w-full h-full rounded-t-xl"
          src={displayImg}
          alt="Shoes"
        />
      </figure>
      <div
        className={`rounded-xl bg-[${colorPalette.Card}] shadow-2xl h-[45%] py-2 px-2 border border-gray-300`}
      >
        <p
          className={`font-medium text-sm overflow-hidden text-[${colorPalette.Text.t4}]`}
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
              Colours: {colorVariations.length}
            </p>
            <p className={`mx-2 text-[${colorPalette.Text.t4}]`}>
              <i className="fa-solid fa-star text-[#FFD700] drop-shadow-2xl"></i>{" "}
              {rating || ""}
            </p>
          </div>
          <div className="flex items-center justify-end px-4 text-black">
            <button onClick={() => handelRemoveItem(productId)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
