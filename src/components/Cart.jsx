/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/Slices/cartSlice";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import CheckOut from "./CheckOut";
import { toast } from "react-toastify";
import Total from "./Total";

const Cart = () => {
	const [total, setTotal] = useState(0);
	const dispatch = useDispatch();

	const handelRemoveItem = (id) => {
		dispatch(removeItem(id));
	};

	const data = useSelector((store) => store.cart);

	useEffect(() => {
		const totalAmount = data.reduce((acc, d) => acc + d.price, 0);
		setTotal(totalAmount);
	}, [data]);

	return !data ? (
		<ShimmerUi />
	) : (
		<>
			<div className="h-8 my-2 flex items-center justify-between">
				<Link to="/">
					<i className="fa-solid fa-arrow-left text-lg font-bold mx-2 text-white px-2">
						BACK
					</i>
				</Link>
				<div className="fixed right-6 top-40">
					<Total total={total} />
				</div>
			</div>
			<div className="flex flex-wrap items-center py-1 w-[75%]">
				{data.map((d) => {
					return (
						<CartItem
							key={d.productId}
							item={d}
							handelRemoveItem={handelRemoveItem}
						/>
					);
				})}
			</div>
		</>
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
	const [count, setCount] = useState(0);
	const [show, setShow] = useState(false);

	const notifyDelet = () => toast("Item Deleted");
	const notifyLike = () => toast("Liked 💕");
	const notifyDislike = () => toast("dislike 🥲");

	return (
		<div className="w-72 h-[600px] rounded-xl bg-[#EBEEEF] mx-2 my-2 border border-gray-300">
			{show && (
				<CheckOut
					setShow={setShow}
					price={price}
					displayName={displayName}
					subTitle={subTitle}
					rating={rating}
				/>
			)}
			<figure
				className="h-[55%] bg-cover relative"
				onMouseEnter={() => setDisplayImg(secondImage.src)}
				onMouseLeave={() => setDisplayImg(image.src)}>
				<span className="absolute right-5 top-5">
					{like ? (
						<i
							className="fa-solid fa-heart text-xl text-[#FF0000]"
							onClick={() => {
								notifyDislike(), setLike(!like);
							}}></i>
					) : (
						<i
							className="fa-regular fa-heart text-xl"
							onClick={() => {
								notifyLike(), setLike(!like);
							}}></i>
					)}
				</span>
				<img
					className="w-full h-full rounded-t-xl"
					src={displayImg}
					alt="Product"
				/>
			</figure>
			<div className="rounded-xl bg-[${colorPalette.Card}] shadow-2xl h-[45%] py-2 px-2 border border-gray-300">
				<p className="font-medium text-sm overflow-hidden text-[${colorPalette.Text.t4}]">
					<i className="fa-solid fa-indian-rupee-sign"></i> {price}
				</p>
				<h2 className="my-2 font-bold text-xl h-8 overflow-hidden text-[${colorPalette.Text.t2}]">
					{displayName}
				</h2>
				<div className="flex items-center justify-between">
					<div className="w-1/2">
						<p className="my-2 text-lg font-semibold h-6 text-[${colorPalette.Text.t3}]">
							{subTitle}
						</p>
						<p className="mx-2 text-[${colorPalette.Text.t4}]">
							Colours: {colorVariations.length}
						</p>
						<p className="mx-2 text-[${colorPalette.Text.t4}]">
							<i className="fa-solid fa-star text-[#FFD700] drop-shadow-2xl"></i>
							{rating || ""}
						</p>
					</div>
					<div className="flex items-center justify-center flex-wrap h-[50%] w-[80%]">
						<div className="flex items-center w-full justify-between px-6 text-black my-2">
							<div className="w-20 flex items-center justify-around">
								<button
									onClick={() => {
										if (count > 0) {
											setCount(count - 1);
										}
									}}
									className="w-5 rounded bg-[#B49286] flex items-center justify-center h-full">
									-
								</button>
								<span>{count}</span>
								<button
									onClick={() => {
										setCount(count + 1);
									}}
									className="w-5 rounded bg-[#B49286] flex items-center justify-center h-full">
									+
								</button>
							</div>

							<button
								onClick={() => {
									notifyDelet(), handelRemoveItem(productId);
								}}>
								<i className="fa-solid fa-trash"></i>
							</button>
						</div>
						<button
							className="px-4 py-1 rounded-lg font-bold w-[80%] bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
							onClick={() => setShow(true)}>
							Buy
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
