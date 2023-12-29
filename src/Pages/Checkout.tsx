import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackSVG from "../SVG/ArrowBackSVG";
import { useSelector } from "react-redux";
import { cart } from "../Redux/reducers/slices/cartSlice";

type Props = {};

function Checkout({}: Props) {
  const navigate = useNavigate();
  const cartItems = useSelector(cart);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }, [cartItems]);
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
        <p className="text-[1.5625rem] font-semibold ml-16">My Bucket</p>
        <p></p>
      </div>
      <h2 className="text-[1.5625rem] font-semibold pt-2 pb-6">Payments</h2>
      <div className="checkout-shadow bg-white rounded-xl px-6 py-6">
        <div className="flex items-center border-b-[1px] border-[#a1a1a1] pb-3">
          <div className="flex flex-grow items-center gap-4">
            <img src="/images/Rectangle 52.png" alt="Card" />
            <p>Debit/Credit card</p>
          </div>
          <input
            type="radio"
            name="checkout"
            className="appearance-none w-6 h-6 border border-black rounded-full checked:bg-black checked:border-transparent p-2 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="flex items-center border-b-[1px] border-[#a1a1a1] py-4">
          <div className="flex flex-grow items-center gap-4">
            <img src="/images/Rectangle 53.png" alt="Paypal" />
            <p>Paypal</p>
          </div>
          <input
            type="radio"
            name="checkout"
            checked
            className="appearance-none w-6 h-6 border border-black rounded-full checked:bg-black checked:border-transparent p-2 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="flex items-center pt-2">
          <div className="flex flex-grow items-center gap-4">
            <img src="/images/Rectangle 54.png" alt="Payoneer" />
            <p>Payoneer</p>
          </div>
          <input
            name="checkout"
            type="radio"
            className="appearance-none w-6 h-6 border border-black rounded-full checked:bg-black checked:border-transparent p-2 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>
      <div className="mt-[1.5rem] grid gap-6">
        <h3 className="text-[1.5625rem] font-semibold">Delivery Details</h3>
        <div className="text-base text-[#a1a1a1]">
          <p>789 Maple Street, Los Angeles,</p>
          <p> CA 90001 </p>
          <p>(888) 987-6543</p>
        </div>
        <h3 className="text-[1.5625rem] font-semibold">Delivery Details</h3>
        <div className="flex gap-7">
          <p className="flex flex-col text-base text-[#a1a1a1]">
            <span>1x Green salad</span>
            <span>1x fresh vegetable</span>
            <span>1x Mixed salad</span>
          </p>
          <p className="flex flex-col text-base text-[#a1a1a1]">
            <span>1x Green salad</span>
            <span>1x fresh vegetable</span>
            <span>1x Mixed salad</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-8 pb-4">
        <div>
          <p>Total</p>
          <p className="text-[1.875rem] leading-[36.31px]">
            {totalPrice.toFixed(2)}
            <span className="text-[#E74C1B]"> $</span>
          </p>
        </div>
        <button
          onClick={() => navigate("/thank-you")}
          className="text-[1.5625rem] rounded-[50px] w-max bg-[#E74C1B] text-white button-padding font-normal"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Checkout;
