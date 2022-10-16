import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./reducer/paymentSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    paymentReducer: paymentReducer,
    // 리듀서가 더 생기면 여기에 추가만 해주면 됨.
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
