import { refreshDatabaseInBackend } from "../action/games";
import {
  ALL,
  COLLECTIBLE,
  GRIND,
  HARD,
  MISSABLE,
  MULTIPLAYER,
  NONE,
  PHASE1,
  PHASE2,
  PHASE3,
  PHASE4,
  UNMISSABLE,
  UNTAGGED,
} from "../constants/achievement";
import {
  ACHIEVEMENTGAMEPAGE_FILTER,
  getCompletionTarget,
  SELECTED_GAME,
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
    ALL,
    UNTAGGED,
    UNMISSABLE,
    MISSABLE,
    COLLECTIBLE,
    HARD,
    GRIND,
    MULTIPLAYER,
  ];

  if (+_STORAGE_READ(ACHIEVEMENTGAMEPAGE_FILTER) === 0) {
    return achievements;
  } else {
    const newAchievements = achievements.filter((achievement) => {
      if (
        (_STORAGE_READ(`${gameId}_${achievement.id}`) || UNTAGGED).trim() ===
        (
          mapperType[+_STORAGE_READ(ACHIEVEMENTGAMEPAGE_FILTER)] || UNTAGGED
        ).trim()
      ) {
        return true;
      } else {
        return false;
      }
    });
    return newAchievements;
  }
};

export const getAchievementsFilteredByCategory = (achievements) => {
  let data = {
    allCount: [],
    unTaggedCount: [],
    unMissableCount: [],
    missableCount: [],
    multiplayerCount: [],
  };

  achievements.length &&
    achievements.forEach((achievement) => {
      data.allCount.push(achievement);
      const type = (
        _STORAGE_READ(`${achievement.game_id}_${achievement.id}`) || UNTAGGED
      ).trim();
      switch (type) {
        case UNTAGGED:
          data.unTaggedCount.push(achievement);
          break;
        case UNMISSABLE:
          data.unMissableCount.push(achievement);
          break;
        case MISSABLE:
          data.missableCount.push(achievement);
          break;
        case MULTIPLAYER:
          data.multiplayerCount.push(achievement);
          break;
        default:
          break;
      }
    });

  return data;
};

export const getAchievementsFilteredByPhase = (achievements) => {
  let data = {
    none: [],
    phase1: [],
    phase2: [],
    phase3: [],
    phase4: [],
    unlockedAll: [],
    lockedAll: [],
  };

  achievements.length &&
    achievements.forEach((achievement) => {
      const type = (
        _STORAGE_READ(`${achievement.game_id}_${achievement.id}_PHASE`) || NONE
      ).trim();
      data.none.push(achievement);

      if (achievement.unlocked == "1") {
        data.unlockedAll.push(achievement);
      }

      if (achievement.unlocked == "0") {
        data.lockedAll.push(achievement);
        switch (type) {
          case PHASE1:
            data.phase1.push(achievement);
            break;
          case PHASE2:
            data.phase2.push(achievement);
            break;
          case PHASE3:
            data.phase3.push(achievement);
            break;
          case PHASE4:
            data.phase4.push(achievement);
            break;
          default:
            break;
        }
      }
    });

  data.unlockedAll = data.unlockedAll.sort((a, b) => {
    return +a.unlocked_time < +b.unlocked_time;
  });

  data.lockedAll = data.lockedAll.sort((a, b) => {
    return +a.global_percentage < +b.global_percentage;
  });

  return data;
};

//Get Count for achievements
export const getCountForAchievements = (achievements) => {
  let allCount = 0,
    unTaggedCount = 0,
    unMissableCount = 0,
    missableCount = 0,
    multiplayerCount = 0;

  achievements.length &&
    achievements.forEach((achievement) => {
      allCount++;
      const type = (
        _STORAGE_READ(`${achievement.game_id}_${achievement.id}`) || UNTAGGED
      ).trim();
      switch (type) {
        case UNTAGGED:
          unTaggedCount++;
          break;
        case UNMISSABLE:
          unMissableCount++;
          break;
        case MISSABLE:
          missableCount++;
          break;
        case MULTIPLAYER:
          multiplayerCount++;
          break;
        default:
          break;
      }
    });

  return {
    allCount,
    unTaggedCount,
    unMissableCount,
    missableCount,
    multiplayerCount,
  };
};

//Refresh all games
export const refreshDatabaseAndMoveToPage = async (path) => {
  console.log("Refreshing Database");
  const response = await refreshDatabaseInBackend();
  if (response) {
    if (_STORAGE_READ(SELECTED_GAME)) {
      setTimeout(() => {
        window.location.href = path;
      }, 2000);
    } else {
      setTimeout(() => {
        window.location.href = "/games";
      }, 2000);
    }
  }
};
