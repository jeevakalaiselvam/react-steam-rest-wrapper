import React from "react";
import styled from "styled-components";

const AchievementContainer = styled.div`
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
`;

const Icon = styled.div`
  background-size: cover;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("${(props) => props.image}");
`;

export default function AchievementIconSmall(props) {
  console.log(props.image);
  return (
    <AchievementContainer>
      <Icon image={props.image}></Icon>
    </AchievementContainer>
  );
}
