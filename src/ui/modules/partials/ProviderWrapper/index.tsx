"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { useDefaultTheme } from "@/ui/assets/styles";
import { ApplicationThemeProvider, CountryProvider } from "@/common";
import { SearchProvider } from "../SearchProvider";

const ProviderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ApplicationThemeProvider>
      <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
    </ApplicationThemeProvider>
  );
};

const ThemeProviderWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const theme = useDefaultTheme();

  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <CountryProvider>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            {children}
          </Box>
        </CountryProvider>
      </SearchProvider>
    </ThemeProvider>
  );
};

export default ProviderWrapper;
