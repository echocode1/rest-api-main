"use client";
import { Box, Button, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        px: "40px",
        mt: "40px",
        mb: "70px",
      }}
    >
      <Button
        type="button"
        onClick={() => router.push("./")}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          p: "10px 0",
          textTransform: "none",
          bgcolor: (theme) => theme.palette.background.paper,
          boxShadow: "2px 3px 7px rgba(0, 0, 0, 0.1)",
          width: {
            xs: "30%",
            md: "20%",
            lg: "15%",
          },
          color: "inherit",
        }}
      >
        <KeyboardBackspaceIcon />
        <Typography variant="body1">Back</Typography>
      </Button>
    </Box>
  );
};
