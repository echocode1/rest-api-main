"use client";
import { Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchContext } from "../SearchProvider";
import { useState } from "react";
import Data from "@/ui/data.json";
import { useRouter } from "next/navigation";

export const Search = () => {
  const { setSearchTerm } = useSearchContext();
  const [localSearch, setLocalSearch] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    setSearchTerm(localSearch.trim());
    router.push(
      `/sovereign-states/search?q=${encodeURIComponent(localSearch)}`
    );
  };

  return (
    <Input
      value={localSearch}
      placeholder="Search for a country"
      type="search"
      fullWidth
      size="small"
      disableUnderline
      onChange={(e) => setLocalSearch(e.target.value)}
      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      sx={{
        width: "100%",
        padding: "12px 20px 12px 25px",
        borderRadius: "5px",
        fontWeight: 500,
        lineHeight: "24px",
        color: (theme) => theme.palette.text.primary,
        backgroundColor: (theme) => theme.palette.background.paper,
        boxShadow: "0px 0.1px 5px rgba(0, 0, 0, 0.1)",
      }}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon
            sx={{
              color: (theme) => theme.palette.text.primary,
              width: "22px",
              height: "22px",
              marginRight: "20px",
              cursor: "pointer",
            }}
          />
        </InputAdornment>
      }
    />
  );
};
