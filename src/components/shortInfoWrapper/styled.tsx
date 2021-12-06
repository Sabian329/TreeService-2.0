import styled from "@emotion/styled";
import { device, size } from "../../theme/MediaQueries";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 25rem;
  max-width: ${size.laptop};
  position: relative;
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;
