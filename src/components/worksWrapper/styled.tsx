import styled from "@emotion/styled";
import { device } from "../../theme/MediaQueries";

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: ;
`;
export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  background-color: #3f3f3f;
  width: 56rem;
  padding: 1rem 2rem 2rem 2rem;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 2rem;
  @media ${device.laptop} {
    width: 25rem;
  }
  @media ${device.mobileL} {
    width: 20rem;
    width: 100vw;
    border-radius: unset;
  }
  p {
    font-weight: 300;
    text-align: justify;
    font-size: 1.1rem;
  }
`;

export const WhatWeDo = styled.header`
  margin: 2rem auto;
  padding: 0.5rem;
  font-weight: 300;
  width: 56rem;
  border-radius: 10px;
  background-color: #008000;
  @media ${device.laptop} {
    width: 25rem;
  }
  @media ${device.mobileL} {
    width: 100vw;
    border-radius: unset;
  }
  h2 {
    color: #ffffff;
    font-weight: 300;
    padding: 0.5rem;
  }
`;
