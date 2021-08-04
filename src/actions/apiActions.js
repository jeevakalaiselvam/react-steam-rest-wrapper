import axios from "axios";

export const getAllGamesFromAPI = async (cache = true) => {
  let games = [];
  if (localStorage.getItem("gameData") && cache) {
    games = JSON.parse(localStorage.getItem("gameData"));
    console.log("GAMES FROM LOCAL STORAGE -> ", games);
  } else {
    games = await (
      await axios.get(process.env.REACT_APP_API_ALL_GAMES)
    ).data.games;
    console.log("GAMES FROM API -> ", games);
    localStorage.setItem("gameData", JSON.stringify(games));
  }
  return games;
};
