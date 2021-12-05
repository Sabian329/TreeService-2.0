import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { MobileBaner } from "../../components/mobileBaner";
import { PartnerWrapper } from "../../components/partnerWrapper";
import { device } from "../../theme/MediaQueries";

export const PartnersView = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <Wrapper>
      <MobileBaner />
      <PartnerWrapper />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: ${device.laptop};
  min-height: 100vh;
`;
