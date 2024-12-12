/** @format */

import { colorPalette } from "../constant";
import React from "react";

const CheckOut = ({
	setShow,
	displayName,
	subTitle,
	// image,
	// colorVariations,
	price,
	rating,
	// secondImage,
}) => {
	const notifyPay = () => toast("Processing Payment⌛");

	return (
		<div className="fixed inset-0 z-20 flex items-center justify-center h-screen w-screen">
			<div className="fixed inset-0 bg-black opacity-60"></div>
			<div className="relative bg-transparent w-full md:w-[80%] lg:w-[80%] h-[90%] md:h-[80%] lg:h-full flex flex-col md:flex-row justify-around items-center rounded-lg shadow-lg">
				<div className="flex flex-col items-center mt-10 p-10 w-[100%] ">
					<div className="bg-gray-200 rounded-lg p-6 lg:w-[60%] w-[45%] pt-60 mt-10 relative flex flex-col items-center  justify-center">
						{/* visa card */}
						<div
							className="bg-[#16181a] rounded-lg max-w-sm w-full p-10 shadow-2xl absolute bottom-60 
                ">
							<button
								className="absolute right-4 top-4 w-12 h-12 bg-[#1abc9c] rounded-full flex items-center justify-center text-white transition-transform transform active:scale-90"
								onClick={() => notifyPay()}>
								<svg
									className="w-6 h-6 invert"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 11v2h12l-5.5 5.5L11.92 19.92 19.84 12 11.92 4.08 10.5 5.5 16 11H4z"
									/>
								</svg>
							</button>
							<img
								src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png"
								alt="Visa Logo"
								className="w-12 mb-4 mx-auto"
							/>
							<label className="block text-sm text-white opacity-40 mb-1">
								Card number:
							</label>
							<input
								type="text"
								className="w-full bg-transparent border-b border-gray-700 text-gray-200 focus:border-[#1abc9c] outline-none mb-4"
								placeholder="1234 5678 9101 1121"
							/>
							<label className="block text-sm text-white opacity-40 mb-1">
								Name:
							</label>
							<input
								type="text"
								className="w-full bg-transparent border-b border-gray-700 text-gray-200 focus:border-[#1abc9c] outline-none mb-4"
								placeholder="your name"
							/>
							<label className="block text-sm text-white opacity-40 mb-1">
								CCV:
							</label>
							<input
								type="text"
								className="w-1/4 bg-transparent border-b border-gray-700 text-gray-200 focus:border-[#1abc9c] outline-none"
								placeholder="321"
							/>
						</div>{" "}
						{/* visa card end */}
						<div className="grid grid-cols-2 gap-6">
							<button
								onClick={() => setShow(false)}
								className="absolute top-4 right-6 text-black font-bold"
								aria-label="Close modal">
								<i className="fa-solid fa-rectangle-xmark text-xl"></i>
							</button>
							<div>
								<p>Cost:</p>
								<h2 className="text-2xl text-[#3a7bd5]">{price} rs</h2>

								<p className="mt-4">Name:</p>
								<h2 className="text-xl text-[#3a7bd5]">{displayName}</h2>
							</div>
							<div>
								<p>Bought Items:</p>

								<div className="mt-4">
									<h3 className="font-bold">{displayName}</h3>
									<p className="text-sm text-gray-600">{subTitle}</p>
									<p className={`mx-2 text-[${colorPalette.Text.t4}]`}>
										<i className="fa-solid fa-star text-[#FFD700] drop-shadow-2xl"></i>{" "}
										{rating || ""}
									</p>{" "}
								</div>
							</div>
						</div>
						<p className="text-center mt-6"></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
