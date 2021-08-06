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
