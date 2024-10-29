/** @format */

import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { colorPalette } from "./constant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
	return (
		<div
			className={`bg-gradient-to-r transition	ease-in-out	delay-75 duration-1000  from-indigo-500 via-purple-500 to-gray-400 min-h-screen relative`}>
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route
							path="/"
							element={<Body />}
						/>
						<Route
							path="/cart"
							element={<Cart />}
						/>
					</Routes>

					<div className="mt-4 text-[#6c5850] text-sm w-full flex items-center justify-center absolute bottom-0">
						<Footer />
					</div>
				</BrowserRouter>
			</Provider>
		</div>
	);
};

export default App;
