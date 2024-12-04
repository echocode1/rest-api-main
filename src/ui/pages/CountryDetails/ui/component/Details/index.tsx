"use client";
import { Box, CircularProgress, Typography, Stack } from "@mui/material";
import Image from "next/image";
import { useCountryDetails } from "@/common/hooks/useCountryDetails";
import { Repeat } from "@mui/icons-material";

export const DetailsPage = () => {
  const { error, loading, countryData, getBorderCountryName } =
    useCountryDetails();

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

  if (!countryData) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography color="error">Country not found</Typography>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: "0 15px 20px 15px",
          sm: " 0 40px 30px 40px",
          mb: " 0 70px 40px 70px",
          lg: "0 90px 50px 90px",
        },
        margin: {
          xs: "15px",
          md: "20px",
          lg: "25px",
        },
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "20px", lg: "45px" },
        }}
      >
        <Box sx={{ flex: { xs: "0 0 40%", md: "0 0 45%" } }}>
          {countryData.flag && (
            <Image
              src={countryData.flag}
              alt={`${countryData.name}-flag`}
              width={200}
              height={300}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
              }}
            />
          )}
        </Box>

        <Box>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "flex-start", md: "space-between" },
              alignItems: { xs: "flex-start", md: "center" },
            }}
          >
            <Box padding="10px 25px 40px 0">
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: (theme) => theme.palette.text.primary }}
                mb="10px"
                fontWeight={600}
              >
                {countryData.name}
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
                  Native Name:
                </Typography>{" "}
                {countryData.nativeName}
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
                {countryData.population?.toLocaleString()}
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
                {countryData.region}
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
                {countryData.capital}
              </Typography>
            </Box>

            <Box>
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
                  Top Level Domain:
                </Typography>{" "}
                {countryData.topLevelDomain}
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
                  Currencies:
                </Typography>{" "}
                {countryData.currencies?.map((cur) => cur.name).join(",")}
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
                  Languages:
                </Typography>{" "}
                {countryData.languages?.map((lang) => lang.name).join(", ")}
              </Typography>
            </Box>
          </Stack>

          <Box mt={4}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: (theme) => theme.palette.text.primary,
              }}
              mb={2}
            >
              Border Countries:
            </Typography>

            <Box
              sx={{
                display: "grid",
                columnGap: "15px",
                rowGap: "10px",
                gridTemplateColumns: {
                  xs: "Repeat(2, 1fr)",
                  sm: "Repeat(3, 1fr)",
                  lg: "Repeat(4, 1fr)",
                },
              }}
            >
              {countryData.borders && countryData.borders.length > 0 ? (
                countryData.borders.map((border) => (
                  <Box
                    key={border}
                    sx={{
                      bgcolor: (theme) => theme.palette.background.paper,
                      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
                      borderRadius: "4px",
                      padding: "6px 24px",
                      display: "inline-block",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: (theme) => theme.palette.text.secondary }}
                    >
                      {getBorderCountryName(border)}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    color: (theme) => theme.palette.text.secondary,
                  }}
                >
                  No bordering countries.
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
