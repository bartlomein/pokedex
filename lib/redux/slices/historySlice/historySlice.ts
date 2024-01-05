/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: HistorySliceState = {
  value: [],
  status: "idle",
};

export const historySlice = createSlice({
  name: "history",
  initialState,

  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
  },
});

/* Types */
export interface HistorySliceState {
  value: string[];
  status: "idle" | "loading" | "failed";
}
