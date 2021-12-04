import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Footer } from "./components/footer/index";
import { Menu } from "./components/menu/index";
import { AboutView } from "./views/aboutView/index";
import { ContactView } from "./views/contactView/index";
import { MainView } from "./views/mainView/index";
import { NewsView } from "./views/newsView/index";
import { PartnersView } from "./views/partnersView/index";
import { WorkView } from "./views/workView/index";
import styled from "@emotion/styled";

const overrides = extendTheme({
  styles: {
    global: (props: {
      html: { width: string };
      body: { width: string; fontFamily: string; bg: string };
    }) => ({
      html: {
        width: "100%",
      },
      body: {
        width: "100%",
        fontFamily: "body",
        bg: "#000000",
      },
    }),
  },
});

export const App = () => {
  return (
    <Wrapper>
      <ChakraProvider theme={overrides}>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route path="/" element={<MainView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/uslugi" element={<WorkView />} />
            <Route path="/partnerzy" element={<PartnersView />} />
            <Route path="/aktualnosci" element={<NewsView />} />
            <Route path="/kontakt" element={<ContactView />} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </ChakraProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
