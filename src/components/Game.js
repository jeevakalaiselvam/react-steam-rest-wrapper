import React from "react";

export default function Game(props) {
  const game = props.game;

  const schemaAchievements = game.schema_achievements;
  const playerAchievements = game.player_achievements;
  const globalAchievements = game.global_achievements;

  const totalAchievements = schemaAchievements.length;
  const completedAchievements = playerAchievements.reduce(
    (acc, achievement) => {
      if (achievement.achieved) {
        return acc + 1;
      }
      return acc + 0;
    },
    0
  );
  const completionPercentage = Math.ceil(
    (completedAchievements / totalAchievements) * 100
  );

  return (
    <div className='gameContainer'>
      <div
        className='game'
        style={{ backgroundImage: `url("${game.header_image}")` }}
      ></div>
      <h5 className='name'>{game.name || "NO GAME NAME"}</h5>
    </div>
  );
}
