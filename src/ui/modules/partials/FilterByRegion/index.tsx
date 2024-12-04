"use client";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDropdown } from "@/common/hooks/useDropDown";
import { useRouter } from "next/navigation";

export const FilteredByRegion = () => {
  const router = useRouter();
  const { isOpen, toggleDropdown, dropdownRef, iconRef } = useDropdown();

  const handleRegionClick = (region: string) => {
    router.push(`/sovereign-states/regions/${region.toLowerCase()}`);
  };

  return (
    <Box width="55%" position="relative">
      <Stack
        direction="row"
        sx={{
          width: "100%",
          padding: "12px 20px 12px 25px",
          borderRadius: "5px",
          backgroundColor: (theme) => theme.palette.background.paper,
          boxShadow: "0px 0.1px 5px rgba(0, 0, 0, 0.1)",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            flexGrow: 1,
            color: (theme) => theme.palette.text.primary,
            fontWeight: 600,
          }}
        >
          Filter by Region
        </Typography>

        <Box
          ref={iconRef}
          onClick={toggleDropdown}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <KeyboardArrowDownIcon
            sx={{
              transition: "transform 0.3s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </Box>
      </Stack>

      <Stack
        ref={dropdownRef}
        sx={{
          position: "absolute",
          width: "100%",
          padding: isOpen ? "12px 20px 12px 25px" : "0 20px",
          borderRadius: "5px",
          backgroundColor: (theme) => theme.palette.background.paper,
          boxShadow: "0px 0.1px 7px rgba(0, 0, 0, 0.1)",
          marginTop: "5px",
          transition: "all 0.5s ease-in-out",
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
          height: isOpen ? "auto" : 0,
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        {["Africa", "America", "Asia", "Europe", "Oceania"].map((region) => (
          <Typography
            key={region}
            variant="subtitle1"
            component="p"
            onClick={() => handleRegionClick(region)}
            sx={{
              color: (theme) => theme.palette.text.primary,
              fontWeight: 600,
              padding: "8px 0",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
              transition: "background-color 0.2s ease",
            }}
          >
            {region}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};
