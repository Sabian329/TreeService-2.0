import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { ContactWrapper } from "../../components/contactWrapper";
import { device } from "../../theme/MediaQueries";

export const ContactView = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <Wrapper>
      <ContactWrapper />
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
