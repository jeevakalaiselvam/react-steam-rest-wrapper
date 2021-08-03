import React, { useRef, useState } from "react";
import {
  getAchievementImage,
  getAchievementName,
  getRecentAchievements,
} from "../helpers/achievementHelper";
import ReactTooltip from "react-tooltip";
import DarkToolTip from "./core/DarkToolTip";

export default function Game(props) {
  const game = props.game;

  const RECENT_ACHIEVEMENT_COUNT = 6;

  const schemaAchievements = game.schema_achievements;
  const playerAchievements = game.player_achievements;
  const globalAchievements = game.global_achievements;

  const recentUnlockedAchievements = getRecentAchievements(
    playerAchievements,
    RECENT_ACHIEVEMENT_COUNT
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
              <DarkToolTip
                title={getAchievementName(
                  achievement.apiname,
                  schemaAchievements
                )}
                className='sortOptions'
                key={`${game.name}-${achievement.apiname}`}
              >
                <div
                  className='achievementIcon'
                  key={`${game.name}-${achievement.apiname}`}
                  style={{
                    backgroundImage: `url("${getAchievementImage(
                      achievement.apiname,
                      schemaAchievements
                    )}")`,
                  }}
                ></div>
              </DarkToolTip>
            );
          })}

        {recentUnlockedAchievements.length === 0 && (
          <>
            {Array.from(
              { length: RECENT_ACHIEVEMENT_COUNT },
              (_, index) => index + 1
            ).map((item) => (
              <div className='achivementIcon' key={item}>
                <i className='fas fa-lock noAchievementIcon'></i>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
