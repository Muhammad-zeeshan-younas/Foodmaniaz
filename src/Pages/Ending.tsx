import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackSVG from "../SVG/ArrowBackSVG";
import { clearCart } from "../Redux/reducers/slices/cartSlice";
import { useDispatch } from "react-redux";

type Props = {};

function Ending({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="pt-10 px-6 max-w-2xl lg:mx-auto relative h-screen">
      <div className="flex items-center mb-3">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackSVG />
        </button>
      </div>
      <div className="flex gap-7 lg:gap-7 items-center flex-col">
        <p className="text-[1.5625rem] font-semibold pb-6 text-center px-3 pt-4">
          "Congratulations! Your Order Has Been Placed!"
        </p>
        <img src="/images/rider.png" />
        <p className="text-[#a1a1a1] text-base text-center">
          Thank you for choosing our services! Your order has been successfully
          placed and is now being processed. We appreciate your trust in us and
          look forward to serving you.
        </p>
      </div>
      <div className="absolute flex right-0 left-0 bottom-4 items-center justify-center">
        <button
          onClick={() => {
            dispatch(clearCart());
            navigate("/");
          }}
          className="text-[1.5625rem] rounded-[50px] w-max bg-[#E74C1B] text-white font-normal button-padding"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}

export default Ending;
