import React from "react";
import { First, HeadingStyled, TableWrapper, Wrapper } from "./styled";
import { motion } from "framer-motion";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import pin from "../../assets/pin.svg";
import { EmailWrapper } from "../emailWrapper";
import { MobileBaner } from "../mobileBaner";
import { Heading } from "@chakra-ui/layout";

export const ContactWrapper = () => {
  return (
    <>
      <MobileBaner />
      <motion.div animate={{ opacity: [0, 1] }}>
        <Wrapper>
          <HeadingStyled>Kontakt</HeadingStyled>
          <First>
            <TableWrapper>
              <Heading>Jesteśmy gotowi do działania 24/7</Heading>
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <img src={phone} alt="phone" />
                    </th>
                    <td>
                      <a href="tel:+48-603-887-985 ">+48 603 887 985 </a>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <img src={email} alt="phone" />
                    </th>
                    <td>
                      <a href="mailto: praca.mateuszmucha@o2.pl">
                        praca.mateuszmucha@o2.pl
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <img src={pin} alt="phone" />
                    </th>
                    <td>
                      <a
                        href="https://goo.gl/maps/U1amyWnrhrmDP1fH9"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ul Kasprowicza 39 <br /> 58-580 Szklarska Poręba
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableWrapper>
            <EmailWrapper />
          </First>
        </Wrapper>
      </motion.div>
    </>
  );
};
