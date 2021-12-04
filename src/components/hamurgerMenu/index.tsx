import React, { useState } from "react";
import { Spin as SpinIcon } from "hamburger-react";
import { Blur, IconWrapper, Motion, Navfoot, Wrapper } from "./styled";
import { NavBar } from "../navBar";
import { Colors } from "../../theme/Colors";

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const VariantsNavigation = {
    close: {
      x: 300,
      opacity: 1,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  const VariantsBlur = {
    close: {
      opacity: 1,
      display: "none",
    },
    open: {
      display: "block",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <IconWrapper>
        <SpinIcon
          toggled={isOpen}
          toggle={setOpen}
          color={isOpen ? Colors.green : "#ffff"}
        />
      </IconWrapper>

      <Motion
        variants={VariantsNavigation}
        initial="close"
        animate={isOpen ? "open" : "close"}
      >
        <Wrapper>
          <NavBar />
          <Navfoot>
            <p>made by</p>
            <h1>
              Sabian<em>Węgliński</em> ✌️
            </h1>
          </Navfoot>
        </Wrapper>
      </Motion>
      <Blur
        onClick={() => setOpen(false)}
        variants={VariantsBlur}
        initial="close"
        animate={isOpen ? "open" : "close"}
      />
    </>
  );
};
