import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Baner, ExampleContainer } from "./styled";
import { Heading, Text } from "@chakra-ui/react";
import { images } from "../../constans/images";
import { useWindowSize } from "../../hooks/useWindowSize";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      duration: 2,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      duration: 2,
    };
  },
};

export const SlideShow = () => {
  const [isMobile, setIsMobile] = useState(false);
  const screenSize = useWindowSize();

  useEffect(
    () => (screenSize.width <= 665 ? setIsMobile(true) : setIsMobile(false)),
    [screenSize.width, isMobile]
  );

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  window.setTimeout(() => paginate(1), 7000);
  return (
    <>
      {isMobile && (
        <Baner>
          <Heading>TREE SERVICE</Heading>
          <Text>Wycinka i pielęgnacja drzew</Text>
        </Baner>
      )}

      <motion.div
        animate={{
          y: [-700, 0],
        }}
        transition={{ duration: 1.2 }}
      >
        <ExampleContainer>
          {!isMobile && (
            <Baner>
              <Heading>Wycinka i pielęgnacja drzew</Heading>
            </Baner>
          )}

          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "Inertia", stiffness: 300, damping: 30 },
                opacity: { duration: 1 },
              }}
            />
          </AnimatePresence>
        </ExampleContainer>
      </motion.div>
    </>
  );
};
