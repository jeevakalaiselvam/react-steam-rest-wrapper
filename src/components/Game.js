import React from "react";

export default function Game(props) {
  const game = props.game;

  return (
    <div className='gameContainer'>
      <div
        className='game'
        style={{ backgroundImage: `url("${game.header_image}")` }}
      ></div>
      <h5 className='name'>{game.name || "YET TO IMPLEMENT"}</h5>
    </div>
  );
}
