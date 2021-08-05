import { React } from "react";
import PlayedGamesImages from "../overlay/PlayedGamesImages";
import ImageOverlayCard from "../core/ImageOverlayCard";
import CompletionRateTextBig from "../group/CompletionRateTextBig";

export default function AverageCompletionRateCard() {
  const image = <PlayedGamesImages />;
  const content = <CompletionRateTextBig />;

  return <ImageOverlayCard image={image} content={content} />;
}
