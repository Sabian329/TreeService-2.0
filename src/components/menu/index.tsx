import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HamburgerMenu } from "../hamurgerMenu/index";
import { Header } from "../header";

export const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const screenSize = useWindowSize();

  useEffect(
    () => (screenSize.width <= 665 ? setIsMobile(true) : setIsMobile(false)),
    [screenSize.width, isMobile]
  );
  return <>{!isMobile ? <Header /> : <HamburgerMenu />}</>;
};
