import axios from "axios";
import React, { useEffect } from "react";
import { FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";

const CardContainer = styled.div`
  cursor: pointer;
  margin: 0.25rem;
  align-self: center;
  align-items: center;
  position: relative;
  flex-grow: 1;
  justify-self: flex-start;
  display: flex;
  position: relative;

  border-radius: 2px;
  flex-direction: row;
  padding: 0.5rem 1rem;
  background-color: rgba(10, 17, 25, 0.6);
  border: 0.5px solid rgba(10, 17, 25, 0.3);

  &:hover {
    border: 0.5px solidrgba(10, 17, 25, 0.9);
  }

  height: 120px;

  @media only screen and (min-width: 1201px) {
    width: 30%;
    height: 120px;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1025px) {
    width: 47%;
    height: 120px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 97%;
    height: 120px;
  }
  @media only screen and (max-width: 768px) and (min-width: 481px) {
    width: 97%;
    height: 120px;
  }
  @media only screen and (max-width: 768px) and (min-width: 481px) {
    width: 97%;
    height: 120px;
  }
  @media only screen and (max-width: 480px) and (min-width: 320px) {
    width: 97%;
    height: 120px;
  }
`;

const AchievementImageContainer = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AchievementImage = styled.div`
  width: 50px;
  height: 50px;
  background-image: url("${(props) => props.image}");
  background-size: cover;
`;

const AchievementDataContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  padding: 0.5rem 1rem;
  align-items: flex-start;
`;

const AchievementTitle = styled.div`
  font-size: 1rem;
  color: #f5f5f5;
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);
`;
const AchievementDesc = styled.div`
  font-size: 0.9rem;
  color: #959da6;
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);
`;

const AchievementGame = styled.div`
  font-size: 0.9rem;
  color: #454545;
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);
`;
const HiddenImage = styled.div`
  font-size: 1.4rem;
  color: #454545;
  position: absolute;
  right: 10px;
  top: 0;
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);

  &:hover {
    color: #f5f5f5;
  }
`;

export default function AchievementCardMedium(props) {
  const achievement = props.achievement;

  const gotoGoogleSearchNewtab = () => {
    const googleSearchURL = `https://www.google.com/search?q=${achievement.game_name}+${achievement.name}`;
    window.open(googleSearchURL, "_blank");
  };

  return (
    <CardContainer>
      {achievement.hidden === 1 && (
        <HiddenImage onClick={gotoGoogleSearchNewtab}>
          <FaEyeSlash />
        </HiddenImage>
      )}
      <AchievementImageContainer>
        <AchievementImage image={achievement.icon}></AchievementImage>
      </AchievementImageContainer>
      <AchievementDataContainer>
        <AchievementTitle>{achievement.name}</AchievementTitle>
        <AchievementDesc>{achievement.description}</AchievementDesc>
        <AchievementGame>{achievement.game_name}</AchievementGame>
      </AchievementDataContainer>
    </CardContainer>
  );
}
