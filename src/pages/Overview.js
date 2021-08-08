import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import GamesPageRight from "../sidebar/GamesPageRight";
import OverviewContent from "../content/OverviewContent";
import { fetchOverlayImages } from "../action/games";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
  background-image: yellow;
`;

export default function Overview() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading((old) => true);
    const getOverlayImages = async () => {
      const allImages = await fetchOverlayImages();
      console.log("EFFECT OVERLAY PAGES EFFECT -> ", allImages);
    };
    getOverlayImages();
    setLoading((old) => false);
  }, []);

  return (
    <PageContainer>
      <Header />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={<></>}
        content={<OverviewContent />}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"0px"}
        loading={loading}
      />
    </PageContainer>
  );
}
