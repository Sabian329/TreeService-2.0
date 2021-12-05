import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { ShortInfoWrapper } from "../../components/shortInfoWrapper";
import { SlideShow } from "../../components/slideShow";
import { Wrapper } from "./styled";

export const MainView = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <Wrapper>
        <SlideShow />
        <Heading margin="2rem">Główne Prace</Heading>
        <ShortInfoWrapper />
        <iframe
          src="https://www.youtube.com/embed/CTh4W5ChO0g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Wrapper>
    </motion.div>
  );
};
