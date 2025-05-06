import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import watches from "./watches/slice";
import filters from "./filters/slice";

export const store = configureStore({
  reducer: {
    watches,
    filters,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
