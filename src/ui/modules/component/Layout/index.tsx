import { Header } from "../Header";
import { Search, FilteredByRegion } from "../../partials";
import { Box, Stack } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      position={"relative"}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        "@media (min-width:1440px)": {
          paddingTop: "50px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          padding: 0, // Remove default padding
          margin: 0, // Remove margin for all screen sizes
          "@media (min-width:1440px)": {
            margin: "0 auto",
            boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
            border: "none",
          },
        }}
      >
        <Box position={"relative"}>
          <Header />
          <Stack
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
              gap: {
                xs: "40px",
                md: "auto",
              },
              padding: {
                xs: "20px 15px 0 15px",
                sm: "30px 40px 0 40px",
                mb: "40px 70px 0 70px",
                lg: "50px 90px 0 90px",
              },
              mb: 4,
              mt: {
                xs: "100px",
                md: "50px",
              },
            }}
          >
            <Search />
            <FilteredByRegion />
          </Stack>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
