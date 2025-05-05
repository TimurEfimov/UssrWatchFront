import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import watch from "./watches/slice";

export const store = configureStore({
  reducer: {
    watch,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
