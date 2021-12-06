import { Box, Heading, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Wrapper } from "./styled";
import { Button } from "@chakra-ui/button";
import { Collapse } from "@chakra-ui/transition";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { IshortInfo } from "../../constans/interfaces";

export const ShortInfoItem = ({ title, content, photo }: IshortInfo) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <Wrapper>
      <img src={photo} alt={title} />
      <Heading>{title}</Heading>
      <Button onClick={() => setVisible(!isVisible)}>
        {isVisible ? "czytaj mniej" : "czytaj więcej"}
        <motion.div animate={{ rotate: !isVisible ? "0deg" : "180deg" }}>
          <ChevronDownIcon />
        </motion.div>
      </Button>
      <Collapse in={isVisible} animateOpacity>
        <Box color="white" mt="4" rounded="md">
          <article>
            <Text>{content}</Text>
          </article>
        </Box>
      </Collapse>
    </Wrapper>
  );
};
