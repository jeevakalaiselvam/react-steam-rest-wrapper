import React from "react";
import styled from "styled-components";
import { FaPercent, FaTrophy } from "react-icons/fa";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  color: #fefefe;
  justify-content: flex-start;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: thin;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-self: flex-start;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CardGame = styled.div`
  margin: 0.5rem;
  background-color: rgba(10, 17, 25, 0.4);
  height: 20vh;
  display: flex;
  padding: 0.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

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
    width: 98%;
  }
  @media only screen and (max-width: 960px) and (min-width: 769px) {
    width: 98%;
  }
  @media only screen and (max-width: 768px) and (min-width: 631px) {
    width: 98%;
  }
  @media only screen and (max-width: 630px) and (min-width: 481px) {
    width: 98%;
  }
  @media only screen and (max-width: 480px) {
    width: 98%;
  }
`;

const ImageCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;

const Image = styled.div`
  background-image: url("${(props) => props.image}");
  background-position: center;
  background-size: cover;
  width: 200px;
  align-self: center;
  height: 100px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 0.5rem;
  justify-content: center;
`;

const DataCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;

const DataSet = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  color: ${(props) => props.color};
  font-size: 3rem;
  justify-content: center;
`;

const Data = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  color: ${(props) => props.color};
  margin-left: 1rem;
  font-size: 3rem;
  justify-content: center;
`;
const Sub = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-left: 1rem;
  font-size: 1rem;
  justify-content: center;
`;

export default function GameContent(props) {
  const game = props.game;

  return (
    <ContentContainer>
      <ContainerInner>
        <CardGame>
          <ImageCard>
            <Image image={game.image}></Image>
            <Name>{game.name}</Name>
          </ImageCard>
          <DataCard>
            <DataSet>
              <Icon color={"gold"}>
                <FaTrophy />
              </Icon>
              <Data>
                {game.completed_achievements_count} /{" "}
                {game.total_achievements_count}
              </Data>
            </DataSet>
            <DataSet>
              <Data color='#a5c93a'>
                {(
                  Number(Number(game.completion_percentage).toFixed(2) / 80) *
                  100
                ).toFixed(2)}{" "}
                %
              </Data>
            </DataSet>
          </DataCard>
        </CardGame>
        <CardGame></CardGame>
      </ContainerInner>
    </ContentContainer>
  );
}
