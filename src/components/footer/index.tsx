import React from "react";
import { Heading } from "@chakra-ui/layout";
import { FooterWrapper } from "./styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Heading fontWeight="light">
        <a href="/">
          <strong> TREE SERVICE</strong>
        </a>
      </Heading>

      <a href="tel:+48-603-887-985">+48 603 887 985</a>
      <a href="mailto: praca.mateuszmucha@o2.pl">praca.mateuszmucha@o2.pl</a>
      <Heading> &copy; 2022 All rights reserved </Heading>
    </FooterWrapper>
  );
};
