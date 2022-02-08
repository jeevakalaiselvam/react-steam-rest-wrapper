import React, { useEffect, useState } from "react";
import {
  FaBinoculars,
  FaCheck,
  FaCheckDouble,
  FaClock,
  FaFistRaised,
  FaGlobe,
  FaSkull,
  FaThumbtack,
  FaTrophy,
  FaWifi,
} from "react-icons/fa";
import styled from "styled-components";
import {
  COLLECTIBLE,
  GRIND,
  HARD,
  MISSABLE,
  MULTIPLAYER,
  NONE,
  PHASE1,
  PHASE2,
  PHASE3,
  PHASE4,
  UNMISSABLE,
  UNTAGGED,
} from "../../constants/achievement";
import { STEAM_HEADER_IMAGE } from "../../helper/endpoints";
import { getColorFromPercentage } from "../../helper/other";
import {
  _STORAGE_READ,
  COMPLETION_TARGET,
  _STORAGE_CHECK_ARRAY,
  _STORAGE_REMOVE_ARRAY,
  _STORAGE_APPEND_ARRAY,
  _STORAGE_WRITE,
} from "../../helper/storage";

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
  padding-bottom: 3rem;
  cursor: pointer;
  border: 1px solid #fefefe00;

  &:hover {
    border: 1px solid #00000044;
  }

  width: 100%;
`;

const PhaseIcon = styled.div`
  font-size: 1rem;
  color: ${(props) => (props.active ? "#55aece" : "#333")};
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

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.div`
  width: 70px;
  height: 70px;
  cursor: pointer;
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
  font-size: 1.1rem;
  color: ${(props) => props.color};
`;
const Percentage = styled.div`
  color: #959da6;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: ${(props) => props.color};
`;

const Title = styled.div`
  font-size: 1rem;
  color: #55aece;
  cursor: pointer;
  z-index: 101;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);
`;
const Desc = styled.div`
  font-size: 0.85rem;
  color: #d2d2d2;
  z-index: 101;
`;

const DescSmall = styled.div`
  font-size: 0.85rem;
  color: #959da6;
  z-index: 101;
`;

const GameName = styled.div`
  color: #959da6;
  z-index: 101;
  font-size: 0.8rem;
`;

const PercentageGold = styled.div`
  color: gold;
  margin-left: 0.5rem;
  font-size: 0.8rem;
`;

const Completion = styled.div`
  z-index: 20;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  width: 100%;
  color: #fff;
  height: 100%;
  font-size: 1rem;
  background-color: rgba(10, 17, 25, 0.5);
  opacity: ${(props) => (props.completed ? "1" : "0")};
`;

const PinIcon = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 20px;
  height: 20px;
  padding: 2rem;
  z-index: 1000;
  margin-top: 1rem;
  color: ${(props) => (props.iconColor ? "#3EB595" : "#333")};

  &:hover {
    cursor: pointer;
  }
`;

const AchivementType = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  font-size: 0.8rem;
  padding: 0.5rem;
  right: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(10, 17, 25, 0.4);

  &:hover {
    cursor: pointer;
  }
`;

const AchivementPhase = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  font-size: 0.8rem;
  padding: 0.5rem;
  left: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(10, 17, 25, 0.4);

  &:hover {
    cursor: pointer;
  }
`;

const AchivementPhaseData = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #fefefe;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  color: ${(props) => (props.highlight ? "#55aece" : "#959da6")};
  display: ${(props) => (props.active ? "flex" : "flex")};

  &:hover {
    cursor: pointer;
  }
`;

const AchivementTypeData = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  font-size: 1rem;
  color: #fefefe;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  color: ${(props) =>
    props.highlight && props.active
      ? props.type === "safe" && props.active
        ? "#4fc25c"
        : props.type === "danger" && props.active
        ? "#bb2124"
        : props.type === "normal" && props.active
        ? "#5bc0de"
        : "#959da6"
      : "#959da6"};
  display: ${(props) => (props.active ? "flex" : "flex")};

  &:hover {
    cursor: pointer;
  }
`;

export default function AchievementPhase(props) {
  const {
    icon,
    id,
    name,
    description,
    game_name,
    game_id,
    global_percentage,
    unlocked,
  } = props.achievement;

  const [achievementType, setAchievementType] = useState();
  const [achievementPhase, setAchievementPhase] = useState();

  useEffect(() => {
    setAchievementType((old) => _STORAGE_READ(`${game_id}_${id}`) || UNTAGGED);
    setAchievementPhase(
      (old) => _STORAGE_READ(`${game_id}_${id}_PHASE`) || NONE
    );
  }, [props.achievement]);

  return (
    <CardContainer
      descriptionLength={description?.length || 0}
      nameLength={name?.length || 0}
      onClick={() => {
        props.achievementSelectedHandler(props.achievement);
        props.openJournal();
      }}
    >
      <InnerContainerBG></InnerContainerBG>
      <InnerContainer image={STEAM_HEADER_IMAGE(game_id)}></InnerContainer>
      <IconContainer>
        <Icon image={icon}>
          {unlocked === 1 && (
            <Completion completed={unlocked}>
              <FaCheck />
            </Completion>
          )}
        </Icon>
      </IconContainer>
      <Data>
        <Title
          onClick={() => {
            window.open(
              `https://www.google.com/search?q=${game_name}+${name}+achievement`,
              "_blank"
            );
          }}
        >
          {name}
        </Title>
        <Desc>{description}</Desc>
        <DescSmall>
          {(_STORAGE_READ(`${game_id}_${id}_JOURNAL`) &&
            _STORAGE_READ(`${game_id}_${id}_JOURNAL`)
              .split("\n")[0]
              .substring(0, 45) + "...") ||
            ""}
        </DescSmall>
        {/* <GameName>{game_name}</GameName> */}
      </Data>
      <Misc color={getColorFromPercentage(global_percentage)}>
        <FaTrophy />{" "}
        <Percentage color={getColorFromPercentage(global_percentage)}>
          {Math.floor(global_percentage)} %
        </Percentage>
      </Misc>
      <AchivementType>
        {achievementType !== UNTAGGED && (
          <>
            <AchivementTypeData
              active={achievementType === UNMISSABLE}
              highlight={true}
              type="safe"
            >
              <FaCheckDouble
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}`, UNMISSABLE);
                  setAchievementType((old) => UNMISSABLE);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              />
            </AchivementTypeData>
            <AchivementTypeData
              active={achievementType === MISSABLE}
              highlight={true}
              type="danger"
            >
              <FaSkull
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}`, MISSABLE);
                  setAchievementType((old) => MISSABLE);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              />
            </AchivementTypeData>
            <AchivementTypeData
              active={achievementType === MULTIPLAYER}
              highlight={true}
              type="normal"
            >
              <FaWifi
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}`, MULTIPLAYER);
                  setAchievementType((old) => MULTIPLAYER);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              />
            </AchivementTypeData>
          </>
        )}
        {achievementType === UNTAGGED && (
          <>
            <AchivementTypeData active={true} highlight={false}>
              <FaCheckDouble
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}`, UNMISSABLE);
                  setAchievementType((old) => UNMISSABLE);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              />
            </AchivementTypeData>
            <AchivementTypeData active={true} highlight={false}>
              <FaSkull
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}`, MISSABLE);
                  setAchievementType((old) => MISSABLE);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              />
            </AchivementTypeData>
            <AchivementTypeData active={true} highlight={false}>
              <FaWifi
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}`, MULTIPLAYER);
                  setAchievementType((old) => MULTIPLAYER);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              />
            </AchivementTypeData>
          </>
        )}
      </AchivementType>

      <AchivementPhase>
        {achievementPhase !== NONE && (
          <>
            <AchivementPhaseData active={true} highlight={false}>
              <PhaseIcon
                active={achievementPhase === PHASE1}
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}_PHASE`, PHASE1);
                  setAchievementPhase((old) => PHASE1);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              >
                P1
              </PhaseIcon>
            </AchivementPhaseData>
            <AchivementPhaseData active={true} highlight={false}>
              <PhaseIcon
                active={achievementPhase === PHASE2}
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}_PHASE`, PHASE2);
                  setAchievementPhase((old) => PHASE2);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              >
                P2
              </PhaseIcon>
            </AchivementPhaseData>
            <AchivementPhaseData active={true} highlight={false}>
              <PhaseIcon
                active={achievementPhase === PHASE3}
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}_PHASE`, PHASE3);
                  setAchievementPhase((old) => PHASE3);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              >
                P3
              </PhaseIcon>
            </AchivementPhaseData>
            {/* <AchivementPhaseData active={true} highlight={false}>
              <PhaseIcon
                active={achievementPhase === PHASE4}
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}_PHASE`, PHASE4);
                  setAchievementPhase((old) => PHASE4);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              >
                P4
              </PhaseIcon>
            </AchivementPhaseData> */}
          </>
        )}
        {achievementPhase === NONE && (
          <>
            <AchivementPhaseData active={true} highlight={false}>
              <PhaseIcon
                active={achievementPhase === PHASE1}
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}_PHASE`, PHASE1);
                  setAchievementPhase((old) => PHASE1);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              >
                P1
              </PhaseIcon>
            </AchivementPhaseData>
            <AchivementPhaseData active={true} highlight={false}>
              <PhaseIcon
                active={achievementPhase === PHASE2}
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}_PHASE`, PHASE2);
                  setAchievementPhase((old) => PHASE2);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              >
                P2
              </PhaseIcon>
            </AchivementPhaseData>
            <AchivementPhaseData active={true} highlight={false}>
              <PhaseIcon
                active={achievementPhase === PHASE3}
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}_PHASE`, PHASE3);
                  setAchievementPhase((old) => PHASE3);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              >
                P3
              </PhaseIcon>
            </AchivementPhaseData>
            {/* <AchivementPhaseData active={true} highlight={false}>
              <PhaseIcon
                active={achievementPhase === PHASE4}
                onClick={(e) => {
                  _STORAGE_WRITE(`${game_id}_${id}_PHASE`, PHASE4);
                  setAchievementPhase((old) => PHASE4);
                  props.refreshViewWithoutFetch();
                  e.stopPropagation();
                }}
              >
                P4
              </PhaseIcon>
            </AchivementPhaseData> */}
          </>
        )}
      </AchivementPhase>
    </CardContainer>
  );
}
