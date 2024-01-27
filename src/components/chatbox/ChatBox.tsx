import SendIcon from "@mui/icons-material/Send";
import {
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  TextField,
} from "@mui/material";

const ChatBox = () => {
  const customWidth = "calc(100% - 48px)";

  return (
    <Paper
      elevation={2}
      sx={{
        py: 2,
        mx: 3,
        pb: 5,
        width: customWidth,
      }}
    >
      <Grid item xs={12}>
        <List sx={{ mx: 2 }}>
          {[
            ["Please tell me how to get into a good school", "09:30"],
            ["[idk some AI stuff here]", "09:31"],
            ["Thanks so much, here is 1 billion dollars!", "9:32"],
          ].map((chat, i) => (
            <ListItem
              key={i}
              sx={{
                display: "flex",
                justifyContent: (i + 1) % 2 === 0 ? "flex-start" : "flex-end",
                color: (i + 1) % 2 === 0 ? "secondary.main" : undefined,
              }}
            >
              <Stack direction={"column"}>
                <ListItemText primary={chat[0]}></ListItemText>
                <ListItemText secondary={chat[1]}></ListItemText>
              </Stack>
            </ListItem>
          ))}
        </List>
        <Grid container style={{ padding: "20px" }} spacing={2}>
          <Divider />
          <Grid item xs={11}>
            <TextField
              id="outlined-basic-email"
              label="Ask about college admissions"
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <Fab color="primary" aria-label="add">
              <SendIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ChatBox;
