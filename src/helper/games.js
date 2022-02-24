import { awakeServer, refreshDatabaseInBackend } from "../action/games";
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
import { getXPForAchievement } from "./other";
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

export const sortAchievementByPercentage = (achievements) => {
  const newAchievements = achievements.sort((a, b) => {
    return +a.global_percentage < +b.global_percentage;
  });
  console.log("FILTERED ACHIEVEMENTS", newAchievements);

  return newAchievements;
};

export const getAchievementsFilteredByPhase = (achievements) => {
  let data = {
    none: [],
    phase1: [],
    phase2: [],
    phase3: [],
    phase4: [],
    unlockedAll: [],
    unlockedToday: [],
    lockedAll: [],
  };

  achievements &&
    achievements.length &&
    achievements.forEach((achievement) => {
      const type = (
        _STORAGE_READ(`${achievement.game_id}_${achievement.id}_PHASE`) || NONE
      ).trim();

      if (achievement.unlocked == "1") {
        data.unlockedAll.push(achievement);
      }

      if (achievement.unlocked == "0") {
        data.lockedAll.push(achievement);
        switch (type) {
          case NONE:
            data.none.push(achievement);
            break;
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

  data.unlockedToday = data.unlockedAll.filter((achievement) => {
    const dateToday = new Date();
    dateToday.setUTCHours(0, 0, 0, 0);
    let unlockedDate = new Date(achievement.unlocked_time * 1000);
    if (unlockedDate.getTime() > dateToday.getTime()) {
      return true;
    } else {
      return false;
    }
  });

  data.unlockedWeek = data.unlockedAll.filter((achievement) => {
    const dateToday = new Date();
    const weekBack = new Date();
    weekBack.setDate(dateToday.getDate() - 7);
    weekBack.setUTCHours(0, 0, 0, 0);
    let unlockedDate = new Date(achievement.unlocked_time * 1000);
    if (unlockedDate.getTime() > weekBack.getTime()) {
      return true;
    } else {
      return false;
    }
  });

  data.lockedAll = data.lockedAll.sort((a, b) => {
    return +a.global_percentage < +b.global_percentage;
  });

  localStorage.setItem("XP_TODAY", getXPSumForAchievements(data.unlockedToday));
  localStorage.setItem("XP_WEEK", getXPSumForAchievements(data.unlockedToday));

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
  awakeServer();
  setTimeout(async () => {
    console.log("Refreshing Database");
    const response = await refreshDatabaseInBackend();
    if (response) {
      if (_STORAGE_READ(SELECTED_GAME)) {
        setTimeout(() => {
          window.location.href = path;
        }, 3000);
      } else {
        setTimeout(() => {
          window.location.href = "/games";
        }, 3000);
      }
    }
  }, 10);
};

export const getXPSumForAchievements = (achievements) => {
  let xpTotal = 0;
  if (achievements.length) {
    console.log("CALCULATING XP", achievements);
    achievements.forEach((achievement) => {
      xpTotal += +getXPForAchievement(+achievement.global_percentage);
    });
    console.log("TOTAL CALCULATED", xpTotal);
  }
  return xpTotal;
};
