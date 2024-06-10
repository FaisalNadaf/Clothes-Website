import { colorPalette } from "../constant";
import Button from "./Button";

const ShimmerUi = () => {
  return <div className="flex flex-wrap justify-center py-10">{Array(10)
    .fill("")
    .map(() => {
      return (
        <div
          className={`animate-pulse w-72 h-[400px] rounded-xl bg-[#eeeeee] mx-4 my-2  `}
        >
          <figure className="h-[55%] bg-cover relative "></figure>
          <div
            className={`animate-pulse rounded-xl bg-[#e3e2e2] shadow-2xl h-[45%] py-2 px-2  `}
          ></div>
        </div>
      );
    })}</div>
};

export default ShimmerUi;
