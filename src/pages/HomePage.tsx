import {
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import NavBar from "../components/navbar/NavBar";

const HomePage = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const customWidth = "calc(100% - 48px)";

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
        <Paper
          elevation={2}
          sx={{
            py: 2,
            mx: 3,
            width: customWidth,
          }}
        >
          <Stack
            direction={"column"}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography fontSize="large" m={2}>
              Put the chat thing here
            </Typography>
            <Stack direction={"row"} sx={{ px: 2 }} width={"100%"}>
              <TextField
                fullWidth
                label="Ask about college admissions"
              ></TextField>
              <IconButton>
                <SendIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
