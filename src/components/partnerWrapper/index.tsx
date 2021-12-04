import React from "react";
import { Heading, Text } from "@chakra-ui/layout";
import { First, Second, Wrapper } from "./styled";
import dendro from "../../assets/dendro.png";
import alpine from "../../assets/alpine.png";
import { motion } from "framer-motion";

export const PartnerWrapper = () => {
  return (
    <>
      <motion.div animate={{ opacity: [0, 1] }}>
        <Wrapper>
          <Heading>Dendro Project Rafał Jaworowski</Heading>
          <First>
            <Text>
              Firma zajmuje się inwentaryzacjami drzew i krzewów na cel
              uzyskania pozwoleń na wycinkę, w tym prowadzeniem procedur
              administracyjnych, planami gospodarki drzewostanem,
              inwentaryzacjami drzew i krzewów w zabytkowych parkach, ochroną
              drzew na placu budowy, opiniami dendrologicznymi i nadzorem nad
              prawidłowością prowadzonych prac, projektami zieleni i innymi
              zagadnieniami z dziedziny dendrologii, arborystyki i architektury
              krajobrazu.
            </Text>
            <img src={dendro} alt="Dendro Project Rafał Jaworowski" />
          </First>
          <Heading>Alpin Expert</Heading>
          <Second>
            <Text>
              Alpin Expert jest firma wykonującą prace budowlane z
              wykorzystaniem sprzętu do pracy na wysokości. Firma świadczy
              specjalistyczne usługi związane z piaskowaniem, malowaniem dachów,
              montażem rur na mostach i wiaduktach. Profesjonalny zespół firmy
              Alpin Expert zapewnia najwyższy standard świadczonych usług.
            </Text>
            <img src={alpine} alt="Alpin Expert" />
          </Second>
        </Wrapper>
      </motion.div>
    </>
  );
};
