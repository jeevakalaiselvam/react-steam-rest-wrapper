import React from "react";
import {
  getAchievementImage,
  getRecentAchievements,
} from "../helpers/achievementHelper";

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

  const recentUnlockedAchievements = getRecentAchievements(
    playerAchievements,
    6
  );

  return (
    <div className='gameContainer'>
      <div className='gameData'>
        <div
          className='gameImage'
          style={{ backgroundImage: `url("${game.header_image}")` }}
        />
        <div className='gameInnerData'>
          <h1 className='gameName'>{game.name || "NO GAME NAME"}</h1>
        </div>
      </div>
      <div className='recentAchievements'>
        {recentUnlockedAchievements.length > 0 &&
          recentUnlockedAchievements.map((achievement) => {
            return (
              <div
                className='achievementIcon'
                key={`${game.name}-${achievement.apiname}`}
                style={{
                  backgroundImage: `url("${getAchievementImage(
                    achievement.apiname,
                    schemaAchievements
                  )}")`,
                }}
              >
                {}
              </div>
            );
          })}

        {recentUnlockedAchievements.length === 0 && (
          <>
            <div className='achivementIcon'>
              <i className='fas fa-trophy noAchievementIcon'></i>
            </div>
            <div className='achivementIcon'>
              <i className='fas fa-trophy noAchievementIcon'></i>
            </div>
            <div className='achivementIcon'>
              <i className='fas fa-trophy noAchievementIcon'></i>
            </div>
            <div className='achivementIcon'>
              <i className='fas fa-trophy noAchievementIcon'></i>
            </div>
            <div className='achivementIcon'>
              <i className='fas fa-trophy noAchievementIcon'></i>
            </div>
            <div className='achivementIcon'>
              <i className='fas fa-trophy noAchievementIcon'></i>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
