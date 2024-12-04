"use client";
import {
  Box,
  CircularProgress,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import useSovereignStatesApi from "@/common/hooks/useSovereignState";
import { useRouter } from "next/navigation";
import { useCountryContext } from "@/common";

export const AllSovereignState = () => {
  const { error, loading, sovereignState } = useSovereignStatesApi();

  const router = useRouter();
  const { setSelectedCountry } = useCountryContext(); // Access the context to set the selected country

  const handleCardClick = (country: { region?: string; name: string }) => {
    const region = country.region || "Unknown"; // Fallback to "Unknown" if region is undefined
    setSelectedCountry({ ...country, region });

    router.push(
      `/sovereign-states/country-details?region=${region}&country=${country.name}`
    );
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        padding: {
          xs: "0 15px 20px 15px",
          sm: " 0 40px 30px 40px",
          mb: " 0 70px 40px 70px",
          lg: "0 90px 50px 90px",
        },
        gap: {
          xs: 3,
          sm: "30px",
          lg: "60px",
        },
        margin: {
          xs: "0 40px",
          sm: 0,
        },
      }}
    >
      {sovereignState &&
        sovereignState.map((country) => (
          <Box
            key={country.alpha3Code}
            onClick={() => handleCardClick(country)} // Pass the country directly
            sx={{ cursor: "pointer" }}
          >
            <Card
              sx={{
                boxShadow: "2px 3px 7px rgba(0, 0, 0, 0.1)",
                height: "100%",
                padding: 0,
                borderRadius: "10px",
                "& .MuiCardContent-root": {
                  padding: 0,
                  border: "none",
                  boxShadow: "none",
                  backgroundColor: (theme) => theme.palette.background.paper,
                  "&:last-child": {
                    paddingBottom: 0, // Removes extra bottom padding
                  },
                },
              }}
              component="article"
            >
              <CardContent>
                {country.flag && (
                  <Image
                    src={country.flag}
                    alt={`${country.name}-flag`}
                    width={200}
                    height={160}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}

                <Box padding="10px 25px 40px 25px">
                  <Typography
                    variant="body1"
                    component="h2"
                    gutterBottom
                    mb="10px"
                    fontWeight={600}
                    sx={{ color: (theme) => theme.palette.text.primary }}
                  >
                    {country.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: (theme) => theme.palette.text.primary,
                      }}
                    >
                      Population:
                    </Typography>{" "}
                    {country.population?.toLocaleString()}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: (theme) => theme.palette.text.primary,
                      }}
                    >
                      Region:
                    </Typography>{" "}
                    {country.region}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: (theme) => theme.palette.text.primary,
                      }}
                    >
                      Capital:
                    </Typography>{" "}
                    {country.capital}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
    </Box>
  );
};
