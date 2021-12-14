import React from "react";
import { NavBarRoutes } from "../../constans/navBarRoutes";
import { StyledLink, Wrapper } from "./styled";

export const NavBar = () => {
  return (
    <Wrapper>
      {NavBarRoutes.map(({ name, route }: { name: string; route: string }) => (
        <StyledLink key={name} to={route}>
          {name}
        </StyledLink>
      ))}
    </Wrapper>
  );
};
