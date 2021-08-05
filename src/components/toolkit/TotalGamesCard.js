import { React } from "react";
import ImageOverlayCard from "../core/ImageOverlayCard";
import AllGamesCountTextBig from "../group/AllGamesCountTextBig";
import AllGamesImages from "../overlay/AllGamesImages";

export default function AverageCompletionRateCard() {
  const image = <AllGamesImages />;
  const content = <AllGamesCountTextBig />;

  return <ImageOverlayCard image={image} content={content} />;
}
