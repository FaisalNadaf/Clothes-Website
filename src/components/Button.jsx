import React from "react";
import { colorPalette } from "../constant";

const Button = ({text}) => {
  return (
    <button
      className={`btn btn-primary hover:bg-[#b37576] border-none bg-[${colorPalette.Button}]`}
    >
      {text}
    </button>
  );
};

export default Button;
