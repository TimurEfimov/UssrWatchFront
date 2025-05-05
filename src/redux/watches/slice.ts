import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWatches } from "./api";
import { Watch, Status, WatchSliceState } from "./types";

const initialState: WatchSliceState = {
  items: [],
  status: Status.LOADING,
};

const watchSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Watch[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWatches.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchWatches.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchWatches.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = watchSlice.actions;

export default watchSlice.reducer;
