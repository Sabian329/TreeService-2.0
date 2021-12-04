import styled from "@emotion/styled";
import React from "react";
import { ContactWrapper } from "../../components/contactWrapper";
import { device } from "../../theme/MediaQueries";

export const ContactView = () => {
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
