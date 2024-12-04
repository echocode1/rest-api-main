"use client";
import { useState, useEffect, useMemo } from "react";
import Data from "@/ui/data.json";
import { countryApiprops } from "@/common/types/api_endpoint_type";

const useHomeCountryApi = () => {
  const [data, setData] = useState<countryApiprops[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const defaultHomeCountries = useMemo(
    () => [
      "Germany",
      "United States of America",
      "Brazil",
      "Iceland",
      "Afghanistan",
      "Åland Islands",
      "Albania",
      "Algeria",
    ],
    []
  );

  useEffect(() => {
    try {
      const filteredData = Data.filter((country) =>
        defaultHomeCountries.includes(country.name)
      );
      const sortedData = filteredData.sort(
        (a, b) =>
          defaultHomeCountries.findIndex((c) => c === a.name) -
          defaultHomeCountries.findIndex((c) => c === b.name)
      );
      setData(sortedData as countryApiprops[]);
      setLoading(false);
    } catch {
      setError("An error occurred while fetching the data.");
      setLoading(false);
    }
  }, [defaultHomeCountries]);

  return { data, loading, error };
};

export default useHomeCountryApi;
