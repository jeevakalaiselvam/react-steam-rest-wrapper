export const includeSelectQueryGames = (initialUrl, selectOrder) => {
  const indexMapper = ["all&", "completed&", "started&", "notstarted&"];

  return `${initialUrl}select=${indexMapper[selectOrder]}`;
};

export const includeSortQueryGames = (initialUrl, sortOrder) => {
  const indexMapper = [
    "completion&",
    "playtime&",
    "name&order=az&",
    "name&order=za&",
  ];

  return `${initialUrl}sort=${indexMapper[sortOrder]}`;
};

export const includePageQuery = (initialUrl, pageOrder) => {
  return `${initialUrl}page=${pageOrder}`;
};

export const includeSortQueryAchievements = (initialUrl, sortOrder) => {
  const indexMapper = [
    "completion&",
    "rarity&",
    "games&",
    "names&order=az&",
    "names&order=za&",
  ];

  return `${initialUrl}sort=${indexMapper[sortOrder]}`;
};
