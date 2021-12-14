import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Collapse } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Image,
  ModalBodyStyled,
  ModalContentStyled,
  ModalHeaderStyled,
  Wrapper,
} from "./styled";
import { Modal, ModalOverlay, ModalCloseButton } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { IWorkItem } from "../../constans/interfaces";

export const WorkItem = ({ title, content, photo }: IWorkItem) => {
  const [isVisible, setVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Wrapper>
      <Image onClick={onOpen}>
        <img src={photo} alt={title} />
      </Image>
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
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContentStyled>
          <ModalHeaderStyled>{title}</ModalHeaderStyled>
          <ModalCloseButton />
          <ModalBodyStyled>
            <img src={photo} alt={title} onClick={onClose} />
          </ModalBodyStyled>
        </ModalContentStyled>
      </Modal>
    </Wrapper>
  );
};
