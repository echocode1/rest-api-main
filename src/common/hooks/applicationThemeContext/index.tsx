"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ApplicationThemeContextProps = {
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
};

export const ApplicationThemeContext = createContext<
  ApplicationThemeContextProps | undefined
>(undefined);

type ApplicationProviderProps = {
  children: ReactNode;
};

export const ApplicationThemeProvider = ({
  children,
}: ApplicationProviderProps) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false); // Default to light mode
  useEffect(() => {
    // Check localStorage after the initial render
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true); // Switch to dark mode if stored value is "dark"
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever `isDarkMode` changes
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleSetDarkMode = (isDark: boolean) => {
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <ApplicationThemeContext.Provider
      value={{
        isDarkMode,
        setDarkMode: handleSetDarkMode,
      }}
    >
      {children}
    </ApplicationThemeContext.Provider>
  );
};

// Custom Hook
export const useApplicationTheme = () => {
  const context = useContext(ApplicationThemeContext);

  if (!context) {
    throw new Error(
      "useApplicationTheme must be used within ApplicationThemeProvider"
    );
  }

  return context;
};
