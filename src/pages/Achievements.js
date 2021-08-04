import React, { useState } from "react";

import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import Page from "../components/pages/Page";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Achievements() {
  return (
    <>
      <Page title='All Achievements'>All Achievements</Page>
    </>
  );
}
