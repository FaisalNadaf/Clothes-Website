/** @format */

import React, { useEffect, useState } from "react";
import Card from "./Card";
import ShimmerUi from "./ShimmerUi";
import { useSelector } from "react-redux";
import { GET_SHOES_DATA } from "../constant";

const CardCointainer = () => {
	const [data, setData] = useState([]);
	const [searchFilteredData, setSearchFilteredData] = useState([]);

	const Api = useSelector((store) => store.api);
	const search = useSelector((store) => store.search);

	const fetchData = async () => {
		try {
			const response = await fetch(Api);
			// const response = await fetch(GET_SHOES_DATA);

			if (!response.ok) throw new Error("Failed to fetch data");
			const jsonData = await response.json();
			const mainData = jsonData.raw.itemList.items;
			setData(mainData);
			setSearchFilteredData(mainData);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [Api]);

	const filteredData = (search, data) => {
		return data?.filter((item) =>
			item.displayName.toLowerCase().includes(search.toLowerCase()),
		);
	};

	useEffect(() => {
		setSearchFilteredData(filteredData(search, data));
	}, [search, data]);

	return !searchFilteredData ? (
		<ShimmerUi />
	) : (
		<div className="flex min-h-full flex-wrap items-center justify-center p-4">
			{searchFilteredData.map((item) => (
				<Card
					key={item.productId}
					{...item}
				/>
			))}
		</div>
	);
};

export default CardCointainer;
