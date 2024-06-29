import React, { useEffect, useState } from "react";
import { colorPalette } from "../constant";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchqry } from "../redux/Slices/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [searchTxt, setSearchTxt] = useState("");
  const data = useSelector((store) => store.cart);

  return (
    <div
      className={`z-10 h-20 w-full  rounded-b-xl shadow flex items-center  md:justify-between md:px-6 bg-[${colorPalette.Header}] text-[${colorPalette.Text.t4}] sticky top-0`}
    >
      <div className="hidden md:flex items-center justify-between w-[8%] ">
        <div className="text-xl">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div>
          <Link to="/">
            <i className="fa-solid fa-code text-xl"></i>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex">
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

      <div className="flex items-center justify-between w-full md:w-[44%] lg:w-[32%] px-4 md:px-0">
        <div className="border border-[#D7BEA8] h-10 rounded-md">
          <input
            type="text"
            className=" bg-[#D7BEA8] px-2 w-36 md:w-40 xl:w-44  text-[#744253] h-full md:px-2 rounded-l-md"
            placeholder="Search"
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="h-full px-2 md:px-3 "
            onClick={() => dispatch(searchqry(searchTxt))}
          >
            <i className="fa-solid fa-magnifying-glass "></i>
          </button>
        </div>
        <div className=" flex justify-between w-20 md:w-24">
          <div className="flex justify-center">
            <div className="dropdown dropdown-hover relative  md:left-4">
              <i className="fa-regular fa-user "></i>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-24 absolute right-0 top-6 bg-[#b5875c]"
              >
                <li
                  className={`text-[${colorPalette.Text.t2}] hover:bg-[#B49286] rounded-xl  hover:text-black hover:font-semibold`}
                >
                  <a>Sign In</a>
                </li>
                <li
                  className={`text-[${colorPalette.Text.t2}] hover:bg-[#B49286] rounded-xl   hover:text-black hover:font-semibold`}
                >
                  <a>Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <div className="badge  w-6 h-6 relative bottom-3 left-1   bg-[#B49286] font-bold text-[#744253]">
              {data?.length}
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
