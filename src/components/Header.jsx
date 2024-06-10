import React, { useEffect, useState } from "react";
import { colorPalette } from "../constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchqry } from "../redux/Slices/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  

  return (
    <div
      className={`z-10 h-20 w-full  rounded-b-xl shadow flex items-center justify-between px-6 bg-[${colorPalette.Header}] text-[${colorPalette.Text.t4}] sticky top-0`}
    >
      <div className="flex items-center justify-between w-[8%]">
        <div className="text-xl">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div>
          <Link to="/">
            <i className="fa-solid fa-code text-xl"></i>
          </Link>
        </div>
      </div>

      <div>
        <ul className="flex">
          <li className="px-4 text-lg hover:text-[white] font-medium">Men</li>
          <li className="px-4 text-lg hover:text-[white] font-medium">Women</li>
          <li className="px-4 text-lg hover:text-[white] font-medium">Kids</li>
          <li className="px-4 text-lg hover:text-[white] font-medium">New</li>
          <li className="px-4 text-lg hover:text-[white] font-medium">
            Sports
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-between w-[26%]">
        <div className="border border-[#D7BEA8] h-10 rounded-md">
          <input
            type="text"
            className=" bg-[#D7BEA8]  text-[#744253] h-full px-2 rounded-l-md"
            placeholder="Search"
            onChange={(e) => {
              dispatch(searchqry(e.target.value));
            }}
          />
          <button className="h-full px-3 ">
            <i className="fa-solid fa-magnifying-glass "></i>
          </button>
        </div>
        <div>
          <div className="dropdown dropdown-hover relative ">
            <i className="fa-regular fa-user w-14"></i>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-24 absolute right-0 top-10 bg-[#D7BEA8]"
            >
              <li className={`text-[${colorPalette.Text.t2}]`}>
                <a>Sign In</a>
              </li>
              <li className={`text-[${colorPalette.Text.t2}]`}>
                <a>Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
