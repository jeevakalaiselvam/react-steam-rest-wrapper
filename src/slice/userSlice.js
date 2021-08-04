import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    games: [],
  },
  reducers: {
    addGames: (state, action) => {
      state.games = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGames } = userSlice.actions;

export default userSlice.reducer;
