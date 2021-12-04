import React from "react";
import { StyledLink, Wrapper } from "./styled";

export const NavBar = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Strona główna</StyledLink>
      <StyledLink to="/about">O nas</StyledLink>
      <StyledLink to="/uslugi">Usługi</StyledLink>
      <StyledLink to="/aktualnosci">Aktualności</StyledLink>
      <StyledLink to="/partnerzy">Partnerzy</StyledLink>
      <StyledLink to="/kontakt">Kontakt</StyledLink>
    </Wrapper>
  );
};
