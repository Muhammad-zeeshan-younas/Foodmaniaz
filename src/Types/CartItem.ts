import { TFoodItem } from "./FoodItems";

export type TCartItemType = {
  item: TFoodItem;
  image: string;
  quantity: number;
  totalPrice: number;
};
