import Sidebar from "./sections/Sidebar";
import { useEffect, useRef, useState } from "react";
import { UserProvider } from "./context/UserContext";
import { getAllGamesFromSteamWrapper } from "./actions/steam";
import AllGames from "./components/pages/AllGames";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";

function App() {
  console.clear();
  const mainBackgroundRef = useRef(null);

  //Change background Image and set Blur
  const changeBackgroundImage = (gameImageURL) => {
    mainBackgroundRef.current.style.backgroundImage = `url("${gameImageURL}")`;
    mainBackgroundRef.current.style.backgroundRepeat = `no-repeat`;
    mainBackgroundRef.current.style.backgroundSize = `cover`;
    mainBackgroundRef.current.style.backdropFilter = `blur(40px)`;
  };

  const getRandomImage = () => {
    return appData.userGames[
      Math.floor(Math.random() * appData.userGames.length)
    ].header_image;
  };

  const [appData, setAppData] = useState({ userGames: [], sidebarIndex: 0 });
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

    let userGames = {};
    userGames = allGames;
    console.log(userGames);
    setAppData((oldAppData) => ({ ...oldAppData, userGames }));
    setLoading((oldIsloading) => false);
  };

  //Get all games for the first time
  useEffect(() => {
    getAllGames();
  }, []);

  //Change background image
  useEffect(() => {
    console.log("Changing background");
    if (appData.userGames.length > 0) {
      changeBackgroundImage(getRandomImage());
    } else {
      changeBackgroundImage(
        "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg"
      );
    }
  }, [loading]);

  return (
    <UserProvider value={appData}>
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
          <Loading />
        </main>
      )}
    </UserProvider>
  );
}

export default App;
