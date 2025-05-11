import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Watch, SearchWatchParams } from "./types";

export const fetchWatches = createAsyncThunk<Watch[], SearchWatchParams>(
  "watch/fetchWatchStatus",
  async (params) => {
    const { sortBy } = params;
    console.log(params);
    const { data } = await axios.post<Watch[]>(
      `http://127.0.0.1:8000/api/watch?sort=дата публикации ↑`
    );

    return data;
  }
);
