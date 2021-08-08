import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  width: 100%;
  background: url("https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg");
  height: 100%;
`;

export default function AllAchievementsOverlay() {
  return <Overlay></Overlay>;
}
