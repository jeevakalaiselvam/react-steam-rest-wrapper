import axios from "axios";
import { storeHeadInfoLocalStorage } from "../helper/storage";

export const fetchGames = async () => {
  let games = [];
  games = (await axios.get(`${process.env.REACT_APP_API_ENDPOINT}games`)).data;

  console.log("AXIOS GAMES PAGE INFO -> ", games);
  return games;
};

export const fetchGamesInfo = async () => {
  let gamesInfo = {};
  gamesInfo = (
    await axios.get(`${process.env.REACT_APP_API_ENDPOINT}games/info`)
  ).data;

  //Store data in local storage
  console.log("AXIOS GET GAME INFO -> ", gamesInfo);
  storeHeadInfoLocalStorage(gamesInfo);

  return gamesInfo;
};
