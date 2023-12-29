import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { TFoodItem } from "../../../Types/FoodItems";
import { TCartItemType } from "../../../Types/CartItem";

const initialState: TCartItemType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (
      state,
      action: PayloadAction<{
        product: TFoodItem;
        quantity: number;
      }>
    ) => {
      const { product, quantity } = action.payload;

      const existingItemIndex = state.findIndex(
        (item) => item.item.id === product.id
      );

      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += quantity;
        state[existingItemIndex].totalPrice =
          state[existingItemIndex].item.price *
          state[existingItemIndex].quantity;
      } else {
        state.push({
          item: {
            ...product,
          },
          quantity,
          image: "", // Set the actual image value here
          totalPrice: product.price * quantity,
        });
      }

      // Update the total quantity and price
      const totalQuantity = state.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalPrice = state.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

      state.forEach((item) => {
        item.image = ""; // Set the actual image value here
      });

      // Update the state
      state.forEach((item) => {
        item.quantity = totalQuantity;
        item.totalPrice = totalPrice;
      });
    },
    clearCart: (state) => {
      // Clear the cart by setting it to an empty array
      return [];
    },
  },
});

export const { setCart, clearCart } = cartSlice.actions;
export const cart = (state: RootState) => state.cart;
export default cartSlice.reducer;
