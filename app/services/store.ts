import { createSlice, configureStore } from "@reduxjs/toolkit";

const SaveFlights = createSlice({
  name: "SaveFlights",
  initialState: {
    value: [],
  },
  reducers: {
    save: (state: any, actions: any) => {
      state.value = actions.payload;
    },
  },
});

export const { save } = SaveFlights.actions;

export const store = configureStore({
  reducer: SaveFlights.reducer,
});