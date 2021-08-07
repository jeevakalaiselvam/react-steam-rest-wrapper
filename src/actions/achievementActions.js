export const getRecentlyUnlockedAllAchievements = (games) => {
  let allUnlockedAchievements = [];

  games.forEach((game) => {
    game.all_achievements.forEach((achievement) => {
      if (achievement.unlocked !== 0) {
        allUnlockedAchievements.push(achievement);
      }
    });
  });

  const sortedByUnlockTimeAchievements = sortAchivementsByUnlockTime(
    allUnlockedAchievements
  );

  return sortedByUnlockTimeAchievements;
};

export const getAllAchievementsSortedAZ = (games) => {
  let allUnlockedAchievementsSortedAZ = getAllUnlockedAchievements(games).sort(
    (ach1, ach2) => {
      if (ach1.name < ach2.name) return -1;
      if (ach1.name > ach2.name) return 1;
      return 0;
    }
  );

  return allUnlockedAchievementsSortedAZ;
};

export const getAllAchievementsSortedZA = (games) => {
  let allUnlockedAchievementsSortedZA = getAllUnlockedAchievements(games).sort(
    (ach1, ach2) => {
      if (ach2.name < ach1.name) return -1;
      if (ach2.name > ach1.name) return 1;
      return 0;
    }
  );

  return allUnlockedAchievementsSortedZA;
};

export const sortAchivementsByUnlockTime = (achievements) => {
  const sortedByUnlockTimeAchievements = achievements.sort(
    (ach1, ach2) => +ach2.unlocked_time - +ach1.unlocked_time
  );

  return sortedByUnlockTimeAchievements;
};

export const getRandomNUnlockedAchievements = (games, n) => {
  let randomNAchievements = [];
  const allUnlockedAchievements = getAllUnlockedAchievements(games);
  for (let i = 0; i <= n; i++) {
    const randomAchievement =
      allUnlockedAchievements[
        Math.floor(Math.random() * allUnlockedAchievements.length)
      ];
    randomNAchievements.push(randomAchievement);
  }
  return randomNAchievements;
};

export const getNPlayedGames = (games, n) => {
  let randomNPlayedGames = [];
  const allPlayedGames = getAllPlayedGames(games);
  for (let i = 0; i <= n; i++) {
    const randomPlayedGame =
      allPlayedGames[Math.floor(Math.random() * allPlayedGames.length)];
    randomNPlayedGames.push(randomPlayedGame);
  }
  return randomNPlayedGames;
};

export const getNAllGames = (games, n) => {
  let randomGames = [];
  for (let i = 0; i <= n; i++) {
    const game = games[Math.floor(Math.random() * games.length)];
    randomGames.push(game);
  }
  return randomGames;
};

export const getNPerfectedGames = (games, n) => {
  let randomPerfectGames = [];
  const allPerfectGames = getAllPerfectedGames(games);
  for (let i = 0; i <= n; i++) {
    const randomPerfectedGame =
      allPerfectGames[Math.floor(Math.random() * allPerfectGames.length)];
    randomPerfectGames.push(randomPerfectedGame);
  }
  return randomPerfectGames;
};

//Helper methods

export const getAllUnlockedAchievements = (games) => {
  let allUnlockedAchievements = [];

  games.forEach((game) => {
    game.all_achievements.forEach((achievement) => {
      if (achievement.unlocked !== 0) {
        allUnlockedAchievements.push(achievement);
      }
    });
  });

  return allUnlockedAchievements;
};

export const getAllPlayedGames = (games) => {
  let allPlayedGames = [];

  games.forEach((game) => {
    if (game.playtime_minutes > 0) allPlayedGames.push(game);
  });

  return allPlayedGames;
};

export const getAllPerfectedGames = (games) => {
  const perfectedGames = [];

  const COMPLETION_USER_TARGET = localStorage.getItem("completionTarget") || 80;

  games.forEach((game) => {
    if (game.completion_percentage >= COMPLETION_USER_TARGET) {
      perfectedGames.push(game);
    }
  });

  return perfectedGames;
};

export const getCompletionAveragePercentages = (games) => {
  const allGamesPercentages = [];
  games.forEach((game) => {
    if (game.completed_achievements_count !== 0) {
      const completionPercentage = (
        (game.completed_achievements_count /
          game.completed_achievements_count) *
        100
      ).toFixed(2);

      if (completionPercentage >= 80) allGamesPercentages.push(100);
    }
  });

  return allGamesPercentages;
};

export const getCompletionAveragePercentageData = (games) => {
  const totalPercentage = getCompletionAveragePercentages(games).reduce(
    (acc, percentage) => {
      return acc + percentage;
    },
    0
  );
  const averagePercentage =
    totalPercentage / getCompletionAveragePercentages(games).length;
  return averagePercentage;
};

export const getRecentlyPlayedGame = (games) => {
  const lastUnlockedAchievement = getRecentlyUnlockedAllAchievements(games)[0];
  const recentGame = games.find((game) => {
    if (game.id === lastUnlockedAchievement.game_id) {
      return true;
    }
    return false;
  });

  return recentGame;
};

export const getRecentAchievementsForGame = (game) => {
  const recentlyUnlockedAchievements = game.all_achievements.sort(
    (ach1, ach2) => {
      return ach1.unlocked_time - ach2.unlocked_time;
    }
  );
  return recentlyUnlockedAchievements;
};

export const getTotalAchievementsInADate = (achievements) => {
  const dateSquare = {};

  achievements.forEach((achievement) => {
    if (dateSquare[achievement.unlocked_time_desc]) {
      dateSquare[achievement.unlocked_time_desc] =
        dateSquare[achievement.unlocked_time_desc] + 1;
    } else {
      dateSquare[achievement.unlocked_time_desc] = 1;
    }
  });

  console.log("DATE SQUARES -> ", dateSquare);

  return dateSquare;
};

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export const getAllUnlockedAchievementsSortedByYear = (
  allRecentlyUnlockedAchievement
) => {
  const achivementsSortedByYear = {
    2021: {},
    2020: {},
    2019: {},
    2018: {},
    2017: {},
    2016: {},
    2015: {},
    2014: {},
    2013: {},
    2012: {},
    2011: {},
    2010: {},
  };

  Object.keys(achivementsSortedByYear).forEach((year) => {
    const startDate = new Date(`January 1, ${year} 00:00:00`);
    const endDate = new Date(`December 31, ${year} 23:59:59`);
    let newDate = startDate;
    while (newDate <= endDate) {
      if (newDate.getTime() > new Date().getTime()) {
        return;
      }
      achivementsSortedByYear[year][
        `${newDate.getFullYear()}-${
          newDate.getMonth() + 1
        }-${newDate.getDate()}`
      ] = [];
      newDate.setDate(newDate.getDate() + 1);
    }
  });

  allRecentlyUnlockedAchievement.forEach((achievement) => {
    const unlockedDate = new Date(achievement.unlocked_time * 1000);
    const unlockedInYear = unlockedDate.getFullYear();
    const formattedUnlockDate = `${unlockedDate.getFullYear()}-${
      unlockedDate.getMonth() + 1
    }-${unlockedDate.getDate()}`;

    achivementsSortedByYear[unlockedInYear][formattedUnlockDate].push(
      achievement
    );
  });

  return achivementsSortedByYear;
};

export const getDateArray = function (startDate, endDate) {
  var dateArray = new Array(),
    newDate = new Date(startDate);

  while (newDate <= endDate) {
    dateArray.push(new Date(newDate));
    newDate.setDate(newDate.getDate() + 1);
  }

  return dateArray;
};
