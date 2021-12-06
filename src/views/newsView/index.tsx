import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { ApiNews } from "../../components/apiNews";
import { size } from "../../theme/MediaQueries";

export const NewsView = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <Wrapper>
      <ApiNews />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: ${size.laptop};
  min-height: 100vh;
  overflow: hidden;
`;
