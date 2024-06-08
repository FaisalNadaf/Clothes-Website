import React from "react";
import { colorPalette } from "../constant";

const Header = () => {
  return (
    <div
      className={`h-20 w-full  border border-gray-300 rounded-b-xl shadow flex items-center justify-between px-6 bg-[${colorPalette.Header}]`}
    >
      <div className="flex items-center justify-between w-[8%]">
        <div>menu </div>
        <div>logo</div>
      </div>
      <div>search</div>
      <div>profile</div>
    </div>
  );
};

export default Header;
