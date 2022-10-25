import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import payUserSlice from "./reducer/payUserSlice";
import payPdtSlice from "./reducer/payPdtSlice";
import payErrorSlice from "./reducer/payErrorSlice";
import cartSlice from "./reducer/cartSlice";
import userSlice from "./reducer/userSlice";
import optionSlice from "./reducer/optionSlice";
import errorSlice from "./reducer/errorSlice";

const rootReducer = combineReducers({
  payUserSlice: payUserSlice,
  payPdtSlice: payPdtSlice,
  payErrorSlice: payErrorSlice,
  cartSlice: cartSlice,
  userSlice: userSlice,
  optionSlice: optionSlice,
  errorSlice: errorSlice,
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
