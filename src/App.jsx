import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { colorPalette } from "./constant";

const App = () => {
  return (
    <div
      className={`bg-[${colorPalette.Background}] h-full  `}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
