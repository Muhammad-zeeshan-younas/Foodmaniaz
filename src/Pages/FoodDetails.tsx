import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackSVG from "../SVG/ArrowBackSVG";
import HeartSVG from "../SVG/HeartSVG";
import FilledStarSVG from "../SVG/FilledStarSVG";
import { toast } from "react-toastify";
import { TFoodItem } from "../Types/FoodItems";
import MinusSVG from "../SVG/MinusSVG";
import PlusSVG from "../SVG/PlusSVG";
import { useDispatch, useSelector } from "react-redux";
import { food, updateFoodItem } from "../Redux/reducers/slices/foodSlice";
import { setCart } from "../Redux/reducers/slices/cartSlice";
import HeartFilledSVG from "../SVG/HeartFilledSVG";

type Props = {};

function FoodDetails({}: Props) {
  const { slug } = useParams();
  const foodItems = useSelector(food);
  const [productDetail, setProductDetail] = useState<TFoodItem | undefined>();
  const [numberOfItems, setNumberOfItems] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (slug) {
      const data = foodItems.find((item) => item.id === slug);
      setProductDetail(data);
    }
  }, [slug, foodItems]);

  const incrementNumber = () => {
    setNumberOfItems((prevNumber) => prevNumber + 1);
  };

  const decrementNumber = () => {
    if (numberOfItems < 1) {
      toast.warn("Your quantity is already zero");
      return;
    }
    setNumberOfItems((prevNumber) => prevNumber - 1);
  };

  const addToCart = () => {
    if (productDetail && numberOfItems > 0) {
      try {
        dispatch(setCart({ product: productDetail, quantity: numberOfItems }));
        setNumberOfItems(0);
        toast.success("Congrats Your food has been added to cart.");
        navigate(-1);
      } catch (e) {
        console.error("Error adding to cart:", e);
      }
    } else {
      toast.warning("Add quantity.");
    }
  };

  const handleLike = (foodItem: TFoodItem) => {
    const updatedFoodItem: TFoodItem = {
      ...foodItem,
      isLiked: !foodItem.isLiked,
    };
    dispatch(updateFoodItem(updatedFoodItem));
  };
  if (productDetail) {
    return (
      <div className="grid gap-12 h-screen bg-[#f0f4fc] max-w-2xl relative mx-auto">
        <div className="food-detail pt-10 px-6 bg-white rounded-b-[30px] pb-8 h-max">
          <div className="flex justify-between mb-3">
            <button
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowBackSVG />
            </button>
            <button
              onClick={(event) => {
                event.stopPropagation();
                handleLike(productDetail);
              }}
            >
              {productDetail.isLiked ? <HeartFilledSVG /> : <HeartSVG />}
            </button>
          </div>
          <div className="px-1">
            <h3 className="text-[1.5625rem] font-semibold">
              {productDetail.name}
            </h3>
            <p className="text-[1.125rem] text-[#a1a1a1]">
              {productDetail.Resturatnt}
            </p>

            <div className="flex gap-2 pt-1">
              <FilledStarSVG /> <span> {productDetail.Rating}</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className=" flex flex-col items-center gap-1">
                <button onClick={incrementNumber}>
                  <PlusSVG />
                </button>
                <p className="font-bold text-[1.875rem]">{numberOfItems}</p>
                <button onClick={decrementNumber}>
                  <MinusSVG />
                </button>
              </div>
              <img
                src={productDetail.image}
                className="justify-cover rounded-2xl"
              />
            </div>
            <h4 className="font-semibold text-lg mt-4">Description</h4>
            <p className="text-base text-[#a1a1a1]">
              {productDetail.description}
            </p>
          </div>
        </div>
        <div className="absolute flex right-0 left-0 bottom-4 px-4 justify-between">
          <div>
            <p>Price</p>
            <p className="text-[1.875rem] leading-[36.31px]">
              {productDetail.price} <span className="text-[#E74C1B]"> $</span>
            </p>
          </div>
          <button
            onClick={addToCart}
            className="text-[1.5625rem] rounded-[50px] w-max bg-[#E74C1B] text-white button-padding font-normal"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default FoodDetails;
