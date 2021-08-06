import React from "react";

export default function AchievementCardMedium(props) {
  const achievement = props.achievement;
  console.log("MEDIUM ACHIEVEMENT");
  return <div>MED {achievement.name}</div>;
}
