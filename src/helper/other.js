import {
  PERCENTAGE_BRONZE,
  ACHIEVEMENT_BRONZE,
  PERCENTAGE_COPPER,
  ACHIEVEMENT_COPPER,
  PERCENTAGE_GOLD,
  ACHIEVEMENT_GOLD,
  PERCENTAGE_GREEN,
  ACHIEVEMENT_GREEN,
  PERCENTAGE_PURPLE,
  ACHIEVEMENT_PURPLE,
} from "../constants/percentage";
import {
  COMPLETION_TARGET,
  SELECTED_GAME_COMPLETED,
  SELECTED_GAME_TOTAL,
  TARGET_DEFAULT_COMPLETION,
  _STORAGE_READ,
} from "./storage";

export const recent10Years = (currentYear = new Date().getFullYear()) => {
  let recentYears = [];
  let counter = 0;
  while (counter <= 10) {
    recentYears.push(currentYear);
    currentYear--;
    counter++;
  }
  return recentYears;
};

export const getDatesBetweenDates = (year = new Date().getFullYear()) => {
  const startDate = new Date(`${year}-01-01`);
  const endDate = new Date(`${year}-12-31`);

  let dates = [];
  //to avoid modifying the original date
  const theDate = startDate;
  while (theDate <= endDate && theDate <= new Date()) {
    let date = new Date(theDate);
    let day = "" + date.getDate();
    if (day.length === 1) day = `0${day}`;
    let month = "" + (date.getMonth() + 1);
    if (month.length === 1) month = `0${month}`;
    let year = date.getFullYear();
    dates = [...dates, `${year}-${month}-${day}`];
    theDate.setDate(theDate.getDate() + 1);
  }

  return dates;
};

export const transformAchievementsToDate = (achievements, dates) => {
  let allDateObjects = {};

  achievements.forEach((achievement) => {
    if (!allDateObjects[achievement.unlocked_time_desc]) {
      allDateObjects[achievement.unlocked_time_desc] = [];
    }
    allDateObjects[achievement.unlocked_time_desc].push(achievement);
  });

  return allDateObjects;
};

export const getDescForDate = (date) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septembet",
    "October",
    "November",
    "December",
  ];
  const items = date.split("-");
  return `${items[2]} ${month[items[1] - 1]}, ${items[0]}`;
};

export const getAllAchievementsObtainedForDate = (achievements, date) => {
  const achivementsObtainedInSaidDate = [];
  achievements.forEach((achievement) => {
    if (achievement.unlocked_time_desc.includes(date)) {
      achivementsObtainedInSaidDate.push(achievement);
    }
  });

  const sortedAchievementsByRecent = achivementsObtainedInSaidDate.sort(
    (ach1, ach2) => {
      return ach2.unlocked_time - ach1.unlocked_time;
    }
  );

  return sortedAchievementsByRecent;
};

export const getModeAchivementsToAttainTarget = (achievements) => {
  const target = 100;
  const completed = _STORAGE_READ(SELECTED_GAME_COMPLETED);
  const total = _STORAGE_READ(SELECTED_GAME_TOTAL);
  const toGetGold = Math.ceil((PERCENTAGE_GOLD / 100) * total - completed);
  const toGetPurple = Math.ceil((PERCENTAGE_PURPLE / 100) * total - completed);
  const toGetGreen = Math.ceil((PERCENTAGE_GREEN / 100) * total - completed);
  const toGetBronze = Math.ceil((PERCENTAGE_BRONZE / 100) * total - completed);
  const toGetCopper = Math.ceil((PERCENTAGE_COPPER / 100) * total - completed);

  return { toGetGold, toGetPurple, toGetGreen, toGetBronze, toGetCopper };
};

export const getMedalCompletedGames = (gameInfo) => {
  const { game_percentages } = gameInfo;
  let totalMedals = {
    gold: 0,
    purple: 0,
    green: 0,
    bronze: 0,
    copper: 0,
  };

  game_percentages &&
    game_percentages.forEach((percentage) => {
      if (percentage == PERCENTAGE_GOLD) {
        totalMedals.gold++;
      }
      if (percentage < PERCENTAGE_GOLD && percentage >= PERCENTAGE_PURPLE) {
        totalMedals.purple++;
      }
      if (percentage < PERCENTAGE_PURPLE && percentage >= PERCENTAGE_GREEN) {
        totalMedals.green++;
      }
      if (percentage < PERCENTAGE_GREEN && percentage >= PERCENTAGE_BRONZE) {
        totalMedals.bronze++;
      }
      if (percentage < PERCENTAGE_BRONZE && percentage >= PERCENTAGE_COPPER) {
        totalMedals.copper++;
      }
    });
  return totalMedals;
};

export const getTotalAchievements = (gameInfo) => {
  const { completed_achievements } = gameInfo;
  return completed_achievements;
};

export const getColorFromPercentageOld = (percentage = +percentage) => {
  if (+percentage >= 75) {
    return "#c0c0c0";
  } else if (+percentage >= 50 && +percentage < 75) {
    return "#c0c0c0";
  } else if (+percentage >= 25 && +percentage < 50) {
    return "#a6ff00";
  } else if (+percentage >= 10 && +percentage < 25) {
    return "#c0c0c0";
  } else {
    return "#c0c0c0";
  }
};

export const getColorFromPercentageVariety = (gameInfo) => {
  const data = { bronze: 0, silver: 0, green: 0, purple: 0, gold: 0 };
  if (gameInfo.all_achievements) {
    gameInfo.all_achievements.forEach((achievement) => {
      if (+achievement.unlocked == 1) {
        if (+achievement.global_percentage <= 10) {
          data.gold++;
        } else if (
          +achievement.global_percentage <= 50 &&
          +achievement.global_percentage > 10
        ) {
          data.purple++;
        } else {
          data.silver++;
        }
      }
    });
  }
  return data;
};

export const getTotalXPForAchievements = (gameInfo) => {
  let totalXP = 0;
  if (gameInfo.all_achievements) {
    gameInfo.all_achievements.forEach((achievement) => {
      if (+achievement.unlocked == 1) {
        totalXP =
          totalXP +
          +getXPForAchievement(Math.floor(+achievement.global_percentage));
      }
    });
  }
  return { totalXP };
};

export const getColorFromPercentage = (percentage) => {
  const percent = +percentage;
  if (percent <= 1) {
    return "#5bc0de";
  } else if (percent > 1 && percent <= 5) {
    return "#5bc0de";
  } else if (percent > 5 && percent <= 10) {
    return "#5bc0de";
  } else if (percent > 10 && percent <= 20) {
    return "#5bc0de";
  } else if (percent > 20 && percent <= 30) {
    return "#5bc0de";
  } else if (percent > 30 && percent <= 40) {
    return "#5bc0de";
  } else if (percent > 40 && percent <= 50) {
    return "#5bc0de";
  } else if (percent > 50 && percent <= 60) {
    return "#5bc0de";
  } else if (percent > 60 && percent <= 70) {
    return "#5bc0de";
  } else if (percent > 70 && percent <= 80) {
    return "#5bc0de";
  } else if (percent > 80 && percent <= 90) {
    return "#5bc0de";
  } else if (percent > 90 && percent <= 100) {
    return "#5bc0de";
  } else {
    return "#5bc0de";
  }
};

export const getXPForAchievement = (percentage) => {
  const percent = +percentage;
  if (percent <= 1) {
    return "100";
  } else if (percent > 1 && percent <= 5) {
    return "75";
  } else if (percent > 5 && percent <= 10) {
    return "75";
  } else if (percent > 10 && percent <= 20) {
    return "50";
  } else if (percent > 20 && percent <= 30) {
    return "50";
  } else if (percent > 30 && percent <= 40) {
    return "25";
  } else if (percent > 40 && percent <= 50) {
    return "25";
  } else if (percent > 50 && percent <= 60) {
    return "25";
  } else if (percent > 60 && percent <= 70) {
    return "10";
  } else if (percent > 70 && percent <= 80) {
    return "10";
  } else if (percent > 80 && percent <= 90) {
    return "5";
  } else if (percent > 90 && percent <= 100) {
    return "5";
  } else {
  }
};

export const getAchievementsUnlockedAfterRefresh = (allAchievements) => {
  const lastUpdateTime = +_STORAGE_READ("LAST_REFRESH_TIME") || 0;
  const sortedAchievementsByRecent = allAchievements.sort((ach1, ach2) => {
    return ach2.unlocked_time - ach1.unlocked_time;
  });
  const achievementsUnlockedAfterRefresh = sortedAchievementsByRecent.filter(
    (achievement) => {
      console.log(
        +achievement.unlocked_time * 1000,
        " > ",
        +lastUpdateTime,
        " = ",
        +achievement.unlocked_time * 1000 > +lastUpdateTime
      );
      if (+achievement.unlocked_time * 1000 > +lastUpdateTime) {
        return true;
      } else {
        return false;
      }
    }
  );

  return achievementsUnlockedAfterRefresh;
};
