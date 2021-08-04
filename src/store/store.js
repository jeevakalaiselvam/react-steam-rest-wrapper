import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../slice/userSlice";

export default configureStore({
  reducer: {
    games: gamesReducer,
  },
});
