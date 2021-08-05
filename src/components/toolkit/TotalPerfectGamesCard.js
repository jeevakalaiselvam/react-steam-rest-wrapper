import React from "react";
import RecentAchievementsImages from "../overlay/RecentAchievementsImages";
import AchievementsCountTextBig from "../group/AchievementsCountTextBig";
import ImageOverlayCard from "../core/ImageOverlayCard";
import PerfectedGamesImages from "../overlay/PerfectedGamesImages";
import PerfectGamesTextBig from "../group/PerfectGamesTextBig";

export default function TotalPerfectGamesCard() {
  const image = <PerfectedGamesImages />;
  const content = <PerfectGamesTextBig />;

  return <ImageOverlayCard image={image} content={content} />;
}
