import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackSVG from "../SVG/ArrowBackSVG";
import { useSelector } from "react-redux";
import { cart } from "../Redux/reducers/slices/cartSlice";

type Props = {};

function Cart({}: Props) {
  const navigate = useNavigate();
  const cartItems = useSelector(cart);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }, [cartItems]);

  return (
    <div className="pt-10 px-6 pb-20 max-w-2xl lg:mx-auto relative h-screen">
      <div className="flex items-center mb-6">
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
      {cartItems.length === 0 && (
        <p className="w-full text-center text-2xl font-semibold shadow-sm rounded-md bg-white py-2">
          Your cart is empty
        </p>
      )}
      {cartItems.length > 0 && (
        <>
          <div className="grid gap-2 overflow-y-auto">
            {cartItems.map((item) => {
              return (
                <div className="cart-shadow flex px-4 py-2 rounded-lg bg-white">
                  <img
                    src={item.item.image}
                    className="w-[91px] h-[91px] rounded-xl"
                  />
                  <div className="pl-4 flex flex-col flex-grow">
                    <p className="pt-2 text-sm font-normal mb-2 flex flex-grow lg:text-xl">
                      {item.item.name}
                    </p>
                    <div className="flex justify-between items-end">
                      <p className="text-[#a1a1a1]">Quantity {item.quantity}</p>
                      <p>
                        <span className="text-[#E74C1B]">$</span>
                        {(item.item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute flex right-0 left-0 bottom-4 px-4 justify-between">
            <div>
              <p>Total</p>
              <p className="text-[1.875rem] leading-[36.31px]">
                {totalPrice.toFixed(2)}
                <span className="text-[#E74C1B]"> $</span>
              </p>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="text-[1.5625rem] rounded-[50px] w-max bg-[#E74C1B] text-white px-6 font-normal"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
