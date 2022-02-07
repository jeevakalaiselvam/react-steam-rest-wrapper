import React from "react";
import {
  FaCheck,
  FaClock,
  FaHourglass,
  FaMedal,
  FaTrophy,
} from "react-icons/fa";
import styled from "styled-components";
import {
  PERCENTAGE_BRONZE,
  PERCENTAGE_COPPER,
  PERCENTAGE_GOLD,
  PERCENTAGE_GREEN,
  PERCENTAGE_PURPLE,
} from "../../constants/percentage";
import {
  COMPLETION_TARGET,
  SELECTED_GAME,
  SELECTED_GAME_COMPLETED,
  SELECTED_GAME_COMPLETED_PERCETAGE,
  SELECTED_GAME_TOTAL,
  TARGET_DEFAULT_COMPLETION,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../../helper/storage";

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

  @media only screen and (min-width: 1451px) {
    width: 18%;
    height: 12vh;
  }
  @media only screen and (max-width: 1450px) and (min-width: 1401px) {
    width: 22%;
    height: 12vh;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1361px) {
    width: 30%;
    height: 12vh;
  }
  @media only screen and (max-width: 1360px) and (min-width: 1201px) {
    width: 30%;
    height: 12vh;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1061px) {
    width: 30%;
    height: 12vh;
  }
  @media only screen and (max-width: 1060px) and (min-width: 961px) {
    width: 46%;
    height: 14vh;
  }
  @media only screen and (max-width: 960px) and (min-width: 769px) {
    width: 46%;
    height: 14vh;
  }
  @media only screen and (max-width: 768px) and (min-width: 631px) {
    width: 46%;
    height: 14vh;
  }
  @media only screen and (max-width: 630px) and (min-width: 481px) {
    width: 46%;
    height: 14vh;
  }
  @media only screen and (max-width: 480px) {
    width: 46%;
    height: 14vh;
  }
`;

const IconInner = styled.div`
  font-size: 1rem;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(10, 17, 25, 0.8);
  display: flex;
  padding: 0.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  font-size: 1rem;
`;

const AchievementData = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #fefefe;
  justify-content: flex-start;
  padding: 0.25rem 0.5rem;
`;

const GoldMedal = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: #fecc09;
  justify-content: flex-end;
`;

const PurpleMedal = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: #b666d2;
  justify-content: flex-end;
`;

const GreenMedal = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: #a6ff00;
  justify-content: flex-end;
`;

const BronzeMedal = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: #c0c0c0;
  justify-content: flex-end;
`;

const CopperMedal = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: #cd7f32;
  justify-content: flex-end;
`;

const IconStarted = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: #fefefe;
  font-size: 0.9rem;
  justify-content: flex-end;
`;

const AchievementCount = styled.div`
  margin-left: 0.25rem;
  font-size: 0.9rem;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const AchivementCountData = styled.div`
  display: flex;
`;

export default function GameCardNormal(props) {
  const {
    image,
    completion_percentage,
    completed_achievements_count,
    total_achievements_count,
  } = props.game;

  const getRemainingForTarget = () => {
    // const completionTarget =
    //   _STORAGE_READ(COMPLETION_TARGET) ?? TARGET_DEFAULT_COMPLETION;

    return {
      toGold: Math.ceil(
        (PERCENTAGE_GOLD / 100) * total_achievements_count -
          completed_achievements_count
      ),
      toPurple: Math.ceil(
        (PERCENTAGE_PURPLE / 100) * total_achievements_count -
          completed_achievements_count
      ),
      toGreen: Math.ceil(
        (PERCENTAGE_GREEN / 100) * total_achievements_count -
          completed_achievements_count
      ),
      toBronze: Math.ceil(
        (PERCENTAGE_BRONZE / 100) * total_achievements_count -
          completed_achievements_count
      ),
      toCopper: Math.ceil(
        (PERCENTAGE_COPPER / 100) * total_achievements_count -
          completed_achievements_count
      ),
    };
    //return `${completed_achievements_count}/${total_achievements_count}`
  };

  return (
    <Card
      image={image}
      onClick={() => {
        _STORAGE_WRITE(SELECTED_GAME, props.game.id);
        _STORAGE_WRITE(
          SELECTED_GAME_COMPLETED_PERCETAGE,
          props.game.completion_percentage
        );
        _STORAGE_WRITE(
          SELECTED_GAME_TOTAL,
          props.game.total_achievements_count
        );
        _STORAGE_WRITE(
          SELECTED_GAME_COMPLETED,
          props.game.completed_achievements_count
        );
        window.location.href = "/game";
      }}
    >
      <InnerContainer>
        {/* <AchivementCountData>
          {getRemainingForTarget().toGold > 0 && <AchievementData>
            <IconInner color="#fecc09">
              <FaTrophy />
            </IconInner>
            <AchievementCount>
              { getRemainingForTarget().toGold}
            </AchievementCount>
          </AchievementData>}
          {getRemainingForTarget().toPurple > 0 && <AchievementData>
            <IconInner color="#b666d2">
              <FaTrophy />
            </IconInner>
            <AchievementCount>
              { getRemainingForTarget().toPurple}
            </AchievementCount>
          </AchievementData>}
          {getRemainingForTarget().toGreen > 0 && <AchievementData>
            <IconInner color="#a6ff00">
              <FaTrophy />
            </IconInner>
            <AchievementCount>
              { getRemainingForTarget().toGreen}
            </AchievementCount>
          </AchievementData>}
          {getRemainingForTarget().toBronze > 0 && <AchievementData>
            <IconInner color="#CD7F32">
              <FaTrophy />
            </IconInner>
            <AchievementCount>
              { getRemainingForTarget().toBronze}
            </AchievementCount>
          </AchievementData>}
        </AchivementCountData> */}
        {+completion_percentage === 100 && (
          <GoldMedal>
            <FaMedal />
          </GoldMedal>
        )}
        {/* {+completion_percentage === 100 && (
          <GoldMedal>
            <FaMedal />
          </GoldMedal>
        )}
        {+completion_percentage < PERCENTAGE_GOLD &&
          +completion_percentage >= PERCENTAGE_PURPLE && (
            <PurpleMedal>
              <FaMedal />
            </PurpleMedal>
          )}
        {+completion_percentage < PERCENTAGE_PURPLE &&
          +completion_percentage >= PERCENTAGE_GREEN && (
            <GreenMedal>
              <FaMedal />
            </GreenMedal>
          )}
        {+completion_percentage < PERCENTAGE_GREEN &&
          +completion_percentage >= PERCENTAGE_BRONZE && (
            <BronzeMedal>
              <FaMedal />
            </BronzeMedal>
          )}
        {+completion_percentage < PERCENTAGE_BRONZE &&
          +completion_percentage >= PERCENTAGE_COPPER && (
            <CopperMedal>
              <FaMedal />
            </CopperMedal>
          )} */}
        {+completion_percentage < PERCENTAGE_COPPER &&
          +completion_percentage !== 0 && (
            <IconStarted>
              <FaClock />
            </IconStarted>
          )}
        {+completion_percentage === 0 && (
          <IconStarted>
            <FaHourglass />
          </IconStarted>
        )}
        {/* {+completion_percentage <
          Number(
            _STORAGE_READ(COMPLETION_TARGET) ?? TARGET_DEFAULT_COMPLETION
          ) &&
          +completion_percentage > 0 && (
            <IconStarted>
              <FaHourglass />
            </IconStarted>
          )} */}
      </InnerContainer>
    </Card>
  );
}
