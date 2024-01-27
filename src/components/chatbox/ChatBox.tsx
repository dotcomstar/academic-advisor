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
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import UserInputField from "./UserInputField";

export interface PromptFormValues {
  prompt: string;
}

const ChatBox = () => {
  const customWidth = "calc(100% - 48px)";
  const [messages, setMessages] = useState([
    ["Please tell me how to get into a good school", "09:30"],
    ["[idk some AI stuff here]", "09:31"],
    ["Thanks so much, here is 1 billion dollars!", "9:32"],
    ["[idk some AI stuff here]", "09:33"],
  ]);
  const { handleSubmit, control, reset } = useForm<PromptFormValues>({
    defaultValues: { prompt: "" },
  });

  const onSubmit: SubmitHandler<PromptFormValues> = (
    data: PromptFormValues
  ) => {
    console.log(`Submitting ${data.prompt}`);
    setMessages([
      ...messages,
      [data.prompt, "09:34"],
      ["[more AI stuff here]", "09:34"],
    ]);
    reset();
  };
  const scrollRef = useRef<null | HTMLLIElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Paper
      elevation={2}
      sx={{
        py: 2,
        mx: 3,
        pb: 5,
        width: customWidth,
        maxHeight: "80dvh",
        overflow: "auto",
        overflowAnchor: "auto",
      }}
    >
      <Grid item xs={12}>
        <List sx={{ mx: 2 }}>
          {messages.map((chat, i) => (
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
          {/* this is the last item that scrolls into
             view when the effect is run */}
          <ListItem ref={scrollRef} />
        </List>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <Grid container style={{ padding: "20px" }} spacing={2}>
            <Divider />
            <Grid item xs={11}>
              <UserInputField
                label="Ask about college admissions"
                control={control}
                name="prompt"
              />
            </Grid>
            <Grid item xs={1}>
              <Fab color="primary" aria-label="add" type="submit">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Paper>
  );
};

export default ChatBox;
