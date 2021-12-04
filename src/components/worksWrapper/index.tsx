import React from "react";
import { Services } from "../../constans/services";
import { Article, WhatWeDo, Wrapper } from "./styled";
import { WorkItem } from "../workiItem/index";
import { motion } from "framer-motion";
import { Heading, Text } from "@chakra-ui/react";

export const WorkWrapper = () => {
  return (
    <>
      <motion.div animate={{ opacity: [0, 1], y: [-300, 0] }}>
        <WhatWeDo>
          <Heading>Co robimy?</Heading>
        </WhatWeDo>
        <Article>
          <Text>
            Zajmujemy się wszystkim co związane z zielenią wysoką i nie tylko
            Usuwamy drzewa alpinistycznie, wykonujemy
            <strong> prace pielęgnacyjne</strong> w koronach drzew, usługi
            rębakiem, frezujemy pnie, kosimy trawniki, formujemy żywopłoty,
            sadzimy i przesadzamy duże drzewa. Ponadto zajmujemy się alpinizmem
            przemysłowym.
          </Text>
        </Article>
      </motion.div>
      <motion.div animate={{ opacity: [0, 1] }}>
        <Wrapper>
          {Services.map((items) => (
            <WorkItem {...items} key={items.id} />
          ))}
        </Wrapper>
      </motion.div>
    </>
  );
};
