import { extendTheme } from "@chakra-ui/react";

export const overrides = extendTheme({
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
