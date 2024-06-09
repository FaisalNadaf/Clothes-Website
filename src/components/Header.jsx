import React from "react";
import { colorPalette } from "../constant";

const Header = () => {
  return (
    <div
      className={`z-10 h-20 w-full  rounded-b-xl shadow flex items-center justify-between px-6 bg-[${colorPalette.Header}] text-[${colorPalette.Text.t4}] sticky top-0`}
    >
      <div className="flex items-center justify-between w-[8%]">
        <div className="text-xl">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div>
          <i className="fa-solid fa-code text-xl"></i>
        </div>
      </div>

      <div>
        <ul className="flex">
          <li className="px-4 text-lg hover:text-[white] font-medium">Men</li>
          <li className="px-4 text-lg hover:text-[white] font-medium">Women</li>
          <li className="px-4 text-lg hover:text-[white] font-medium">Kids</li>
          <li className="px-4 text-lg hover:text-[white] font-medium">New</li>
          <li className="px-4 text-lg hover:text-[white] font-medium">Sports</li>
        </ul>
      </div>

      <div className="flex items-center justify-between w-[22%]">
        <div className="border border-[#D7BEA8] h-10 rounded-md">
          <input
            type="text"
            className=" bg-[#D7BEA8]  text-[#744253] h-full px-2 rounded-l-md"
            placeholder="Search"
          />
          <button className="h-full px-3">
            <i className="fa-solid fa-magnifying-glass "></i>
          </button>
        </div>
        <div>
          <i className="fa-regular fa-user"></i>
        </div>
        <div>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
