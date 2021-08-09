import React from "react";
import { FaGlobe, FaMedal, FaTrophy } from "react-icons/fa";
import styled from "styled-components";
import { STEAM_HEADER_IMAGE } from "../../helper/endpoints";

const CardContainer = styled.div`
  background: url("./images/imgcard.png");
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  justify-content: center;
  border-radius: 3px;
  margin: 4px;
  padding: 0.5rem;
  min-height: 56px;
  cursor: pointer;

  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.14) 0,
    hsla(0, 0%, 100%, 0)
  );
  -webkit-box-shadow: 5px 5px 22px -2px rgb(0 0 0 / 50%);
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
  border-color: hsla(0, 0%, 96.1%, 0.3) transparent transparent
    hsla(0, 0%, 96.1%, 0.3);
  border-style: solid;
  border-width: 1px;

  &:hover {
    border: 1px solid #fefefe;
  }

  @media only screen and (min-width: 1361px) {
    width: 30%;
  }
  @media only screen and (max-width: 1360px) and (min-width: 1201px) {
    width: 30%;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1061px) {
    width: 30%;
  }
  @media only screen and (max-width: 1060px) and (min-width: 961px) {
    width: 30%;
  }
  @media only screen and (max-width: 960px) and (min-width: 769px) {
    width: 30%;
  }
  @media only screen and (max-width: 768px) and (min-width: 631px) {
    width: 45%;
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

const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
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
  flex-direction: column;
`;

const Title = styled.div``;
const Desc = styled.div`
  font-size: 0.8rem;
`;

export default function AchievementNormal(props) {
  const { icon, name, description, game_name, game_id } = props.achievement;

  return (
    <CardContainer>
      <InnerContainer image={STEAM_HEADER_IMAGE(game_id)}></InnerContainer>
      <Icon image={icon}></Icon>
      <Data>
        <Title>{name}</Title>
        <Desc>{description}</Desc>
      </Data>
      <Misc>
        <FaGlobe />
      </Misc>
    </CardContainer>
  );
}
