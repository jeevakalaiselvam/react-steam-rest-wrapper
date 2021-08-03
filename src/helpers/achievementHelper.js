const {
  comparatorPlaytime,
  comparatorName,
  comparatorPlaytimeDesc,
  comparatorNameDesc,
  comparatorNameAsc,
  comparatorCompletionDesc,
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
  if (sortOption === 0) {
    const sortedGames = userGames.slice().sort(comparatorCompletionDesc);
    return sortedGames;
  }

  if (sortOption === 1) {
    const sortedGames = userGames.slice().sort(comparatorPlaytimeDesc);
    return sortedGames;
  }

  if (sortOption === 2) {
    const sortedGames = userGames.slice().sort(comparatorNameDesc);
    return sortedGames;
  }

  if (sortOption === 3) {
    const sortedGames = userGames.slice().sort(comparatorNameAsc);
    return sortedGames;
  }

  return userGames;
};

exports.setupCompletionForGames = (games) => {
  const completionAddedGames = games.map((game) => {
    const schemaAchievements = game.schema_achievements;
    const playerAchievements = game.player_achievements;

    const totalAchievements = schemaAchievements.length;
    const completedAchievements = playerAchievements.reduce(
      (acc, achievement) => {
        if (achievement.achieved) {
          return acc + 1;
        }
        return acc + 0;
      },
      0
    );
    const completionPercentage = Math.ceil(
      (completedAchievements / totalAchievements) * 100
    );
    game.completion = completionPercentage;
    return game;
  });

  return completionAddedGames;
};

exports.getAchievementName = (achievementID, schemaAchievement) => {
  return (
    schemaAchievement.find((achievement) => achievement.name === achievementID)
      .displayName || "No Description"
  );
};
