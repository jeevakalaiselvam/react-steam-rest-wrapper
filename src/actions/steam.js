import axios from "axios";
import { setupCompletionForGames } from "../helpers/achievementHelper";

export const getAllGamesFromSteamWrapper = async () => {
  try {
    const allGamesResponse = await axios.get(
      process.env.REACT_APP_API_ALL_GAMES
    );
    if (allGamesResponse.data.status === "success") {
      let gamesHavingAchievements = allGamesResponse.data.games.filter(
        (game) => {
          if (!game.schema_achievements.length)
            console.log(`${game.name} has no achivements!`);
          return game.schema_achievements.length > 0;
        }
      );
      const completionPercentageAddedGames = setupCompletionForGames(
        gamesHavingAchievements
      );
      console.log("FROM STEAM -> ", completionPercentageAddedGames);
      return completionPercentageAddedGames;
    } else {
      console.log("Unable to get all games!");
    }
  } catch (error) {
    console.log("Error getting all gmaes -> ", error.message);
  }
};
