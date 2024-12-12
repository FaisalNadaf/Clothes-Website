/** @format */

import React, { useState } from "react";
import CheckOut from "./CheckOut";
import { toast } from "react-toastify";

const Total = ({ total, setHide }) => {
	const calculateDiscount = (amount) => {
		return (amount * 0.1).toFixed(2);
	};

	const delivery = (total / 40).toFixed(2);
	const discountAmt = calculateDiscount(total);
	const subtotal = (
		total +
		parseFloat(delivery) -
		parseFloat(discountAmt)
	).toFixed(2);

	const notifyPay = () => toast("Processing Payment⌛");

	return (
		<div className="w-72 h-80 border border-gray-300 rounded-lg p-4 bg-white shadow-md font-sans">
			<div className="mb-4">
				<div className="flex justify-between text-sm text-gray-700 mb-2">
					<span>Total</span>
					<span>{total.toFixed(2)}</span>
				</div>
				<div className="flex justify-between text-sm text-gray-700 mb-2">
					<span>Delivery</span>
					<span>+{delivery}</span>
				</div>
				<div className="flex justify-between text-sm text-gray-700 mb-2">
					<span>Discount</span>
					<span>-{discountAmt}</span>
				</div>
				<div className="flex justify-between font-bold text-gray-800 text-base border-t border-gray-300 pt-2 mt-2">
					<span>Subtotal</span>
					<span>{subtotal}</span>
				</div>
			</div>
			<button
				onClick={() => notifyPay()}
				className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
				Checkout
			</button>
			<div className="mt-4 text-center text-xs text-gray-500">
				<span>We Accept:</span>
				<div className="flex justify-center mt-2 space-x-6">
					<img
						src="src/assets/images/paypal.webp"
						alt="PayPal"
						className="w-10"
					/>
					<img
						src="src/assets/images/visa.png"
						alt="Visa"
						className="w-10"
					/>
					<img
						src="src/assets/images/mastercardpng.png"
						alt="MasterCard"
						className="w-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default Total;
