import React from "react";
import styled from "styled-components";
import Card from "../core/Card";

const CardContainerOuter = styled.div`
  cursor: pointer;
  margin: 0.25rem;
  align-self: flex-start;
  position: relative;

  justify-self: flex-start;
  display: flex;
  flex-direction: column;

  box-shadow: 1px 1px 1px hsl(0deg 0% 100% / 10%);

  @media only screen and (min-width: 1201px) {
    width: 22%;
    height: 10vh;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1025px) {
    width: 22%;
    height: 8vh;
  }
  @media only screen and (max-width: 1024px) and (min-width: 841px) {
    width: 30%;
    height: 10vh;
  }
  @media only screen and (max-width: 840px) and (min-width: 769px) {
    width: 47%;
    height: 10vh;
  }
  @media only screen and (max-width: 768px) and (min-width: 521px) {
    width: 30%;
    height: 10vh;
  }
  @media only screen and (max-width: 520px) and (min-width: 481px) {
    width: 47%;
    height: 11vh;
  }
  @media only screen and (max-width: 480px) and (min-width: 320px) {
    width: 47%;
    height: 11vh;
  }

  &:hover {
    border: 0.5px solid ${(props) => props.colorHover};
  }
`;

export default function AchievementCardSmall(props) {
  const achievement = props.achievement;

  return <CardContainerOuter>{achievement.name}</CardContainerOuter>;
}
