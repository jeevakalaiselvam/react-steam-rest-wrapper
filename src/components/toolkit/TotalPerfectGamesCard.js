import React from "react";
import RecentAchievementsImages from "../overlay/RecentAchievementsImages";
import AchievementsCountTextBig from "../group/AchievementsCountTextBig";
import ImageOverlayCard from "../core/ImageOverlayCard";

export default function TotalPerfectGamesCard() {
  const image = <RecentAchievementsImages />;
  const content = <AchievementsCountTextBig />;

  return <ImageOverlayCard image={image} content={content} />;
}
