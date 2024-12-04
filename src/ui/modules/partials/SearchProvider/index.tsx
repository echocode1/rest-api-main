"use client";

import { createContext, useContext, useState } from "react";

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredResults: any[];
  updateFilteredResults: (results: any[]) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<any[]>([]);

  const updateFilteredResults = (results: any[]) => {
    setFilteredResults(results);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filteredResults,
        updateFilteredResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
