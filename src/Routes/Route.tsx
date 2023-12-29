import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import FoodDetails from "../Pages/FoodDetails";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Ending from "../Pages/Ending";
type Props = {};

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product-details/:slug" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thank-you" element={<Ending />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
