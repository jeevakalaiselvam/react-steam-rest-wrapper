import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import Page from "../components/pages/Page";

export default function Games() {
  const games = useSelector((state) => state.games.games);
  console.log(games);
  return (
    <>
      <Page title='All Games'>All Games</Page>
    </>
  );
}
