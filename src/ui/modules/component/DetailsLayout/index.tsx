import { Header } from "../Header";
import { Box, Container } from "@mui/material";
import { BackButton } from "../../partials";

interface LayoutProps {
  children: React.ReactNode;
}

export const DetailsLayout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        "@media (min-width:1440px)": {
          paddingTop: "50px",
        },
      }}
    >
      <Container
        sx={{
          maxWidth: "1440px",
          width: "100%",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          padding: "0", // Remove default padding to maintain your existing layout
          "@media (min-width:1440px)": {
            margin: "0 auto", // Center the container
          },
        }}
      >
        <Box
          position={"relative"}
          sx={{
            mt: {
              xs: "120px",
              md: "80px",
            },
          }}
        >
          <Header />
          <BackButton />
          {children}
        </Box>
      </Container>
    </Box>
  );
};
