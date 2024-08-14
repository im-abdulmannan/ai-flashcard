"use client";
import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#5b5d6e",
      secondary: "#2c2c2c",
    }
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.8rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    p: {
      color: "#2c2c2c",
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.2rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          backgroundColor: "#f2f3f3",
          color: "#5b5d6e",
        },
        "::-webkit-scroll-behavior": {
          scrollbarBehavior: "smooth",
        },
        "::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#9fa1ad",
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#5b5d6a",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#e7e7ec",
        },
      }),
    },
  },
});

export default theme;

/*
#f2f3f3	(242,243,243)
#e7e7ec	(231,231,236)
#cacbd2	(202,203,210)
#9fa1ad	(159,161,173)
#5b5d6a	(91,93,106)
*/
