import axios from "axios";

export const getAllGamesFromAPI = async () => {
  let games = [];
  if (localStorage.getItem("gameData")) {
    games = JSON.parse(localStorage.getItem("gameData")).games;
    console.log("GAMES FROM LOCAL STORAGE -> ", games);
    return games;
  } else {
    games = (await axios.get(process.env.REACT_APP_API_ALL_GAMES)).games;
    console.log("GAMES FROM API -> ", games);
    localStorage.setItem("gameData", JSON.stringify(games));
    return games;
  }
};
