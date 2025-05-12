import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilters } from "./api";
import { Status } from "../../types/status";
import { FiltersSliceState, Obj } from "./types";
import { DEFAULT_FILTERS } from "./consts";

const initialState: FiltersSliceState = {
  filters: DEFAULT_FILTERS,
  status: Status.LOADING,
  factory: [],
  brand: [],
  case_material: [],
  function: [],
  mechanism_type: [],
  gender: "",
};

const toggleFilterItem = <T extends Obj>(array: T[], item: T): T[] => {
  const exists = array.some((i) => i.id === item.id);
  return exists ? array.filter((i) => i.id !== item.id) : [...array, item];
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleFilter: (
      state,
      action: PayloadAction<{ key: keyof FiltersSliceState; item: Obj }>
    ) => {
      const { key, item } = action.payload;

      if (Array.isArray(state[key])) {
        state[key] = toggleFilterItem(state[key] as Obj[], item) as any;
      }
    },

    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload === state.gender ? "" : action.payload;
    },

    resetFilters: (state) => {
      state.factory = [];
      state.brand = [];
      state.case_material = [];
      state.function = [];
      state.mechanism_type = [];
      state.gender = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.status = Status.LOADING;
        state.filters = DEFAULT_FILTERS;
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.filters = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.status = Status.ERROR;
        state.filters = DEFAULT_FILTERS;
      });
  },
});

export const { toggleFilter, setGender, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
