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
    return userGames[Math.floor(Math.random() * userGames.length)].header_image;
  };

  const [userGames, setUserGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarIndex, setSidebarIndex] = useState(0);

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

    console.log(allGames);
    setUserGames((oldUserGames) => allGames);
    setLoading((oldIsloading) => false);
  };

  //Get all games for the first time
  useEffect(() => {
    getAllGames();
  }, []);

  //Change background image
  useEffect(() => {
    if (userGames.length > 0) {
      changeBackgroundImage(getRandomImage());
    } else {
      changeBackgroundImage(
        "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg"
      );
    }
  }, [loading]);

  return (
    <UserProvider value={{ userGames, sidebarIndex }}>
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
