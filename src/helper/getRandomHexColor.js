/** @format */

// Function to generate a random hex color
const getRandomHexColor = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return `#${randomColor.padStart(6, "0")}`; // Ensures the color is always 6 digits
};

// Function to create an array of random colors
const createRandomColorArray = (numColors) => {
	const colorArray = [];
	for (let i = 0; i < numColors; i++) {
		colorArray.push(getRandomHexColor());
	}
	return colorArray;
};

// Generate an array of 100 random colors
const randomColors = createRandomColorArray(100);

// Function to get a random color from the array
export const getRandomColor = () => {
	const randomIndex = Math.floor(Math.random() * randomColors.length);
	return randomColors[randomIndex];
};


