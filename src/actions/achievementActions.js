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
