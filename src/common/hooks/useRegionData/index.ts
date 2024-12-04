"use client";
import { useState, useEffect } from "react";
import Data from "@/ui/data.json";
import { countryApiprops } from "@/common/types/api_endpoint_type";

const useRegionData = (region: string) => {
  const [regionData, setRegionData] = useState<countryApiprops[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Filter the data based on the region passed to the hook
      const filteredData = Data.filter(
        (country) => country.region.includes(region) // Dynamically use the region passed
      );

      setRegionData(filteredData as countryApiprops[]);
      setLoading(false);
    } catch {
      setError("An error occurred while fetching the data.");
      setLoading(false);
    }
  }, [region]); // Dependency array to re-fetch data when region changes

  return { regionData, loading, error };
};

export default useRegionData;
