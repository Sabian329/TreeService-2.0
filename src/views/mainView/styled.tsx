import styled from "@emotion/styled";
import { device } from "../../theme/MediaQueries";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 300;
    color: white;
  }
  iframe {
    width: 60rem;
    height: 30rem;
    margin: 5rem;
    @media ${device.laptop} {
      width: 95vw;
    }
  }
`;
