import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilters } from "./api";
import { Status } from "../../types/status";
import { FiltersSliceState, Obj } from "./types";
import { DEFAULT_FILTERS } from "./consts";

const initialState: FiltersSliceState = {
  filters: DEFAULT_FILTERS,
  status: Status.LOADING,
  factories: [],
  brands: [],
  materials: [],
  winding: [],
  mechanisms: [],
  gender: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFactories(state, action: PayloadAction<Obj>) {
      const exists = state.factories.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.factories = [...state.factories, action.payload];
      } else {
        state.factories = state.factories.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    setBrands(state, action: PayloadAction<Obj>) {
      const exists = state.brands.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.brands = [...state.brands, action.payload];
      } else {
        state.brands = state.brands.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    setMaterials(state, action: PayloadAction<Obj>) {
      const exists = state.materials.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.materials = [...state.materials, action.payload];
      } else {
        state.materials = state.materials.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    setWinding(state, action: PayloadAction<Obj>) {
      const exists = state.winding.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.winding = [...state.winding, action.payload];
      } else {
        state.winding = state.winding.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    setMechanisms(state, action: PayloadAction<Obj>) {
      const exists = state.mechanisms.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.mechanisms = [...state.mechanisms, action.payload];
      } else {
        state.mechanisms = state.mechanisms.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
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

export const {
  setFactories,
  setBrands,
  setGender,
  setMaterials,
  setMechanisms,
  setWinding,
} = filterSlice.actions;

export default filterSlice.reducer;
