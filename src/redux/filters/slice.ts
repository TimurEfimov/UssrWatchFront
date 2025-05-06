import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilters } from "./api";
import { Status } from "../../types/status";
import { Filters, FiltersSliceState } from "./types";
import { DEFAULT_FILTERS } from "./consts";

const initialState: FiltersSliceState = {
  filters: DEFAULT_FILTERS,
  status: Status.LOADING,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Filters>) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilters.pending, (state) => {
      state.status = Status.LOADING;
      state.filters = DEFAULT_FILTERS;
    });
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.filters = action.payload;
    });
    builder.addCase(fetchFilters.rejected, (state) => {
      state.status = Status.ERROR;
      state.filters = DEFAULT_FILTERS;
    });
  },
});

export const { setFilters } = filterSlice.actions;

export default filterSlice.reducer;
