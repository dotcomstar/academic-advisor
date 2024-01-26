import { Paper, Stack, Typography, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
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
          <TextField fullWidth label="Ask about college admissions"></TextField>
          <IconButton>
            <SendIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ChatBox;
