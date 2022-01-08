import {
  COLLECTIBLE,
  GRIND,
  HARD,
  MISSABLE,
  MULTIPLAYER,
  UNMISSABLE,
} from "../constants/achievement";
import {
  ACHIEVEMENTGAMEPAGE_FILTER,
  getCompletionTarget,
  _STORAGE_READ,
} from "./storage";

export const getGamesSortedByCompletion = (games) => {
  let sortedGames = [];
  sortedGames = games
    .sort((game1, game2) => {
      return game2.completion_percentage - game1.completion_percentage;
    })
    .slice();
  return sortedGames;
};

export const getGamesSortedByPlaytime = (games) => {
  let sortedGames = [];
  sortedGames = games
    .sort((game1, game2) => {
      return game2.playtime_minutes - game1.playtime_minutes;
    })
    .slice();
  return sortedGames;
};

export const getAllUnlockedAchievementsCount = (games) => {
  let totalAchievements = 0;

  if (games.length) {
    games.forEach((game) => {
      totalAchievements += game.completed_achievements_count;
    });
  }

  return totalAchievements;
};

export const getPerfectGamesCount = (games) => {
  let perfectGames = 0;

  if (games.length) {
    games.forEach((game) => {
      game.completion_percentage >= getCompletionTarget() &&
        (perfectGames += 1);
    });
  }

  return perfectGames;
};

export const filterAchievementsByType = (achievements, gameId) => {
  const mapperType = [
    UNMISSABLE,
    UNMISSABLE,
    MISSABLE,
    COLLECTIBLE,
    HARD,
    GRIND,
    MULTIPLAYER,
  ];
  const newAchievements = achievements.filter((achievement) => {
    if (
      (_STORAGE_READ(`${gameId}_${achievement.id}`) || UNMISSABLE).trim() ===
      (
        mapperType[+_STORAGE_READ(ACHIEVEMENTGAMEPAGE_FILTER)] || UNMISSABLE
      ).trim()
    ) {
      return true;
    } else {
      return false;
    }
  });
  return newAchievements;
};
