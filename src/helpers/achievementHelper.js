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

exports.getGamesSortedByOption = (games, sortOption) => {
  console.log("SORTING GAMES OPTION SELECTED -> ", sortOption);
  if (sortOption === 0) {
  }

  if (sortOption === 1) {
  }

  if (sortOption === 2) {
  }

  return games;
};
