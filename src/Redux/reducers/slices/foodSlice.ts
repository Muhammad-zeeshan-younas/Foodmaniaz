import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { TFoodItem } from "../../../Types/FoodItems";
import { FoodCourt } from "../../../DummyData";

const initialState: TFoodItem[] = FoodCourt;

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFoodItems: (state, action: PayloadAction<TFoodItem[]>) => {
      return action.payload;
    },
    updateFoodItem: (state, action: PayloadAction<TFoodItem>) => {
      // Update a specific food item
      const updatedIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedIndex !== -1) {
        state[updatedIndex] = action.payload;
      }
    },
  },
});

export const { setFoodItems, updateFoodItem } = foodSlice.actions;
export const food = (state: RootState) => state.food;
export default foodSlice.reducer;
