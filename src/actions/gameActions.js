export const getGamesSortedByCompletion = (games) => {
  const gamesSortedByCompletion = games
    .sort((game1, game2) => {
      return game2.completion_percentage - game1.completion_percentage;
    })
    .slice();
  return gamesSortedByCompletion;
};

export const getGamesSortedByPlaytime = (games) => {
  const gamesSortedByPlaytime = games
    .sort((game1, game2) => {
      return game2.playtime_minutes - game1.playtime_minutes;
    })
    .slice();
  return gamesSortedByPlaytime;
};

export const getGamesSortedByNameAZ = (games) => {
  const gamesSortedByNameAZ = games
    .sort((game1, game2) => {
      if (game1.name < game2.name) return -1;
      if (game1.name > game2.name) return 1;
      return 0;
    })
    .slice();
  return gamesSortedByNameAZ;
};

export const getGamesSortedByNameZA = (games) => {
  const gamesSortedByNameZA = games
    .sort((game1, game2) => {
      if (game2.name < game1.name) return -1;
      if (game2.name > game1.name) return 1;
      return 0;
    })
    .slice();
  return gamesSortedByNameZA;
};
