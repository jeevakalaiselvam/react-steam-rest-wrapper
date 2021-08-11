import axios from "axios";
import {
  addToLocalStorage,
  COMPLETION_TARGET,
  PAGINATION_TOTAL_COUNT,
  storeHeadInfoLocalStorage,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";
import {
  includePageQuery,
  includeSelectQueryAchievements,
  includeSelectQueryAchievementsForGame,
  includeSelectQueryGames,
  includeSortQueryAchievements,
  includeSortQueryAchievementsForGame,
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
  _STORAGE_WRITE(PAGINATION_TOTAL_COUNT, gamesResponse.total);
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
  _STORAGE_WRITE(PAGINATION_TOTAL_COUNT, achievementsResponse.total);
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

export const fetchAchievementsBacklog = async (
  sortOrder,
  viewOrder,
  achievementPage,
  selectOrder = 2
) => {
  let achievementsResponse = {};

  const mainURL = `${process.env.REACT_APP_API_ENDPOINT}backlog?`;
  const selectedAddedURL = includeSelectQueryAchievements(mainURL, selectOrder);
  const sortAddedURL = includeSortQueryAchievements(
    selectedAddedURL,
    sortOrder
  );
  const pageAddedURL = includePageQuery(sortAddedURL, achievementPage);
  achievementsResponse = (await axios.get(pageAddedURL)).data;
  _STORAGE_WRITE(PAGINATION_TOTAL_COUNT, achievementsResponse.total);

  console.log(_STORAGE_READ(COMPLETION_TARGET));

  const completionFilteredAchievements =
    achievementsResponse.achievements.filter((achievement) => {
      if (
        achievement.game_completion <
        Number(_STORAGE_READ(COMPLETION_TARGET) ?? 80)
      ) {
        return true;
      } else {
        return false;
      }
    });

  return completionFilteredAchievements ?? {};
};

export const fetchAchievementsForGame = async (
  sortOrder,
  viewOrder,
  achievementPage,
  selectOrder,
  gameId
) => {
  let achievementsResponse = {};

  const mainURL = `${process.env.REACT_APP_API_ENDPOINT}achievements/game?game=${gameId}&`;
  const selectedAddedURL = includeSelectQueryAchievementsForGame(
    mainURL,
    selectOrder
  );
  const sortAddedURL = includeSortQueryAchievementsForGame(
    selectedAddedURL,
    sortOrder
  );
  const pageAddedURL = includePageQuery(sortAddedURL, achievementPage);
  achievementsResponse = (await axios.get(pageAddedURL)).data;
  _STORAGE_WRITE(PAGINATION_TOTAL_COUNT, achievementsResponse.total);

  const hiddenAchievements = (
    await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}achievements/hidden?gameid=${gameId}`
    )
  ).data;

  const allAchievements = achievementsResponse;
  allAchievements.achievements.map((achievement) => {
    if (achievement.hidden === 1) {
      const hiddenSelectedAchievement = hiddenAchievements.find(
        (hiddenAchievement) => {
          if (
            hiddenAchievement.name.trim().toLowerCase() ===
            achievement.name.trim().toLowerCase()
          )
            return true;
          else return false;
        }
      );
      achievement.description = hiddenSelectedAchievement.description;
    }
  });

  return allAchievements ?? {};
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

export const fetAchievementsForYearRecentSorted = async (year) => {
  const allAchievementsForYear = (
    await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}achievements/history?year=${year}`
    )
  ).data;

  return allAchievementsForYear;
};
