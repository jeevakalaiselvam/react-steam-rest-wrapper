import axios from "axios";
import { storeHeadInfoLocalStorage } from "../helper/storage";

export const fetchGames = async (sortOrder, viewOrder, gamesPage) => {
  let games = [];
  switch (sortOrder) {
    case 0:
      games = (
        await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}games?sort=completion&page=${gamesPage}`
        )
      ).data;
      break;
    case 1:
      games = (
        await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}games?sort=playtime&page=${gamesPage}`
        )
      ).data;
      break;
    case 2:
      games = (
        await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}games?sort=name&order=az&page=${gamesPage}`
        )
      ).data;
      break;
    case 3:
      games = (
        await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}games?sort=name&order=za&page=${gamesPage}`
        )
      ).data;
      break;
    default:
      games = (
        await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}games?sort=completion`
        )
      ).data;
      break;
  }

  return games;
};

export const fetchGamesInfo = async () => {
  let gamesInfo = {};
  gamesInfo = (
    await axios.get(`${process.env.REACT_APP_API_ENDPOINT}games/info`)
  ).data;

  //Store data in local storage
  storeHeadInfoLocalStorage(gamesInfo);

  return gamesInfo;
};

export const fetchOverlayImages = async (
  gamesCount = 10,
  perfectGamesCount = 10,
  achievementCount = 20
) => {
  const allImages = (
    await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}overlay?perfectgames=${perfectGamesCount}&games=${gamesCount}&achievements=${achievementCount}`
    )
  ).data;
  return allImages;
};
