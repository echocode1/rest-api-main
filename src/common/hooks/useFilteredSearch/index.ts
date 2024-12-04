"use client";

import { useState, useEffect } from "react";
import { countryApiprops } from "@/common/types/api_endpoint_type";
import { useSearchContext } from "@/ui/modules";
import Data from "@/ui/data.json";

export const useFilteredSearch = () => {
  const { searchTerm, filteredResults, updateFilteredResults } =
    useSearchContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [allCountries, setAllCountries] = useState<countryApiprops[]>([]);

  useEffect(() => {
    try {
      setLoading(true);
      const countries = Data as countryApiprops[];
      setAllCountries(countries);
      setLoading(false);
    } catch {
      setError("An error occurred while loading country data.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      updateFilteredResults([]);
      return;
    }

    try {
      setLoading(true);

      const filteredData = allCountries.filter((country) =>
        ["name", "region", "capital", "subregion"]
          .map((key) => {
            const value = country[key as keyof countryApiprops];
            // Ensure only strings are processed
            return typeof value === "string" ? value.toLowerCase() : null;
          })
          .some((value) =>
            value ? value.includes(searchTerm.toLowerCase()) : false
          )
      );

      updateFilteredResults(filteredData);
      setLoading(false);
    } catch {
      setError("An error occurred while filtering data.");
      setLoading(false);
    }
  }, [searchTerm, allCountries, updateFilteredResults]);

  return { loading, error, filteredData: filteredResults };
};
