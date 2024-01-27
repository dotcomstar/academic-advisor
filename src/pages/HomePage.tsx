import { Grid, useMediaQuery } from "@mui/material";
import ChatBox from "../components/chatbox/ChatBox";
import SamplePrompts from "../components/chatbox/SamplePrompts";
import NavBar from "../components/navbar/NavBar";

const HomePage = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid container paddingY={matches ? 1 : 0}>
      <Grid item xs={12} height={"fit-content"}>
        <NavBar />
      </Grid>
      {matches && (
        <Grid
          item
          xs={3}
          paddingY={3}
          sx={{ borderRight: "1px solid #e0e0e0" }}
        >
          <SamplePrompts />
        </Grid>
      )}
      <Grid
        item
        xs={matches ? 9 : 12}
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
