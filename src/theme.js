import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: `'Poppins', sans-serif`,
        fontWheights: ["400", "800", "900"],
        bg: "hsl(0, 0%, 86%)",
        color: "white",
      },
    },
  },
});

export default extendTheme(theme);
