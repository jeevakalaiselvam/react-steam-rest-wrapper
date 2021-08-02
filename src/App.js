import Sidebar from "./sections/Sidebar";
import { useEffect, useRef, useState } from "react";
import { UserProvider } from "./context/UserContext";
import { getAllGamesFromSteamWrapper } from "./actions/steam";
import AllGames from "./components/pages/AllGames";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";

function App() {
  const mainBackgroundRef = useRef(null);

  //Change background Image and set Blur
  const changeBackgroundImage = (gameImageURL) => {
    mainBackgroundRef.current.style.backgroundImage = `url("${gameImageURL}")`;
    mainBackgroundRef.current.style.backgroundRepeat = `no-repeat`;
    mainBackgroundRef.current.style.backgroundSize = `cover`;
    mainBackgroundRef.current.style.backdropFilter = `blur(40px)`;
  };

  const getRandomImage = () => {
    return games[Math.floor(Math.random() * games.length)].header_image;
  };

  let userGames = {};
  const [games, setGames] = useState({});
  const [loading, setLoading] = useState(true);

  const getAllGames = async () => {
    let allGames = {};
    if (localStorage.getItem("gameData")) {
      console.log("LOADING FROM LOCAL STORAGE");
      allGames = JSON.parse(localStorage.getItem("gameData"));
    } else {
      console.log("LOADING FROM STEAM DATABASE");
      allGames = await getAllGamesFromSteamWrapper();
      localStorage.setItem("gameData", JSON.stringify(allGames));
    }

    userGames = allGames.games;
    console.log(userGames);
    setGames((oldGames) => userGames);
    setLoading((oldIsloading) => false);
  };

  //Get all games for the first time
  useEffect(() => {
    console.log("Getting games");
    getAllGames();
  }, []);

  //Change background image
  useEffect(() => {
    console.log("Changing background");
    if (games.length > 0) {
      console.log("Can set a random game image");
      changeBackgroundImage(getRandomImage());
    } else {
      console.log("Can set a starter game image");
      changeBackgroundImage(
        "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg"
      );
    }
  }, [loading]);

  return (
    <UserProvider value={games}>
      {!loading && (
        <main className='app' ref={mainBackgroundRef}>
          <Sidebar />
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={AllGames} />
            </Switch>
          </BrowserRouter>
        </main>
      )}

      {loading && (
        <main className='app' ref={mainBackgroundRef}>
          <Sidebar />
          <Loading />
        </main>
      )}
    </UserProvider>
  );
}

export default App;
