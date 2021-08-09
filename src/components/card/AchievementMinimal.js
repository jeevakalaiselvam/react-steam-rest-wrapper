import React from "react";
import { FaMedal, FaTrophy } from "react-icons/fa";
import styled from "styled-components";
import BlackToolTip from "../other/BlackToolTip";

const Card = styled.div`
  background-color: rgba(10, 17, 25, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  margin: 4px;
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

const ToolTipContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: #55aece;
  justify-content: center;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  justify-content: center;
`;

const Game = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-size: 0.8rem;
  justify-content: center;
`;

const Icon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  flex-direction: column;
  background-image: url("${(props) => props.image}");
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

export default function AchievementMinimal(props) {
  const { icon, name, description, game_name } = props.achievement;

  const toolTipContent = (
    <ToolTipContent>
      <Icon image={icon}></Icon>
      <Title>{name}</Title>
      <Desc>{description}</Desc>
      <Game>{game_name}</Game>
    </ToolTipContent>
  );

  return (
    <BlackToolTip content={toolTipContent}>
      <Card image={icon}></Card>
    </BlackToolTip>
  );
}
