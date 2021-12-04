import styled from "@emotion/styled";
import { Colors } from "../../theme/Colors";
import { device } from "../../theme/MediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #454645;
  padding: 1rem;
  border-radius: 10px;
  width: 20rem;
  min-height: 20rem;
  min-height: 15rem;
  height: max-content;
  color: white;
  position: relative;
  margin: 1rem;
  @media ${device.laptop} {
    width: 25rem;
    min-height: 25rem;
  }
  @media ${device.mobileL} {
    width: 20rem;
    min-height: 20rem;
  }
  @media ${device.mobileS} {
    border-radius: unset;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    margin: 12rem 0 1rem 0;

    @media ${device.laptop} {
      margin: 15rem 0 1rem 0;
    }
    @media ${device.mobileL} {
      margin: 12rem 0 1rem 0;
    }
  }
  p {
    font-weight: 300;
    text-align: justify;
  }
  button {
    background-color: green;
    color: #ffffff;
    :hover {
      color: ${Colors.green};
      background-color: #383838;
    }
  }
  img {
    width: 20rem;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 10px 10px 0 0;
    @media ${device.laptop} {
      width: 25rem;
    }
    @media ${device.mobileS} {
      border-radius: unset;
    }
  }
`;
