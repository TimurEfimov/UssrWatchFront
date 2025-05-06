import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Filters } from "./types";

export const fetchFilters = createAsyncThunk<Filters>(
  "watch/fetchWatchesStatus",
  async () => {
    const { data } = await axios.get<Filters>(`http://127.0.0.1:8000/api/seed`);

    return data;
  }
);
