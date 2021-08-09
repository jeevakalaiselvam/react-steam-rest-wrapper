import axios from "axios";
import {
  addToLocalStorage,
  PAGINATION_TOTAL_COUNT,
  storeHeadInfoLocalStorage,
} from "../helper/storage";
import {
  includePageQuery,
  includeSelectQueryAchievements,
  includeSelectQueryGames,
  includeSortQueryAchievements,
  includeSortQueryGames,
} from "../helper/queryHelper";

export const fetchGames = async (
  sortOrder,
  viewOrder,
  gamesPage,
  selectOrder
) => {
  let games = [];
  let gamesResponse = {};

  const mainURL = `${process.env.REACT_APP_API_ENDPOINT}games?`;
  const selectedAddedURL = includeSelectQueryGames(mainURL, selectOrder);
  const sortAddedURL = includeSortQueryGames(selectedAddedURL, sortOrder);
  const pageAddedURL = includePageQuery(sortAddedURL, gamesPage);
  gamesResponse = (await axios.get(pageAddedURL)).data;
  addToLocalStorage(PAGINATION_TOTAL_COUNT, gamesResponse.total);
  return gamesResponse.games ?? {};
};

export const fetchAchievements = async (
  sortOrder,
  viewOrder,
  achievementPage,
  selectOrder
) => {
  let achievementsResponse = {};

  const mainURL = `${process.env.REACT_APP_API_ENDPOINT}achievements?`;
  const selectedAddedURL = includeSelectQueryAchievements(mainURL, selectOrder);
  const sortAddedURL = includeSortQueryAchievements(
    selectedAddedURL,
    sortOrder
  );
  const pageAddedURL = includePageQuery(sortAddedURL, achievementPage);
  achievementsResponse = (await axios.get(pageAddedURL)).data;
  addToLocalStorage(PAGINATION_TOTAL_COUNT, achievementsResponse.total);
  return achievementsResponse.achievements ?? {};
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
