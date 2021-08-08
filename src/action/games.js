import axios from "axios";

export const fetchGames = async () => {
  let games = [];
  games = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}games`);

  return games;
};
