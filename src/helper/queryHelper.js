export const includePageQuery = (initialUrl, pageOrder) => {
  return `${initialUrl}page=${pageOrder}`;
};

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

export const includeSelectQueryAchievements = (initialUrl, selectOrder) => {
  const indexMapper = ["all&", "unlocked&", "locked&"];

  return `${initialUrl}select=${indexMapper[selectOrder]}`;
};

export const includeSortQueryAchievements = (initialUrl, sortOrder) => {
  const indexMapper = [
    "recent&",
    "rarity&type=easy&",
    "rarity&type=hard&",
    "games&",
    "names&order=az&",
    "names&order=za&",
  ];

  return `${initialUrl}sort=${indexMapper[sortOrder]}`;
};
