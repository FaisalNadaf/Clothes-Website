/** @format */

import React, { useState } from "react";
import { colorPalette } from "../constant";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/Slices/cartSlice";
import ShowBuyComponent from "./ShowBuyComponent";
import PropTypes from "prop-types";

const Card = (props) => {
	const {
		displayName,
		subTitle,
		image,
		colorVariations,
		price,
		rating,
		secondImage,
	} = props;

	const dispatch = useDispatch();
	const handleAddItem = () => {
		dispatch(addItem(props)); // Dispatching the entire props object
	};

	const [show, setShow] = useState(false); // Control modal visibility
	const [displayImg, setDisplayImg] = useState(image.src || ""); // Add default value
	const [like, setLike] = useState(false);

	return (
		<div className="w-72 h-[400px] rounded-xl  hover:shadow-black hover:shadow-lg bg-[#EBEEEF] mx-4 my-2 ">
			{show && (
				<ShowBuyComponent
					setShow={setShow}
					displayName={displayName}
					subTitle={subTitle}
					image={image}
					colorVariations={colorVariations}
					price={price}
					rating={rating}
					secondImage={secondImage}
				/>
			)}
			{/* Pass individual props to modal */}

			<figure
				className="h-[55%] bg-cover relative"
				onMouseEnter={() => setDisplayImg(secondImage.src || "")} // Add default value
				onMouseLeave={() => setDisplayImg(image.src || "")}>
				<span className="absolute right-5 top-5">
					{/* Heart icon for like/unlike */}
					{like ? (
						<i
							className="fa-solid fa-heart text-xl text-[#FF0000]"
							onClick={() => setLike(!like)}></i>
					) : (
						<i
							className="fa-regular fa-heart text-xl"
							onClick={() => setLike(!like)}></i>
					)}
				</span>
				<img
					className="w-full h-full rounded-t-xl"
					loading="lazy"
					src={displayImg}
					alt={displayName}
				/>
			</figure>

			<div className="rounded-xl bg-white shadow-2xl h-[45%] py-2 px-2 border border-gray-300">
				{/* Price and product details */}
				<p className="font-semibold text-sm overflow-hidden text-gray-500">
					<i className="fa-solid fa-indian-rupee-sign"></i>
					<span className="line-through px-1 font-normal">{price + 999}</span>
					<span className="font-semibold">{price}</span>
				</p>
				<h2 className="my-2 font-bold text-xl h-8 overflow-hidden text-gray-800">
					{displayName}
				</h2>

				<div className="flex items-center justify-between">
					<div className="w-[55%]">
						<p className="my-2 text-lg font-semibold h-6 text-gray-700 overflow-hidden">
							{subTitle}
						</p>
						<p className="mx-2 text-gray-500">
							Colours: {colorVariations.length}
						</p>
						<p className="mx-2 text-gray-500">
							<i className="fa-solid fa-star text-[#FFD700]"></i> {rating}
						</p>
					</div>

					{/* Buttons */}
					<div className="flex items-center w-[40%] justify-around text-black">
						<button
							className="px-4 py-1 rounded-lg font-bold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-green-600 hover:to-orange-500"
							onClick={() => setShow(true)}>
							Buy
						</button>
						<button onClick={handleAddItem}>
							<i className="fa-solid fa-cart-shopping"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

// Prop types validation
Card.propTypes = {
	displayName: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	image: PropTypes.shape({
		src: PropTypes.string.isRequired,
	}).isRequired,
	colorVariations: PropTypes.array.isRequired,
	price: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	secondImage: PropTypes.shape({
		src: PropTypes.string.isRequired,
	}).isRequired,
};

export default Card;
