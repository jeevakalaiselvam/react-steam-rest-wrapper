import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { STEAM_HEADER_IMAGE } from "../../helper/endpoints";
import { getDescForDate } from "../../helper/other";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  width: 70%;
  background-color: rgba(10, 17, 25, 0.6);
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  justify-content: center;
  justify-content: flex-start;
`;

const Star = styled.div`
  display: flex;
  color: #fecc09;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  transform: translateY(-5px);
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  width: 160px;
  justify-content: center;
  justify-content: flex-start;
`;

const AchievementContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 0.5rem;
  padding: 0.5rem;
  align-items: center;
  justify-content: flex-start;
`;

const GameContainer = styled.div`
  display: flex;
  margin: 0.5rem;
  flex-direction: row;
  padding: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
`;

const StatNumber = styled.div`
  color: #fecc09;
  font-size: 2rem;
`;
const StatDate = styled.div``;
const AchievementIcon = styled.div`
  width: 60px;
  height: 60px;
  background: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
`;
const AchievementData = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  justify-content: center;
`;
const AchievementTitle = styled.div`
  color: #55aece;
`;
const AchievementDesc = styled.div`
  color: #888;
`;
const GameIcon = styled.div`
  width: 200px;
  height: 100px;
  background: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
`;
const GameDesc = styled.div``;

export default function MilestoneRow(props) {
  const {
    id,
    game_name,
    hidden,
    name,
    icon,
    description,
    icon_locked,
    global_percentage,
    unlocked,
    unlocked_time,
    unlocked_time_desc,
    game_id,
  } = props.achievement;

  return (
    <Container>
      <StarContainer>
        <Star>
          <FaStar />
        </Star>
      </StarContainer>
      <StatContainer>
        <StatNumber># {props.total - props.milestone}</StatNumber>
        <StatDate>{getDescForDate(unlocked_time_desc)}</StatDate>
      </StatContainer>
      <AchievementContainer>
        <AchievementIcon image={icon}></AchievementIcon>
        <AchievementData>
          <AchievementTitle>{name}</AchievementTitle>
          <AchievementDesc>{description}</AchievementDesc>
        </AchievementData>
      </AchievementContainer>
      <GameContainer>
        <GameIcon image={STEAM_HEADER_IMAGE(game_id)}></GameIcon>
        <GameDesc></GameDesc>
      </GameContainer>
    </Container>
  );
}
