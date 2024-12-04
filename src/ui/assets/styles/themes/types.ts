// src/theme.d.ts
import "@mui/material/styles";

export interface RegionStyle {
  bgColor: string;
  text: {
    primary: string;
    secondary: string;
  };
  shadow: string;
}

export interface CustomTheme {
  region: RegionStyle;
}

// Extend the Theme and ThemeOptions interfaces from MUI
declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends Partial<CustomTheme> {}
}
