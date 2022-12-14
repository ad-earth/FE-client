import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import payUserSlice from "./reducer/payUserSlice";
import payPdtSlice from "./reducer/payPdtSlice";
import cartSlice from "./reducer/cartSlice";
import userSlice from "./reducer/userSlice";
import optionSlice from "./reducer/optionSlice";
import detailSlice from "./reducer/detailSlice";
import payCheckSlice from "./reducer/payCheckSlice";
import reviewSlice from "./reducer/reviewSlice";
import listSlice from "./reducer/listSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userSlice", "cartSlice"],
};

const rootReducer = combineReducers({
  payUserSlice: payUserSlice,
  payPdtSlice: payPdtSlice,
  payCheckSlice: payCheckSlice,
  cartSlice: cartSlice,
  userSlice: userSlice,
  optionSlice: optionSlice,
  detailSlice: detailSlice,
  reviewSlice: reviewSlice,
  listSlice: listSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
