import { Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { First, Second, Wrapper } from "./styled";
import whoimg from "../../assets/who.jpg";
import whoimg2 from "../../assets/nr1.jpg";

export const WhoAreWrapper = () => {
  return (
    <>
      <Wrapper>
        <Heading>Kim jesteśmy?</Heading>
        <First>
          <Text>
            {" "}
            <strong>TREE SERVICE</strong> jest profesjonalną, w pełni
            ubezpieczoną firma arborystyczną. Od ponad 15 lat zajmuje się
            prowadzeniem prac na wysokości, a od 5 lat pracami na drzewach,
            obejmującymi zarówno wycinkę jak i pielęgnację drzew, zgodnie z
            wymogami <strong>European Arboricultural Council (AEC).</strong>{" "}
            Dzięki wieloletniemu doświadczeniu, specjalistycznej wiedzy oraz
            profesjonalnemu wyposażeniu firma TREE SERVICE wykonuje każde, nawet
            najtrudniejsze zadania.
          </Text>
          <img src={whoimg} alt="tree service at work" />
        </First>
        <Heading>European Arboricultural Council</Heading>
        <Second>
          <Text>
            {" "}
            <strong>Europejska Rada do Spraw Drzew (EAC)</strong> jest forum
            europejskim, mającym na celu podnoszenie statusu i profesjonalnego
            poziomu kompetencji w uprawie drzew, co jest osiągane przez badania
            i edukację. W EAC znajdują się organizacje arborystyczne z Austrii,
            Belgii, Chorwacji, Czech, Danii, Finlandii, Niemiec, Francji, Włoch,
            Holandii, Norwegii, Polski, Rumunii, Hiszpanii, Szwecji, Szwajcarii
            i Wielkiej Brytanii. <strong>EAC</strong> realizuje swoje cele
            poprzez organizowanie jednolitych szkoleń:
            <strong> European Tree Worker</strong>, którego zadaniem jest
            wykształcenie arborystów.
          </Text>
          <img src={whoimg2} alt="tree service at work" />
        </Second>
      </Wrapper>
    </>
  );
};
