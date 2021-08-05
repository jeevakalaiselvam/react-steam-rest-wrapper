import { React } from "react";
import RecentAchievementsImages from "../overlay/RecentAchievementsImages";
import AchievementsCountTextBig from "../group/AchievementsCountTextBig";
import ImageOverlayCard from "../core/ImageOverlayCard";
import GameImage from "../overlay/GameImage";
import GameDataCard from "../group/GameDataCard";

export default function RecentlyPlayedGame(props) {
  const image = <GameImage game={props.game} />;
  const content = <GameDataCard game={props.game} />;

  return <ImageOverlayCard image={image} content={content} />;
}
