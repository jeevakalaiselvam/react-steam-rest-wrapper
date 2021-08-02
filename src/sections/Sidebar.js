import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Sidebar() {
  const userGames = useContext(UserContext);

  return (
    <section className='sidebar'>
      <button className='button'>
        <i className='fas fa-book-open icon'></i>{" "}
        <span className='title'>ALL GAMES</span>
      </button>
    </section>
  );
}
