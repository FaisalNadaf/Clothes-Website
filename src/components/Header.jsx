/** @format */

import React, { useEffect, useState } from "react";
import { colorPalette } from "../constant";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchqry } from "../redux/Slices/searchSlice";
import { setApi } from "../redux/Slices/apiSlice";

const Header = () => {
	const dispatch = useDispatch();

	const [searchTxt, setSearchTxt] = useState("");
	const data = useSelector((store) => store.cart);
	const handelApi = (api) => {
		dispatch(setApi(api));
	};

	return (
		<div
			className={`z-10 h-20 w-full rounded-b-xl shadow flex items-center md:justify-between md:px-6 bg-gradient-to-r to-indigo-500 via-purple-500 from-gray-400 hover:from-indigo-500 hover:via-purple-500 hover:to-gray-400 text-[${colorPalette.Text.t4}] sticky top-0`}>
			<div className="hidden md:flex items-center justify-between w-[8%]">
				<div>
					<button
						onClick={() =>
							handelApi(
								"https://www.adidas.co.in/api/plp/content-engine?query=men-shoes",
							)
						}>
						<img
							className="h-16"
							src="src/assets/images/ic_launcher.png"
							alt="no logo"
						/>
					</button>
				</div>
			</div>

			<div className="hidden lg:flex">
				<ul className="flex">
					<li className="px-4 text-lg hover:text-[white] font-medium">
						<button
							onClick={() =>
								handelApi(
									"https://www.adidas.co.in/api/plp/content-engine?query=men-clothing",
								)
							}>
							Men
						</button>
					</li>
					<li className="px-4 text-lg hover:text-[white] font-medium">
						<button
							onClick={() =>
								handelApi(
									"https://www.adidas.co.in/api/plp/content-engine?query=women-clothing",
								)
							}>
							Women
						</button>
					</li>
					<li className="px-4 text-lg hover:text-[white] font-medium">
						<button
							onClick={() =>
								handelApi(
									"https://www.adidas.co.in/api/plp/content-engine?query=kids-marvel",
								)
							}>
							Kids
						</button>
					</li>
					<li className="px-4 text-lg hover:text-[white] font-medium">
						<button
							onClick={() =>
								handelApi(
									"https://www.adidas.co.in/api/plp/content-engine?query=originals",
								)
							}>
							New
						</button>
					</li>
					<li className="px-4 text-lg hover:text-[white] font-medium">
						<button
							onClick={() =>
								handelApi(
									"https://www.adidas.co.in/api/plp/content-engine?query=men-performance",
								)
							}>
							Sports
						</button>
					</li>
				</ul>
			</div>

			<div className="flex items-center justify-between w-full md:w-[44%] lg:w-[32%] px-4 md:px-0">
				<div className="shadow-lg hover:shadow-black hover:shadow-2xl hover:border border-gray-500 h-10 rounded-md">
					<input
						type="text"
						className="bg-transparent px-2 w-36 md:w-40 xl:w-44 text-white h-full md:px-2 rounded-l-md"
						placeholder="Search"
						onChange={(e) => {
							setSearchTxt(e.target.value);
						}}
					/>
					<button
						className="h-full px-2 md:px-3"
						onClick={() => dispatch(searchqry(searchTxt))}>
						<i className="fa-solid fa-magnifying-glass"></i>
					</button>
				</div>
				<div className="flex justify-between w-20 md:w-24">
					<div className="flex justify-center">
						<div className="dropdown dropdown-hover relative md:left-4">
							<i className="fa-regular fa-user hover:text-black"></i>
							<ul
								tabIndex={0}
								className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-24 absolute right-0 top-6 bg-transparent">
								<li
									className={`text-[${colorPalette.Text.t2}] bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 my-1 hover:to-orange-500 rounded-xl hover:text-black hover:font-semibold`}>
									<a>Sign In</a>
								</li>
								<li
									className={`text-[${colorPalette.Text.t2}] bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 my-1 hover:to-orange-500 rounded-xl hover:text-black hover:font-semibold`}>
									<a>Sign Up</a>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<Link to="/cart">
							<i className="fa-solid fa-cart-shopping hover:text-black"></i>
						</Link>
						<div className="badge w-6 h-6 relative bottom-3 left-1 bg-[#B49286] font-bold text-[#744253]">
							{data?.length}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
