/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/Slices/cartSlice";
import PropTypes from "prop-types";
import { getRandomColor } from "../helper/getRandomHexColor";

const ShowBuyComponent = ({
	setShow,
	displayName,
	subTitle,
	image,
	colorVariations,
	price,
	rating,
	secondImage,
}) => {
	const dispatch = useDispatch();

	const handleAddItem = () => {
		dispatch(
			addItem({
				displayName,
				subTitle,
				image,
				colorVariations,
				price,
				rating,
				secondImage,
			}),
		);
	};

	useEffect(() => {
		document.body.classList.add("overflow-hidden");
		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	const [productState, setProductState] = useState({
		displayImg: image.src || "path/to/default/image.jpg", // Default image path
		like: false,
	});

	const { displayImg, like } = productState;

	const toggleLike = () =>
		setProductState((prevState) => ({ ...prevState, like: !prevState.like }));

	return (
		<div className="fixed inset-0 z-20 flex items-center justify-center h-screen w-screen">
			<div className="fixed inset-0 bg-black opacity-60"></div>
			<div className="relative bg-white w-[60%] h-[70%] flex justify-around items-center rounded-lg shadow-lg">
				<button
					onClick={() => setShow(false)}
					className="absolute top-4 right-4 text-black font-bold"
					aria-label="Close modal">
					<i className="fa-solid fa-rectangle-xmark text-xl"></i>
				</button>

				<div className="w-full h-full flex items-center justify-center mx-4 my-2">
					<figure
						className="h-[80%] w-[45%] bg-cover relative shadow-2xl rounded-l-xl"
						onMouseEnter={() =>
							setProductState((prevState) => ({
								...prevState,
								displayImg: secondImage.src || "path/to/default/image.jpg",
							}))
						}
						onMouseLeave={() =>
							setProductState((prevState) => ({
								...prevState,
								displayImg: image.src || "path/to/default/image.jpg",
							}))
						}>
						<span className="absolute right-5 top-5">
							<i
								className={`fa-${like ? "solid" : "regular"} fa-heart text-xl ${
									like ? "text-[#FF0000]" : ""
								}`}
								onClick={toggleLike}
								aria-label={like ? "Unlike" : "Like"}></i>
						</span>
						<img
							className="w-full h-full rounded-l-xl"
							loading="lazy"
							src={displayImg}
							alt={displayName}
						/>
					</figure>

					<div className="rounded-r-xl bg-white shadow-2xl h-[80%] w-[45%] px-6 py-10">
						<h2 className="my-4 font-bold text-3xl h-8 overflow-hidden text-gray-800">
							{displayName}
						</h2>
						<p className="font-bold text-lg overflow-hidden text-gray-500">
							<i className="fa-solid fa-indian-rupee-sign"></i>
							<span className="line-through px-1 font-normal">
								{price + 999}
							</span>
							<span className="font-bold">{price}</span>
						</p>
						<div className="w-full">
							<p className="my-2 text-xl font-semibold h-6 text-gray-700">
								{subTitle}
							</p>
							<p className="mx-2 text-lg text-gray-500">
								Colours:
								{colorVariations.map((color, index) => {
									return (
										<span
											key={index} // Prefer unique identifiers if available
											className={`h-4 w-4 rounded-full inline-block ml-1 bg-[${getRandomColor()}]`}
											style={{
												backgroundColor: `${getRandomColor()}`,
											}}></span>
									);
								})}
							</p>
							<p className="mx-2 text-gray-500 text-lg">
								<i className="fa-solid fa-star text-[#FFD700]"></i> {rating}
							</p>
						</div>
						<div className="flex items-center w-full h-[40%] justify-around text-black">
							<button
								className="px-4 py-1 rounded-lg font-bold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
								onClick={handleAddItem}>
								Add to Cart
							</button>
							<button
								className="px-4 py-1 rounded-lg font-bold bg-gray-300"
								onClick={() => setShow(false)}>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// Prop types validation
ShowBuyComponent.propTypes = {
	setShow: PropTypes.func.isRequired,
	displayName: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	image: PropTypes.shape({
		src: PropTypes.string.isRequired,
	}).isRequired,
	colorVariations: PropTypes.arrayOf(PropTypes.string).isRequired, // More specific PropType
	price: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	secondImage: PropTypes.shape({
		src: PropTypes.string.isRequired,
	}).isRequired,
};

export default ShowBuyComponent;
