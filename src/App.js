import Sidebar from "./sections/Sidebar";
import Main from "./sections/Main";
import { useRef } from "react";

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

  return (
    <main className='app' ref={backgroundRef}>
      <Sidebar />
      <Main />
    </main>
  );
}

export default App;
