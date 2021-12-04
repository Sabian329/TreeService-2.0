import styled from "@emotion/styled";
import { Colors } from "../../theme/Colors";
import { device, size } from "../../theme/MediaQueries";

export const ExampleContainer = styled.div`
  width: 60rem;
  height: 30rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: ${size.laptop};
  @media ${device.mobileLL} {
    width: 100vw;
    height: 25rem;
  }
  img {
    top: 0;
    position: absolute;
    max-width: ${size.laptop};
    border-radius: 0 0 10px 10px;
    @media ${device.mobileLL} {
      height: 25rem;
      border-radius: unset;
      border-bottom: 3px solid ${Colors.green};
      border-top: 3px solid ${Colors.green};
    }
  }
`;
export const Next = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  top: 51%;
  right: 0;
`;

export const Prev = styled.div`
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  left: 10px;
  transform: scale(-1);
  top: 51%;
  right: 0;
`;
export const Baner = styled.div`
  display: flex;
  flex-direction: column;
  top: 35%;
  width: 100%;
  height: 7rem;
  background-color: #00000078;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
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
    position: unset;
    background-color: #222222;
    h2 {
      font-size: 1.5rem;
    }
  }
`;
