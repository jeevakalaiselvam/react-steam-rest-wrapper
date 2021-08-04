import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import Page from "../components/pages/Page";
import { useSelector, useDispatch } from "react-redux";

export default function Homepage() {
  const games = useSelector((state) => state.games.games);

  return (
    <>
      <Page title='Overview'>Overview</Page>
    </>
  );
}
