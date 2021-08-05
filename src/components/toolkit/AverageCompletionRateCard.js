import { React, useContext, useRef } from "react";
import GamesContext from "../../context/GameContext";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import PlayedGamesImages from "../fancy/PlayedGamesImages";
import ImageOverlayCard from "../core/ImageOverlayCard";
import AchievementsCountTextBig from "../group/AchievementsCountTextBig";
import RecentAchievementsImages from "../fancy/RecentAchievementsImages";

export default function TotalAchievementsCard() {
  const image = <RecentAchievementsImages />;
  const content = <AchievementsCountTextBig />;

  return <ImageOverlayCard image={image} content={content} />;
}
