"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the types for selectedCountry and the context
interface Country {
  region: string;
  name: string;
}

interface CountryContextType {
  selectedCountry: Country | null;
  setSelectedCountry: React.Dispatch<React.SetStateAction<Country | null>>;
}

// Create the context with a default value
const CountryContext = createContext<CountryContextType | undefined>(undefined);

// Country provider component to share the context
interface CountryProviderProps {
  children: ReactNode;
}

export const CountryProvider = ({ children }: CountryProviderProps) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

// Custom hook to use country context
export const useCountryContext = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
};
