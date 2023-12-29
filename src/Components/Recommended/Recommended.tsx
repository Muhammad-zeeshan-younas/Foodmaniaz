import React, { useEffect, useState } from "react";
import SmallHeartSVG from "../../SVG/SmallHeartSVG";
import SmallHeartFilledSVG from "../../SVG/SmallHeartFilledSVG";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { food, updateFoodItem } from "../../Redux/reducers/slices/foodSlice";
import { TFoodItem } from "../../Types/FoodItems";

type Props = {};

function Recommended({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const foodItems: TFoodItem[] = useSelector(food);

  const handleLike = (foodItem: TFoodItem) => {
    const updatedFoodItem: TFoodItem = {
      ...foodItem,
      isLiked: !foodItem.isLiked,
    };
    dispatch(updateFoodItem(updatedFoodItem));
  };

  const handleNavigationToProductDetails = (productId: string) => {
    navigate(`/product-details/${productId}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2 mt-6">
        <h3 className="text-black text-[1rem] leading-normal font-medium lg:text-xl">
          Recommended Items
        </h3>
        <p className="text-[#E74C1B] text-[1rem] leading-normal font-medium lg:text-xl">
          Filter
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {foodItems.map((food, index) => {
          return (
            <div
              className="card grid col-span-1 bg-white cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={() => handleNavigationToProductDetails(food.id)}
              key={`food-${index}`}
            >
              <img
                src={food.image}
                className="w-full h-[172px] object-cover rounded-xl"
              />
              <div className="py-2 px-3">
                <h3 className="font-medium text-sm lg:text-base cursor-text">
                  {food.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm lg:text-base cursor-text">
                    <span className="text-[#E74C1B]">$</span>
                    {food.price}
                  </p>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleLike(food);
                    }}
                  >
                    {food.isLiked ? <SmallHeartFilledSVG /> : <SmallHeartSVG />}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommended;
