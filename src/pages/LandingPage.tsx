import { Grid, useMediaQuery } from "@mui/material";
import LandingSplash from "../components/landingpage/LandingSplash";

export const LandingPage = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid container paddingY={matches ? 1 : 0}>
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ py: 4 }}
      >
        <LandingSplash />
      </Grid>
    </Grid>
  );
};
