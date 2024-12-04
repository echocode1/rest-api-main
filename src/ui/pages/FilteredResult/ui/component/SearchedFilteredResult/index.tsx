"use client";
import {
  Box,
  CircularProgress,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import { useFilteredSearch, useCountryContext } from "@/common";
import { useRouter } from "next/navigation";

export const SearchedFilteredResult = () => {
  const { loading, error, filteredData } = useFilteredSearch();

  const router = useRouter();
  const { setSelectedCountry } = useCountryContext(); // Access the context to set the selected country

  const handleCardClick = (country: { region?: string; name: string }) => {
    const region = country.region || "Unknown";
    setSelectedCountry({ ...country, region });

    router.push(
      `/sovereign-states/country-details?region=${region}&country=${country.name}`
    );
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", padding: "2rem" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (filteredData.length === 0) {
    return (
      <Box sx={{ textAlign: "center", padding: "2rem" }}>
        <Typography>No countries match the search criteria.</Typography>
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
      {filteredData.map((country) => (
        <Box
          key={country.alpha3Code}
          sx={{ cursor: "pointer" }}
          onClick={() => handleCardClick(country)} // Pass the country directly
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
                "&:last-child": {
                  paddingBottom: 0,
                },
              },
            }}
            component="article"
          >
            <CardContent>
              {country.flags?.png && (
                <Image
                  src={country.flags.png}
                  alt={`${country.name} flag`}
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
                  sx={{ color: (theme) => theme.palette.text.primary }}
                  mb="10px"
                  fontWeight={600}
                >
                  {country.name}
                </Typography>

                <Typography
                  variant="body2"
                  mb="5px"
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
                  mb="5px"
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
                  mb="5px"
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
