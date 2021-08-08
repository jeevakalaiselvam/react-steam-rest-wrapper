export const HEADER_TOTAL_GAMES = "HEADER_TOTAL_GAMES";
export const HEADER_TOTAL_ACHIEVEMENTS = "HEADER_TOTAL_ACHIEVEMENTS";
export const HEADER_TOTAL_PERFECT_GAMES = "HEADER_TOTAL_PERFECT_GAMES";
export const HEADER_AVERAGE_COMPLETION = "HEADER_AVERAGE_COMPLETION";

export const GAMES_PAGINATION_PER_PAGE = 25;

export const getCompletionTarget = () => {
  const completionTarget = localStorage.getItem("COMPLETION_TARGET");
  if (completionTarget) return completionTarget;
  else return 80;
};

export const storeHeadInfoLocalStorage = (gamesInfo) => {
  const {
    total_games,
    completed_achievements,
    perfect_games_count,
    average_completion,
  } = gamesInfo;

  localStorage.setItem(HEADER_TOTAL_GAMES, total_games);
  localStorage.setItem(HEADER_TOTAL_ACHIEVEMENTS, completed_achievements);
  localStorage.setItem(HEADER_TOTAL_PERFECT_GAMES, perfect_games_count);
  localStorage.setItem(HEADER_AVERAGE_COMPLETION, average_completion);
};
