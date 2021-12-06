import { ModalBody, ModalContent, ModalHeader } from "@chakra-ui/modal";
import styled from "@emotion/styled";
import { Colors } from "../../theme/Colors";
import { device } from "../../theme/MediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #454645;
  padding: 1rem;
  border-radius: 10px;
  width: 27rem;
  min-height: 25rem;
  height: max-content;
  color: white;
  position: relative;
  margin: 1rem;
  button {
    background-color: green;
    color: #ffffff;
    :hover {
      color: ${Colors.green};
      background-color: #383838;
    }
  }
  @media ${device.laptop} {
    width: 25rem;
    min-height: 25rem;
  }
  @media ${device.mobileL} {
    width: 20rem;
    min-height: 20rem;
  }
  @media ${device.mobileS} {
  }
  h2 {
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    margin: 15rem 0 1rem 0;
    @media ${device.laptop} {
      margin: 15rem 0 1rem 0;
    }
    @media ${device.mobileL} {
      margin: 12rem 0 1rem 0;
    }
  }
  p {
    padding: 0.5rem;
    font-size: 1.1rem;
    font-weight: 300;
    text-align: justify;
  }
`;
export const Image = styled.div`
  width: 27rem;
  height: 15rem;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 25rem;
  }
  @media ${device.mobileL} {
    width: 20rem;
    height: 12rem;
  }
`;

export const ModalContentStyled = styled(ModalContent)`
  background-color: #007e00;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 60vw;
  border-radius: 12px;
  @media ${device.mobileL} {
    max-width: 100vw;
    width: 100vw;
  } ;
`;
export const ModalBodyStyled = styled(ModalBody)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 60vw;
  @media ${device.mobileL} {
    width: 100vw;
  }
  img {
    width: 100%;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
  }
`;
export const ModalHeaderStyled = styled(ModalHeader)`
  font-weight: 300;
  font-size: 1.5rem;
`;
