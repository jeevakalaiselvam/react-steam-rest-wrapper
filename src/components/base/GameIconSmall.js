import React from "react";
import styled from "styled-components";

const AchievementContainer = styled.div`
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
`;

const Icon = styled.div`
  background-size: cover;
  width: 115px;
  height: 54px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("${(props) => props.image}");
`;

export default function GameIconSmall(props) {
  return (
    <AchievementContainer>
      <Icon image={props.image}></Icon>
    </AchievementContainer>
  );
}
