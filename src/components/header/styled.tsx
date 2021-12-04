import styled from "@emotion/styled";
import { Colors } from "../../theme/Colors";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(41, 41, 41);
  z-index: 100;
  height: 4rem;
  z-index: 100;
  width: 100vw;

  h2 {
    color: white;
    font-weight: 300;
    font-size: 2rem;
    cursor: pointer;
    margin-left: 0.5rem;
    :hover {
      color: ${Colors.green};
    }
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 980px;
  width: 100vw;
`;
