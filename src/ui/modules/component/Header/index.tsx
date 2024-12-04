"use client";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Link from "next/link";
import { useApplicationTheme } from "@/common";

export const Header = () => {
  const { isDarkMode, setDarkMode } = useApplicationTheme(); // Get theme state and toggle function

  // Function to toggle dark mode
  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode); // Toggle theme
  };

  return (
    <AppBar
      position="fixed"
      component="header"
      sx={{
        boxShadow: "none", // Remove default shadow
        backgroundColor: (theme) => theme.palette.background.paper, // Custom background color
        color: (theme) => theme.palette.text.primary,
        padding: "0", // Custom padding
        margin: "0", // Custom margin
        "&.MuiAppBar-root": {
          backgroundColor: (theme) => theme.palette.background.paper, // Ensure root class override
        },
      }}
    >
      <Toolbar>
        <Link
          href={"/sovereign-states"}
          passHref
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.5px",
              padding: "2rem 0",
              cursor: "pointer",
              textDecoration: "none",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            Where in the world?
          </Typography>
        </Link>

        <Button
          sx={{
            color: "inherit",
            gap: "10px",
            textTransform: "none",
            ml: "auto",
          }}
          onClick={handleThemeToggle}
        >
          <BedtimeIcon />
          <Typography variant="body2" letterSpacing={"0.5px"}>
            Dark Mode
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
