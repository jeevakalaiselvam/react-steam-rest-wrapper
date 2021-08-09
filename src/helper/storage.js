export const STORAGE_HEADER_TOTAL_GAMES = "HEADER_TOTAL_GAMES";
export const STORAGE_HEADER_TOTAL_ACHIEVEMENTS = "HEADER_TOTAL_ACHIEVEMENTS";
export const STORAGE_HEADER_TOTAL_PERFECT_GAMES = "HEADER_TOTAL_PERFECT_GAMES";
export const STORAGE_HEADER_AVERAGE_COMPLETION = "HEADER_AVERAGE_COMPLETION";
export const PAGINATION_TOTAL_COUNT = "PAGINATION_TOTAL_COUNT";

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

  localStorage.setItem(STORAGE_HEADER_TOTAL_GAMES, total_games);
  localStorage.setItem(
    STORAGE_HEADER_TOTAL_ACHIEVEMENTS,
    completed_achievements
  );
  localStorage.setItem(STORAGE_HEADER_TOTAL_PERFECT_GAMES, perfect_games_count);
  localStorage.setItem(STORAGE_HEADER_AVERAGE_COMPLETION, average_completion);
};

export const addToLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};
