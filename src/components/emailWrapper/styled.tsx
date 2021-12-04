import { Heading } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import { device } from "../../theme/MediaQueries";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  background-color: #8d8c8c;
  color: #000000;
  border-radius: 10px;
  width: 22rem;
  margin-top: 2rem;
  @media ${device.mobileL} {
    width: 19rem;
    margin: 4rem 0 0 0;
  }
  button {
    color: #ffffff;
  }
  img {
    width: 10rem;
  }
  textArea {
    background-color: #ffffff;
    margin: 0 0 1rem 0;
  }
  input {
    background-color: #ffffff;
  }
  h2 {
  }
  p {
    padding: 0.5rem;
    color: #ffffff;
  }
`;
export const DeliveredText = styled.p`
  text-align: center;
  font-size: 0.9rem;
`;
export const Correct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin: auto;
  img {
    margin: auto;
    width: 2rem;
  }
`;
export const HeadingStyled = styled(Heading)`
  font-weight: 300;
  text-align: center;
  font-size: 2rem;
  color: white;
  width: unset;
  background-color: unset;
`;
