import { React, useContext, useRef } from "react";
import { GamesContext } from "../../context/GameContext";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import RecentAchievementsImages from "../fancy/RecentAchievementsImages";
import AchievementsCountTextBig from "../group/AchievementsCountTextBig";
import ImageOverlayCard from "../core/ImageOverlayCard";

export default function TotalAchievementsCard() {
  const image = <RecentAchievementsImages />;
  const content = <AchievementsCountTextBig />;

  return <ImageOverlayCard image={image} content={content} />;
}
