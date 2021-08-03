const {
  comparatorPlaytime,
  comparatorName,
  comparatorPlaytimeDesc,
  comparatorNameDesc,
  comparatorNameAsc,
} = require("./comparators");

exports.getRecentAchievements = (playerAchivements, count) => {
  const sortedAchievements = this.getUnlockedAchievements(
    playerAchivements
  ).sort(function (achievement1, achievement2) {
    return achievement1.unlocktime - achievement2.unlocktime;
  });

  return sortedAchievements.slice(0, count);
};

exports.getUnlockedAchievements = (playerAchivements) => {
  const unlockedAchivements = playerAchivements.filter(
    (achievement) => achievement.achieved === 1
  );
  return unlockedAchivements;
};

exports.getAchievementImage = (achievementID, schemaAchievements) => {
  const imageURL = schemaAchievements.find(
    (achievement) => achievement.name === achievementID && achievement.icon
  );
  return imageURL.icon;
};

exports.getGamesSortedByOption = (userGames, sortOption) => {
  console.log("SORTING INDEX  -> ", sortOption);
  console.log("BEFORE SORTING (TOP) -> ", userGames[0]);

  if (sortOption === 0) {
    const time1 = performance.now();
    const sortedGames = userGames.slice().sort(comparatorPlaytimeDesc);
    const time2 = performance.now();
    console.log("SORT took ", time2 - time1, " milliseconds");
    return sortedGames;
  }

  if (sortOption === 1) {
    const time1 = performance.now();
    const sortedGames = userGames.slice().sort(comparatorNameDesc);
    const time2 = performance.now();
    console.log("AFTER SORTING (TOP) -> ", sortedGames[0]);
    console.log("SORT took ", time2 - time1, " milliseconds");
    return sortedGames;
  }

  if (sortOption === 2) {
    const time1 = performance.now();
    const sortedGames = userGames.slice().sort(comparatorNameAsc);
    const time2 = performance.now();
    console.log("AFTER SORTING (TOP) -> ", sortedGames[0]);
    console.log("SORT took ", time2 - time1, " milliseconds");
    return sortedGames;
  }

  return userGames;
};
