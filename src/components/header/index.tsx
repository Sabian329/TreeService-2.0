import React from "react";
import { Heading } from "@chakra-ui/react";
import { NavBar } from "../navBar";
import { Content, Wrapper } from "./styled";
export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <a href="/">
          <Heading>{`${"tree service".toUpperCase()}`}</Heading>
        </a>
        <NavBar />
      </Content>
    </Wrapper>
  );
};
