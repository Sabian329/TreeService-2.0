import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { MobileBaner } from "../../components/mobileBaner";
import { WhoAreWrapper } from "../../components/whoAreWrapper";
import { device } from "../../theme/MediaQueries";

export const AboutView = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <Wrapper>
        <MobileBaner />
        <WhoAreWrapper />
      </Wrapper>
    </motion.div>
  );
};
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: ${device.laptop};
  min-height: 100vh;
`;
