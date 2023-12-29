import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import HandWaveSVG from "../SVG/HandWaveSVG";
import SearchSVG from "../SVG/SearchSVG";
import Categories from "../Components/Categories/Categories";
import Recommended from "../Components/Recommended/Recommended";
import { useSelector } from "react-redux";
import { cart } from "../Redux/reducers/slices/cartSlice";

type Props = {};

function Dashboard({}: Props) {
  const cartItems = useSelector(cart);
  console.log(cartItems);
  return (
    <div className="mx-5 flex flex-col gap-4 mb-16 max-w-2xl lg:mx-auto">
      <div>
        <div className="mt-7 flex items-center justify-between">
          <h2 className="flex text-2xl lg:text-4xl font-[600] gap-2">
            Hey Danyal
            <span>
              <HandWaveSVG />
            </span>
          </h2>
          <SearchSVG />
        </div>
        <p className="text-sm lg:text-base font-[400]">It’s dinner time!</p>
      </div>
      <Categories />
      <Recommended />
      <Navbar />
    </div>
  );
}

export default Dashboard;
