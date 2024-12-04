"use client";
import { createTheme } from "@mui/material/styles";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

const theme = createTheme({
  typography: {
    fontFamily: nunitoSans.style.fontFamily,
  },
});

export default theme;
