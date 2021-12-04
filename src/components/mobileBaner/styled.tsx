import styled from "@emotion/styled";
import { device } from "../../theme/MediaQueries";

export const Baner = styled.header`
  width: 100vw;
  height: 7rem;
  background-color: #00000078;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: none;

  p {
    color: #ffffff;
    font-weight: 300;
  }

  h2 {
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 300;
  }
  @media ${device.mobileLL} {
    display: flex;
    position: unset;
    background-color: #222222;
    h2 {
      font-size: 1.5rem;
    }
  }
`;
