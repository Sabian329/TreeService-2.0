import styled from "@emotion/styled";
import React from "react";
import { MobileBaner } from "../../components/mobileBaner";
import { WorkWrapper } from "../../components/worksWrapper/index";
import { size } from "../../theme/MediaQueries";

export const WorkView = () => {
  return (
    <Wrapper>
      <MobileBaner />
      <WorkWrapper />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: ${size.laptop};
`;
