import Sidebar from "./sections/Sidebar";
import Main from "./sections/Main";
import { useEffect, useRef, useState } from "react";
import { UserProvider } from "./context/UserContext";
import { getAllGamesFromSteamWrapper } from "./actions/steam";

function App() {
  const backgroundRef = useRef(
    "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg?t=1623162512"
  );

  // //Change background Image and set Blur
  // const changeBackgroundImage = (gameImageURL) => {
  //   backgroundRef.current.style.backgroundImage = `url("${gameImageURL}")`;
  //   backgroundRef.current.style.backgroundRepeat = `no-repeat`;
  //   backgroundRef.current.style.backgroundSize = `cover`;
  //   backgroundRef.current.style.backdropFilter = `blur(20px)`;
  // };

  let userGames = {};
  const [games, setGames] = useState({});
  const [loading, setLoading] = useState(true);

  const getAllGames = async () => {
    const allGames = await getAllGamesFromSteamWrapper();
    userGames = allGames.games;
    console.log(userGames);
    setGames((oldGames) => userGames);
    setLoading((oldIsloading) => false);
  };

  useEffect(() => {
    console.log("Getting games");
    getAllGames();
  }, []);

  return (
    <UserProvider value={games}>
      {!loading && (
        <main className='app' ref={backgroundRef}>
          <Sidebar />
          <Main />
        </main>
      )}
      {loading && <h1>Loading</h1>}
    </UserProvider>
  );
}

export default App;
