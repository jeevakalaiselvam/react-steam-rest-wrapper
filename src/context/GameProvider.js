import { useState, useEffect } from "react";
import { getAllGamesFromAPI } from "../actions/apiActions";
import {
  getGamesSortedByCompletion,
  getGamesSortedByPlaytime,
} from "../actions/gameActions";
import { GamesContext } from "./GameContext";

export default function GamesProvider({ children }) {
  return <></>;
}
