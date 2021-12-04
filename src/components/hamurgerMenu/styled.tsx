import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Motion = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;
  width: 50%;
`;

export const IconWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2002;
`;
export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #202020;
  top: 0;
  right: 0;
  padding: 3rem 0 0 0;
  text-align: left;
  position: relative;
  min-height: 640px;

  img {
    width: 5rem;
  }
  a {
    color: #b9b9b9;
    font-size: 1.5rem;
    &.active {
      color: #ffffff;
      font-weight: 600;
    }
  }
`;

export const Navfoot = styled.div`
  position: absolute;
  bottom: 0;
  margin: 1rem;
  p {
    color: #ffffff;
  }
  h1 {
    color: #e04f5f;
    font-weight: 600;
    em {
      font-style: unset;
      color: #25b6d2;
    }
  }
`;

export const Blur = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #000000c7;
  top: 0;
  left: 0;
  z-index: 100;
`;
