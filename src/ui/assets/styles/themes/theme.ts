"use client";

import { useMemo } from "react";
import { createTheme, PaletteOptions } from "@mui/material/styles";
import { useApplicationTheme } from "@/common";

const lightPalette: PaletteOptions = {
  mode: "light",
  background: {
    default: "#fafafa",
    paper: "#fff",
  },
  text: {
    primary: "#111517",
    secondary: "#858585",
  },
};

const darkPalette: PaletteOptions = {
  mode: "dark",
  background: {
    default: "hsl(207, 26%, 17%)",
    paper: "hsl(209, 23%, 22%)",
  },
  text: {
    primary: "#ffffff",
    secondary: "#bbbbbb",
  },
};

export const useDefaultTheme = () => {
  const { isDarkMode } = useApplicationTheme();

  return useMemo(() => {
    return createTheme({
      palette: isDarkMode ? darkPalette : lightPalette,
      typography: {
        fontFamily: '"Nunito Sans", sans-serif', // Ensure the font is set globally
      },
    });
  }, [isDarkMode]);
};
