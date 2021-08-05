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

  console.log(
    "RECENTLY UNLOCKED ACHIVEMENTS -> ",
    sortedByUnlockTimeAchievements
  );
  return sortedByUnlockTimeAchievements;
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
