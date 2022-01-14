import React from "react";
import {
  FaArrowRight,
  FaBinoculars,
  FaCheckDouble,
  FaClock,
  FaFilter,
  FaFistRaised,
  FaGripHorizontal,
  FaMedal,
  FaPercentage,
  FaSkull,
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaThumbtack,
  FaTrophy,
  FaWifi,
} from "react-icons/fa";
import styled from "styled-components";
import { getCountForAchievements } from "../helper/games";
import { getModeAchivementsToAttainTarget } from "../helper/other";
import { _STORAGE_CHECK_ARRAY } from "../helper/storage";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  overflow: scroll;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`;

const Subheader = styled.div`
  color: #fefefe;
  font-size: 0.6rem;
  align-self: flex-start;
  margin: 0.5rem 1rem;
  text-align: left;
`;

const RightMenuItem = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => (props.selected ? "#55aece" : "#959da6")};
  background-color: ${(props) =>
    props.selected ? "rgba(122, 132, 148, 0.26)" : "rgba(122, 132, 148, 0)"};

  &:hover {
    background-color: rgba(122, 132, 148, 0.26);
    color: #f5f5f5;
  }
`;
const Icon = styled.div`
  font-size: 1rem;
  transform: translateY(-1px);
`;

const ToGet = styled.div`
  padding: 0.25rem 1rem;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconAndText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 2;
  align-items: center;
  color: #55aece;
  padding: 0rem 0.25rem;
`;

const Trophy = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.35rem;
  justify-content: center;
  flex: 1;
  align-items: center;
`;

const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  font-size: 1.1rem;
  align-items: center;
`;

const Arrow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0.5rem;
  justify-content: center;
  color: #a5c93a;
  flex: 1;
  align-items: center;
`;

const MedalGold = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  color: #fecc09;
  margin-left: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const MedalPurple = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  color: #b666d2;
  margin-left: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const MedalGreen = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  color: #a6ff00;
  margin-left: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const MedalBronze = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  color: #c0c0c0;
  margin-left: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const MedalCopper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  color: #cd7f32;
  margin-left: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  font-size: 0.9rem;
  margin-left: 1rem;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

const Title = styled.div`
  flex: 1;
`;
const TitleCount = styled.div`
  background-color: rgba(122, 132, 148, 0.26);
  color: white;
  margin-left: 0.5rem;
  min-width: 25px;
  color: #55aece;
  text-align: center;
  font-size: 0.75rem;
  border-radius: 5px;
  padding: 3px;
`;

const JournalButton = styled.div`
  width: 95%;
  background-color: #55aece;
  margin: 0.5rem;
  border-radius: 2px;
  padding: 0.5rem;
  text-align: center;
  color: rgba(3, 3, 3, 1);
`;

export default function GamePageRight(props) {
  const achievements = props.achievements;
  const toGet = getModeAchivementsToAttainTarget(achievements);
  const {
    allCount,
    unTaggedCount,
    unMissableCount,
    missableCount,
    collectibleCount,
    hardCount,
    grindCount,
    multiplayerCount,
  } = getCountForAchievements(achievements);

  const getPinnedAchievementsCount = (tmpAchievements) => {
    const pinnedAchievements = [];

    tmpAchievements.length &&
      tmpAchievements.forEach((achievement) => {
        if (
          _STORAGE_CHECK_ARRAY(
            `${achievement.game_id}_pinned`,
            `${achievement.game_id}_${achievement.name}`
          )
        ) {
          pinnedAchievements.push(achievement);
        }
      });
    return pinnedAchievements.length;
  };

  const pinnedCount = getPinnedAchievementsCount(achievements);

  return (
    <Container>
      <JournalButton
        onClick={() => {
          props.closeJournal();
        }}
      >
        {props.journalOpen ? "CLOSE" : "OPEN"} JOURNAL
      </JournalButton>
      <Subheader>FILTER OPTIONS</Subheader>

      <RightMenuItem
        onClick={() => props.filterHandler(0)}
        selected={props.filterIndex === 0}
      >
        <Icon>
          <FaGripHorizontal />
        </Icon>
        <TitleContainer>
          <Title>Untagged</Title>
          <TitleCount>{unTaggedCount}</TitleCount>
        </TitleContainer>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.filterHandler(1)}
        selected={props.filterIndex === 1}
      >
        <Icon>
          <FaCheckDouble />
        </Icon>
        <TitleContainer>
          <Title>Story</Title>
          <TitleCount>{unMissableCount}</TitleCount>
        </TitleContainer>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.filterHandler(2)}
        selected={props.filterIndex === 2}
      >
        <Icon>
          <FaSkull />
        </Icon>
        <TitleContainer>
          <Title>Missable</Title>
          <TitleCount>{missableCount}</TitleCount>
        </TitleContainer>
      </RightMenuItem>

      <RightMenuItem
        onClick={() => props.filterHandler(3)}
        selected={props.filterIndex === 3}
      >
        <Icon>
          <FaWifi />
        </Icon>
        <TitleContainer>
          <Title>Multiplayer</Title>
          <TitleCount>{multiplayerCount}</TitleCount>
        </TitleContainer>
      </RightMenuItem>

      <Subheader>VIEW OPTIONS</Subheader>
      <RightMenuItem
        onClick={() => props.viewHandler(0)}
        selected={props.viewIndex === 0}
      >
        <Icon>
          <FaGripHorizontal />
        </Icon>
        <TitleContainer>Minimal</TitleContainer>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.viewHandler(1)}
        selected={props.viewIndex === 1}
      >
        <Icon>
          <FaGripHorizontal />
        </Icon>
        <TitleContainer>Normal</TitleContainer>
      </RightMenuItem>

      <Subheader>SELECT OPTIONS</Subheader>
      <RightMenuItem
        onClick={() => props.selectHandler(0)}
        selected={props.selectIndex === 0}
      >
        <Icon>
          <FaFilter />
        </Icon>
        <TitleContainer>All</TitleContainer>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.selectHandler(1)}
        selected={props.selectIndex === 1}
      >
        <Icon>
          <FaFilter />
        </Icon>
        <TitleContainer>Unlocked</TitleContainer>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.selectHandler(2)}
        selected={props.selectIndex === 2}
      >
        <Icon>
          <FaFilter />
        </Icon>
        <TitleContainer>Not Unlocked</TitleContainer>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.selectHandler(3)}
        selected={props.selectIndex === 3}
      >
        <Icon>
          <FaFilter />
        </Icon>
        <TitleContainer>Pinned</TitleContainer>
      </RightMenuItem>
      <Subheader>SORT OPTIONS</Subheader>
      <RightMenuItem
        onClick={() => props.sortHandler(0)}
        selected={props.sortIndex === 0}
      >
        <Icon>
          <FaClock />
        </Icon>
        <TitleContainer>Recent</TitleContainer>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.sortHandler(1)}
        selected={props.sortIndex === 1}
      >
        <Icon>
          <FaPercentage />
        </Icon>
        <TitleContainer>Rarity Easy</TitleContainer>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.sortHandler(2)}
        selected={props.sortIndex === 2}
      >
        <Icon>
          <FaPercentage />
        </Icon>
        <TitleContainer>Rarity Hard</TitleContainer>
      </RightMenuItem>

      <RightMenuItem
        onClick={() => props.sortHandler(3)}
        selected={props.sortIndex === 3}
      >
        <Icon>
          <FaSortAlphaDown />
        </Icon>
        <TitleContainer>Name A-Z</TitleContainer>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.sortHandler(4)}
        selected={props.sortIndex === 4}
      >
        <Icon>
          <FaSortAlphaDownAlt />
        </Icon>
        <TitleContainer>Name Z-A</TitleContainer>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.sortHandler(5)}
        selected={props.sortIndex === 5}
      >
        <Icon>
          <FaSortAlphaDownAlt />
        </Icon>
        <TitleContainer>Hidden</TitleContainer>
      </RightMenuItem>

      {pinnedCount > 0 && (
        <ToGet>
          <IconAndText>
            <Trophy>
              <FaThumbtack />
            </Trophy>
            <Data>{pinnedCount}</Data>
          </IconAndText>
        </ToGet>
      )}
      {pinnedCount <= 0 && (
        <ToGet>
          <IconAndText>
            <Trophy>
              <FaThumbtack />
            </Trophy>
            <Data>{pinnedCount}</Data>
          </IconAndText>
        </ToGet>
      )}
      {toGet.toGetGold > 0 && (
        <ToGet>
          <IconAndText>
            <Trophy>
              <FaTrophy />
            </Trophy>
            <Data>{toGet.toGetGold}</Data>
          </IconAndText>
          <Arrow>
            <FaArrowRight />
          </Arrow>
          <MedalGold>
            <FaMedal />
          </MedalGold>
        </ToGet>
      )}

      {toGet.toGetPurple > 0 && (
        <ToGet>
          <IconAndText>
            <Trophy>
              <FaTrophy />
            </Trophy>
            <Data>{toGet.toGetPurple}</Data>
          </IconAndText>
          <Arrow>
            <FaArrowRight />
          </Arrow>
          <MedalPurple>
            <FaMedal />
          </MedalPurple>
        </ToGet>
      )}
      {toGet.toGetGreen > 0 && (
        <ToGet>
          <IconAndText>
            <Trophy>
              <FaTrophy />
            </Trophy>
            <Data>{toGet.toGetGreen}</Data>
          </IconAndText>
          <Arrow>
            <FaArrowRight />
          </Arrow>
          <MedalGreen>
            <FaMedal />
          </MedalGreen>
        </ToGet>
      )}
      {toGet.toGetBronze > 0 && (
        <ToGet>
          <IconAndText>
            <Trophy>
              <FaTrophy />
            </Trophy>
            <Data>{toGet.toGetBronze}</Data>
          </IconAndText>
          <Arrow>
            <FaArrowRight />
          </Arrow>
          <MedalBronze>
            <FaMedal />
          </MedalBronze>
        </ToGet>
      )}
      {toGet.toGetCopper > 0 && (
        <ToGet>
          <IconAndText>
            <Trophy>
              <FaTrophy />
            </Trophy>
            <Data>{toGet.toGetCopper}</Data>
          </IconAndText>
          <Arrow>
            <FaArrowRight />
          </Arrow>
          <MedalCopper>
            <FaMedal />
          </MedalCopper>
        </ToGet>
      )}
    </Container>
  );
}
