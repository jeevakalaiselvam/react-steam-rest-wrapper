import { createContext } from "react";
import { useState, useEffect } from "react";
import { getAllGamesFromAPI } from "../actions/apiActions";

export const GamesContext = createContext([
  {
    name: "Jeeva Game Test",
  },
]);
