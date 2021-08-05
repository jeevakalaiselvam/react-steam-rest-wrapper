import { React, useContext, useRef } from "react";
import GamesContext from "../../context/GameContext";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import PlayedGamesImages from "../overlay/PlayedGamesImages";
import ImageOverlayCard from "../core/ImageOverlayCard";
import AchievementsCountTextBig from "../group/AchievementsCountTextBig";
import RecentAchievementsImages from "../overlay/RecentAchievementsImages";
import CompletionRateTextBig from "../group/CompletionRateTextBig";

export default function TotalAchievementsCard() {
  const image = <PlayedGamesImages />;
  const content = <CompletionRateTextBig />;

  return <ImageOverlayCard image={image} content={content} />;
}
