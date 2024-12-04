"use client";
import { useState, useEffect } from "react";
import data from "@/ui/data.json"; // Importing static JSON data
import { countryApiprops } from "@/common/types/api_endpoint_type";

const useSovereignStatesApi = () => {
  const [sovereignState, setSovereignState] = useState<
    countryApiprops[] | null
  >(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching static data
    const fetchData = async () => {
      try {
        // Simulating data assignment with a delay (useful for mocking API)
        await new Promise((resolve) => setTimeout(resolve, 500));
        setSovereignState(data as countryApiprops[]);
        setLoading(false);
      } catch {
        setError("An error occurred while fetching the data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { sovereignState, loading, error };
};

export default useSovereignStatesApi;
