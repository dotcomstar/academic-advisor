import { Grid, useMediaQuery } from "@mui/material";
import NavBar from "../components/navbar/NavBar";
import ChatBox from "../components/chatbox/ChatBox";

const HomePage = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid container paddingY={matches ? 1 : 0}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ py: 4 }}
      >
        <ChatBox />
      </Grid>
    </Grid>
  );
};

export default HomePage;
