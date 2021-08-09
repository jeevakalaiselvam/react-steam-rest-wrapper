import React from "react";
import { FaGlobe, FaMedal, FaTrophy } from "react-icons/fa";
import styled from "styled-components";
import { STEAM_HEADER_IMAGE } from "../../helper/endpoints";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: rgba(10, 17, 25);
  position: relative;
  justify-content: center;
  border-radius: 4px;
  margin: 4px;
  padding: 0.5rem 1rem;
  border: 1px solid #fefefe00;

  &:hover {
    border: 1px solid #00000044;
  }

  @media only screen and (min-width: 1361px) {
    width: 48%;
  }
  @media only screen and (max-width: 1360px) and (min-width: 1201px) {
    width: 48%;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1061px) {
    width: 48%;
  }
  @media only screen and (max-width: 1060px) and (min-width: 961px) {
    width: 48%;
  }
  @media only screen and (max-width: 960px) and (min-width: 769px) {
    width: 96%;
  }
  @media only screen and (max-width: 768px) and (min-width: 631px) {
    width: 96%;
  }
  @media only screen and (max-width: 630px) and (min-width: 481px) {
    width: 96%;
  }
  @media only screen and (max-width: 480px) {
    width: 96%;
  }
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const InnerContainerBG = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  border-radius: 3px;
  z-index: 100;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 2px;
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Data = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0.5rem;
`;
const Misc = styled.div`
  display: flex;
  justify-self: flex-start;
  flex-direction: row;
`;

const Title = styled.div`
  font-size: 1rem;
  color: #f5f5f5;
  z-index: 101;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);
`;
const Desc = styled.div`
  font-size: 0.85rem;
  color: #d2d2d2;
  z-index: 101;
`;

const GameName = styled.div`
  color: #959da6;
  z-index: 101;
  font-size: 0.8rem;
`;

const Percentage = styled.div`
  color: #959da6;
  margin-left: 0.5rem;
  font-size: 0.8rem;
`;

const PercentageGold = styled.div`
  color: gold;
  margin-left: 0.5rem;
  font-size: 0.8rem;
`;

export default function AchievementNormal(props) {
  const { icon, name, description, game_name, game_id, global_percentage } =
    props.achievement;

  return (
    <CardContainer>
      <InnerContainerBG></InnerContainerBG>
      <InnerContainer image={STEAM_HEADER_IMAGE(game_id)}></InnerContainer>
      <Icon image={icon}></Icon>
      <Data>
        <Title>{name}</Title>
        <Desc>{description}</Desc>
        <GameName>{game_name}</GameName>
      </Data>
      <Misc>
        <FaGlobe />{" "}
        {global_percentage > 10 && (
          <PercentageGold>{global_percentage.toFixed(2)} %</PercentageGold>
        )}
        {global_percentage <= 10 && (
          <Percentage>{global_percentage.toFixed(2)} %</Percentage>
        )}
      </Misc>
    </CardContainer>
  );
}
