import { combineReducers } from "redux";
import foodSlice from "./slices/foodSlice";
import cartSlice from "./slices/cartSlice";

interface RootState {
  food: ReturnType<typeof foodSlice>;

  cart: ReturnType<typeof cartSlice>;
}

const rootReducer = combineReducers({
  food: foodSlice,
  cart: cartSlice,
});

export default rootReducer;

export type { RootState };
