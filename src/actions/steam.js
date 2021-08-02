import axios from "axios";

export const getAllGamesFromSteamWrapper = async () => {
  try {
    const allGamesResponse = await axios.get(
      process.env.REACT_APP_API_ALL_GAMES
    );
    if (allGamesResponse.data.status === "success") {
      return allGamesResponse.data;
    } else {
      console.log("Unable to get all games!");
    }
  } catch (error) {
    console.log("Error getting all gmaes -> ", error.message);
  }
};
