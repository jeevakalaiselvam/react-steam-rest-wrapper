export const getSortOptionForGamesPage = () => {
  let gamesPageSortOption = localStorage.getItem("GAMES_PAGE_SORT_TYPE");
  if (!gamesPageSortOption) gamesPageSortOption = 0;
  return gamesPageSortOption;
};

export const getViewOptionForGamesPage = () => {
  let gamesPageViewOption = localStorage.getItem("GAMES_PAGE_VIEW_TYPE");
  if (!gamesPageViewOption) gamesPageViewOption = 0;
  return gamesPageViewOption;
};
