import React, { useContext } from "react";
import { GamesContext } from "../context/GameContext";
import styled from "styled-components";

const RightMenu = styled.div`
  padding: 0.5rem;
`;

const OptionItem = styled.div`
  font-size: 0.9rem;
`;

export default function GamesPageRightMenu() {
  const [games] = useContext(GamesContext);

  const sortGamesByPlaytime = () => {};

  const sortGamesByCompletion = () => {};

  return (
    <RightMenu>
      <OptionItem onClick={() => sortGamesByPlaytime()}>
        Sort by playtime
      </OptionItem>
      <OptionItem onClick={() => sortGamesByCompletion()}>
        Sort by completion
      </OptionItem>
    </RightMenu>
  );
}
