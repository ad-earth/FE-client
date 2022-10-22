import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import paymentReducer from "./reducer/paymentSlice";
import cartSlice from "./reducer/cartSlice";
import userSlice from "./reducer/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  paymentReducer: paymentReducer,
  cartSlice: cartSlice,
  userSlice: userSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userSlice", "cartSlice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
