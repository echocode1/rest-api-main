"use client";
import { useState, useEffect } from "react";
import { useCountryContext } from "@/common";
import useSovereignStatesApi from "../useSovereignState";
import { countryApiprops } from "@/common/types/api_endpoint_type";

interface UseDetailsDataReturn {
  region: string | null;
  country: string | null;
  error: string | null;
  loading: boolean;
  countryData: countryApiprops | null;
  getBorderCountryName: (borderCode: string) => string;
}

export const useCountryDetails = (): UseDetailsDataReturn => {
  // State declarations
  const [region, setRegion] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  // Context and API hooks
  const { setSelectedCountry } = useCountryContext();
  const { error, loading, sovereignState } = useSovereignStatesApi();

  // useEffect for URL params and context update
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const regionParam = params.get("region");
    const countryParam = params.get("country");

    setRegion(regionParam);
    setCountry(countryParam);

    if (regionParam && countryParam) {
      setSelectedCountry({ region: regionParam, name: countryParam });
    }
  }, [setSelectedCountry]);

  // Find country data and ensure null return instead of undefined
  const countryData: countryApiprops | null =
    sovereignState?.find((state) => state.name === country) || null;

  // Get border country name function
  const getBorderCountryName = (borderCode: string): string => {
    return (
      sovereignState?.find((state) => state.alpha3Code === borderCode)?.name ||
      borderCode
    );
  };

  // Return all necessary data and functions
  return {
    region,
    country,
    error,
    loading,
    countryData,
    getBorderCountryName,
  };
};
